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



$(document).ready(function () {
    function customScrollTop() {
        var scrollTopPosition = $('.quiz').find('.container').offset().top;
        $('html, body').animate({ scrollTop: scrollTopPosition }, 500);
    }

    if ($(window).width() < 480) {
        $('[data-form="next-btn"]').on('click', customScrollTop);
        $('[data-form="back-btn"]').on('click', customScrollTop);

        $('.quiz-option').on('click', function () {
            if ($(this).find('input[type="radio"]').length > 0) {
                customScrollTop(); 
            }
        });
    }
});