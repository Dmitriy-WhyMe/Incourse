"use strict";

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var headerHeight = jQuery('.header').outerHeight();
var wrap; // let bLazy;

var vh = parseFloat(windowHeight * 0.09).toFixed(2);
var sh;

if (windowHeight > 900) {
  parseFloat(windowHeight / 100 * 83).toFixed(2);
} else {
  sh = parseFloat(windowHeight / 100 * 76.7).toFixed(2);
} // console.log(sh);


jQuery('html').css({
  'font-size': vh + '%'
});
jQuery(window).resize(function () {
  windowHeight = window.innerHeight;
  vh = parseFloat(windowHeight * 0.09).toFixed(2);

  if (windowHeight > 900) {
    sh = parseFloat(windowHeight / 100 * 83).toFixed(2);
  } else {
    sh = parseFloat(windowHeight / 100 * 76.7).toFixed(2);
  }

  jQuery('html').css({
    'font-size': vh + '%'
  }); // console.log(sh);

  if (device.desktop()) {
    jQuery('.hfSlider__img').css({
      'height': sh
    });
  }
});

jQuery.fn.exists = function () {
  return this.length > 0;
};

jQuery(document).ready(function () {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  headerHeight = jQuery('.header').outerHeight();
  wrap = jQuery('.wrap'); // if(jQuery('.b-lazy').exists()){
  //   bLazy = new Blazy({
  //     loadInvisible: true,
  //     error: function (ele, msg) {
  //     //   console.log(ele, msg);
  //     },
  //     success: function(ele,msg){
  //       //console.log(ele.parseJSON());
  //       // console.log(ele,msg);
  //     }
  //   });
  // }
});

if (document.title.toLowerCase() === 'эксперты') {
  var expertModalPage = function expertModalPage() {
    var expertsPage = document.querySelectorAll('.experts-card');
    var expertsPagePopup = document.querySelector('.experts-page-popup');
    var expertsPageOverlay = document.querySelector('.experts-page-overlay');
    var expertsPageCloseBtn = document.querySelector('.experts-page-popup__close');
    expertsPage.forEach(function (expert) {
      expert.addEventListener('click', function (evt) {
        evt.preventDefault();
        $('.experts-page-popup__name').text(expert.querySelector('.experts__name').textContent);
        $('.experts-page-popup > img').attr('src', expert.querySelector('img').getAttribute('src'));
        $('.popup-expertise').text(expert.querySelector('.experts-description').textContent);
        openExpertModal();
      });
    });

    var closeExpertModal = function closeExpertModal() {
      expertsPagePopup.classList.add('experts-hidden');
      expertsPageOverlay.classList.add('experts-hidden');
    };

    expertsPageCloseBtn.addEventListener('click', closeExpertModal);
    expertsPageOverlay.addEventListener('click', closeExpertModal);

    var openExpertModal = function openExpertModal() {
      expertsPagePopup.classList.remove('experts-hidden');
      expertsPageOverlay.classList.remove('experts-hidden');
    };
  };

  expertModalPage();
}

jQuery(document).ready(function () {
  // let sh = parseFloat(windowHeight / 100 * 76.7).toFixed(2); 700
  // let sh = parseFloat(windowHeight / 100 * 83).toFixed(2); 947
  // jQuery('.hfSlider__img').css({'height': windowHeight - headerHeight});
  // if(device.desktop()){
  //   jQuery('.hfSlider__img').css({'height': windowHeight - headerHeight});
  // } else {
  //   jQuery('.hfSlider__img').css({'height': sh});
  // }
  jQuery('.hfSlider__img').css({
    'height': sh
  });

  if (jQuery('.hfSlider__img').length > 1) {
    var item = jQuery('.hfSlider');
    item.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      // autoplay: false,
      autoplaySpeed: 4000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    }); // item.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //   bLazy.revalidate();
    // });
    // item.on('afterChange', function(event, slick, direction){
    //   bLazy.revalidate();
    // });
  }
  /*experts slider*/


  var expertsSlider = jQuery('.experts__slider');
  expertsSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    appendArrows: $('.slider-buttons'),
    prevArrow: "<button class=\"slider-button slider-button-prev\">\n                  <svg viewBox=\"0 0 54 54\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"53.5\" y=\"53.5\" width=\"53\" height=\"53\" transform=\"rotate(-180 53.5 53.5)\"/>\n                    <path d=\"M22.2929 26.2929C21.9024 26.6834 21.9024 27.3166 22.2929 27.7071L28.6569 34.0711C29.0474 34.4616 29.6805 34.4616 30.0711 34.0711C30.4616 33.6805 30.4616 33.0474 30.0711 32.6569L24.4142 27L30.0711 21.3431C30.4616 20.9526 30.4616 20.3195 30.0711 19.9289C29.6805 19.5384 29.0474 19.5384 28.6569 19.9289L22.2929 26.2929ZM24 26L23 26L23 28L24 28L24 26Z\"/>\n                  </svg>\n                </button>",
    nextArrow: "<button class=\"slider-button slider-button-next\">\n                  <svg viewBox=\"0 0 54 54\"xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"0.5\" y=\"0.5\" width=\"53\" height=\"53\"/>\n                    <path d=\"M31.7071 27.7071C32.0976 27.3166 32.0976 26.6834 31.7071 26.2929L25.3431 19.9289C24.9526 19.5384 24.3195 19.5384 23.9289 19.9289C23.5384 20.3195 23.5384 20.9526 23.9289 21.3431L29.5858 27L23.9289 32.6569C23.5384 33.0474 23.5384 33.6805 23.9289 34.0711C24.3195 34.4616 24.9526 34.4616 25.3431 34.0711L31.7071 27.7071ZM30 28H31V26H30V28Z\"/>\n                  </svg>\n                </button>",
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false
  });

  var removeStandardArrows = function removeStandardArrows() {
    var expertsPrevBtn = document.querySelector('.slider-button-prev'),
        expertsNextBtn = document.querySelector('.slider-button-next');
    expertsPrevBtn.classList.remove('slick-arrow');
    expertsNextBtn.classList.remove('slick-arrow');
  };

  removeStandardArrows();

  var expertModalFunc = function expertModalFunc() {
    var experts = document.querySelectorAll('.slider-slide');
    var expertsPopup = document.querySelector('.experts-popup');
    var expertsOverlay = document.querySelector('.experts__overlay');
    var expertsCloseBtn = expertsPopup.querySelector('.experts-popup__close');
    experts.forEach(function (expert) {
      expert.addEventListener('click', function (e) {
        e.preventDefault();
        $('.experts-popup__name').text(expert.querySelector('.experts__name').textContent);
        $('.experts-popup > img').attr('src', expert.querySelector('img').getAttribute('src'));
        $('.popup-expertise').text(expert.querySelector('.experts-description').textContent);
        openExpertModal();
      });
    });

    var closeExpertModal = function closeExpertModal() {
      expertsPopup.classList.add('experts-hidden');
      expertsOverlay.classList.add('experts-hidden');
    };

    expertsCloseBtn.addEventListener('click', closeExpertModal);
    expertsOverlay.addEventListener('click', closeExpertModal);

    var openExpertModal = function openExpertModal() {
      expertsPopup.classList.remove('experts-hidden');
      expertsOverlay.classList.remove('experts-hidden');
    };
  };

  expertModalFunc();
});
jQuery(document).on('click', '.openPopup', function (e) {
  e.preventDefault();
  jQuery('.popup').fadeOut(300);
  var name = jQuery(e.currentTarget).attr('href') || jQuery(e.currentTarget).attr('data-popup');
  openPopup(name);
});
jQuery(document).on('click', '.popup__close, .closePopup, .closeFonPopup', function (e) {
  jQuery(this).parents('.popup').fadeOut(300); // jQuery('html').removeClass('blur');
});

function openPopup(name) {
  // jQuery('html').addClass('blur');
  jQuery(name).fadeIn(300);
}

;

function successForm(name) {
  jQuery(name).addClass('formSuccess');
  jQuery(name).fadeIn(300);
  setTimeout(function () {
    jQuery(name).fadeOut(300);
  }, 2000);
  setTimeout(function () {
    jQuery(name).removeClass('formSuccess');
  }, 3000);
}

;
jQuery(document).ready(function () {
  console.log('mobile');
});