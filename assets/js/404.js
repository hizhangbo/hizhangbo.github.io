"use strict";{window.onload=function(){var canvas=document.querySelector("canvas");if(typeof canvas.getContext==="undefined"){return}var ctx=canvas.getContext("2d");function fitCanvasSize(){canvas.width=document.documentElement.clientWidth;canvas.height=document.documentElement.clientHeight}fitCanvasSize();window.onresize=fitCanvasSize;(function(){var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=requestAnimationFrame})();var colors=["#000030","#4d4398","#4784bf","#000030","#4d4398","#ffffff"];function randomIntFromRange(min,max){return Math.floor(Math.random()*(max-min+1)+min)}function randomColor(colors){return colors[Math.floor(Math.random()*colors.length)]}function Particle(x,y,radius,color){var _this=this;this.x=x;this.y=y;this.radius=radius;this.color=color;this.radians=Math.random()*Math.PI*2;this.velocity=.001;this.distanceFormCenter=randomIntFromRange(10,canvas.width/2+100);this.update=function(){_this.radians+=_this.velocity;_this.x=Math.cos(_this.radians)*_this.distanceFormCenter+canvas.width/2;_this.y=Math.sin(_this.radians)*_this.distanceFormCenter+canvas.height/2;_this.draw()};this.draw=function(){ctx.beginPath();ctx.fillStyle=_this.color;ctx.arc(_this.x,_this.y,_this.radius,0,Math.PI*2,false);ctx.globalAlpha=.8;ctx.fill()}}var perticles;function init(){perticles=[];for(var i=0;i<1200;i++){var radius=Math.random()+.5;perticles.push(new Particle(canvas.width/2,canvas.height/2,radius,randomColor(colors)))}}function animate(){requestAnimationFrame(animate);var g=ctx.createLinearGradient(0,0,canvas.width,canvas.height);g.addColorStop(0,"rgba(19,27,35,.05)");g.addColorStop(1,"rgba(10,20,67,.05)");ctx.fillStyle=g;ctx.fillRect(0,0,canvas.width,canvas.height);perticles.forEach(function(perticles){perticles.update()})}init();animate();var seconds=10;var t2=window.setInterval(function(){seconds=seconds-1;console.log(seconds);if(seconds==0){window.clearInterval(t2);window.location.href="/"}},1e3)}}