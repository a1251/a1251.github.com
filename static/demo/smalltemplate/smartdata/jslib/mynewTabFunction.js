/**
 * Created by Administrator on 2017/1/13.
 */
    //layui模块使用
    //var active;
    //layui.use('element',function(){
    //    var element = layui.element();
    //    //触发事件
    //    active = {
    //        tabAdd: function(tabID,title){
    //            //新增一个tab
    //            var iframe = $("<iframe>");
    //            element.tabAdd('tab1',{
    //                title: title,
    //                content: iframe
    //            })
    //        }
    //    };
    //    $(".nav-left >li> ul> li>a").on('click', function () {
    //        //console.log("test");
    //        var type = $(this).data('type');
    //        active[type] ? active[type].call(this) : '';
    //    });
    //});
//这是我写的用来生成新的tab以及其中的点击事件，因为有点小bug没查到错误原因暂且先放着
// ，该处已使用layui实现想要的功能
//-----------已解决，问题在于不该在调用addIframe函数生成li节点时写其对应的iframe窗口显示或隐藏，
// 会changeTab函数内的openThisIframe函数控制窗口显示或隐藏相互冲突,所以去掉addIframe函数中的控制
// 窗口显示或隐藏的语句即可----------------------//

//为上面的小标签（包括后面生成的）添加点击事件
$(document).ready(function () {
    $(document).on("click",".page-tabs>ul>li",function () {
    $(".nav-left >li >ul >li a").removeClass("a2-click");
    var thistab = $(this);
    console.log(thistab);
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
    $(".query1").click(function () {
        var tabId = "queryOne";
        var word = $(this).text();
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

});

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