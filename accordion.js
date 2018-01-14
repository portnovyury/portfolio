// Скрипт используется на сайте http://richflow.ru/catalog - для меню-аккордеона в сайдбаре на внутренних страницах
// скрипт ищет в крошках активную ссылку, и на основании нее открывает необходимый раздел в аккордеоне
// работает при подключенном jQuery

$(document).ready(function() {
    $(function () {
        var location = window.location.href;      // берем начальный урл
        var cur_url = location.split('/');        // разбиваем его на массив по частям
        var short_url = cur_url.splice(3, 7);     // удаляем http://site.ru/
        var end_url = '/' + short_url.join('/');  // склеиваем остатки и добавляем начальный слеш

        var crumb = $('.crumbs .item-2 a').attr("href");  // смотрим активный раздел по крошкам
        var crumb_first = $('.crumbs .item-1 a').attr("href");  // смотрим активный раздел по первому элементу крошек
        var crumb_name = $('.crumbs .item-1 span').html();  // смотрим активный раздел по первому элементу крошек

        var accItems = $('.accordion-item ul a');
        accItems.each(function () {

            var mi = $(this);
            miHrefs = mi.attr("href");
            miParents = mi.parents('.accordion-item');
            miContains = mi.parents('.accordion-content')

            if (end_url.indexOf('/id/') == -1) {
                if ((end_url == miHrefs)) {
                    miParents.addClass("is-active");
                    miContains.show();
                }
                else if (crumb == miHrefs) {
                    miParents.addClass("is-active");
                    miContains.show();
                }
                else if (crumb_first == miHrefs) {
                    miParents.addClass("is-active");
                    miContains.show();
                    mi.addClass("active");
                }
            }
            else {
                if (mi.hasClass("active")) {
                    miParents.addClass("is-active");
                    miContains.show();
                }
            }
        });

        var accLinks = $('.accordion .menu li a');
        accLinks.each(function () {
            if (end_url.indexOf('/id/') == -1) {
                var cLink = $(this);
                linkHref = cLink.attr("href");
                if (end_url == linkHref) {
                    cLink.addClass("active");
                }
                else if (crumb == linkHref) {
                    cLink.addClass("active");
                }
            }
        });

        var accZeroItems = $('.accordion-item .nobef');
        accZeroItems.each(function () {
            var mi = $(this);
            miText = mi.html();
            miParents = mi.parents('.accordion-item');
            if (crumb_name == miText) {
                miParents.addClass("is-active");
            }
        });
    });
});