document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', search);
});
try{
	document.getElementById("apiName").focus();
}
catch( e){
	
}
		


/* Encapsulating code instead of just letting it lay about */
function getValue(apiName,callback) {
	var value = 'tasdf';
	var apiName = apiName+"";
	var instance = getInstanceUrl();
	var conn = new jsforce.Connection({
	instanceUrl : instance,
	accessToken : getValueFromCookie("sid")
	});
	var fullNames = [apiName];
	conn.metadata.readSync('CustomLabel', fullNames, function(err, metadata) {
	  if (err) { console.error(err); }
	  return callback(metadata.value+"");
	});
}
function search(){
	// code below is supposed to be inside your button trigger
	var payload = document.getElementById("apiName").value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		
		var apiName = document.getElementById("apiName").value;
		try{
			chrome.tabs.sendMessage(tabs[0].id, {'action':'loginData','payload': payload,}, function(response) {
			var instance = response['instanceUrl'];
			var accessToken = response['accessToken'];
			var conn = new jsforce.Connection({
			instanceUrl : instance,
			accessToken : accessToken
			});
			
			var fullNames = [apiName];
			conn.metadata.read('CustomLabel', fullNames, function(err, metadata) {
			if (err) { document.getElementById("apiName").value = err; }
				if(metadata.value == null){
					document.getElementById("apiName").value = "NO MATCH FOUND";
					
				}
				else{
					document.getElementById("apiName").value = metadata.value;
					document.getElementById("apiName").select();
				}
				
			});
		  
		});
		}
		catch(err){
			alert("error "+err);
		}

	});


}
/*function search() {
    
	var payload = document.getElementById('apiName').value;
	alert(payload);
	
    chrome.extension.sendMessage({'action':'loginData','payload': payload,},function(response) {
           //document.getElementById('apiName').value = payload+" value";
		   alert("response is "+ response);
     })
}*/
