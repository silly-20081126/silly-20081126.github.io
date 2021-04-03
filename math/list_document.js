onload = function(){
	document.getElementById("documents").className = "loading-document";
	setTimeout(function(){
		var doc_map = api.get("../api/document/math/map.json?pid=" + parseInt(Math.random().toString().substring(3)).toString(16));
		if (typeof doc_map == "string")
		{
			doc_map = JSON.parse(doc_map);
		}
		var i = 0;
		var str = "<table border=1><tr><td>序号</td><td>标题</td><td>上传时间</td><td>文档链接</td></tr>";
		while (i < doc_map.length)
		{
			str += "<tr><td>" + (i+1) + "</td><td>" + doc_map[i].title + "</td><td>" + doc_map[i].upload_time + "</td><td><a href=display?articleID=" + doc_map[i].link + " >戳我</a></td></tr>";
			i++;
		}
		str += "<tr><td>0</td><td>我是有底线的</td><td>Jan.1,1980</td><td>无</td><table>";
		document.getElementById("documents").className = "loaded-document";
		document.getElementById("documents").innerHTML = str;
	},Math.random()*2000);
};
