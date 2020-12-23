'use strict';
$(function () {
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 0) {
            $('.header__top').addClass('header__top--down')
        } else {
            $('.header__top').removeClass('header__top--down')
        }
    })

    $(".accordion").accordion()
})