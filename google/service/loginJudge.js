function loginJudgeRegister(id,passWord){
    console.log(id);
    var regid = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
    var regPass = /^\w+$/;
    var ending = true;
    if(regid.test(id) && id.length >= 2){
        console.log("id正确");
        if(passWord.length >=8 && regPass.test(passWord)){
            console.log("pass正确");
        }else{
            ending = false;
            console.log("pass错误");
        }
    }else{
        ending = false;
        console.log("id错误");
    }
    return ending;
}
module.exports = loginJudgeRegister;