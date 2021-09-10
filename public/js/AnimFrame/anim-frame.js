"use strict";

console.log("AnimFrame start..."); 

const ball = document.querySelector("div.ball") || null;
if (!ball) console.warn("Ball element not found.");
  let step = 5, count = 0;
  const animate = () => {
    ball.style.left = count + "px";
    ball.style.top = (count*2) + "px";
    count++;
    
    if ( count < 150 ) requestAnimationFrame(animate);
  }
  
requestAnimationFrame(animate);

const message = "Там далеко, далеко...";
	let	pos = -1;
let textDiv = document.querySelector('div.text-div') || null;
if (!textDiv) console.warn("Error occure while selecting text-div");


const writeText = () => {
	if (pos < 0) { textDiv.innerHTML = "|"; } else {
		textDiv.innerHTML = message.slice(0,pos) + "|";
	}
	pos++;
	if ( message.length > pos-1) requestAnimationFrame(writeText); 
}

requestAnimationFrame(writeText);