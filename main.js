var canvas = new fabric.Canvas("c");

var by= 1, cx = 1, biw = 175, bih = 215;

var bio= "";

var drawRanger = function(get_image, x){
	fabric.Image.fromURL(get_image, function(i){
		bio = i;

		bio.scaleToWidth(biw);
		bio.scaleToHeight(bih);

		bio.set({
			top: by,
			left: x
		});
		
		canvas.add(bio);
	})
}

var my_keydown= function(e){
	k = e.keyCode;
	console.log(k);

	var arr = [
		{
			k: 82,
			url: "rr1.png"
		},
		{
			k: 71,
			url: "gr.png"
		},
		{
			k: 89,
			url: "yr.png"
		},
		{
			k: 80,
			url: "pr.png"
		},
		{
			k: 66,
			url: "br.png"
		},
	];

	for(var i=0; i<arr.length; i++){
		if(arr[i].k === k){
			drawRanger(arr[i].url, cx);
		}
		cx += biw - 40;
	}
	cx = 1;
}

window.addEventListener("keydown", my_keydown);



