/**
 * Created by Administrator on 2016/12/23.
 */
    //此为单条查询页面js
var clickcount1 = 2;
$(document).ready(function () {
    var mobile = $("#mobile-number");//手机号
    var userName = $("#user-name");//用户名
    var identifyCate = $("#ident-cate");//证件类型
    var identify = $("#ident-number");//证件号码
    //输入框聚焦事件
    $(".query-input").focusin(function () {
        $(this).addClass("query-input-focus");
        $(this).children().children(".form-input").addClass("form-input-focus");
    }).focusout(function () {
        var queryInput = $(".query-input");
        var inputValue = $(this).children(".form-input").children("input").val();
        if(inputValue == ""){
            //$(this).removeClass("query-input-focus");
            queryInput.children().children(".form-input").addClass("form-input-error");
            //queryInput.children(".error-box").text("该项不能为空");
            queryInput.children(".error-box").children(".mif-cancel").css("visibility","visible");
        }

    });
    //手机号码限制
    $("#mobile-number").focusout(function () {
        var mobileInput = $(this);
        var mobileValue = mobileInput.val();
        var reg = /^1[0-9]{10}/;
        if(reg.test(mobileValue) == false || mobileValue.length>11){
            mobileInput.parent().addClass("form-input-error");
            mobileInput.parent().next().children(".error-words").html("请输入1开头的11位数手机号");
            mobileInput.parent().next().css("visibility","visible");
            return false;
        }else{
            mobileInput.parent().removeClass("form-input-error");
            mobileInput.parent().next().css("visibility","hidden");
            return true;
        }
    });
    $("#mobile-number").keyup(function () {
        var mobileInput = $(this);
        var mobileValue = mobileInput.val();
        if(mobileValue.length == 11){
            mobileInput.parent().removeClass("form-input-error");
            mobileInput.parent().next().css("visibility","hidden");
            return true;
        }
    });
    //姓名限制
    $("#user-name").focusout(function () {
        var nameInput = $(this);
        var nameValue = nameInput.val();
        if(nameValue.length<1 || nameValue.length>4){
            nameInput.parent().addClass("form-input-error");
            nameInput.parent().next().children(".error-words").html("姓名长度为1-4位");
            nameInput.parent().next().css("visibility","visible");
            return false;
        }else{
            nameInput.parent().removeClass("form-input-error");
            nameInput.parent().next().css("visibility","hidden");
            return true;
        }
    });
    $("#user-name").keyup(function () {
        var nameInput = $(this);
        var nameValue = nameInput.val();
        if(nameValue.length<=4 && nameValue.length>=1){
            nameInput.parent().removeClass("form-input-error");
            nameInput.parent().next().css("visibility","hidden");
            return true;
        }
    });
    //证件号限制
    $("#ident-number").focusout(function () {
        var identInput = $(this);
        var identNumber = identInput.val();//输入
        var identCate = $("#ident-cate").val();//证件类型
        //console.log(identCate);
        if(identCate == 1){
            if(identNumber.length != 18){
                identInput.parent().addClass("form-input-error");
                identInput.parent().next().children(".error-words").html("请输入18位数证件号");
                identInput.parent().next().css("visibility","visible");
                return false;
            }else{
                identInput.parent().removeClass("form-input-error");
                identInput.parent().next().css("visibility","hidden");
                return true;
            }
        }
    });
    $("#ident-number").keyup(function () {
        var identInput = $(this);
        var identNumber = identInput.val();
        var identCate = $("#ident-cate").val();
        if(identCate == 1){
            if(identNumber.length == 18){
                identInput.parent().removeClass("form-input-error");
                identInput.parent().next().css("visibility","hidden");
                return true;
            }
        }
    });
    //判断键盘输入
    //$(".form-input").keyup(function(){
    //    var formInput = $(this);
    //    var inputValue = formInput.children("input").val();
    //    //console.log(inputValue);
    //    if(inputValue != " "){
    //        formInput.parent(".query-input").addClass("query-input-focus");
    //    }
    //});
    $("#ident-cate").change(function(){
        console.log($(this).val());
    });
    //三要素验证按钮打开与关闭
    $(".off-button").click(function () {
        var mobile = $("#mobile-number");
        var userName = $("#user-name");
        var identCate = $("#ident-cate");
        var identNumber = $("#ident-number");
        //alert("test");
        clickcount1++;
        var button = $(this);
        button.toggleClass("on-button");
        button.children(".off").toggleClass("on");
        //打开
        if(clickcount1%2!=0){
            button.prev().attr("checked","checked");
            mobile.focus();
            userName.removeAttr("disabled").parent().addClass("form-input-focus").parent().parent().addClass("query-input-focus");
            identCate.removeAttr("disabled").addClass("selactive").parent().parent().addClass("query-input-focus");
            identNumber.removeAttr("disabled").parent().addClass("form-input-focus").parent().parent().addClass("query-input-focus");
        }//关闭
        else{
            button.prev().removeAttr("checked");
            //userName.val("");
            userName.attr("disabled","true").parent().removeClass("form-input-error").removeClass("form-input-focus").next().css("visibility","hidden")
                .parent().parent().removeClass("query-input-focus");
            identCate.attr("disabled","true").removeClass("selactive").parent().parent().removeClass("query-input-focus");
            //identNumber.val("");
            identNumber.attr("disabled","true").parent().removeClass("form-input-error").removeClass("form-input-focus").next().css("visibility","hidden")
                .parent().parent().removeClass("query-input-focus");
            //三要素验证为关闭状态时，把姓名，证件类型和证件号复制为null；
            userName.val(null);
            identCate.val(null);
            identify.val(null);

        }
        //console.log(clickcount1);
    });
    //点击提交按钮是触发动作
    $("input[type='submit']").click(function () {
        if(!mobile.val().trim()){
            mobile.trigger('focusout');
            return false;
        }
        //clickcount1为奇数时表明三要素验证是开启状态，为偶数时表明为关闭状态
        if(clickcount1%2 != 0){
            if(!userName.val().trim()){
                userName.trigger('focusout');
                return false;
            }
            if(!identify.val().trim()){
                identify.trigger('focusout',[identifyCate.val()]);
                return false;
            }
        }
    });
});