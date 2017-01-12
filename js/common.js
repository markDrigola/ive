'use strict';
(function () {
    $(document).on('ready', function () {
        $('.all-input-number').mask("+9 999 999-999-99");
        $('.modal-class').on('click', function () {
            var imgSrc = $(this).children('img').attr('src');
            $('#myModal').find('img').attr('src',imgSrc );
        });
        $('#fullpage').fullpage({
            anchors: ['firstPage'],
            autoScrolling: false,
            verticalCentered: true,
            css3: true,
            fitToSection: false
        });
    });
})();