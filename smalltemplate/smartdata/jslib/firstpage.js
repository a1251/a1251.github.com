/**
 * Created by Xiao on 2016/12/21.
 */
var clickcount1 = 1;
$(document).ready(function () {
    // $.ajax({
    //    url: "table1.html",
    //    async : false,
    //    success : function(html){
    //        $(".maindata").append(html);
    //    }
    //});
    var date = new Date();
    var currentTime;
    setInterval(function () {
        currentTime = date.getHours() + ":"+date.getMinutes()+":"+date.getSeconds();
        $("#time-now").empty().html(currentTime);
    },1000);

    $("#time-now").click(function () {
        $("#time-now").empty().html(currentTime);
    })

        //console.log(currentTime);
    $("#scroll").click(function () {
        var mainnavleft = $(".mainnav-left");
        var scroll = (parseInt(parseInt($("body").width())/parseInt(mainnavleft.css("width"))));
        //console.log(scroll);
        if(scroll==4 || scroll==5){
            $(".nav-left > li > a").next("ul").slideUp();
        }
        scrollMenu();
    });
    $(".nav-left > li > a").click(function () {
        var mainnavleft = $(".mainnav-left");
        var scroll = (parseInt(parseInt($("body").width())/parseInt(mainnavleft.css("width"))));
        if(scroll==20 ||scroll==19){
            scrollMenu();
        }
        var slidemenu = $(this);
        //alert("test");
        slidemenu.parent().siblings("li").children("a").removeClass("a1-click");
        slidemenu.addClass("a1-click");
        slidemenu.find(".mif-chevron-left").toggleClass("mif-left-open");
        slidemenu.next("ul").slideToggle();
        slidemenu.find(".triangle-left").css("visibility","visible");
        slidemenu.parent().siblings("li").children("a").find(".triangle-left").css("visibility","hidden");

    });
    $(".nav-left >li >ul >li a").click(function () {
        //alert("test");
        $(".nav-left >li >ul >li a").removeClass("a2-click");
        $(this).parent().siblings().children("a").removeClass("a2-click");
        $(this).addClass("a2-click");
    });
    $(".query1").click(function () {
        $("#maindata-frame").attr("src","queryOne.html");
        //$.ajax({
        //    url : "queryOne.html",
        //    async : false,
        //    success : function(html){
        //        $("#maindata-frame").html(html);
        //    }
        //});
    });
    $(".query2").click(function () {
        $("#maindata-frame").attr("src","table1.html");
        //$.ajax({
        //    url : "table1.html",
        //    async : true,
        //    success : function(html){
        //        $(".maindata-frame").html(html);
        //    }
        //});
    });
});
//左边菜单弹出与收起
function scrollMenu(){
    clickcount1++;
    var mainnavleft = $(".mainnav-left");
    var maindata = $(".maindata")
    if(clickcount1%2 == 0){
        $(".nav-left>li>div>.menu-icon").addClass("after-scroll");
        $(".nav-left>li>a>.menu-icon").addClass("after-scroll");
        mainnavleft.css("width","5%");
        //setTimeout(function () {
            maindata.css("width","95%")
        //},500);

    }else{
        $(".nav-left>li>div>.menu-icon").removeClass("after-scroll");
        $(".nav-left>li>a>.menu-icon").removeClass("after-scroll");
        mainnavleft.css("width","20%");
        maindata.css("width","80%")
    }
    //console.log(clickcount1);
}