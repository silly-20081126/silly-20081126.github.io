
//Render

//Timeout
setTimeout(function(){
	var arr = document.getElementsByClassName("wait-for-rendering");
	console.log(arr);
	//Query the elements
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
