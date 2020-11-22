$(function(){
    $('.sub').mouseenter(function(){
        $(this).siblings().stop().hide('slow');
        $(this).next().stop().show('slow');
    }).mouseleave(function(){
        $(this).next().stop().hide('slow');
    })
})