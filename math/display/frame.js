
//Render

//Timeout
setTimeout(function(){
	let arr = document.getElementsByClassName("wait-for-rendering");
	console.log(arr);
	//Select the elements
	var i = 0;
	//Until i > arr's length
	while (i < arr.length)
	{
		//Get the contents
		let content = arr[i].innerHTML;
		//Rendering
		let ele_id = parseInt(Math.random().toString().substring(3)).toString(16);
		arr[i].innerHTML = "<iframe id=" + ele_id + " src=math.html#" + encodeURI(content) + " border=0>Not support the frames.</iframe>";
		//Rendering the frame.
		let dat = arr[i].id;
		console.log(arr[i],dat);
		//Get the other descrptions.
		try {
			//Try to parse the descriptions.
			dat = JSON.parse(dat);
			if (typeof dat == "object")
			{
				//Parse successfully.
				document.getElementById(ele_id).height = dat.height;
				//Set the height of the frame.
				document.getElementById(ele_id).width = dat.width;
				//Set the width of the frame.
				setTimeout(function(){
					//Correct the size of the frame.
					document.getElementById(ele_id).height = document.getElementById(ele_id).contentWindow.document.body.scrollHeight+5;
					document.getElementById(ele_id).width = document.getElementById(ele_id).contentWindow.document.body.scrollWidth+5;	
					console.log(document.getElementById(ele_id).contentWindow.document.body.scrollHeight,document.getElementById(ele_id).contentWindow.document.body.scrollWidth);			
				},200);
				setInterval(function(){
					//Correct the size of the frame.
					document.getElementById(ele_id).height = document.getElementById(ele_id).contentWindow.document.body.scrollHeight;
					document.getElementById(ele_id).width = document.getElementById(ele_id).contentWindow.document.body.scrollWidth;				
				},200);
			}
		} catch (e) { console.error(e); //Parse failed.
		}
		i++;
	}
},1000);

//Show the infomation of the copyright.
setTimeout(function(){
	//Select the elements.
	let arr = document.getElementsByClassName("cp.box");
	var i = 0;
	//Until i > arr's length
	while (i < arr.length)
	{
		//Set the contents of the elements.
		arr[i].innerHTML = parent.location.href + "<br><img src=https://api.no0a.cn/api/qrcode/query?url=" + parent.location.href + " height=96px width=96px alt='QR code' class=cp.box.qrcode>";
		i++;
	}
},1500);
//Create twenty watermarks.
setTimeout(function(){
	var i = 0;
	while (i < 21)
	{
		let e = document.createElement("span");
		e.style.position = "fixed";
		e.style["font-size"] = "3.5em";
		//Set the size.
		e.style.top = parseInt(Math.random() * 100) + "%";
		e.style.left = parseInt(Math.random() * 100) - 5 + "%";
		//Set the positioning.
		e.innerHTML = "禁止翻印";
		//Set the content.
		e.style.opacity = 0.2;
		//Set opacity
		e.style["z-index"] = -1;
		document.body.append(e);
		i++;
	}
},200);
