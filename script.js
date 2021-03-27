let box = document.querySelector('.box'),
	btn = document.querySelector('.button');

let width = box.clientWidth;   //ширина контента, включая padding, но без полосы прокрутки (скролл) и бордеров
	height  = box.clientHeight; //высота контента, включая padding, но без полосы прокрутки (скролл) и бордеров
    

// let width = box.offsetWidth;   //ширина контента, включая padding,  полосу прокрутки  и бордер
// height  = box.offsetHeight; //высота контента, включая padding,  полосу прокрутки  и бордер


//  let width = box.scrollWidth;   //ширина контента, включая padding, но без полосы прокрутки (скролл) и бордеров
//  	 height  = box.scrollHeight; //высота контента, полностью, а не только видимая часть
 	

console.log(width);
console.log(height);

console.log(box.getBoundingClientRect()); //координаты элемента + его полная ширина и высота с учетом padding и border


console.log(box.getBoundingClientRect().left);  //координаты элемента слева

console.log(document.documentElement.clientWidth); //ширина документа
console.log(document.documentElement.clientHeight); //высота документа (от юрл-строки до начала коносли)


// console.log(document.documentElement.scrollTop); узнали, сколько отмотал в пикселях вниз по скролу


scrollBy(0, 200);
//  метод, который позволяет опустить страницу вниз относительно текущего местоположения. по иксу на 0px, а по у на 200px вниз. но его использубт редко.  мотает только вниз

scrollTo(0, 200); 
//  метод, который позволяет изменить местоположение и переместиться в определенные координаты в любую точку страницы. мотает в любую точку



// btn.addEventListener('click', function () {
// 	box.style.height = box.scrollHeight + 'px';

// });

//все вышеперечисленные параметры доступны только для чтения. их можно получить, но манипулировать ими нельзя. пример ниже
// btn.addEventListener('click', function () {
// 	box.scrollHeight = 1500;
// 	console.log(height);
// });

// изменить мы можем только scrolltop и scrollleft. про них ниже.

// btn.addEventListener('click', function () {
// 	console.log(box.scrollTop);                //вывод в консоль прокрученной (невидимой) части элемента

// });

btn.addEventListener('click', function () {
	box.scrollTop = 0;                //вывод в консоль прокрученной (невидимой) части элемента

});

