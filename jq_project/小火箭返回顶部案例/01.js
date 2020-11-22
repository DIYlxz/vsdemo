$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=1000){
            $("#backTop").stop().fadeIn(500);
        }else{
            $("#backTop").stop().fadeOut(500);
        }
    })
    $("#backTop").click(function(){
        $("html,body").stop().animate({scrollTop:0},1000);
        //$(window).scrollTop(0);   瞬间回到顶部
    })
})