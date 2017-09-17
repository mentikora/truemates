$(document).ready(function(){

	'use strict';

	// Smooth scrolling 
	$('.navigation button').on('click', function(){
		var scroll = $(this).data('scroll');

		$('html,body').animate({
    	scrollTop: $('' + scroll).offset().top
		}, 2000);		
	});

	// Portfolio item, show list
	$('.portfolio-item__image').on('click', function(){
		$(this).siblings('.portfolio-item__list').toggleClass('visually-hidden');
	});

	// Mobile menu button
	$('.header__menu-button').on('click', function(){
		$('.navigation--header').toggleClass('active');
	});

	// Team slider
	$('.section-team-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		fade: true
	});

	// Bookmarks
	$('.tab-item__title').on('click', function(){
		var parent = $(this).parent();

		parent.addClass('active');
		parent.siblings().removeClass('active');

		console.log(parent);
	});


});