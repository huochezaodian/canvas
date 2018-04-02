'use strict'
const canvas = document.getElementById('canvas');
const gd = canvas.getContext('2d');

var x = 200,
	y = 100,
	w = 100,
	h = 100;
//scale
	
gd.save();	

gd.beginPath();
gd.scale(0.5,0.5);
gd.fillRect(x,y,w,h);

gd.restore();


//rotate translate
	
// gd.save();

// gd.beginPath();
// gd.translate(x+w/2,y+h/2);
// gd.rotate(d2a(20));
// gd.fillRect(0,0,w,h);

// gd.restore();

//gd.beginPath();
gd.fillStyle = 'rgba(0,0,0,0.3)';
gd.fillRect(0,0,canvas.width,canvas.height);

//保存图片

// let url = canvas.toDataURL();

// console.log(url);

// const oImg = new Image();
// oImg.src = url;
// oImg.style.background = 'white';
// oImg.onload=function(){
// 	document.body.append(oImg);
// };