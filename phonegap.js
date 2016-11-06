var IOS = "iOS";
var ANDROID = "Android";
var WINDOWS = "WinCE";
var PLUGIN_CALL = "Plugin call: ";

var device = {
	platform : IOS	
};

var cordova = {
    InAppBrowser : {
		open : function(url, target) {
			alert(PLUGIN_CALL + "cordova.InAppBrowser.open('" + url + "', '" + target + "')");
		}
	}		
};

var admob = {
	createBannerView : function(json) {
		alert(PLUGIN_CALL + "admob.createBannerView(" + json + ")");
	}
};

window.plugins = {
	socialsharing : {
		share : (device.platform == WINDOWS) ? 
			function(message, title, a, b) {
				alert(PLUGIN_CALL + "window.plugins.socialsharing.share('" + message + "','" + title + "')");
			} : function(message, title) {
				alert(PLUGIN_CALL + "window.plugins.socialsharing.share('" + message + "','" + title + "')");
			}
	} 	
};