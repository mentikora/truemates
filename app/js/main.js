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

	// Portfolio slider
	$('.portfolio-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: false,
		initialSlide: 1
	});
	$('.portfolio-slider').on('beforeChange', function(){
		var currentSlideData = $('.portfolio-slider .slick-current').data('slide');
		$('.dots-list[data-slide-dots="' + currentSlideData +'"]').removeClass('active');
	});
	$('.portfolio-slider').on('afterChange', function(){
		var currentSlideData = $('.portfolio-slider .slick-current').data('slide');
		$('.dots-list[data-slide-dots="' + currentSlideData +'"]').addClass('active');
	});

	// Dots
	$('.dot-item').on('click', function(){
		var data = $(this).data('dot');
		var dataItem = $('.dot-content-item[data-dot-content="' + data +'"]');

		dataItem.siblings().slideUp();
		dataItem.slideToggle();
	});

	// Bookmarks
	$('.tab-item__title').on('click', function(){
		var parent = $(this).parent();

		parent.addClass('active');
		parent.siblings().removeClass('active');
	});

	// Team slider
	$('.section-team-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		//fade: true
	});

});