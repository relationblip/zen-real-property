// Главный слайдер, фотки объекта
document.addEventListener('DOMContentLoaded', function () {
    const t_spaceVW = 2.552;
    const t_spacePixels = window.innerWidth * (t_spaceVW / 100);

    // превью
    var thumbs_slider = new Swiper('.object-gallery-thumbs', {
        wrapperClass: 'object-gallery-thumbs-wrapper',
        slideClass: 'object-gallery-thumb',
        slidesPerView: 3,
        spaceBetween: t_spacePixels,
        watchSlidesProgress: true,
        speed: 600,
        slideToClickedSlide: true,
    });

    // большое фото
    var object_slider = new Swiper('.object-gallery-slider', {
        wrapperClass: 'object-gallery-wrapper',
        slideClass: 'object-gallery-item',
        allowTouchMove: true,
        loop: true,
        slideToClickedSlide: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        thumbs: {
            swiper: thumbs_slider,
        },
        navigation: {
            nextEl: '#object-arrow-next',
            prevEl: '#object-arrow-prev',
        },
    });

    /*thumbs_slider.on('click', function (swiper, event) {
        var clickedSlideIndex = swiper.clickedIndex;
        thumbs_slider.slideToLoop(clickedSlideIndex);
    });*/
});



// Квартиры
document.addEventListener('DOMContentLoaded', function () {

		const f_spaceVW = 1.8855;
    const f_spacePixels = window.innerWidth * (f_spaceVW / 100);
    
    var flats_slider = new Swiper('.flats-slider', {
        wrapperClass: 'flats-slider-wrapper',
        slideClass: 'flats-slider-item',
        allowTouchMove: true,
        slidesPerView: 3,
        spaceBetween: f_spacePixels,
        loop: false,
        speed: 600,
        navigation: {
            nextEl: '#flats-arrow-next',
            prevEl: '#flats-arrow-prev'
        },
    });
});