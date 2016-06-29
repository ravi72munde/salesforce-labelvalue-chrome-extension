
chrome.browserAction.setPopup({popup:"popup.html"});
chrome.runtime.onInstalled.addListener(function(info) {
    // if(info.details == "update" || info.details == "install") {
        // chrome.browserAction.setBadgeText({text:"1"});
    // }
})


chrome.browserAction.onClicked.addListener(function() {
    chrome.browserAction.setPopup({popup:"popup.html"});
});
/*chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
		var response = request.payload;
		sendResponse({'value':response});
  });
*/