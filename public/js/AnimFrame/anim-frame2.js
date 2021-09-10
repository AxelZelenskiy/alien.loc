"use strict";
console.log("AnimationFrame test 2 started...");

let gray_ball = document.querySelector("div.ball") || null,
yellow_ball = document.querySelector("div.ball-yellow") || null;
if (!gray_ball) console.warn("Can't find div.ball element!");
if (!yellow_ball) console.warn("Can't find div.ball-yellow element!");

document.querySelector('button.btn').addEventListener("click",(e)=>{
	animate(settings_gray_ball);
	animate(settings_yellow_ball);
});



let settings_gray_ball = {
	timing(timeFraction){
		return timeFraction;
	},
	draw(progress){
		gray_ball.style.left = 360*progress + "px";
		gray_ball.style.top = 480*progress + "px";
	},
	duration: 3000
};


function timing_decorator(timing) {
	return function(timeFraction) {
		return 1 - timing(1-timeFraction);
	}
}
function timing(timeFraction){
	for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
			    if (timeFraction >= (7 - 4 * a) / 11) {
			      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
			    }
			 }
};
timing  = timing_decorator(timing);

let	settings_yellow_ball = {
		duration:4000,
		draw(progress){
			yellow_ball.style.right = 240*progress + "px";
			yellow_ball.style.top = 480*progress + "px";
		},
		timing
	};


function animate( {timing,draw,duration} ) {
	let start = performance.now();

	requestAnimationFrame(function animation_process(time){
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		let progress = timing(timeFraction);
		draw(progress);
		if (timeFraction < 1) requestAnimationFrame(animation_process);
	});
};

animate(settings_gray_ball);
animate(settings_yellow_ball);