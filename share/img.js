'use strict'
const canvas = document.getElementById('canvas');
const gd = canvas.getContext('2d');

const oImg = new Image();
// oImg.src = 'img/cat.jpg';
// oImg.onload = function(){
// 	gd.drawImage(
// 		oImg,
// 		//0,0,440,440,
// 		100,100,100,100
// 	);

// 	// gd.drawImage(
// 	// 	oImg,
// 	// 	100,0,440,440,
// 	// 	300,100,100,100
// 	// );

// 	// gd.drawImage(
// 	// 	oImg,
// 	// 	0,0,200,440,
// 	// 	300,100,100,100
// 	// );
// }

//游戏实例
// oImg.src = 'img/monster.png';
// oImg.onload=function(){
// 	let t = 0,
// 		l = 0;

// 	setInterval(function(){
// 		gd.clearRect(0,0,canvas.width,canvas.height);
// 		//左
// 		gd.drawImage(
// 			oImg,
// 			l%160,0,40,56,
// 			200,t+=5,80,112
// 		);
// 		//上
// 		gd.drawImage(
// 			oImg,
// 			l%160,55,40,56,
// 			600-t,5,80,112
// 		);
// 		//右
// 		gd.drawImage(
// 			oImg,
// 			l%160,165,40,56,
// 			600,380-t,80,112
// 		);
// 		//下
// 		gd.drawImage(
// 			oImg,
// 			l%160,110,40,56,
// 			200+t,380,80,112
// 		);
// 		if(t == 380){
// 			t = 0;
// 		}
// 		l+=40;
// 	},300);
// };