$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4, 
        margin: 20, 
        loop: true, 
        nav: false,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1 
            },
            768: {
                items: 2 
            },
            1024: {
                items: 4 
            }
        }
    });

    $('.owl-carousel .blog-articles').owlCarousel({
        items: 3, 
        margin: 40, 
        loop: true, 
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
});