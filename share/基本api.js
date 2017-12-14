'use strict'

const canvas = document.getElementById('canvas');
//获取绘图上下文
const gd = canvas.getContext('2d');

gd.moveTo(100,100);
gd.lineTo(100,300);
gd.lineTo(300,300);
//stroke
//线宽
gd.lineWidth = 20;
//图形的颜色
gd.strokeStyle = 'rgba(255,0,0,0.3)';
gd.closePath();
gd.stroke();

//fill
// gd.beginPath();
// gd.moveTo(400,100);
// gd.lineTo(400,300);
// gd.lineTo(600,300);

// gd.fillStyle = 'aqua';
// gd.closePath();
// gd.fill();