var wordSearch = document.getElementById('wordSearch');
var enterSearch = document.getElementById('enterSearch');
var backStyle = document.getElementById("backStyle");
var img = document.getElementsByTagName("img");
var setStyle2 = document.getElementById("setStyle2");
var setStyle3 = document.getElementById("setStyle3");
var nav = document.getElementById("nav");
var imgName = document.getElementsByName("1");
var idDivSelect = document.getElementById("divSelect");
var classDivSelectP = document.getElementsByClassName("divSelectP");
var broserName = document.getElementsByName("2");
var classNavReduction = document.getElementsByClassName("navReduction");
var classNavWord = document.getElementsByClassName("navWord");
//登录界面
classNavWord[0].onclick = function(){
    if(classNavWord[0].innerHTML == "登录"){
        window.open("login.html","_self");
    }else{
        localStorage.removeItem("id");
        idFloatUserNewsSon.innerHTML = "无";
        classNavWord[0].innerHTML = "登录";
    }
}
//设置操作
setStyle3.onclick = function(){
    setStyle3.style.overflow = "visible";
}
setStyle3.onmouseleave = function(){
    setStyle3.style.overflow = "hidden";
}
classNavReduction[0].onclick = function(){
    localStorage.removeItem('search_word');
    classDivSelectP[0].innerHTML = "百度";
    classDivSelectP[1].innerHTML = "Google";
}
//输入框操作
wordSearch.onfocus = function(){
    this.setAttribute("placeholder","");
}
wordSearch.onblur = function(){
    this.setAttribute("placeholder","在解寻上搜索，或者输入一个网址");
}
//键盘监听事件
document.onkeyup = function(){
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if(code == 13){
        if(classDivSelectP[0].innerHTML == "百度"){
            httpTxtBaiduSearch();
        }else{
            httpTxtGoogleSearch();
        }
    }
}
//鼠标输入框监听
enterSearch.onclick = function(){
    if(classDivSelectP[0].innerHTML == "百度"){
        httpTxtBaiduSearch();
    }else{
        httpTxtGoogleSearch();
    }
}
//使用google
function httpTxtGoogleSearch(){
    var searchTxt = "http://www.google.com/search?q="+wordSearch.value;
    window.open(searchTxt);
}
//使用百度
function httpTxtBaiduSearch(){
    var searchTxt = "http://www.baidu.com/s?wd="+wordSearch.value;
    window.open(searchTxt);
}
//背景操作
backStyle.onclick = function(){
    setStyle2.style.overflow = "visible";
}
nav.onmouseleave = function(){
    setStyle2.style.overflow = "hidden";
}
imgName[0].onclick = function(){
    document.body.style.backgroundImage = "url(img/阳光夏日.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    memoryBackImg();
}
imgName[1].onclick = function(){
    document.body.style.backgroundImage = "url(img/飞船.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    memoryBackImg();
}
imgName[2].onclick = function(){
    document.body.style.backgroundImage = "url(img/气泡.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    memoryBackImg();
}
imgName[3].onclick = function(){
    document.body.style.backgroundImage = "none";
    memoryBackImg();
}
function memoryBackImg(){
    localStorage.setItem("backImg",document.body.style.backgroundImage);
}
//搜索引擎操作
idDivSelect.onclick = function(){
    idDivSelect.style.overflow = "visible";
    classDivSelectP[0].style.borderBottom = "none";
    classDivSelectP[0].style.borderRadius = "0.4rem 0 0 0";
    classDivSelectP[1].style.borderRadius = "0 0 0.4rem 0.4rem";
    broserName[0].classList.add('dspOn');
}
idDivSelect.onmouseleave = function(){
    idDivSelect.style.overflow = "hidden";
    classDivSelectP[0].style.borderBottom = "2px solid  rgb(0, 153, 255)";
    classDivSelectP[0].style.borderRadius = "0.4rem 0 0 0.4rem";
    broserName[0].classList.remove('dspOn');
}
classDivSelectP[1].onclick = function(){
    var textClassSearch;
    textClassSearch = classDivSelectP[0].innerHTML;
    classDivSelectP[0].innerHTML = classDivSelectP[1].innerHTML;
    classDivSelectP[1].innerHTML = textClassSearch;
    localStorage.setItem("search_word",classDivSelectP[0].innerHTML);
}
//记住习惯
if(localStorage.getItem("search_word") != null){
    if(classDivSelectP[0].innerHTML != localStorage.getItem("search_word")){
        classDivSelectP[1].innerHTML = classDivSelectP[0].innerHTML;
        classDivSelectP[0].innerHTML = localStorage.getItem("search_word");
    }
}
if(localStorage.getItem("backImg") != null){
    document.body.style.backgroundImage = localStorage.getItem("backImg");
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
}
//搜索下拉
var classShowSearch = document.getElementsByClassName("showSearch");
function baiduSearch(data){
    var html = "";
    if(!!data.s.length){
        classShowSearch[0].style.display = "block";
        for(var i=0;i<4;i++){
            //ES6字符串的反引号
            html += `<div class='aStyle'><a target='_blank' href='http://www.baidu.com/s?wd=${data.s[i]}'>${data.s[i]}</a></div>`
        }
        classShowSearch[0].classList.add("ssOn");
        classShowSearch[0].innerHTML = html;
    }else{
        classShowSearch[0].style.display = "none";
    }
}

wordSearch.onkeyup = function(){
    if(this.value != ''){
        var createScript = document.createElement("script");
        createScript.src = "http://suggestion.baidu.com/su?wd="+this.value+"&cb=baiduSearch";
        document.body.appendChild(createScript);
    }else{
        classShowSearch[0].style.display = "none";
    }
}
//用户功能
var idFloatUser = document.getElementById("floatUser");
var idFloatUserStyle = document.getElementById("floatUserStyle");
var classcUser = document.getElementsByClassName("cUser");
var idFloatUserNews = document.getElementById("floatUserNews");
var idFloatUserNewsSon = document.getElementById("floatUserNewsSon");
var showJudge = false;
if(localStorage.getItem("id") != null){
    idFloatUserNewsSon.innerHTML = localStorage.getItem("id");
    classNavWord[0].innerHTML = "注销";
}
idFloatUserStyle.onclick = function(){
    for(var i=0;i<classcUser.length;i++){
        classcUser[i].classList.add("ccOn");
    }
    showJudge = true;
}
idFloatUser.onmouseleave = function(){
    for(var i=0;i<classcUser.length;i++){
        classcUser[i].classList.remove("ccOn");
    }
    showJudge = false;
}
idFloatUserNews.onclick = function(){
    if(showJudge){
        idFloatUserNewsSon.style.display = "block";
    }
}
idFloatUserNews.onmouseleave = function(){
    idFloatUserNewsSon.style.display = "none";
}