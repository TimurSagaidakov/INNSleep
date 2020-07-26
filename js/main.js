$(document).ready(function(){
    $('.menu-btn').on('click', function(){
        $(this).toggleClass('close');
        $('.navigation-menu').toggleClass('open');
        $('body').toggleClass('lock');
    });
    $('.formulation-item__plus-1').on('click', function(){
        $('.formulation-item__description-1').toggleClass('active');
        $('.formulation-item__description-2').removeClass('active');
        $('.formulation-item__description-3').removeClass('active');
        $('.formulation-item__description-4').removeClass('active');
    });
    $('.formulation-item__plus-2').on('click', function(){
        $('.formulation-item__description-2').toggleClass('active');
        $('.formulation-item__description-1').removeClass('active');
        $('.formulation-item__description-3').removeClass('active');
        $('.formulation-item__description-4').removeClass('active');
    });
    $('.formulation-item__plus-3').on('click', function(){
        $('.formulation-item__description-3').toggleClass('active');
        $('.formulation-item__description-1').removeClass('active');
        $('.formulation-item__description-2').removeClass('active');
        $('.formulation-item__description-4').removeClass('active');
    });
    $('.formulation-item__plus-4').on('click', function(){
        $('.formulation-item__description-4').toggleClass('active');
        $('.formulation-item__description-1').removeClass('active');
        $('.formulation-item__description-2').removeClass('active');
        $('.formulation-item__description-3').removeClass('active');
    });

    $('.questions-item-trigger').click(function(){
        $(this).next('.questions-item__text').slideToggle(1000);  
        $(this).find('.questions-item-trigger-button__vertical').toggleClass('questions-item-trigger-button__vertical-active');     

    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -150 + "px"}, 1000);
        return false;
    });
});

$('.reviews-block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,    
    prevArrow: $('.reviews-arrow__prev'),
    nextArrow: $('.reviews-arrow__next'),
    pauseOnHover: true
});

   