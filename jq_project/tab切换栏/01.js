$(function(){
    $('#tab>div:first').addClass("on");
    $('.tab_item:first').show();
    $('#tab>div').mouseenter(function(){
        $('#tab>div').removeClass("on");
        $('.tab_item').hide();
        $(this).addClass("on");
        var index = $(this).index();
        $('#tab_content>div:eq("'+index+'")').show();
    })
    function cut(){
    }
})