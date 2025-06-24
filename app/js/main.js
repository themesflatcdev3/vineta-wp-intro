/**
  * goTop
  * headerFixed
  * custom_cursor
  * stickyTabs
  * filterIsotope
  * counter
  * removePreloader
*/

; (function ($) {
  "use strict";

  var themesflatTheme = {

    // Main init function
    init: function () {
      this.config();
      this.events();
    },

    // Define vars for caching
    config: function () {
      this.config = {
        $window: $(window),
        $document: $(document),
      };
    },

    // Events
    events: function () {
      var self = this;

      // Run on document ready
      self.config.$document.on('ready', function () {


        // Retina Logos
        self.retinaLogo();


      });

      // Run on Window Load
      self.config.$window.on('load', function () {

      });
    },

  }; // end themesflatTheme

  // Start things up
  themesflatTheme.init();

  // var headerFixed = function () {
  //   let lastScrollTop = 0;
  //   let delta = 5;
  //   let navbarHeight = $("header").outerHeight();
  //   let didScroll = false;

  //   $(window).scroll(function () {
  //     didScroll = true;
  //   });

  //   setInterval(function () {
  //     if (didScroll) {
  //       let st = $(window).scrollTop();
  //       navbarHeight = $("header").outerHeight();

  //       if (st > navbarHeight) {
  //         $("header").addClass("fixed");
  //       }else {
  //         $("header").removeClass("fixed");
  //       }

  //       if (st > navbarHeight) {
  //         if (st > lastScrollTop + delta) {
  //           // $("header").css("top", `-${navbarHeight}px`);
  //         } else if (st < lastScrollTop - delta) {
  //           $("header").css("top", "0");
  //           $("header").addClass("is-small");
  //         }
  //       } else {
  //         $("header").css("top", "unset");
  //         $("header").removeClass("is-small");
  //       }
  //       lastScrollTop = st;
  //       didScroll = false;
  //     }
  //   }, 250);
  // };

  var headerFixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > 0) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 150) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };


  //Submenu Dropdown Toggle
  if ($('.main-header li.dropdown2 ul').length) {
    $('.main-header li.dropdown2').append('<div class="dropdown2-btn"></div>');

    //Dropdown Button
    $('.main-header li.dropdown2 .dropdown2-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown2 > a').on('click', function (e) {
      e.preventDefault();
    });

    //Disable dropdown parent link
    $('.main-header .navigation li.dropdown2 > a,.hidden-bar .side-menu li.dropdown2 > a').on('click', function (e) {
      e.preventDefault();
    });

    $('.price-block .features .arrow').on('click', function (e) {
      $(e.target.offsetParent.offsetParent.offsetParent).toggleClass('active-show-hidden')
    });

  }

  // Mobile Nav Hide Show
  if ($('.mobile-menu').length) {

    //$('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);

    //Hide / Show Submenu
    $('.mobile-menu .navigation > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
      e.preventDefault();
      var target = $(this).parent('li').children('ul');

      if ($(target).is(':visible')) {
        $(this).parent('li').removeClass('open');
        $(target).slideUp(500);
        $(this).parents('.navigation').children('li.dropdown2').removeClass('open');
        $(this).parents('.navigation').children('li.dropdown2 > ul').slideUp(500);
        return false;
      } else {
        $(this).parents('.navigation').children('li.dropdown2').removeClass('open');
        $(this).parents('.navigation').children('li.dropdown2').children('ul').slideUp(500);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle(500);
      }
    });

    //3rd Level Nav
    $('.mobile-menu .navigation > li.dropdown2 > ul  > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
      e.preventDefault();
      var targetInner = $(this).parent('li').children('ul');

      if ($(targetInner).is(':visible')) {
        $(this).parent('li').removeClass('open');
        $(targetInner).slideUp(500);
        $(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
        $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
        return false;
      } else {
        $(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
        $(this).parents('.navigation > ul').find('li.dropdown2 > ul').slideUp(500);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle(500);
      }
    });

    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');

    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop, .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
      $('.mobile-menu .navigation > li').removeClass('open');
      $('.mobile-menu .navigation li ul').slideUp(0);
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $('body').removeClass('mobile-menu-visible');
        $('.mobile-menu .navigation > li').removeClass('open');
        $('.mobile-menu .navigation li ul').slideUp(0);
      }
    });

  }

  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('#scroll-top').addClass('show');
      } else {
        $('#scroll-top').removeClass('show');
      }
    });

    $('#scroll-top').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 0, 'easeInOutExpo');
      return false;
    });
  };

  new WOW().init();

  var filterIsotope = function () {
    
    var $container = $('.container-filter');
    $container.imagesLoaded(function () {
      $container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        transitionDuration: '0.7s'
      });
    });

    $('.posttype-filter li').on('click', function () {
      var selector = $(this).find("a").attr('data-filter');
      $('.posttype-filter li').removeClass('active');
      $(this).addClass('active');
      $container.isotope({ filter: selector });
      return false;
    });

    var $container1 = $('.container-filter1');
    $container1.imagesLoaded(function () {
      $container1.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        transitionDuration: '0.7s'
      });
    });

    $('.posttype-filter1 li').on('click', function () {
      var selector1 = $(this).find("a").attr('data-filter');
      $('.posttype-filter1 li').removeClass('active');
      $(this).addClass('active');
      $container1.isotope({ filter: selector1 });
      return false;
    });

    var $container2 = $('.container-filter2');
    $container2.imagesLoaded(function () {
      $container2.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        transitionDuration: '0.7s'
      });
    });

    $('.posttype-filter2 li').on('click', function () {
      var selector2 = $(this).find("a").attr('data-filter');
      $('.posttype-filter2 li').removeClass('active');
      $(this).addClass('active');
      $container2.isotope({ filter: selector2 });
      return false;
    });

  };

  // Mouse Custom Cursor
  var custom_cursor = function () {
    var tfCursor = jQuery(".tfmouseCursor");
    if (tfCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }

  var stickyTabs = function () {
    var header_height = $("#header").height();
    $(window).on('scroll', function () {
      var scrollbarLocation = $(this).scrollTop();
      $('.sticky-nav').each(function () {
        var sectionOffset = $(this.hash);
        sectionOffset = $(this.hash).offset().top - 100;
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });

    $('a.sticky-nav[href*="#"]:not([href="https*"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - header_height)
          }, 0, "easeInOutExpo");
          return false;
        }
      }
    });
  }

  var removePreloader = function () {
    $("#preloader").fadeOut("slow", function () {
      setTimeout(function () {
        $("#preloader").remove();
      }, 1000);
    });
  };

  if ($(".slider-home").length > 0) {
    var swiper = new Swiper(".slider-home", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1.61,
      centeredSlides: true,
      autoplay: true,
      speed: 1000,
      observer: true,
      observeParents: true,
      freeMode: false,
      watchSlidesProgress: true,
      effect: "coverflow",
      grabCursor: true,
      coverflowEffect:{
        rotate: 0,
        stretch: 367,
        depth: 0,
        modifier:1,
        scale: 0.8,
        slideShadows: false
      },
      navigation: {
        clickable: true,
        nextEl: ".next-slider-home",
        prevEl: ".prev-slider-home",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1.4,
        },
        991: {
          slidesPerView: 1.8,
        },
        1200: {
          slidesPerView: 1.3 ,
        },
        1441: {
          slidesPerView: 1.61 ,
        } 
      }
    });
  }

  var counter = function () {
    if ($(document.body).hasClass("counter-scroll")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".counter")
              .find(".number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed");
                $(this).countTo({
                  to: to,
                  speed: speed,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  var heightitem = function () {

    function updateHeight() {
      var firstItem = $(".container-filter .item").first();
      var height = firstItem.find(".home-box").height();
      $(".coming-soon .home-box").height(height);
    }

    $(window).on("load", function () {
        updateHeight();
    });
    $(window).resize(function () {
        updateHeight();
    });
  
  }

   // infinite side
  var infiniteSlide = function () {
    if ($(".infiniteslide").length > 0) {
        $(".infiniteslide").each(function () {
            var $this = $(this);
            var style = $this.data("style") || "left";
            var clone = $this.data("clone") || 2;
            var speed = $this.data("speed") || 100;
            $this.infiniteslide({
                speed: speed,
                direction: style,
                clone: clone,
            });
        });
    }
  };

  var autoPopup = function () {
    if ($("#pop-up").length > 0) {
        setTimeout(function () {
            $("#pop-up").addClass("show");
        }, 3000);
        
        $(".close-pop-up").on("click", function () {
          $("#pop-up").removeClass("show");
        });
    }
  };

  // Dom Ready
  $(function () {
    goTop();
    headerFixed();
    custom_cursor();
    stickyTabs();
    filterIsotope();
    counter();
    heightitem();
    infiniteSlide();
    autoPopup();
    removePreloader();
  });

})(jQuery);

