//This JavaScript file must run on the browser which support ECMAScript6
//Copyright (c) silly-20081126.github.io 2021
//Content: fat-pig-2020@outlook.com
//Server: Microsoft GitHub
//Watch our project: https://github.com/silly-20081126/silly-20081126.github.io/
//Version 1.0  Apr.4,2021
//Author Yichen Xu , Hugang Li
//JavaScript File Start


//This file can only be referenced on one page
//The url is " https://silly-20081126.github.io/math/tools/24drop.html"
//Loading other JavaScript File

var xhr = new XMLHttpRequest();
xhr.open("GET","https://cdn.jsdelivr.net/gh/silly-20081126/silly-20081126.github.io/math/js/24drop.js",true);
xhr.onreadystatechange=function()
{
	if (xhr.readyState==4)
	{
		eval(xhr.responseText);
	};
};
xhr.send();


function calc()
{
	var st = new Date().getTime();
	WriteInCache("-> [UTC <font color=blue>" + st + "</font>] [<font color=blue>0ms</font>] 程序已载入<br>");
	var e_arr = document.getElementsByClassName("input-area");
	//Get the data.
	var num = [e_arr[0].value,e_arr[1].value,e_arr[2].value,e_arr[3].value];
	//Check the data.
	var ct = new Date().getTime();
	WriteInCache("-> [UTC <font color=blue>" + st + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 正在处理输入......<br>");
	var i = 0;
	while (i < (num.length))
	{
		num[i] = parseInt(num[i]);
		if (num[i] != num[i])
		{
			var ct = new Date().getTime();
			WriteInCache("-> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 程序抛出错误：<font color=red>输入不是数字！</font><br>");
			WriteInDocumentFromCache();
			setTimeout(function(){
				ClearCache();
			},200);
			return;
		}
		document.getElementsByClassName("input-area")[i].value = num[i];
		i++;
	};
	if (typeof(drop24) == "undefined")
	{
		var bool = true;
		var ct = new Date().getTime();
		WriteInCache("-> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 程序抛出错误：未能载入指定的文件<br>-> https://cdn.jsdelivr.net/gh/silly-20081126/silly-20081126.github.io/math/js/24drop.js<br>-> 正在尝试重新载入该文件......<br>");
		WriteInDocumentFromCache();
			var xhr = new XMLHttpRequest();
			xhr.open("GET","https://cdn.jsdelivr.net/gh/silly-20081126/silly-20081126.github.io/math/js/24drop.js",false);
			xhr.onreadystatechange=function()
			{
				if (xhr.readyState==4)
				{
					try {
						if (xhr.status != 200)
						{
							WriteInCache("->> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 在连接到网站silly-20081126.github.io时出现了些问题，文件无法载入<br>->> 请尝试重新加载此页面<br>->> 请检查你的网络配置<br>->> Debugger: HTTP Status " + xhr.status + " Request URL https://cdn.jsdelivr.net/gh/silly-20081126/silly-20081126.github.io/math/js/24drop.js <br>->> If you want to see more information, open the developer debugging tool");
							WriteInDocumentFromCache()
						} else eval(xhr.responseText);
						if (typeof(drop24) == "undefined")
						{
							var ct = new Date().getTime();
							WriteInCache("->> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 载入此文件时出了点错误......<br>->> 请与<a href=mailto:fat-pig-2020@outlook.com?subject=错误反馈&body=关于页面" + location.href + "出了些错误%0A%0A%0A%0A%0A%0A%0A%0A>我们</a>联系<br>->> Debugger: HTTP Status " + xhr.status + " Request URL https://cdn.jsdelivr.net/gh/silly-20081126/silly-20081126.github.io/math/js/24drop.js <br>->> If you want to see more information, open the developer debugging tool");
							WriteInDocumentFromCache();
						} else {
							window.drop24 = drop24;
							bool = true;
							var ct = new Date().getTime();
							WriteInCache("->> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 文件载入成功<br>-> 重新调用程序中......<br>-> call calc()<br><br><br>");			
							calc();
							
							WriteInDocumentFromCache();
						};
					} catch (err) {
						var ct = new Date().getTime();
						WriteInCache("->> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 载入此文件时出了点错误......<br>->> 请与<a href=mailto:fat-pig-2020@outlook.com?subject=错误反馈&body=关于页面" + location.href + "出了些错误%0A%0A%0A%0A%0A%0A%0A%0A>我们</a>联系<br>->> Debugger: HTTP Status " + xhr.status + " Request URL https://cdn.jsdelivr.net/gh/silly-20081126/silly-20081126.github.io/math/js/24drop.js <br>->> If you want to see more information, open the developer debugging tool");
					};
				
				};
			};
			xhr.send();
		
			
	};
	if (bool)
	{
		setTimeout(function(){
			ClearCache();
		},200);
		return;
	}
	var ct = new Date().getTime();
	WriteInCache("-> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 开始计算<br>");	
	var result = drop24(num);
	var ct = new Date().getTime();
	WriteInCache("-> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 计算完毕，正在处理数据<br>");
	//Delete the repeating.
	var res = "";
	var i = 0;
	while (i < result.result.length)
	{
		res += result.result[i].exp + "=" + result.result[i].value + "\n";
		i++;
	};
	var j = 0;
	var all_obj_str = "";
	while (j < result.all_object.length)
	{
		all_obj_str += result.all_object[j].exp + "=" + result.all_object[j].value + "\n";
		j++;
	};
	var link_res = getBlobLinkAsText(res);
	var link_exp = getBlobLinkAsText(all_obj_str);
	//-----------------------
	var ct = new Date().getTime();
	WriteInCache("-> [UTC <font color=blue>" + ct + "</font>] [<font color=blue>" + (ct - st) + "ms</font>] 处理完毕<br>-> 程序共计算了" + result.all_object.length + "次 共得出" + result.result.length + "个答案<br>-><a id=download_answers download=Answer.txt>下载答案</a><input type=button value=预览答案 onclick=javascript:show_view_frame('" + link_res + "');><br>-><a id=download_all_exp download=AllExp.txt>下载程序验证过的所有算式</a><input type=button value=预览算式 onclick=javascript:show_view_frame('" + link_exp + "');>");
	if (is_weixin())
		WriteInCache("<br>-> <font color=red>微信浏览器可能不支持该程序，请选择使用系统默认浏览器打开<br>");
	WriteInCache("<br><br>");
	WriteInDocumentFromCache();
	setTimeout(function(){
		document.getElementById("download_answers").href = link_res;
		document.getElementById("download_all_exp").href = link_exp;
		ClearCache();
	},200);
};
function WriteInCache(str)
{
	if (typeof(window.output_data) == "undefined")
		window.output_data = "";
	window.output_data += str;	
};
function WriteInDocumentFromCache()
{

	document.getElementById("output").innerHTML = window.output_data;
};
function ClearCache()
{
	window.output_data = "";
};
function getBlobLinkAsText(tex)
{
	if (typeof(Blob) == "undefined")
	{
		alert("你的浏览器不支持Blob对象，无法生成预览文件");
		return "https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob";
	};
	var blob = new Blob([tex],{type:"text/plain"});
	return window.URL.createObjectURL(blob);
};
function hide_view_frame()
{
	document.getElementById("view_frame").className = "hide-element";
};
function show_view_frame(str)
{
	document.getElementById("view_frame").className = "show-element";
	document.getElementById("frame").src = str;
	
};
//---------------
function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}
//This JavaScript function copy from "https://www.cnblogs.com/sherryweb/p/11239127.html"
//JavaScript File END