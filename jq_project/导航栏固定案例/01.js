$(function(){
    var navH = $("#head").offset().top; //获取导航栏到顶部的距离
    $(window).scroll(function(e){
        var srcoH = $(this).scrollTop(); //获取滚动条滚动的高度
        if(srcoH >= navH){
            $("#head").css({"position":"fixed","top":0});
        }else{
            $("#head").css("position","static");
        }
    })
})