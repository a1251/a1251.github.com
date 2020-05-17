/**
 * Created by Xiao on 2016/12/21.
 */
var clickcount1 = 1;
var Iframe = "iframe";//先定义一个iframe变量，以免每次执行addFrame函数的时候都生成一个新的iframe变量
$(document).ready(function () {
    //首页加载
    //console.log(window.location.href);
    //$("#maindata-frame").attr("src",window.location.href.replace('/firstPage.html','table1.html'));
    //改变时间格式为："hh:mm:ss"
    Date.prototype.Format = function(fmt)
    { //author:
        var o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); //格式化年份
        for(var k in o) //循环获取上面定义的月、日、小时等，格式化对应的数据。
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    }
    var date = new Date().Format("hh:mm:ss");
    var currentTime = date;
    $("#time-now").html(currentTime);
    setInterval(function () {
        var date = new Date().Format("hh:mm:ss");
        // var currentTime = date.getHours()+"" + ":"+date.getMinutes()+""+":"+ date.getSeconds()+"";
        var currentTime = date;
        $("#time-now").html(currentTime);
    },1000);
    // $("#time-now").click(function () {
    //     var date = new Date();
    //     var currentTime = date.getHours() + ":"+date.getMinutes()+":"+date.getSeconds();
    //     $("#time-now").empty().html(currentTime);
    // })
        //console.log(currentTime);
    $("#scroll").click(function () {
        var mainnavleftWidth = $(".mainnav-left").css("width");
        //var scroll = (parseInt(parseInt($("body").width())/parseInt(mainnavleft.css("width"))));
        //console.log(scroll);
        $(".nav-left > li > a").find(".mif-chevron-thin-left").removeClass("mif-left-open");
        if(parseInt(mainnavleftWidth)===200){
            $(".nav-left > li > a").next("ul").slideUp();
        }
        scrollMenu();
    });
    $(".nav-left > li > a").click(function () {
        var mainnavleftWidth = $(".mainnav-left").css("width");
        //var scroll = (parseInt(parseInt($("body").width())/parseInt(mainnavleft.css("width"))));
        if(parseInt(mainnavleftWidth)===45){
            scrollMenu();
        }
        var slidemenu = $(this);
        //alert("test");
        bigLinkChange(slidemenu);
        slidemenu.find(".mif-chevron-thin-left").toggleClass("mif-left-open");
        slidemenu.next("ul").slideToggle();
        slidemenu.find(".triangle-left").css("visibility","visible");
        slidemenu.parent().siblings("li").children("a").find(".triangle-left").css("visibility","hidden");
    });
    $(".nav-left >li >ul >li a").click(function () {
        var thisSmallLink = $(this);
        smallLinkChange(thisSmallLink);
    });
    $(document).on("click",".page-tabs>ul>li",function () {
        $(".nav-left >li >ul >li a").removeClass("a2-click");
        var thistab = $(this);
        //console.log(thistab);
        changeTab(thistab);
        //清除左边导航栏上详细菜单的点击样式
    });
    //点叉号关掉小的导航页
    $(document).on('click','.tab-close', close);
    //首页按钮点击事件
    $("#table1").click(function () {
        var table1 = $("#maindata-frame");
        table1.siblings("iframe").fadeOut();
        table1.fadeIn();
        bigLinkChange($(".scrollmenu"));
    });
    //电信实时单条查询点击事件
    $(".queryOne").click(function () {
        var tabId = "queryOne";//生成对应li的id
        var word = $(this).text();//生成li标签的标题
        addIframe(tabId,word);
    });
    //电信批量查询点击事件
    $(".table1").click(function () {
        var tabId = "table1";
        var word = $(this).text();
        addIframe(tabId,word);
    });
    //电信数据查询结果点击事件
    $(".query3").click(function () {
        var tabId = "queryOneResult";
        var word = $(this).text();
        addIframe(tabId,word);
    });

    //小智单条查询点击事件
    $(".smartQueryOne").click(function () {
        var tabId = "smartQueryOne";
        var word = $(this).text();
        addIframe(tabId,word);
    });
    //小智工单历史
    $(".history").click(function () {
        var tabId = "history";
        var word = $(this).text();
        addIframe(tabId,word);
    })
});
//左边菜单弹出与收起
function scrollMenu(){
    //clickcount1++;
    var mainnavleft = $(".mainnav-left");
    var mainnavleftWidth = mainnavleft.css("width");
    var maindata = $(".maindata");
    if(parseInt(mainnavleftWidth) == 200){
        $(".nav-left>li>div>.menu-icon").addClass("after-scroll");
        $(".nav-left>li>a>.menu-icon").addClass("after-scroll");
        mainnavleft.addClass("mainnav-left-scrolled");
        //setTimeout(function () {
            maindata.addClass("maindata-scrolled");
        //},500);

    }else{
        $(".nav-left>li>div>.menu-icon").removeClass("after-scroll");
        $(".nav-left>li>a>.menu-icon").removeClass("after-scroll");
        mainnavleft.removeClass("mainnav-left-scrolled");
        maindata.removeClass("maindata-scrolled");
    }
    //console.log(clickcount1);
};
//三个主菜单点击时的样式变化
function bigLinkChange(thisBigLink) {
    thisBigLink.parent().siblings("li").children("a").removeClass("a1-click");
    thisBigLink.addClass("a1-click");
};
//详细菜单点击时样式变换
function smallLinkChange(thisSmallLink) {
    $(".nav-left >li >ul >li a").removeClass("a2-click");
    thisSmallLink.parent().siblings().children("a").removeClass("a2-click");
    thisSmallLink.addClass("a2-click");
};
//上面的小导航页点击之后改变相应样式及对应窗口
function changeTab(thistab){
    thistab.addClass("tab-active").siblings().removeClass("tab-active");
    openThisIframe();

};
//关闭li标签
function close() {
    var thisli = $(this).parent().parent();
    var prevli = thisli.prev("li");
    var closeId = thisli.attr("id");
    var prevliId = prevli.attr("id");
    var closeIframe = $("iframe[name="+closeId+ "]");
    var prevIframe = $("iframe[name="+prevliId+"]");
    thisli.remove();
    closeIframe.remove();
    changeTab(prevli);
    openThisIframe();
}
//依次查找，哪个li具有tab-active类，则打开其对应的窗口
function openThisIframe(){
    $(".page-tabs ul li").each(function (index) {
        if($(this).hasClass("tab-active")){
            var openIframeId = $(this).attr("id");
            var openIframe = $("iframe[name="+openIframeId+"]");
            //console.log(openIframe.css("display") === "inline-block");
                openIframe.siblings().fadeOut("fast");
                openIframe.fadeIn("fast");

        }
    });
};
//点击左边导航栏时右边出现的小标签与iframe
function addIframe(tabID,word) {
    var pagetabs = $(".page-tabs>ul");
    var tabIframe = $("#tab-iframe");
    //当不存在此iframe节点是，则生成一个新的iframe
    if ($("iframe[name="+tabID+"]").length == 0){
        Iframe = $("<iframe>").attr("src","./"+tabID+".html").attr("name",tabID);
        tabIframe.append(Iframe);
    }else {
    }
    //当不存在此标签时
    var thisli = $("#"+tabID);
    if(thisli.length == 0){
        var close = $("<i class='tab-close'>");
        close.html("×");
        var content = $("<a href='#'>");
        content.append(close).append(word);
        var tab = $("<li class='tab-active'>").attr("id",tabID);
        tab.append(content);
        pagetabs.append(tab);
        changeTab(tab);
    } else{
        //存在此li是，跳转到此li上
        changeTab(thisli);
    }
};