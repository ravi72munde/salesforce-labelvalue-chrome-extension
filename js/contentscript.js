	/* Get the cookie values om nom nom */
function getValueFromCookie(b) {
    var a, c, d, e = document.cookie.split(";");
    for (a = 0; a < e.length; a++)
        if (c = e[a].substr(0, e[a].indexOf("=")), d = e[a].substr(e[a].indexOf("=") + 1), c = c.replace(/^\s+|\s+$/g, ""), c == b) return unescape(d)
}

if((location.pathname+"").indexOf("/udd/TraceFlag/editTraceFlag.apexp")!=-1){
	var userName = document.getElementById("userNavLabel").innerHTML;
	document.getElementById("traceFlag:TraceFlagForm:thePageBlock:mainPageBlock:TracedEntityId:TracedEntityIdField").value = userName;
	document.getElementById("traceFlag:TraceFlagForm:thePageBlock:mainPageBlock:DebugLevel:DebugLevel").value = "SFDC_DevConsole";
	document.getElementById("traceFlag:TraceFlagForm:thePageBlock:mainPageBlock:StartDate:StartDate").value = "";
}

function getInstanceUrl(){
	console.log(location);
	var elements = location.hostname.split(".");
	var instance = null;
	if(elements.length == 4 && elements[1] === 'my') {
		instance = elements[0] + '.' + elements[1];
	} else if(elements.length == 3){
		instance = elements[0];
	} else {
		instance = elements[1];
	}
	
	//this.instanceUrl = "https://" + instance + ".salesforce.com";
	this.instanceUrl = "https://"+location.hostname;
	return (instanceUrl+"");
	
}

/* Encapsulating code instead of just letting it lay about */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log('test sent');
	  console.log("instance"+getInstanceUrl());
      sendResponse({"instanceUrl": getInstanceUrl(),"accessToken":getValueFromCookie("sid")});

});
