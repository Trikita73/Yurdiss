$(function() {

	$(".slider-wrap").slideDown();

	//callback
	$("a[href=#callback]").click(function() {
		$("#callback .formname").val($(this).data("form"));
	});

	//equalheights
	$(".service-item h4").equalHeights();
	$(".new-item-text h4, p").equalHeights();
	$(".link-item").equalHeights();

	// superfish...
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});

	//Mobile menu
	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(document).ready(function() {

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

});

// wol-carousel...
$(document).ready(function () {
  var owl = $(".slider");
  owl.owlCarousel({
    itemClass: 'slide-wrap',
    navText: "",
    loop: true, //Зацикливаем слайдер
    margin: 0, //Отступ от элемента справа в 30px
    nav: true, //Отключение навигации
    dots: true,
    autoplay: false, //Автозапуск слайдера
    smartSpeed: 1500, //Время движения слайда
    autoplayTimeout: 3000, //Время смены слайда
    /* animateOut: 'fadeOut',*/
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.

      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
    }
  });
  $('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
  });
});﻿

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

