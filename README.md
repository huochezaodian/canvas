# canvas

- 引入方式

```	
<canvas id="canvas" width="800" height="600">
	你的浏览器版本过低，请尽快升级。
</canvas>
```
- 基本api

```
//获取绘图上下文
const gd = canvas.getContext('2d');

//落笔点
gd.moveTo(x,y);

//移动
gd.lineTo(x,y);

//描边
gd.stroke();

//填充
gd.fill();


gd.lineWidth 		//设置线宽

gd.strokeStyle 		//描边颜色

gd.fillStyle 		//填充颜色

gd.closePath() 		//闭合路径  用于闭合当前绘画


//新的开始 多个图形的时候用
gd.beginPath();
```

- 矩形

```
gd.rect(x,y,w,h)           //绘画矩形

gd.fillRect(x,y,w,h) 		//填充矩形

gd.strokeRect(x,y,w,h); 	//描边矩形

//清空
gd.clearRect(x,y,w,h);
```

- 弧形

```
gd.arc(cx,cy,r,s,e,b);
cx,cy 			//圆心
r 				//半径
s 				//开始弧度，（弧的圆形的三点钟位置是 0 度）
e 				//结束弧度
b 				//是否逆时针 false = 顺时针，true = 逆时针
```

- 文字

```
gd.font='size family';
gd.textAlign = 'center' 		水平位置
gd.textBaseline = 'middle'		垂直位置
gd.strokeText(str,x,y);
gd.fillText(str,x,y);
```

- 背景样式

```
//线性
lg = gd.createLinearGradient(x1,y1,x2,y2);
lg.addColorStop(0-1,color);

//径向
rg = gd.createRadialGradient(cx1,cy1,r1,cx2,cy2,r2);
rg.addColorStop(0-1,color);

//平铺
cp = gd.createPattern(oImg,'平铺类型');
```

- 转换

```
//操作的是画布
translate //平移
rotate    //旋转	
scale     //缩放	

gd.save(); 						
//保存当前的画布坐标系统的状态

gd.restore(); 			
//恢复回保存的状态

//基本流程
1.gd.save();
2.转换
3.gd.restore();
```

- 图片

```
//画的图，想保存。
let url = canvas.toDataURL();

参数
type 可选
//图片格式，默认为 image/png
encoderOptions 可选
//在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。其他参数会被忽略。

返回值
url "data:image/png;base64,..."

//画图

gd.drawImage(
	oImg,
	sx,sy,sw,sh, //可选
	dx,dy,dw,dh
);
```

- 像素

```
let result = gd.getImageData(x,y,w,h);
result.data 			
//每4个是一组
r,g,b,a,r,g,b,a....

gd.putImageData(result,x,y);
//把数据以图片形式画入canvas
**存在跨域问题，本地文件请在firefox下运行
*****尽量少操作，因为耗费性能。
```