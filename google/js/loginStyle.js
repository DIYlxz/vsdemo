//画布写字
var idMyCanvas = document.getElementById("myCanvas");
var idMyCanvasContext = idMyCanvas.getContext("2d");
idMyCanvasContext.font = "32px Arial";
var canvasH = idMyCanvas.height;
var canvasW = idMyCanvas.width;
idMyCanvasContext.textAlign = "center";
idMyCanvasContext.textBaseline = "middle";
var grd = idMyCanvasContext.createLinearGradient(0,0,0,canvasH);
grd.addColorStop("0","yellow");
grd.addColorStop("0.5","pink");
grd.addColorStop("1","red");
idMyCanvasContext.fillStyle = grd;
idMyCanvasContext.fillText("解",canvasW/2 - 30,canvasH/2);
idMyCanvasContext.fillText("寻",canvasW/2 + 30,canvasH/2);
var classInputAccount = document.getElementsByClassName("inputAccount");

$(function(){
    $("#subButton").on("click",function(){
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/process_login",
            dataType:"json",
            data:{
                id: classInputAccount[0].value,
                passWord: classInputAccount[1].value
            },
            success:function(data){
                if(data.jumpName == 0){
                    location.reload([true]);
                }else if(data.jumpName == 1){
                    localStorage.setItem("id",classInputAccount[0].value);
                    localStorage.setItem("passWord",classInputAccount[1].value);
                    window.open("index.html","_self");
                }
            },
            timeout: 2000,
            error: function () {
                console.log('出错了');
            },
        })
    });
})