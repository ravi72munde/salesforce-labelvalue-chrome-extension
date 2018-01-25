
chrome.browserAction.setPopup({popup:"popup.html"});
chrome.runtime.onInstalled.addListener(function(info) {
})


chrome.browserAction.onClicked.addListener(function() {
    chrome.browserAction.setPopup({popup:"popup.html"});
});
