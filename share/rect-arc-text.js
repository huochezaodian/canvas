'use strict'

const canvas = document.getElementById('canvas');
const gd = canvas.getContext('2d');

// gd.rect(100,100,100,100);

// gd.stroke();

// gd.fill();

// gd.strokeRect(300,100,100,100);

// gd.fillRect(500,100,100,100);

// gd.clearRect(500,100,50,50);

// gd.beginPath();

//绘画弧形

// gd.moveTo(150,300);

// gd.lineTo(200,300);

// gd.arc(150,300,50,0,.5*Math.PI);

// gd.closePath();

// gd.stroke();

//绘画文字
// const text = "TEXT";

// gd.font='italic bold 24px Arial';

// gd.strokeText(text,150,500);

// gd.font="italic bold 20px Arial"

// gd.fillStyle="#058";

// gd.fillText(text,250,500);

//模拟柱状图小

// const arr = [30,40,20,60,40,50,80,50];

// const iMax = Math.max.apply(null,arr);

// const aHeight = [];

// for(let i = 0; i<arr.length; i++){
// 	aHeight.push(arr[i]/iMax*(canvas.height-50));
// }

// const w = canvas.width/(arr.length*3);
// const space = w*2;

// for(let i = 0; i<arr.length; i++){
// 	moveRect(w+i*w*3,canvas.height-aHeight[i],w,aHeight[i]);
// }

// function moveRect(x,y,w,h){
// 	let color = 'rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
// 	let height = 1;
// 	let Y = canvas.height;
// 	let timer = setInterval(function(){
// 		gd.beginPath();
// 		gd.fillStyle = color;
// 		if(height < h){
// 			gd.fillRect(x,Y,w,height);
// 			height++;
// 			Y--;
// 		}else{
// 			gd.fillRect(x,y,w,h);
// 			clearInterval(timer);
// 		}
// 	},2000/h);
// }