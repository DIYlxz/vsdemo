$(function(){
    $("<ul></ul>").appendTo("#box");
    $("#btn").click(function(){
        if($("#txt").val().trim().length == 0){
            return;
        }
        $("<li></li>").text($("#txt").val()).prependTo("ul");
        $("#txt").val("");
    })
})