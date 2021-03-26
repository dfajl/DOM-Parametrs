let box = document.querySelector('.box'),
	btn = document.querySelector('.button');

// let width = box.clientWidth;   //ширина контента, включая padding, но без полосы прокрутки (скролл) и бордеров
// 	height  = box.clientHeight; //высота контента, включая padding, но без полосы прокрутки (скролл) и бордеров
    

// let width = box.offsetWidth;   //ширина контента, включая padding,  полосу прокрутки  и бордер
// height  = box.offsetHeight; //высота контента, включая padding,  полосу прокрутки  и бордер


 let width = box.scrollWidth;   //ширина контента, включая padding, но без полосы прокрутки (скролл) и бордеров
 	 height  = box.scrollHeight; //высота контента, полностью, а не только видимая часть
 	

console.log(width);
console.log(height);

btn.addEventListener('click', function () {
	box.style.height = box.scrollHeight + 'px';

});