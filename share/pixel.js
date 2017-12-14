'use strict'
const canvas = document.getElementById('canvas');
const gd  = canvas.getContext('2d');

const oImg = new Image();
//oImg.crossOrigin = 'anonymous';
oImg.src = 'img/cat.jpg';
oImg.onload=function(){
	gd.drawImage(
		oImg,
		0,0,440,440
	);
	// let result = gd.getImageData(0,0,canvas.width,canvas.height);
	// console.log(result);
	// let d = result.data;
	// for(let i=0;i<d.length;i+=4){
	// 	let r = d[i];
	// 	let g = d[i+1];
	// 	let b = d[i+2];
	// 	// d[i]=(r*0.393)+(g*0.769)+(b*0.189); 	
	// 	// d[i+1]=(r*0.349)+(g*0.686)+(b*0.168); 	
	// 	// d[i+2]=(r*0.272)+(g*0.534)+(b*0.131); 

	// 	// d[i]=(r+g+b)/3;        
 //  		// d[i+1]=d[i+2]=0;
	// }
	// gd.putImageData(result,0,0);

	// setInterval(function(){
	// 	let result = gd.getImageData(0,0,canvas.width,canvas.height);
	// 	let d = result.data;
	// 	for(let i=0;i<d.length;i+=4){
	// 		d[i]=rnd(0,256);
	// 		d[i+1]=rnd(0,256);
	// 		d[i+2]=rnd(0,256);
	// 	}
	// 	gd.putImageData(result,0,0);
	// },16);
};