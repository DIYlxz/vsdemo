$(function(){
    var index = 0;   //index -> b
    var en = true;
    var Interval = setInterval(function(){
        cut(0);
    },2000)
    function cut(b){
        if(en){
            if(b==1){
                index --;
            }else{
                index ++;
            }
            $('.img_wrap').animate({
                left : index*(-600)
            },'slow',function(){
                if(index == 4){
                    index = 0;
                    $(this).css('left','0px');
                }
            })
        }
    }
})