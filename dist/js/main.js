$(document).ready(function(){"use strict";$(".navigation button").on("click",function(){var t=$(this).data("scroll");0!=t&&$("html,body").animate({scrollTop:$(""+t).offset().top},2e3)}),$(".portfolio-item__image").on("click",function(){var t=$(this).siblings(".portfolio-item__list"),i=t.find("li");t.toggleClass("active"),i.each(function(t){var i=$(this);setTimeout(function(){i.toggleClass("active",!i.hasClass("active"))},100*t)})}),$(".header__menu-button").on("click",function(){$(".navigation--header").toggleClass("active")});var t=$(".portfolio-slider");t.on("init",function(){var t=$(".portfolio-slider .slick-current").data("slide");$('.dots-list[data-slide-dots="'+t+'"]').addClass("active")}),t.slick({autoplay:!1,arrows:!0,dots:!1}),t.on("beforeChange",function(){var t=$(".portfolio-slider .slick-current").data("slide");$('.dots-list[data-slide-dots="'+t+'"]').removeClass("active")}),t.on("afterChange",function(){var t=$(".portfolio-slider .slick-current").data("slide");$('.dots-list[data-slide-dots="'+t+'"]').addClass("active")}),$(".dot-item").on("click",function(){var t=$(this).data("dot"),i=$('.dot-content-item[data-dot-content="'+t+'"]');i.siblings().slideUp(),i.slideToggle()}),$(".tab-item__title").on("click",function(){var t=$(this).parent(),i=t.find(".tab-item__text");i.removeClass("active"),t.addClass("active"),t.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(t){i.addClass("active")}),t.siblings().removeClass("active")}),$(".section-team-slider").slick({autoplay:!0,autoplaySpeed:600,arrows:!1,dots:!1,fade:!0}),$(".imprint-button").on("click",function(){$(".imprint-content").slideToggle(600)})});