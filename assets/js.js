$(document).ready(function(){

    $('.thumnail-preview-div').slick({
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        accessibility: true,
        arrows: true,
        prevArrow: '<button id="prevBtnSlider"><i class="fa-solid fa-circle-chevron-left"></i></button>',
        nextArrow: '<button id="nextBtnSlider"><i class="fa-solid fa-circle-chevron-right"></i></button>',
        responsive: [
        {
            breakpoint: 768,
            settings: {
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

  });