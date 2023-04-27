const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-option");
/* para obtener siempre a la ultima opcion del slider*/
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
/*Para indicarle que inserte despues de donde inicia el slider al  slider que corresponde a 
sliderSectionLast*/
slider.insertAdjacentElement('afterbegin', sliderSectionLast);


function moverDerecha(){

	let sliderSectionFirst = document.querySelectorAll(".slider-option")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend',sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	},500);

}

function moverIzquierda(){

	let sliderSection = document.querySelectorAll(".slider-option");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin',sliderSectionLast);
		slider.style.marginLeft = "-100%";
	},500);

}
btnRight.addEventListener('click',function(){
	moverDerecha();
});

btnLeft.addEventListener('click',function(){
	moverIzquierda();
});

/*Automatizar el slider, para que se pasen las fotos cada 5 segundos*/
setInterval(function(){
	moverDerecha();
},6000);