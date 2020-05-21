/**
 * Created by Xiao on 2017/1/12.
 */
$(function () { $(".form-group:first-child>.control-label").popover({
        animation: true,
        //title: 'test',
        trigger: 'hover',//设置鼠标移入是触发提示框
        container: '#username',
        content: '姓名文字信息待定',
        placement: 'bottom'
    });
    $(".form-group:nth-child(3)>.control-label").popover({
        animation: true,
        //title: 'test',
        trigger: 'hover',//设置鼠标移入是触发提示框
        container: '#identify',
        content: '身份证号输入有误，无法读取信息，可能存在欺诈行为，已提交风险控制处理',
        placement: 'bottom'
    });
});