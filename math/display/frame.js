
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
		arr[i].innerHTML = location.href + "<br><img src=https://api.no0a.cn/api/qrcode/query?url=" + location.href + " height=64px width=64px alt='QR code' class=cp.box.qrcode>";
		i++;
	}
},1500);
