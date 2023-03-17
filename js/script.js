const iconMenu = document.querySelector('.navigation-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header-main__menu');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//  Carousel

const btns = document.querySelectorAll('.carousel-btn-item');
const slides = document.querySelectorAll('.carousel-slides');


var sliderNav = function (manual) {

    btns.forEach((btn) => {
        btn.classList.remove('_active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('_active');
    });

    btns[manual].classList.add('_active');

    slides[manual].classList.add('_active');
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});




//iterrior

const plusses = document.querySelectorAll('.interior-list-item');

var sliderNav1 = function (manual) {

    if (plusses[manual].classList.contains('_active')) {

        plusses[manual].classList.remove('_active');



    } else {

        plusses.forEach((plus) => {
            plus.classList.remove('_active');
        });



        plusses[manual].classList.add('_active');


    }



};

plusses.forEach((plus, i) => {
    plus.addEventListener("click", () => {
        sliderNav1(i);
    });
});






$('.carousel-reviewes').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});