var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//var canvasT = document.getElementById("canvasT");
//var contextT = canvasT.getContext("2d");
var pi = Math.PI;
var points = new Array;
var flowers = new Array;
var num;

var imageData;
var pixels;
var backgd = document.getElementById("backgd");

var k = 0;
var i = 50;
var r = 1/i;
var g = 50/i;
var b = 50/i;

//canvasT.onmousemove = function(e){
//   x = e.clientX - e.target.offsetLeft;
//   y = e.clientY - e.target.offsetTop;
//   imageData = contextT.getImageData(x,y,1,1);
//   pixels = imageData.data;
//   if (pixels[3]==2) {
//      contextT.beginPath();
//
//      contextT.arc(x,y,10,0,2*pi,false);
//      contextT.fillStyle = "rgba(255,100,100,1)";
//      contextT.fill();
//      f = new flower(contextT,x,y,10,30,1,255,255);
//      f.start();
//   }
//}
      var offX = 300;
      var offY = 120;

function getHeartPoint(c) {
   var r = Math.sin(c)*Math.sqrt(Math.abs(Math.cos(c)))/(Math.sin(c)+1.4)-2*Math.sin(c)+2;
   var x = 125*Math.cos(c)*r;
   var y = -125*Math.sin(c)*r;
   return new Array(x, y);
}

function dist(x0,y0,x1,y1){
    return Math.sqrt((x0-x1)*(x0-x1)+(y0-y1)*(y0-y1));
}

function drawHeart() {
    var last = new Array(0,0);
    context.translate(offX,offY);
    for (var z = 4.70; z < 11; z += 0.04) {
        var h = getHeartPoint(z);
        if (dist(h[0],h[1],last[0],last[1])<40) continue;
        last[0] = h[0];last[1] = h[1];
        points.push(new flower(context,h[0],h[1],7,35,255,212,50));

    }
}

function drawFlowers(){
   points[num-1].start();
   if (num-- > 0) setTimeout(drawFlowers,130);
}


function drawText(){
   context.fillStyle = "rgba(255,100,50,0.05)";
   context.fillText("I LOVE YOU",-180,150);
}

function drawName(){
   context.fillStyle = "rgba(255,70,70,0.06)";
   context.fillText(loveName,-180,230);
}

function changebkg(){
   backgd.style.backgroundColor = "rgb("+Math.floor(255-r*k)+","+Math.floor(255-g*k)+","+Math.floor(255-b*k)+")";
   k++;
//  backgd.style.backgroundColor = "rgb("+Math.floor(r)+","+Math.floor(g)+","+Math.floor(b)+")";
}

function outline(){
   drawHeart();
   context.font = "70px '微软雅黑'";
   for (var i=0;i<20;i++){
      setTimeout(drawText,120*i);
   }
   setTimeout(function(){
      for (var i=0;i<20;i++){
         setTimeout(drawName,120*i);
   }},3000);

   num = points.length;

   drawFlowers();

   var red = 255;
   var green = 255;
   var blue = 255;


   for (var k=0;k<i;k++){
       setTimeout(changebkg,100*k);
   }

}

outline();
