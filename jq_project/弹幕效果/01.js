$(function(){
    var colors = ["red","blue","pink","yellow"];
    $("#btn").click(function(){
        var randomColors = Math.floor(Math.random() * colors.length);
        var randomY = Math.floor(Math.random() * 400);
        //document.write();
        $("<span></span>").text($("#txt").val()).css({
            "color":colors[randomColors],
            "left":"1400px",
            "top":randomY+"px"
        }).animate({left:-500},10000,"linear",function(){
            $(this).remove();
        })
        .appendTo("#last");
        $("#txt").val("");
    })
    $("#txt").keyup(function(e){
        if(e.keyCode == 13){
            $("#btn").click();
        }
    })
})