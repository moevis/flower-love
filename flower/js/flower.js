function flower(context,x,y,n,radius,red,green,blue){
   this.x = x;
   this.y = y;
   this.radius = radius || 20;
   this.color={
   	r:red || 150,
   	g:green || 100,
   	b:blue || 100
   }
   this.n = n || 10;
   this.rad = 2*Math.PI*Math.random();
   this.context = context;
}

flower.prototype.drawPetal = function(i){
   var delta =0.3+Math.random();
   var rand = this.radius*Math.random()+this.radius;

   this.context.beginPath();
   this.context.moveTo(this.x+Math.cos(this.rad)*.1,this.y+Math.sin(this.rad)*.1);
   this.context.fillStyle = "rgba("+Math.floor(this.color.r*(1.25-Math.random()*0.5))+","+Math.floor(this.color.g*(1.25-Math.random()*0.5))+","+Math.floor(this.color.b*(1.25-Math.random()*0.5))+","+i+")";
   this.context.bezierCurveTo(this.x+Math.cos(this.rad+delta)*rand*i,this.y+Math.sin(this.rad+delta)*rand*i,this.x+Math.cos(this.rad+2*delta)*rand*i,this.y+Math.sin(this.rad+2*delta)*rand*i,this.x+0.1*Math.cos(this.rad+3*delta),this.y+0.1*Math.sin(this.rad+3*delta));
//   this.context.shadowColor = "rgba(255,0,0,0.5)";
//   this.context.shadowBlur = 3;
   this.context.strokeStyle = "rgba(55,55,55,0.1)";
   this.context.stroke();
   this.context.fill();

}

flower.prototype.drawBud = function(i){
   var r = i || 1;
   var o = this;
   this.context.beginPath();
   this.context.arc(this.x,this.y,i,0,2*Math.PI,false);
   this.context.fillStyle = "rgba(255,50,1,0.5)";
   this.context.fill();
   if (i++ <4) setTimeout(function(){o.drawBud();},700);
}

flower.prototype.bloom = function(){
   var o = this;
   for (var i=1;i<7;i+=1) setTimeout(function(){o.drawPetal(i*i*.01);},10*i);
   this.rad +=2.4;
}

flower.prototype.start = function(){
   var o = this;
   for (var i=0;i<this.n;i++)
      setTimeout(function(){o.bloom();},100*i);
   setTimeout(function(){o.drawBud(4);},o.n*100);
}