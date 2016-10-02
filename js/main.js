jQuery(document).ready(function($){
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 30) {
	    $('#shrinkable-nav').addClass('shrink', 600);
	  } else {
	    $('#shrinkable-nav').removeClass('shrink', 600);
	  }
	});

	$(window).load(function() {
		if ($(document).scrollTop() > 30) {
	    $('#shrinkable-nav').addClass('shrink', 600);
	  } else {
	    $('#shrinkable-nav').removeClass('shrink', 600);
	  }
	  $('body').scrollspy({ target: '#shrinkable-nav' });
	  $('.rocket-img').animate({right: '250px'}, 1000);
	});

	$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	        $('.star-5').fadeOut(180).delay(1400).fadeIn(300).fadeOut(150).delay(1000);
	        $('.star-6').fadeOut(600).fadeIn(250).fadeOut(1500).delay(1640);
	        $('.star-7').fadeOut(150).delay(1600).fadeIn(300).fadeOut(150).delay(1200);
	        $('.star-8').fadeOut(500).fadeIn(400).fadeOut(140).delay(1850);
	    }, 1);
	});

	var bouncingBlock = $('.timeline-block'),
		offset = 0.8;

	hideBlocks(bouncingBlock, offset);

	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(bouncingBlock, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(bouncingBlock, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-icon').hasClass('is-hidden') ) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	$(window).on('scroll', function(){
		$('.rocket-img').animate({right: '1200px'}, 3000);
	});

	$(function () {
	    setInterval(function () {
	    });
    });	

});