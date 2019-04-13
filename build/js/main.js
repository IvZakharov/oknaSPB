//Маска для формы 

$(document).ready(function(){ 
	$("#phone").mask("+7 (999) 999-99-99");
});

$(document).ready(function(){ 
	$("#modal-phone").mask("+7 (999) 999-99-99");
});

$(document).ready(function(){ 
	$("#modal-phone-2").mask("+7 (999) 999-99-99");
});

//Google maps

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.962614, lng: 30.451750},
		zoom: 15
	});

	var marker = new google.maps.Marker({
		 position: {lat: 59.962614, lng: 30.461750},
		 map: map,
	});
}

//Слайдер товаров

$(document).ready(function(){
  $('.slider-products').slick({
  	arrows: true,
    dots: false,
	infinite: false,
	speed: 300
  });
});

//Галерея товара 

 $('#lightSlider-1').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

 $('#lightSlider-2').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

  $('#lightSlider-3').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

// /Бургер меню/ 
// $(function(){
// 	$('.burger-menu__triger').click(function(){
// 		$('.main-nav').toggleClass('main-nav--active');
// 		$('.burger-menu').toggleClass('burger-menu--opened');
// 	});
// });

$(document).ready(function(){
  var burgerTrigger = $('.burger-menu__trigger');
  var burger = $('.burger-menu');
  var navMenu = $('.main-nav');
  var link = $('.main-nav__link');

  burgerTrigger.click(function(){
    navMenu.toggleClass('main-nav--active');
    burger.toggleClass('burger-menu--opened');
  });

  link.click(function(){
    navMenu.toggleClass('main-nav--active');
    burger.toggleClass('burger-menu--opened');
  });

});

//Модальные окна

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})