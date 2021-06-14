'use strict';

(function() {
    /* preloader */
    $(window).on('load', function() {
        $('.preloader-wrapper').addClass('animated fadeOutRight delay-3s');
    });

    /* navigation */
    $('.btn-navigation-back').on('click', function() {
        $('.navigation-custom').css('right', '-100%');
        $('.navigation-open').removeClass('close');
    });
    $('.btn-navigation-open').on('click', function() {
        $('.navigation-open').addClass('close');
        $('.navigation-custom').css('right', '0');
    });

    /* background image */
    $('.bg-image').each(function(index) {
        $(this).css('background-image', 'url("'+ $(this).data('bg-image') +'")');
    });

    /* skill carousel */
    $('#skillCarousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1,
                dots: false
            },
            768: {
                items: 2,
                dots: false
            },
            992: {
                items: 3,
                dots: true
            }
        }
    });

    /* skill carousel */
    $('#projectCarousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            576: {
                dots: false
            },
            768: {
                dots: false
            },
            992: {
                dots: true
            }
        }
    });

    /* navigation carousel */
    $('.owl-theme .owl-nav .owl-prev span').each(function(index) {
        $(this).html('<i class="fas fa-arrow-left"></i>');
    });
    $('.owl-theme .owl-nav .owl-next span').each(function(index) {
        $(this).html('<i class="fas fa-arrow-right"></i>');
    });

    /* scroll to */
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 2000);
        $('.navigation-custom').css('right', '-100%');
        $('.navigation-open').removeClass('close');
    });

    /* scroll trigger */
    $(document).on('scroll', function(event) {
        var scrollPosition = $(document).scrollTop();
        $('.navigation-link').each(function() {
            var gethref = $($(this).attr('href'));
            if(scrollPosition >= ($(document).height() - $(window).height())) {
                $('.navigation-list').find('.navigation-item .active').removeClass('active');
                $('.navigation-item a[href="#contact"]').addClass('active');
            } else if (scrollPosition >= gethref.position().top) {
                $('.navigation-list').find('.navigation-item .active').removeClass('active');
                $('.navigation-item a[href="'+$(this).attr('href')+'"]').addClass('active');
            }
        });
    });

})(window.jQuery);