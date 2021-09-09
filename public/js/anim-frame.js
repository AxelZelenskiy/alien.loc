"use strict";

console.log("AnimFrame start..."); 

const ball = document.querySelector("div.ball") || null;
  let step = 5, count = 0;
  const animate = () => {
    ball.style.left = count + "px";
    ball.style.top = (count*2) + "px";
    count++;
    
    if ( count < 500 ) requestAnimationFrame(animate);
  }
  
 requestAnimationFrame(animate);