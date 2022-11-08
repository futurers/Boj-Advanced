window.onload = () => {
    let removeAdsButton = document.getElementById("remove-ads-button")
    setInterval(() => {
        chrome.storage.sync.get('ads-block').then((value) => {
            removeAdsButton.innerHTML = value['ads-block']?"Remove ads":"Show ads"
        })
    }, 10)
    removeAdsButton.addEventListener("click", () => {
        console.log("Remove ads button clicked");
        chrome.storage.sync.get('ads-block').then((value) => {
            chrome.storage.sync.set({'ads-block': !value['ads-block']})
        })
    })
}