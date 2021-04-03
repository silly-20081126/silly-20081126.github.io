onload = function(){
	var articleID = api.getArgument("articleID");
	setTimeout(function(){
		var doc = api.hget("../../api/document/math/" + articleID + ".txt?articleID=" + articleID + "&pid=" + parseInt(Math.random().toString().substring(3)).toString(16));
		if (doc.status != 200)
		{
			document.getElementById("frame").innerHTML = "资源文件请求失败！<input type=button onclick=location.reload(); value=重试><input type=button onclick=javascript:location.href='../' value=主页>";
		} else {
			document.getElementById("frame").innerHTML = "<iframe height=1024px width=1024px border=1 id=document-frame src=frame.html>你的浏览器不支持此框架，请更换浏览器</iframe>";
			document.getElementById("document-frame").contentWindow.onload = function(){
				document.getElementById("document-frame").contentWindow.document.getElementById("document").innerHTML = doc.responseText;
			};
			var w = document.body.clientWidth;
			var h = document.body.clientHeight;
			document.getElementById("document-frame").height = h;
			document.getElementById("document-frame").width = w;
		}
	},Math.random()*2000);
};
