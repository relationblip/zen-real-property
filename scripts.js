$(document).ready(function() {
    window.addEventListener('hashchange', offsetAnchor);
    window.setTimeout(offsetAnchor, 1);
    function offsetAnchor() {
        if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 50);
            console.log('скролл сработал');
        }
    }
});


$(document).ready(function () {
    function customScrollTop() {
        var scrollTopPosition = $('.quiz').find('.container').offset().top;
        $('html, body').animate({ scrollTop: scrollTopPosition }, 500);
    }

    $('[data-form="next-btn"]').on('click', customScrollTop);
    $('[data-form="back-btn"]').on('click', customScrollTop);

    $('.quiz-option').on('click', function () {
        if ($(this).find('input[type="radio"]').length > 0) {
            customScrollTop(); 
        }
    });
});



$(document).ready(function () {
    $('.modal-object-button').on('click', function () {
        // Находим ближайший элемент с классом modal-object-heading
        var heading = $(this).closest('.modal').find('.modal-object-heading').text();

        // Записываем текст заголовка в скрытое поле формы
        $('.wait-form #object-input').val(heading);
    });
});



// Слайдер контакты
document.addEventListener('DOMContentLoaded', function () {
    var clients_slider = new Swiper('#contacts-slider', {
        wrapperClass: 'contacts-slider-list',
        slideClass: 'contacts-slide',
        allowTouchMove: false,
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                clients_slider.autoplay.start();
            } else {
                clients_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('#contacts-slider'));
});



// Слайдеры объектов
$(document).ready(function () {
    // Проверка ширины экрана
    if (window.innerWidth > 767) {
        function initializeSliders() {
            const objectVW = 2.552;
            const objectPixels = window.innerWidth * (objectVW / 100);

            var sliders = document.querySelectorAll('.modal-object-inner');

            sliders.forEach(function (slider) {
                // Превьюшки  
                var thumb_object_slider = new Swiper(slider.querySelector('.modal-object-slider'), {
                    wrapperClass: 'modal-object-imgs',
                    slideClass: 'modal-object-thumb-lightbox',
                    slidesPerView: 3,
                    spaceBetween: objectPixels,
                    speed: 600,
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: '#thumb-object-arrow-next',
                        prevEl: '#thumb-object-arrow-prev',
                    },
                });

                // Основной
                var object_slider = new Swiper(slider.querySelector('.modal-object-big-slider'), {
                    wrapperClass: 'modal-object-big-slider-wrapper',
                    slideClass: 'modal-object-lightbox',
                    slidesPerView: 1,
                    allowTouchMove: false,
                    speed: 600,
                    autoplay: {
                        delay: 3000,
                    },
                    thumbs: {
                        swiper: thumb_object_slider,
                    },
                    navigation: {
                        nextEl: '#object-arrow-next',
                        prevEl: '#object-arrow-prev',
                    },
                });

                thumb_object_slider.on('click', function (swiper, event) {
                    var clickedSlideIndex = swiper.clickedIndex;
                    thumb_object_slider.slideToLoop(clickedSlideIndex);
                });

                document.querySelector('#thumb-object-arrow-next').addEventListener('click', function () {
                    if (object_slider) {
                        object_slider.slideNext();
                    }
                });

                document.querySelector('#thumb-object-arrow-prev').addEventListener('click', function () {
                    if (object_slider) {
                        object_slider.slidePrev();
                    }
                });

            });
        }

        initializeSliders();

    }
});



// Слайдер кейсы внешний
/*
document.addEventListener('DOMContentLoaded', function () {
    var cases_slider = new Swiper('.cases-slider', {
        wrapperClass: 'cases-slider-wrapper',
        slideClass: 'cases-item',
        slidesPerView: 1,
        allowTouchMove: true,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '#cases-arrow-next',
            prevEl: '#cases-arrow-prev',
        },
        pagination: {
            el: '#cases-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'slider-dot',
            bulletActiveClass: 'active',
            dynamicBullets: true,
        },
    });
 
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                cases_slider.autoplay.start();
            } else {
                cases_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости
 
    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.cases-slider'));
});
*/



// Слайдер кейсы внутренний
document.addEventListener('DOMContentLoaded', function () {
    function initializeSliders() {
        const item_gap_vw = 1.146;
        const item_gap = window.innerWidth * (item_gap_vw / 100);
        // Получаем все элементы с классом 'cases-item'
        var sliders = document.querySelectorAll('.cases-item');

        sliders.forEach(function (slider) {
            var thumbSlider = new Swiper(slider.querySelector('.cases-nav'), {
                wrapperClass: 'cases-nav-wrapper',
                slideClass: 'cases-nav-item',
                slidesPerView: 4,
                spaceBetween: item_gap,
                slideToClickedSlide: true,
                watchSlidesProgress: true,
                speed: 600,
                direction: 'vertical',
            });

            var mainSlider = new Swiper(slider.querySelector('.cases-item-slider'), {
                wrapperClass: 'cases-item-slider-wrapper',
                slideClass: 'cases-item-slide',
                slidesPerView: 1,
                autoplay: {
                    delay: 3000,
                },
                speed: 400,
                thumbs: {
                    swiper: thumbSlider,
                },
            });

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        mainSlider.autoplay.start();
                    } else {
                        mainSlider.autoplay.stop();
                    }
                });
            }, {
                threshold: 0.1
            }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

            // Начинаем наблюдение за блоком слайдера
            observer.observe(document.querySelector('.cases-item-slider'));

            thumbSlider.on('click', function (swiper, event) {
                var clickedSlideIndex = swiper.clickedIndex;
                thumbSlider.slideToLoop(clickedSlideIndex);
            });
        });
    }

    initializeSliders();

});


// Фикс для последнего шага в квизе на мобильных устройствах
$(document).ready(function () {
    if ($(window).width() < 768) {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === 'style') {
                    var computedStyle = window.getComputedStyle(mutation.target);
                    if (computedStyle.display === 'flex') {
                        $('.quiz-inner').css('padding', '0rem');
                        $('.quiz-progress, .quiz-bottom').css('display', 'none');
                        observer.disconnect();
                    }
                }
            });
        });

        // Наблюдение за изменениями в атрибуте style
        observer.observe(document.querySelector('.quiz-item.final-step'), {
            attributes: true
        });
    }
});



// Слайдер видео - отзывы
document.addEventListener('DOMContentLoaded', function () {
    var clients_slider = new Swiper('.clients-slider', {
        wrapperClass: 'clients-slider-wrapper',
        slideClass: 'clients-slide',
        slidesPerView: 1,
        allowTouchMove: true,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '#clients-arrow-next',
            prevEl: '#clients-arrow-prev',
        },
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                clients_slider.autoplay.start();
            } else {
                clients_slider.autoplay.stop();
            }
        });
    }, {
        threshold: 0.1
    }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.clients-slider'));

});



// Слайдер услуги
document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
        var work_slider = new Swiper('.service-slider', {
            wrapperClass: 'service-items',
            slideClass: 'service-item',
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: true,
            },
            pagination: {
                el: '#service-pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'slider-dot',
                bulletActiveClass: 'active',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '#service-arrow-next',
                prevEl: '#service-arrow-prev',
            },
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    work_slider.autoplay.start();
                } else {
                    work_slider.autoplay.stop();
                }
            });
        }, {
            threshold: 0.1
        }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

        // Начинаем наблюдение за блоком слайдера
        observer.observe(document.querySelector('.service-slider'));
    }
});


// Слайдер команда - моб. версия 
document.addEventListener('DOMContentLoaded', function () {
    if ($(window).width() < 768) {
        var team_mob_slider = new Swiper('.team-checks-mob', {
            wrapperClass: 'team-checks-mob-wrapper',
            slideClass: 'team-check-mob',
            slidesPerView: 1,
            allowTouchMove: true,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '#team-arrow-next',
                prevEl: '#team-arrow-prev',
            },
            pagination: {
                el: '#team-pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'slider-dot',
                bulletActiveClass: 'active',
                dynamicBullets: true,
            },
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    team_mob_slider.autoplay.start();
                } else {
                    team_mob_slider.autoplay.stop();
                }
            });
        }, {
            threshold: 0.1
        }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

        // Начинаем наблюдение за блоком слайдера
        observer.observe(document.querySelector('.team-checks-mob'));
    }
});



$(document).ready(function () {
    // Кнопка "Наверх"
    var toTop = $('.to-top');
    var widget_burger = $('.widget-burger-wrapper');
    var widget_menu = $('.widget-menu');
    var widget_link = $('.widget-link');
    var nav_fixed = $('.nav-fixed');
    var isScrolledPastThreshold = false;

    // Нажатие на кнопку "Наверх"
    toTop.on('click', topFunction);
    window.onscroll = function () {
        navFunction();
        scrollFunction();
        widgetFunction();
    };

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function topFunction() {
        $('body,html').animate({
            scrollTop: 0
        }, 800, 'swing');
    }

    // Скрытие/появление кнопки "Наверх" по скроллу
    function scrollFunction() {
        if (window.scrollY > 1200) {
            toTop.addClass('act');
        } else {
            toTop.removeClass('act');
        }
    }

    // скрытие/появление меню по скроллу
    function navFunction() {
        if (window.scrollY > 800 && !isScrolledPastThreshold) {
            nav_fixed.addClass('active');
        } else if (window.scrollY <= 800 && isScrolledPastThreshold) {
            nav_fixed.removeClass('active');
        }
    }

    // скрытие/появление виджета по скроллу
    function widgetFunction() {
        if (window.scrollY > 800 && !isScrolledPastThreshold) {
            widget_burger.addClass('active');
            widget_menu.addClass('active');
            widget_link.addClass('active');
            isScrolledPastThreshold = true;
        } else if (window.scrollY <= 800 && isScrolledPastThreshold) {
            widget_burger.removeClass('active');
            widget_menu.removeClass('active');
            widget_link.removeClass('active');
            isScrolledPastThreshold = false;
        }
    }

    // Переключение виджета меню
    $('.widget-burger-wrapper').on('click', function () {
        $('.widget-burger-wrapper').toggleClass('active');
        $('.widget-menu').toggleClass('active');
        $('.widget-link').toggleClass('active');
    });
});



// Маска и валидация для полей с номером телефона
document.addEventListener('DOMContentLoaded', function () {
    const phoneInputs = document.querySelectorAll("#phone");

    phoneInputs.forEach(input => {
        const iti = window.intlTelInput(input, {
            initialCountry: "auto",
            geoIpLookup: callback => {
                fetch("https://ipinfo.io/json")
                    .then(res => res.json())
                    .then(data => callback(data.country))
                    .catch(() => callback("us"));
            },
            nationalMode: false,
            autoPlaceholder: "aggressive"
        });
        input.addEventListener('click', function () {
            iti.setNumber('+');
        });

        const parentForm = input.closest('form'); // родительская форма input

        const handleFormSubmit = (event) => {
            const errorMessage = input.value && !iti.isValidNumber() ?
                "Неверный номер - попробуйте еще раз" :
                !input.value ?
                    "Пожалуйста, введите корректный номер телефона" :
                    null;

            if (errorMessage) {
                alert(errorMessage);
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const submitButtons = parentForm.querySelectorAll(".form-button");
        submitButtons.forEach(button => {
            button.addEventListener('click', handleFormSubmit);
        });
    });
});



// Смена логотипа мессенджера в Select -->
document.addEventListener("DOMContentLoaded", function () {
    // Функция для обновления картинки при изменении значения в Select
    function updateImage() {
        // Получаем все элементы с айди #social-select
        var selects = document.querySelectorAll('#social-select');

        selects.forEach(function (select) {
            var selectedValue = select.value;

            // Получаем элементы картинок в текущем блоке
            var telegramImg = select.closest('.select-wrapper').querySelector('.select-img.telegram');
            var whatsappImg = select.closest('.select-wrapper').querySelector('.select-img.whatsapp');
            var selectImages =

                // Скрываем все картинки
                telegramImg.style.display = 'none';
            whatsappImg.style.display = 'none';

            // Показываем картинку в зависимости от выбранного значения в Select
            if (selectedValue === 'Telegram') {
                telegramImg.style.display = 'block';
            } else if (selectedValue === 'WhatsApp') {
                whatsappImg.style.display = 'block';
            }
        });
    }

    // Считываем значение в Select при загрузке страницы
    updateImage();

    var selects = document.querySelectorAll('#social-select');
    selects.forEach(function (select) {
        select.addEventListener('change', updateImage);
    });
});



// Закрытие модальных окон по пустому месту 
document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы с классом modal-overlay
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    // Перебираем каждый элемент modal-overlay
    modalOverlays.forEach(modalOverlay => {
        const modal = modalOverlay.querySelector('.modal');
        const modalClose = modalOverlay.querySelector('.modal-close');

        modalOverlay.addEventListener('click', (event) => {
            // Проверяем, был ли клик вне элемента modal
            if (!modal.contains(event.target)) {
                modalClose.click();
            }
        });
    });
});



// Вызов модального окна при попытке закрыть сайт
$(document).ready(function () {
    if ($(window).width() > 767) {
        var cookieWait = get_cookie("cookieWait");
        var closeMod = false;

        if (cookieWait !== '' && cookieWait !== null) { } else {
            $(document).mouseleave(function (event) {
                event = event || window.event;
                if (event.clientY < 0 || event.clientY < 3) {
                    if (!closeMod) {
                        $('.modal-wait-trigger').click();
                        closeMod = true;
                        var date = new Date();
                        date.setDate(date.getDate() + 0); // кол-во дней для повторного показа
                        date = date.toUTCString();
                        document.cookie = "cookieWait=1;expires=" + date;
                    }
                }
            });
        }
    }
});

function get_cookie(cookie_name) {
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
    if (results)
        return (unescape(results[2]));
    else
        return null;
}


// Слайдер Этапы покупки
document.addEventListener('DOMContentLoaded', function () {
    const myspaceVW = 1.666;
    const myspacePixels = window.innerWidth * (myspaceVW / 100) + 1; // Перевод в пиксели

    var work_slider = new Swiper('.work-slider', {
        wrapperClass: 'work-items',
        slideClass: 'work-item',
        slidesPerView: 4,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        spaceBetween: myspacePixels,
        pagination: {
            el: '#work-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'slider-dot',
            bulletActiveClass: 'active',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '#work-arrow-next',
            prevEl: '#work-arrow-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 4,
            },
        }
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                work_slider.autoplay.start();
            } else {
                work_slider.autoplay.stop();
            }
        });
    }, { threshold: 0.1 }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.work-slider'));
});



// Слайдер Этапы онлайн-покупки
document.addEventListener('DOMContentLoaded', function () {
    const myspaceVW = 1.77;
    const myspacePixels = window.innerWidth * (myspaceVW / 100) + 1; // Перевод в пиксели

    var steps_slider = new Swiper('.steps-slider', {
        wrapperClass: 'steps-items',
        slideClass: 'steps-item',
        slidesPerView: 2,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        spaceBetween: myspacePixels,
        pagination: {
            el: '#steps-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'slider-dot',
            bulletActiveClass: 'active',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '#steps-arrow-next',
            prevEl: '#steps-arrow-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                steps_slider.autoplay.start();
            } else {
                steps_slider.autoplay.stop();
            }
        });
    }, { threshold: 0.1 }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.steps-slider'));
});


// Слайдер сервисы
document.addEventListener('DOMContentLoaded', function () {
    const myspaceVW = 1.2;
    const myspacePixels = window.innerWidth * (myspaceVW / 100) + 1; // Перевод в пиксели

    var citizen_slider = new Swiper('.citizen-slider', {
        wrapperClass: 'citizen-items',
        slideClass: 'citizen-item',
        slidesPerView: 4,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        spaceBetween: myspacePixels,
        pagination: {
            el: '#citizen-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'slider-dot',
            bulletActiveClass: 'active',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '#citizen-arrow-next',
            prevEl: '#citizen-arrow-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 4,
            },
        }
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                citizen_slider.autoplay.start();
            } else {
                citizen_slider.autoplay.stop();
            }
        });
    }, { threshold: 0.1 }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

    // Начинаем наблюдение за блоком слайдера
    observer.observe(document.querySelector('.citizen-slider'));
});



// Слайдеры портфолио 
document.addEventListener('DOMContentLoaded', function () {
    var swipers = document.querySelectorAll('.portfolio-slider');

    for (var i = 0; i < swipers.length; i++) {
        initializeSlider(swipers[i]);
    }

    function initializeSlider(sliderElement) {
        var slider = new Swiper(sliderElement, {
            slidesPerView: 4,
            speed: 600,
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '#portfolio-pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'slider-dot',
                bulletActiveClass: 'active',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    autoplay: {
                        disableOnInteraction: true,
                    },
                },
                768: {
                    slidesPerView: 4,
                },
            }
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    slider.autoplay.start();
                } else {
                    slider.autoplay.stop();
                }
            });
        }, { threshold: 0.1 }); // Параметр threshold указывает, насколько объект должен быть видим, чтобы считаться в поле видимости

        // Начинаем наблюдение за блоком слайдера
        observer.observe(sliderElement);

        // Добавляем обработчик события для каждого слайдера
        slider.on('slideChange', function () {
            updateButtonVisibility(slider);
        });

        slider.on('init', function () {
            updateButtonVisibility(slider);
        });

        // Вызываем функцию при инициализации для каждого слайдера
        updateButtonVisibility(slider);
    }

    function updateButtonVisibility(slider) {
        var prevButton = slider.el.querySelector('.swiper-button-prev');
        var nextButton = slider.el.querySelector('.swiper-button-next');

        // Обновляем видимость кнопок при инициализации
        setButtonVisibility(prevButton, slider.isBeginning);
        setButtonVisibility(nextButton, slider.isEnd);

        function setButtonVisibility(button, isBeginning) {
            if (isBeginning) {
                button.style.opacity = '0';
                setTimeout(function () {
                    button.style.display = 'none';
                }, 300);
            } else {
                button.style.display = 'flex';
                setTimeout(function () {
                    button.style.opacity = '1';
                }, 300);
            }
        }
    }
});