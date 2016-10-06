jQuery(document).ready(function($){
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 30) {
	    $('#shrinkable-nav').addClass('shrink', 600);
	    $('nav').css('-o-box-shadow', '0 8px 8px -6px #111');
	  	$('nav').css('-moz-box-shadow', '0 8px 8px -6px #111');
	  	$('nav').css('-webkit-box-shadow', '0 8px 8px -6px #111');
	  	$('nav').css('box-shadow', '0 8px 8px -6px #111');
	  } 
	  else {
	  	$('nav').css('box-shadow', 'none');
	    $('#shrinkable-nav').removeClass('shrink', 600);
	  }
	});

	$(window).load(function() {
		if ($(document).scrollTop() > 30) {
	    $('#shrinkable-nav').addClass('shrink', 600);
	  	$('nav').css('-o-box-shadow', '0 8px 8px -6px #111');
	  	$('nav').css('-moz-box-shadow', '0 8px 8px -6px #111');
	  	$('nav').css('-webkit-box-shadow', '0 8px 8px -6px #111');
	  	$('nav').css('box-shadow', '0 8px 8px -6px #111');
	  } else {
	  	$('nav').css('box-shadow', 'none');
	    $('#shrinkable-nav').removeClass('shrink', 600);
	  }
	  $('body').scrollspy({ target: '#shrinkable-nav' });
	});

	$(function() {
	    setInterval(function() {
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

	/*$(function () {
		setInterval(function () {
			$('.quote-container').animate({backgroundColor: 'blue'}, 5000);
		}, 1);
		setInterval(function () {
			$('.quote-container').animate({backgroundColor: 'green'}, 5000);
		}, 1);
	});*/
	$('#about-button').on('click', function() {
		//$('#about-button').attr('href', '#about');
		$('html, body').animate({
		    scrollTop: $('#about').offset().top-50
		}, 1000);
		return false;
	});

	$('#projects-button').on('click', function() {
		//$('#projects-button').attr('href', '#myProjects');
		$('html, body').animate({
		    scrollTop: $('#myProjects').offset().top-50
		}, 1000);
	});

	$('#home-button').on('click', function() {
		//$('#home-button').attr('href', '#myPortfolio');
		$('html, body').animate({
		    scrollTop: $('#myPortfolio').offset().top-50
		}, 1000);
	});

	$('#contact-button, #contactMe').on('click', function() {
		//$('#contact-button').attr('href', '#myContact');
		$('html, body').animate({
		    scrollTop: $('#myContact').offset().top-50
		}, 1000);
	});

	var bouncingBlock = $('.timeline-block'),
		offset = 0.8;

	hideBlocks(bouncingBlock, offset);

	$(window).on('scroll', function() {
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(bouncingBlock, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(bouncingBlock, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline-icon, .timeline-content, .timeline-images').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-icon').hasClass('is-hidden') ) && $(this).find('.timeline-icon, .timeline-content, .timeline-images').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	/*$(window).on('scroll', function() {
		$('.rocket-img').animate({right: '1200px'}, 3000);
	});*/

	$('.fixmestick-img.web1').click(function() {
		$('.web1').css('z-index', 4);
		$('.web2').css('z-index', 3);
		$('.web3').css('z-index', 2);
    });
    $('.fixmestick-img.web2').click(function() {
		$('.web2').css('z-index', 4);
		$('.web1').css('z-index', 2);
		$('.web3').css('z-index', 2);
    });
    $('.fixmestick-img.web3').click(function() {
		$('.web3').css('z-index', 4);
		$('.web1').css('z-index', 2);
		$('.web2').css('z-index', 2);
    });

    /*$('#about-button').click(function() {
    	$('#aboutContainer').css('padding-top', '5%');
    });
    $('#about-button').click(function() {
    	$('#aboutContainer').css('padding-top', '5%');
    });
    if ($('#myProjects').scrollTop() + $(window).height() >= 30) {
    	$('#aboutContainer').css('padding-top', '1%');
    }*/

});