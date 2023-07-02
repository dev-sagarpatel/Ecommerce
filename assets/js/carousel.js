$(document).ready(function () {
    $('.list-block').owlCarousel({
        items: 4, // Number of items to be displayed
        margin: 20, // Spacing between items
        loop: true, // Enable loop
        nav: true, // Show navigation buttons
        dots: false, // Hide pagination dots
        responsive: {
            0: {
                items: 1 // Number of items to be displayed on small screens
            },
            768: {
                items: 2 // Number of items to be displayed on medium screens
            },
            1024: {
                items: 4 // Number of items to be displayed on larger screens
            }
        }
    });
});