// Главный слайдер, фотки объекта
document.addEventListener('DOMContentLoaded', function () {
    var object_slider = new Swiper('.object-gallery-slider', {
        wrapperClass: 'object-gallery-wrapper',
        slideClass: 'object-gallery-item',
        allowTouchMove: true,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '#object-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'slider-dot',
            bulletActiveClass: 'active',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '#object-arrow-next',
            prevEl: '#object-arrow-prev',
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                object_slider.autoplay.start();
            } else {
                object_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.object-gallery-slider'));

});



// Планировки
document.addEventListener('DOMContentLoaded', function () {

    const l_spaceVW = 1.8855;
    const l_spacePixels = window.innerWidth * (l_spaceVW / 100);

    var layouts_slider = new Swiper('.layouts-slider', {
        wrapperClass: 'layouts-slider-wrapper',
        slideClass: 'layouts-slider-item',
        allowTouchMove: true,
        spaceBetween: l_spacePixels,
        slidesPerView: 3,
        loop: false,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '#layouts-arrow-next',
            prevEl: '#layouts-arrow-prev',
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                layouts_slider.autoplay.start();
            } else {
                layouts_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.layouts-slider'));

});



// Поэтажные планы
document.addEventListener('DOMContentLoaded', function () {

    const p_spaceVW = 1.8855;
    const p_spacePixels = window.innerWidth * (p_spaceVW / 100);

    var plans_slider = new Swiper('.plans-slider', {
        wrapperClass: 'plans-slider-wrapper',
        slideClass: 'plans-slider-item',
        allowTouchMove: true,
        spaceBetween: p_spacePixels,
        slidesPerView: 3,
        loop: false,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '#plans-arrow-next',
            prevEl: '#plans-arrow-prev',
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                plans_slider.autoplay.start();
            } else {
                plans_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.plans-slider'));

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
        pagination: {
            el: '#flats-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'slider-dot',
            bulletActiveClass: 'active',
            dynamicBullets: true,
        },
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '#flats-arrow-next',
            prevEl: '#flats-arrow-prev',
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                flats_slider.autoplay.start();
            } else {
                flats_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.flats-slider'));

});



// Остальные кондо (смотрите также)
document.addEventListener('DOMContentLoaded', function () {

    const a_spaceVW = 1.8855;
    const a_spacePixels = window.innerWidth * (a_spaceVW / 100);

    var also_slider = new Swiper('.also-slider', {
        wrapperClass: 'also-slider-wrapper',
        slideClass: 'also-slider-item',
        allowTouchMove: true,
        slidesPerView: 3,
        spaceBetween: a_spacePixels,
        loop: false,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '#also-arrow-next',
            prevEl: '#also-arrow-prev',
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                also_slider.autoplay.start();
            } else {
                also_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.also-slider'));

});