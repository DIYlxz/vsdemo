$(function(){
    $("#head_left>div").mouseenter(function(){
        //获取div索引对应img索引
        var index = $(this).index();
        $("#head_center>img").hide();
        $("#head_center>img:eq('"+index+"')").show();
    })
})