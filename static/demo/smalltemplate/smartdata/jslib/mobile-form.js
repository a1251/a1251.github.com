/**
 * Created by Administrator on 2017/1/6.
 */
$(document).ready(function () {
    var mobile = $("#mobile");
   var mobileError = $('.mobile-error');//手机号错误信息
    var name = $("#name");
   var nameError = $(".name-error");//姓名错误信息
    var limit = $("#limit");
   var limitError = $(".limit-error");//额度错误信息
    var identi = $("#identi")
   var identiError = $(".identi-error");//身份证号错误信息
   //手机号验证
    var mobileReg = /^1[0-9]{10}/;
    mobile.blur(function () {
        //console.log(mobileVal);
        var mobileVal = mobile.val();
        if(mobileReg.test(mobileVal) == false){
            mobileError.html("手机号格式不正确");
            mobileError.css("visibility","visible");
            return false;
        }else if(mobileVal.length > 11) {
            mobileError.html("手机号超出长度");
            mobileError.css("visibility","visible");
            return false;
        }else {
            mobileError.css("visibility","hidden");
            return true;
        }
        //console.log(mobileReg.test(mobileVal));
    }).keyup(function () {
        var mobileVal = mobile.val();
            if (mobileVal.length == 11){
                mobileError.css("visibility","hidden");
                return true;
            }else if(mobileVal.length > 11){
                mobileError.html("手机号超出长度");
                mobileError.css("visibility","visible");
                return false;
            }
        });
    //姓名验证
    name.blur(function(){
       var nameVal = name.val();
       if(nameVal == " " || nameVal.length <1 ){
           nameError.html("姓名不能为空");
           nameError.css("visibility","visible");
           return false;
       }else if(nameVal.length >4){
           nameError.html("姓名超出长度");
           nameError.css("visibility","visible");
           return false;
       }else {
           nameError.css("visibility","hidden");
           return true;
       }
    }).keyup(function () {
        var nameval = name.val();
            if (nameval.length<2){
                nameError.html("姓名长度不能小于2");
                nameError.css("visibility","visible");
                return false;
            }else if(nameval.length>4){
                nameError.html("姓名长度不能大于4");
                nameError.css("visibility","visible");
                return false
            }else {
                nameError.css("visibility","hidden");
                return true;
            }
    });
    //额度验证
    var limitReg = /\d/;
    limit.blur(function(){
        var limitnum = limit.val();
        if(limitReg.test(limitnum)){
            if(limitnum <1){
                limitError.html("额度不能小于1（万）");
                limitError.css("visibility","visible");
                return false;
            }else if(limitnum >50){
                limitError.html("额度不能大于50（万）");
                limitError.css("visibility","visible");
                return false;
            }else{
                limitError.css("visibility","hidden");
                return true;
            }
        }else if(limitnum == " " || limitnum == ""){
            limitError.html("额度不能为空！");
            limitError.css("visibility","visible");
            return false;
        } else{
            //console.log(limitnum);
            limitError.html("额度只能是数字");
            limitError.css("visibility","visible");
            return false;
        }
    }).keyup(function () {
        var limitnum = limit.val();
        if(limitnum>=1 && limitnum<=50){
            limitError.css("visibility","hidden");
        }
    });
});