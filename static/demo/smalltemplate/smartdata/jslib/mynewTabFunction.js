/**
 * Created by Administrator on 2017/1/13.
 */
    //layuiģ��ʹ��
    //var active;
    //layui.use('element',function(){
    //    var element = layui.element();
    //    //�����¼�
    //    active = {
    //        tabAdd: function(tabID,title){
    //            //����һ��tab
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
//������д�����������µ�tab�Լ����еĵ���¼�����Ϊ�е�Сbugû�鵽����ԭ�������ȷ���
// ���ô���ʹ��layuiʵ����Ҫ�Ĺ���
//-----------�ѽ�����������ڲ����ڵ���addIframe��������li�ڵ�ʱд���Ӧ��iframe������ʾ�����أ�
// ��changeTab�����ڵ�openThisIframe�������ƴ�����ʾ�������໥��ͻ,����ȥ��addIframe�����еĿ���
// ������ʾ�����ص���伴��----------------------//

//Ϊ�����С��ǩ�������������ɵģ���ӵ���¼�
$(document).ready(function () {
    $(document).on("click",".page-tabs>ul>li",function () {
    $(".nav-left >li >ul >li a").removeClass("a2-click");
    var thistab = $(this);
    console.log(thistab);
    changeTab(thistab);
    //�����ߵ���������ϸ�˵��ĵ����ʽ
    });
    //���Źص�С�ĵ���ҳ
    $(document).on('click','.tab-close', close);
    //��ҳ��ť����¼�
    $("#table1").click(function () {
        var table1 = $("#maindata-frame");
        table1.siblings("iframe").fadeOut();
        table1.fadeIn();
        bigLinkChange($(".scrollmenu"));
    });
    //����ʵʱ������ѯ����¼�
    $(".query1").click(function () {
        var tabId = "queryOne";
        var word = $(this).text();
        addIframe(tabId,word);
    });
    //����������ѯ����¼�
    $(".table1").click(function () {
       var tabId = "table1";
        var word = $(this).text();
        addIframe(tabId,word);
    });
    //�������ݲ�ѯ�������¼�
    $(".query3").click(function () {
        var tabId = "queryOneResult";
        var word = $(this).text();
        addIframe(tabId,word);
    });

});

//�����С����ҳ���֮��ı���Ӧ��ʽ����Ӧ����
function changeTab(thistab){
    thistab.addClass("tab-active").siblings().removeClass("tab-active");
    openThisIframe();

};
//�ر�li��ǩ
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
//���β��ң��ĸ�li����tab-active�࣬������Ӧ�Ĵ���
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
//�����ߵ�����ʱ�ұ߳��ֵ�С��ǩ��iframe
function addIframe(tabID,word) {
    var pagetabs = $(".page-tabs>ul");
    var tabIframe = $("#tab-iframe");
    //�������ڴ�iframe�ڵ��ǣ�������һ���µ�iframe
    if ($("iframe[name="+tabID+"]").length == 0){
        Iframe = $("<iframe>").attr("src","./"+tabID+".html").attr("name",tabID);
        tabIframe.append(Iframe);
    }else {
    }
    //�������ڴ˱�ǩʱ
    var thisli = $("#"+tabID);
    if(thisli.length == 0){
        var close = $("<i class='tab-close'>");
        close.html("��");
        var content = $("<a href='#'>");
        content.append(close).append(word);
        var tab = $("<li class='tab-active'>").attr("id",tabID);
        tab.append(content);
        pagetabs.append(tab);
        changeTab(tab);
    } else{
        //���ڴ�li�ǣ���ת����li��
        changeTab(thisli);
    }
};