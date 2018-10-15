// JavaScript Document

"use strict";


/*=======================================
Top-bar Navigation
======================================== */
$(document).ready(function() {
  function e() {
    var a = $(window).height();
    $(".js-fullscreen-height").css("height", a)
  }

  function i() {
    var a = $(window).scrollTop();
    $(window).height();
    a > 150 ? $(".header").addClass("header-prepare") : $(".header").removeClass("header-prepare"), a > 1 ? $(".header").addClass("header-fixed") : $(".header").removeClass("header-fixed")
  }

  function t() {
    p.css("max-height", $(window).height() - $(".header").height() - 20 + "px"), $(window).width() <= 1024 ? $(".header").addClass("mobile-device") : $(window).width() > 1024 && $(".header").removeClass("mobile-device")
  }

  $(window).resize(function() {
    e(), i(), t()
  }), $(window).scroll(function() {
    i()
  });

  var f = $(".nav-mobile"),
  p = $(".nav-menu");
  f.click(function() {
    $(this).hasClass("active") ? $(this).hasClass("active") && (f.removeClass("active"), p.removeClass("active")) : (f.addClass("active"), p.addClass("active"))
  });
  var u, h = $(".menu-has-sub");
  $(".mobile-device .menu-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), h.click(function() {
    return $(".header").hasClass("mobile-device") ? (u = $(this).parent("li:first"), u.hasClass("menu-opened") ? u.find(".sub-dropdown:first").slideUp(function() {
      u.removeClass("menu-opened"), u.find(".menu-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
    }) : ($(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), u.addClass("menu-opened"), u.find(".sub-dropdown:first").slideDown()), !1) : !1
  }), u = h.parent("li"), u.hover(function() {
    $(".header").hasClass("mobile-device") || $(this).find(".sub-dropdown:first").stop(!0, !0).fadeIn("fast")
  }, function() {
    $(".header").hasClass("mobile-device") || $(this).find(".sub-dropdown:first").stop(!0, !0).delay(100).fadeOut("fast")
  });

/*================================
preloader
================================= */
$(window).load(function() {
  $(".green-preloader").delay(1000).fadeOut(600);
}); 

/*================================
Mock-up slider
================================= */

var mockupSlider = $("#mockup-slider");
var mockupSliderTitles = $("#mockup-slider-titles");

mockupSlider.owlCarousel({
  singleItem:true,
  autoPlay: true,
  navigation: false,
  pagination: false
});

mockupSliderTitles.owlCarousel({
  singleItem:true,
  autoPlay: true,
  navigation: false,
  pagination: false
});

$(".next").click(function(){
  mockupSlider.trigger('owl.next');
  mockupSliderTitles.trigger('owl.next');
});
$(".prev").click(function(){
  mockupSlider.trigger('owl.prev');
  mockupSliderTitles.trigger('owl.prev');
});

/*================================
Section Height
================================= */

var x = $( window).height();
$("#asd").css("min-height",x);
$("#wel").css("min-height",x);
$("#abt").css("min-height",x);
$("#ser").css("min-height",x);
$("#por").css("min-height",x);
$("#tes").css("min-height",x);
$("#con").css("min-height",x);
$("#tem").css("min-height",x);
});

/*================================
Magnific Popup
================================= */

/* ---- our work gallery ---- */

$('.work').magnificPopup({
  delegate: 'a.zoom',
  type: 'image',
  fixedContentPos: false,
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
    preload: [0,2]
  }
});

/* ---- popup image ---- */
$('.popup-img').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade'
});

/* ---- popup video ---- */
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});


/*================================
Portfolio
================================= */

/* ---- Portfolio Isotope ---- */
var $grid = $('.grid').isotope({
  layoutMode: 'masonry'
});
$('.filter-button-group').on('click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
    filter: filterValue
  });
});
$(".filter-button-group").each(function(t, e) {
  var i = $(e);
  i.on("click", "li", function() {
    i.find(".active").removeClass("active"), $(this).addClass("active")
  })
});

/*================================
Modal
================================= */

/* ---- login ---- */
$( ".login" ).click(function() 
{
  $('#login_box').addClass('on');
});   
$( ".abc" ).click(function() {
  $('#login_box').removeClass('on');
});
/* ---- reg ---- */
$( ".reg" ).click(function() 
{
  $('#reg_box').addClass('on');
});   
$( ".abc" ).click(function() {
  $('#reg_box').removeClass('on');
}); 


/*================================
Progress Bar
================================= */

$('.progress-bar > span').each(function(){
  var $this = $(this);
  var width = $(this).data('percent');
  $this.css({
    'transition' : 'width 2s'
  });

  setTimeout(function() {
    $this.appear(function() {
      $this.css('width', width + '%');
    });
  }, 500);
});


/*================================
Form Validation
================================= */

$("#add").validate({
  rules: {
    phone: {
      required: true,
      digits: true,
      minlength: 10,
    },
    name: {
      required: true,
      minlength: 2,
    },

    subject: {
      required: true, 
      minlength: 5,
    },
    email: {
      required: true,
      email:true
    },
    address: {
      required: true,
    },
    State: {
      required: true,
    },
    upload: {
      required: true,
    },
    country: {
      required: true,
    },

    message: {
      minlength: 5,
      required:true,
    },

  },
  errorElement : 'div',
  errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
}); 

/*================================
Snack bar
================================= */

function myFunction() {
  var x = document.getElementById("snackbar")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}  