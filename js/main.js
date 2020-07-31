$(document).ready(function(){
    $('.menu-btn').on('click', function(){
        $(this).toggleClass('close');
        $('.navigation-menu').toggleClass('open');
        $('body').toggleClass('lock');
    });
    $('.navigation-menu__link').on('click', function(){
        $('.navigation-menu').removeClass('open');
        $('.menu-btn').removeClass('close');
        $('body').removeClass('lock');
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
$('.card-slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    asNavFor: '.card-slider-down',
    prevArrow: $('.card-slider-arrow__prev'),
    nextArrow: $('.card-slider-arrow__next'),
});
$('.card-slider-down').slick({
    infinite: true,
    slidesToShow: 4,
    dots: true,
    asNavFor: '.card-slider',
    focusOnSelect: true,
});

if(localStorage.getItem('amount')){
    document.querySelector('.footer-basket__amount').innerHTML = JSON.parse(localStorage.getItem('amount'));
    };

    let amountProduct = +document.querySelector('.card-description-amount-block__number').value,
        price = +document.querySelector('.total__price').innerHTML;
        function buttonPlus(){
            amountProduct += 1;
            document.querySelector('.card-description-amount-block__number').value = amountProduct
            document.querySelector('.footer-basket__amount').innerHTML= amountProduct
            totalPrice();
            document.querySelector('.total__price').innerHTML = price + " BYN ";
            localStorage.setItem('amount', JSON.stringify(amountProduct));
        };    
        function buttonMinus(){
            if (amountProduct>0){                
                amountProduct -= 1;
                document.querySelector('.card-description-amount-block__number').value = amountProduct;
                document.querySelector('.footer-basket__amount').innerHTML= amountProduct;
                totalPrice();
                document.querySelector('.total__price').innerHTML = price + " BYN ";
                localStorage.setItem('amount', JSON.stringify(amountProduct));
            };
        };
        document.querySelector('.card-description-amount-block__number').oninput = function() {
            amountProduct = +document.querySelector('.card-description-amount-block__number').value;
            localStorage.setItem('amount', JSON.stringify(amountProduct));
            totalPrice();
            document.querySelector('.total__price').innerHTML = price + " BYN ";
            document.querySelector('.footer-basket__amount').innerHTML= amountProduct;
        
        };
        if(localStorage.getItem('amount')){
            amountProduct = JSON.parse(localStorage.getItem('amount'));
            document.querySelector('.card-description-amount-block__number').value = amountProduct;
            totalPrice();
            document.querySelector('.footer-basket__amount').innerHTML= amountProduct;
            document.querySelector('.total__price').innerHTML = price + " BYN ";
        };
        
        function totalPrice(){
            price = amountProduct * 310;
        };   