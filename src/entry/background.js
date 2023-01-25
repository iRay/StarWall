chrome.runtime.onInstalled.addListener(({ reason, version }) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        showStarWall()
    }
})

chrome.action.onClicked.addListener((tab) => {
    showStarWall()
})

function showStarWall(info, tab) {
    let url = chrome.runtime.getURL('starwall.html')
    chrome.tabs.create({ url })
}