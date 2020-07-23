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
});

$('.reviews-block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow: $('.reviews-arrow__prev'),
    nextArrow: $('.reviews-arrow__next'),
    pauseOnHover: true
});

   