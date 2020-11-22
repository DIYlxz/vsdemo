$(function(){
    $(".li_st_one").hover(function(){
        $(this).siblings("li[name='li_one']").slideToggle();
    })
    $(".li_st_two").hover(function(){
        $(this).siblings("li[name='li_two']").slideToggle();
    })
})