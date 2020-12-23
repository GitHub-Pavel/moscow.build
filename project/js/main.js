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

    $('.hamburger').click(function (e) {
        e.preventDefault()
        $('body').toggleClass('menu-active');
    })

    $(".main-menu a").click(function (e) {
        e.preventDefault()

        $('body').removeClass('menu-active');

        let linkTo = $(this).attr('href')

        $([document.documentElement, document.body]).animate({
            scrollTop: $(linkTo).offset().top
        }, 2000)
    })
})