/*$(function() {
    alert( 'JavaScript Loaded!' );
});

var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");
btnMenu.addEventListener("click", function(){
  nav.classList.toggle("mostrar");
});*/


$(document).ready(function() {
	$menu = $('#nav').find('ul').find('li');

	$menu.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
    
    var btnMenu = $("#btn-menu");
    var nav = $("#nav");
    btnMenu.click(function(){
        //nav.classList.toggle("mostrar");
        nav.toggleClass("mostrar");
    });
});

/*var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");
btnMenu.addEventListener("click", function(){
  nav.classList.toggle("mostrar");
});*/