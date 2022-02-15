"use strict";

var windowHeight = window.innerHeight;
var vh = parseFloat(windowHeight * 0.09).toFixed(2);
jQuery('html').css({
  'font-size': vh + '%'
});
jQuery(window).resize(function () {
  windowHeight = window.innerHeight;
  vh = parseFloat(windowHeight * 0.09).toFixed(2);
  jQuery('html').css({
    'font-size': vh + '%'
  });
});
jQuery(document).ready(function () {
  console.log('read');
  jQuery(document).on('click', '.showPassword', function () {
    var $parent = jQuery(this).parents('.form__row');
    var input = jQuery($parent).find('input');

    if (jQuery(input).attr("type") == "password") {
      jQuery(input).attr("type", "text");
      jQuery($parent).addClass('showed');
    } else {
      jQuery(input).attr("type", "password");
      jQuery($parent).removeClass('showed');
    }
  });
});
var videoPopup = '';
var namePopup;
jQuery(document).on('click', '.openPopup', function (e) {
  e.preventDefault();
  jQuery('.popup').fadeOut(300);
  namePopup = jQuery(e.currentTarget).attr('href') || jQuery(e.currentTarget).attr('data-popup');
  var info = jQuery(e.currentTarget).attr('data-info');

  if (jQuery(e.currentTarget).is('[data-video]')) {
    videoPopup = jQuery(e.currentTarget).attr('data-video');
    setVideoData(namePopup, videoPopup);
  }

  openPopup(namePopup, info);
});
jQuery(document).on('click', '.popup__close, .closePopup, .closeFonPopup', function (e) {
  jQuery(this).parents('.popup').fadeOut(300); // jQuery('html').removeClass('blur');

  setTimeout(function () {
    if (videoPopup.length > 0) {
      jQuery(namePopup).find('.popupVideo__container').html('');
      videoPopup = '';
    }
  }, 300);
});

function openPopup(name, info) {
  if (info) {
    jQuery(name).find('textarea').val(info);
  }

  jQuery(name).fadeIn(300);
}

;

function successForm(name) {
  jQuery(name).fadeOut(300);
  jQuery('.formSuccess').fadeIn(300);
  setTimeout(function () {}, 300);
  setTimeout(function () {
    jQuery('.formSuccess').fadeOut(300);
  }, 3000);
}

;

function setVideoData(popup, video) {
  var videoArea = jQuery(popup).find('.popupVideo__container');
  videoArea.append('<iframe src="' + video + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>');
}

$(function() {
  var newSelection = "";
  $("#header_filter a").click(function(){
    $("#all-category").fadeTo(200, 0.10);
    $("#header_filter a").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".presentations__item").not("."+newSelection).slideUp( 0 );
    $("."+newSelection).slideDown();
    $("#all-category").fadeTo(600, 1);
  });
});
$(function() {
  var newSelection = "";
  $("#header_filters a").click(function(){
    $("#all-category").fadeTo(200, 0.10);
    $("#header_filter a").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".presentations__item").not("."+newSelection).slideUp( 0 );
    $("."+newSelection).slideDown();
    $("#all-category").fadeTo(600, 1);
  });
});
$(function() {
  var newSelection = "";
  $("#header_filter a").click(function(){
    $("#all-category").fadeTo(200, 0.10);
    $("#header_filter a").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".photo-page__item").not("."+newSelection).slideUp( 0 );
    $("."+newSelection).slideDown();
    $("#all-category").fadeTo(600, 1);
  });
});
$(function() {
  var newSelection = "";
  $("#header_filters a").click(function(){
    $("#all-category").fadeTo(200, 0.10);
    $("#header_filter a").removeClass("current");
    $(this).addClass("current");
    newSelection = $(this).attr("rel");
    $(".photo-page__item").not("."+newSelection).slideUp( 0 );
    $("."+newSelection).slideDown();
    $("#all-category").fadeTo(600, 1);
  });
});
$('body').on('click', '.input-pass-1', function(){
  if ($('.form-input__password-1').attr('type') == 'password'){
    $('.form-input__password-1').attr('type', 'text');
  } else {
    $('.form-input__password-1').attr('type', 'password');
  }
  return false;
});
$('body').on('click', '.input-pass-2', function(){
  if ($('.form-input__password-2').attr('type') == 'password'){
    $('.form-input__password-2').attr('type', 'text');
  } else {
    $('.form-input__password-2').attr('type', 'password');
  }
  return false;
}); 