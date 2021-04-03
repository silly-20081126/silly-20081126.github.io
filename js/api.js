var api = function(...argument) {
	return undefined;	
	
};
api.get = function(url){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.send();
	var res = xhr.response;
	res.status = xhr.status;
	return res;
};
api.hget = function(url){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.send();
	return xhr;
};
api.version = "1.0";
api.close_api = {};
api.close_api.find = function(arr,str,key) {

	var i = 0;
	if (typeof key == "undefined")
	{
		while (i < arr.length)
		{
			if (arr[i] == str)
				return i;
			i++;
		}
	} else {
		while (i < arr.length)
		{
			if (arr[i][key] == str)
				return i;
			i++;
		}
	}
	return -1;
};
api.close_api.ArrToObj = function(arr,key,value) {
	var i = 0;
	var obj = {};
	while (i < arr.length)
	{
		obj[arr[i][key]] = arr[i][value];
		i++;
	}
	return obj;
	
};
api.getAllArgument = function() {
	var url = location.href;
	if (url.indexOf("?") == -1)
		return {};
	else {
		url = location.search.substring(1);
		var i = 0;
		if (url.indexOf("&") != -1)
			url = url.split("&");
		else
			url = [url];
		var obj = {};
		while (i < url.length)
		{
			obj[url[i].split("=")[0]] = url[i].split("=")[1];
			i++;
		}
		return obj;	
	}
};
api.getArgument = function(key) {
	return this.getAllArgument()[key];
};
var $ = api;
