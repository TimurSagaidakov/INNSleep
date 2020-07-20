$(document).ready(function( ) {
    $('.menu-btn').on('click', function(){
        $(this).toggleClass('close');
        $('.navigation-menu').toggleClass('open');
        $('body').toggleClass('lock');
    });
});