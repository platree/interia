
// Social Icons Tooltip
$('.social-link').tooltip();

// Page Loader
$(window).load(function() {
  "use strict";
  $('#loader').fadeOut();
});

//Bootsrap slider carousel
$('#carousel-slider').carousel();

$('a[data-slide="prev"]').click(function () {
    $('#carousel-slider').carousel('prev');
});

$('a[data-slide="next"]').click(function () {
    $('#carousel-slider').carousel('next');
});

$(document).ready(function($) {
  "use strict";  
  // Counter  
  $('.timer').countTo();
  $('.counter-item').appear(function() {
    $('.timer').countTo();
  }, {
    accY: -100
  }); 
  
  // Nav Menu & Search
  $(".nav > li:has(ul)").addClass("drop");
  $(".nav > li.drop > ul").addClass("dropdown");
  $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
  
  $('.show-search').click(function() {
    $('.full-search').fadeIn(300);
    $('.full-search input').focus();
  });
  $('.full-search input').blur(function() {
    $('.full-search').fadeOut(300);
  });
  
  //	Back Top Link
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })
	
  // Touch Slider
  var time = 4.4,
    $progressBar,
    $bar,
    $elem,
    isPause,
    tick,
    percentTime;
  $('.touch-slider').each(function() {
    var owl = jQuery(this),
      sliderNav = $(this).attr('data-slider-navigation'),
      sliderPag = $(this).attr('data-slider-pagination'),
      sliderProgressBar = $(this).attr('data-slider-progress-bar');
    if (sliderNav == 'false' || sliderNav == '0') {
      var returnSliderNav = false
    } else {
      var returnSliderNav = true
    }
    if (sliderPag == 'true' || sliderPag == '1') {
      var returnSliderPag = true
    } else {
      var returnSliderPag = false
    }
    if (sliderProgressBar == 'true' || sliderProgressBar == '1') {
      var returnSliderProgressBar = progressBar
      var returnAutoPlay = false
    } else {
      var returnSliderProgressBar = false
      var returnAutoPlay = true
    }

    owl.owlCarousel({
      navigation: returnSliderNav,
      pagination: returnSliderPag,
      slideSpeed: 400,
      paginationSpeed: 400,
      lazyLoad: true,
      singleItem: true,
      autoHeight: true,
      autoPlay: returnAutoPlay,
      stopOnHover: returnAutoPlay,
      transitionStyle: "fade",
      afterInit: returnSliderProgressBar,
      startDragging: pauseOnDragging
    });
  });

  function progressBar(elem) {
    $elem = elem;
    buildProgressBar();
    start();
  }

  function buildProgressBar() {
    $progressBar = $("<div>", {
      id: "progressBar"
    });
    $bar = $("<div>", {
      id: "bar"
    });
    $progressBar.append($bar).prependTo($elem);
  }

  function pauseOnDragging() {
    isPause = true;
  }

  //testimonial Slider
  $(document).ready(function(){
      /*=== clients ====*/
      $('#testimonial-carousel').owlCarousel({   
          navigation: false, // Show next and prev buttons
          slideSpeed: 800,
          paginationSpeed: 400,
          autoPlay: false,
          singleItem: true,
          pagination : true,
          items : 1,
          itemsCustom : false,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
      });

  });

  // Client Logo
  $("#client-logo").owlCarousel({
    navigation : false,
    pagination: false,
    slideSpeed : 400,
    stopOnHover: true,
    autoPlay: 3000,
    items : 5,
    itemsDesktopSmall : [900,3],
    itemsTablet: [640,2],
    itemsMobile : [480, 1]
  });

  // Recent-projects
  $("#projects-carousel").owlCarousel({
    navigation : true,
    pagination: false,
    slideSpeed : 400,
    stopOnHover: true,
    autoPlay: 3000,
    items : 3,
    itemsDesktop : [1024,3],
    itemsDesktopSmall : [960,2],
    itemsTablet: [640,2],
    itemsMobile : [480, 1]
  });

  // Touch Carousel
  $(".touch-slider").owlCarousel({
    navigation: true,
    pagination: true,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 3000,
    singleItem: true,
    autoHeight: true,
    transitionStyle: "fade"
  });
  
  // Pie Charts	
  var pieChartClass = 'pieChart',
    pieChartLoadedClass = 'pie-chart-loaded';

  function initPieCharts() {
    var chart = $('.' + pieChartClass);
    chart.each(function() {
      $(this).appear(function() {
        var $this = $(this),
          chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
          chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
        if (!$this.hasClass(pieChartLoadedClass)) {
          $this.easyPieChart({
            animate: 2000,
            size: chartBarWidth,
            lineWidth: 2,
            scaleColor: false,
            trackColor: "#eee",
            barColor: chartBarColor,
          }).addClass(pieChartLoadedClass);
        }
      });
    });
  }
  initPieCharts();

   //	Nivo Lightbox	
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
    errorMessage: 'The requested content cannot be loaded. Please try again later.'
  });

  //	Change Slider Nav Icons
  $('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
  $('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
  $('.read-more').append('<i class="fa fa-angle-right"></i>');

  //	Sticky Header
  (function() {
    var docElem = document.documentElement,
      didScroll = false,
      changeHeaderOn = 100;
    document.querySelector('header');

    function init() {
      window.addEventListener('scroll', function() {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      }, false);
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        $('.top-bar').slideUp(300);
        $("header").addClass("fixed-header");
        if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 12 + "px",
            'padding-bottom': 12 + "px"
          })
        } else {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 8 + "px",
            'padding-bottom': 8 + "px"
          })
          $('.search-side').css({
            'margin-top': 0 + "px"
          });
        };
      } else {
        $('.top-bar').slideDown(300);
        if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 15 + "px",
            'padding-bottom': 15 + "px"
          })
        } else {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 8 + "px",
            'padding-bottom': 8 + "px"
          })
          $('.search-side').css({
            'margin-top': 0 + "px"
          });
        };
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  })();
});

// End JS Document

// Styles Switcher JS
function setActiveStyleSheet(title) {
  var i, a, main;
  for (i = 0;
    (a = document.getElementsByTagName("link")[i]); i++) {
    if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if (a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for (i = 0;
    (a = document.getElementsByTagName("link")[i]); i++) {
    if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for (i = 0;
    (a = document.getElementsByTagName("link")[i]); i++) {
    if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}
window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}
var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
$(document).ready(function() {

// Styles Switcher
$(document).ready(function() {
  $('.open-switcher').click(function() {
    if ($(this).hasClass('show-switcher')) {
      $('.switcher-box').css({
        'left': 0
      });
      $('.open-switcher').removeClass('show-switcher');
      $('.open-switcher').addClass('hide-switcher');
    } else if (jQuery(this).hasClass('hide-switcher')) {
      $('.switcher-box').css({
        'left': '-236px'
      });
      $('.open-switcher').removeClass('hide-switcher');
      $('.open-switcher').addClass('show-switcher');
    }
  });
});

//Layout Switcher
$(".layout-style").change(function() {
  if ($(this).val() == 1) {
    $("#container").removeClass("boxed-page"),
      $(window).resize();
  } else {
    $("#container").addClass("boxed-page"),
      $(window).resize();
  }
});

//Background Switcher
$('.switcher-box .bg-list li a').click(function() {
  var current = $('.switcher-box select[id=layout-style]').find('option:selected').val();
  if (current == '2') {
    var bg = $(this).css("backgroundImage");
    $("body").css("backgroundImage", bg);
  } else {
    alert('Please select boxed layout');
  }
});

});

// Mixitup portfolio filter
jQuery(function() {
  jQuery('#portfolio-list').mixItUp({
    animation: {
      duration: 800
    }
  });
});

jQuery(function() {
  jQuery('#products').mixItUp({
    animation: {
      duration: 800
    }
  });
});




//Tab
$(document).ready(function() {
    $("div.tab-menu>ul.list-group>li").click(function(e) {
        e.preventDefault();
        $(this).siblings('li.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tabs-content").removeClass("active");
        $("div.tabs-content").eq(index).addClass("active");
    });
});

// slider
jQuery(document).ready(function() {
  jQuery('.tp-banner').show().revolution({
    dottedOverlay: "none",
    delay: 16000,
    startwidth: 1170,
    startheight: 500,
    hideThumbs: 200,
    thumbWidth: 100,
    thumbHeight: 50,
    thumbAmount: 5,
    navigationType: "bullet",
    navigationArrows: "solo",
    navigationStyle: "preview1",
    touchenabled: "on",
    onHoverStop: "on",
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,
    parallax: "mouse",
    parallaxBgFreeze: "on",
    parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
    keyboardNavigation: "off",
    navigationHAlign: "center",
    navigationVAlign: "bottom",
    navigationHOffset: 0,
    navigationVOffset: 20,
    soloArrowLeftHalign: "left",
    soloArrowLeftValign: "center",
    soloArrowLeftHOffset: 20,
    soloArrowLeftVOffset: 0,
    soloArrowRightHalign: "right",
    soloArrowRightValign: "center",
    soloArrowRightHOffset: 20,
    soloArrowRightVOffset: 0,
    shadow: 0,
    fullWidth: "on",
    fullScreen: "off",
    spinner: "spinner1",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    forceFullWidth: "off",
    hideThumbsOnMobile: "off",
    hideNavDelayOnMobile: 1500,
    hideBulletsOnMobile: "off",
    hideArrowsOnMobile: "off",
    hideThumbsUnderResolution: 0,
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    startWithSlide: 0,
    videoJsPath: "rs-plugin/videojs/",
    fullScreenOffsetContainer: ""
  });
}); 


/**
 * Slick Nav 
 */

$('.wpb-mobile-menu').slicknav({
  prependTo: '.navbar-header',
  parentTag: 'span',
  allowParentLinks: true,
  duplicate: false,
  label: '',
  closedSymbol: '<i class="fa fa-angle-right"></i>',
  openedSymbol: '<i class="fa fa-angle-down"></i>',
});