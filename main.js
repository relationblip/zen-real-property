document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute('autocomplete', 'off');
    }
});



$(document).ready(function () {
    // Кнопка "Наверх", виджеты и фиксация меню
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