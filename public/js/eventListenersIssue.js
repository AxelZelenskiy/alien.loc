"use strict";

let block = document.querySelector('div.test');

const restart = () => {
	block.addEventListener("click",(e)=> {
	console.log('Again!!!');
	});
};

const restartFixed = () => {

};

restart();

let buttonUno = document.querySelector('button.bt-1'),
	buttonDuo = document.querySelector('button.bt-2');

buttonUno.addEventListener('click',restart);
buttonDuo.addEventListener('click',restartFixed);