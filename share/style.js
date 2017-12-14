'use strict'

const canvas = document.getElementById('canvas');
const gd = canvas.getContext('2d');
//线性渐变
const lg = gd.createLinearGradient(400,100,600,300);
//lg.addColorStop(0-1,color);
lg.addColorStop(0.3,'red');
lg.addColorStop(0.5,'blue');
lg.addColorStop(0.8,'green');
gd.strokeStyle = lg;
gd.strokeRect(400,100,200,200);

//径向渐变
// const lg2 = gd.createLinearGradient(100,100,300,300);
// //lg.addColorStop(0-1,color);
// lg2.addColorStop(0.3,'orange');
// lg2.addColorStop(0.5,'pink');
// lg2.addColorStop(0.8,'#09f');
// gd.fillStyle = lg2;
// gd.lineWidth = 10;
// gd.fillRect(100,100,200,200);

// const rg = gd.createRadialGradient(200,450,0,200,450,100);
// rg.addColorStop(0.3,'red');
// rg.addColorStop(0.5,'blue');
// rg.addColorStop(0.8,'green');

// gd.fillStyle = rg;
// gd.arc(200,450,100,0,2*Math.PI);
// gd.fill();

// //canvas背景平铺
// const oImg = new Image();
// oImg.src = 'img/cat.jpg';
// oImg.onload=function(){
// 	var cp = gd.createPattern(oImg,'repeat');
// 	gd.fillStyle = cp;
// 	gd.fillRect(350,350,300,300);
// 	gd.strokeStyle = cp;
// 	gd.strokeRect(350,350,300,300);
// };

//进度条小李子
// let cx=canvas.width/2,
// 	cy=canvas.height/2;
// function drawArc(r,s,e,c){
// 	c = c||'black';
// 	gd.beginPath();
// 	gd.arc(cx,cy,r,d2a(s-90),d2a(e-90),false);
// 	gd.lineWidth = 20;
// 	gd.strokeStyle = c;
// 	gd.stroke();
// }

// let lg = gd.createLinearGradient(300,200,500,400);
// lg.addColorStop(0,'#f90');
// lg.addColorStop(1,'#09f');

// let i = 0;
// let timer = setInterval(function(){
// 	i++;
// 	gd.clearRect(0,0,canvas.width,canvas.height);
// 	drawArc(100,0,i,lg);
	
// 	let pct = (i/360*100).toFixed(2)+'%'
	
// 	gd.font = '40px 微软雅黑';
// 	gd.textAlign = 'center';
// 	gd.textBaseline = 'middle';
// 	gd.fillStyle = lg;
// 	gd.fillText(pct,cx,cy);
	
	
// 	if(i==360){
// 		clearInterval(timer);
// 	}
// },16);