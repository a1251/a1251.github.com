/**
 * Created by Administrator on 2016/12/23.
 */
var clickcount1 = 0;
$(document).ready(function () {
    $(".query-input").focusin(function () {
        $(this).addClass("query-input-focus");
        $(this).children(".form-input").addClass("form-input-focus");
    }).focusout(function () {
        $(this).removeClass("query-input-focus");
        $(this).children(".form-input").removeClass("form-input-focus");
    });
    $(".off-button").click(function () {
        //alert("test");
        clickcount1++;
        var button = $(this);
        button.toggleClass("on-button");
        button.children(".off").toggleClass("on");
        if(clickcount1%2!=0){
            button.prev().attr("checked","checked");
            $("#mobile-number").focus();
        }else{
            button.prev().removeAttr("checked");
            $("#mobile-number").blur();
        }
        console.log(clickcount1);
    });
});