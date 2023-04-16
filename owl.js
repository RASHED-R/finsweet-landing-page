$(function () {
    $('#latest-card-active').owlCarousel({
        margin: 20,
        nav: true,
        items: 1,
        dots: true,
        loop: true,
        navText: ["<i class='fa-solid fa-chevron-left latest-card-1 latest-card-left'></i>", "<i class='fa-solid fa-chevron-right latest-card-1 latest-card-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            },
        },

    });

});
$(function () {
    $('#sponsor-slider-active').owlCarousel({
        margin: 20,
        nav: true,
        items: 5,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            768: {
                items: 4,
                nav: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: true,
            },
        },

    });

});
$(function () {
    $('#team-mate-slider-active').owlCarousel({
        margin: 20,
        nav: false,
        items: 4,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            },
        },

    });

});
(function ($) {
    "use strict";

    $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })


    });

})(jQuery);