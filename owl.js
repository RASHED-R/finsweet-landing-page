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