'use strict';
(function () {
    $(document).on('ready', function () {
        $('.slider-modal').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: true
        });
        $('.all-input-number').mask("+9 999 999-999-99");
        $('.modal-class').on('click', function () {
            var imgSrc = $(this).children('img').attr('src');
            $('#myModal').find('img').attr('src',imgSrc );
            $('.slider-modal').find('.slick-dots').children('li').eq(1).trigger('click')
        });

        $('#fullpage').fullpage({
            anchors: ['firstPage'],
            autoScrolling: false,
            verticalCentered: true,
            css3: true,
            fitToSection: false
        });


        // $.fn.scale = function(x) {
        //     if(!$(this).filter(':visible').length && x!=1)return $(this);
        //     if(!$(this).parent().hasClass('scaleContainer')){
        //         $(this).wrap($('<div class="scaleContainer">').css('position','relative'));
        //         $(this).data({
        //             'originalWidth':$(this).width(),
        //             'originalHeight':$(this).height()});
        //     }
        //     $(this).css({
        //         'transform': 'scale('+x+')',
        //         '-ms-transform': 'scale('+x+')',
        //         '-moz-transform': 'scale('+x+')',
        //         '-webkit-transform': 'scale('+x+')',
        //         'transform-origin': 'right bottom',
        //         '-ms-transform-origin': 'right bottom',
        //         '-moz-transform-origin': 'right bottom',
        //         '-webkit-transform-origin': 'right bottom',
        //         'position': 'absolute',
        //         'bottom': '0',
        //         'right': '0',
        //     });
        //     if(x==1)
        //         $(this).unwrap().css('position','static');else
        //         $(this).parent()
        //             .width($(this).data('originalWidth')*x)
        //             .height($(this).data('originalHeight')*x);
        //     return $(this);
        // };
        // $('body').scale(0.75);
    });
})();