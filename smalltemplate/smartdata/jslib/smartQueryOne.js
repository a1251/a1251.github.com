/**
 * Created by Xiao on 2017/1/16.
 */
//设置查询结果表格参数
var pageSize = 3;//设置每页显示行数；
var tableTr = $("#table-total tr").length - 1;//得到表格总行数，减去第一行
var pageTotal = (tableTr/pageSize);//计算总共的页数
var curPage = 1;//设置当前页面为1
$(document).ready(function () {
    var name = $("input[name='name']");
    var nameError = $("input[name='name']+.error-info");
    var identify = $("input[name='identify']");
    var identifyError = $("input[name='identify']+.error-info");
    name.blur(function () {
        var nameValue = name.val();//每次触发blur事件重新获取name的值
        //console.log(nameValue);
        if(!nameValue.trim()){
            nameError.html("姓名不能为空");
            nameError.css("visibility","visible");
            return false;
        }else if(nameValue.trim().length<1 || nameValue.trim().length>4){
            nameError.html("姓名长度不正确");
            nameError.css("visibility","visible");
            return false;
        }
    }).keyup(function(){
        var nameValue = name.val();
        if(nameValue.length>1 && nameValue.length<=4){
            nameError.css("visibility","hidden");
            return true;
        }
    });
    //身份证号的鼠标离焦事件与键盘弹起事件
    identify.blur(function () {
       var identifyValue = identify.val();
        if(!identifyValue.trim()){
            identifyError.html("身份证号不能为空");
            identifyError.css("visibility","visible");
            return false;
        }
    }).keyup(function(){
        var identifyValue = identify.val();
        if(identifyValue){
            identifyError.css("visibility","hidden");
            return true;
        }
    });
    //当履约能力被选中时，隐藏错误信息
    $("#fillPower").click(function () {
        if($(this).is(":checked")){
            $(".fillPower-error").css("visibility","hidden");
        }
    });
    //当履约能力下面的查询指标有被选中时，隐藏错误信息
    $("input[name='fillPower']").click(function () {
        if($("input[name='fillPower']:checked").length !=0){
            $(".power-error").css("visibility","hidden");
        }
    })
    //var powerValue = $("input[name='fillPower']").val();
    $(".bluecheckbox").click(function(){
        powerCheck();
    });
    //var arr = "";
    //$("input[name='fillPower']").click(function () {
    //    var powerChecked = $("input[name='fillPower']:checked").val();
    //
    //    console.log(powerChecked);
    //})
    //点击重置按钮时除了清楚表单内容以外还应该把履约能力下面的选项收起来
    $("button[type='reset']").click(function () {
        $(".power").slideUp();
        $(".mif-chevron-thin-left").removeClass("chevron-down");
    })
    //点击提交时触发事件
    $("button[type=submit]").click(function(){
        var fillPower = $("#fillPower");//履约能力
        var powerChecked = $("input[name='fillPower']:checked");
        var asserts = "";//查询指标
        if(!name.val().trim()){
            name.trigger("blur");
            return false;
        }
        if(!identify.val().trim()){
            identify.trigger("blur");
            return false;
        }
        if(!fillPower.is(":checked")){
            $(".fillPower-error").css("visibility","visible");
            return false;
        }
        if(powerChecked.length == 0){
            $(".power-error").css("visibility","visible");
            return false;
        }else{
            for(var i=0 ; i<powerChecked.length ; i++){
                asserts += powerChecked.eq(i).val() +",";
            }
        }
        //console.log(asserts);
        $("#backboard").fadeIn();
    });
    //设置表格分页
    turnToPage(curPage);
    //点击下一页时切换到表格下一页
    $("#nextpage").click(function(){
        curPage++;
        turnToPage(curPage);
        //console.log(curPage);
    });
    //点击上一页时
    $("#prepage").click(function(){
        curPage--;
        turnToPage(curPage);
    });;
    //点击右上角叉号关闭查询结果弹窗
    $(".table-close").click(function () {
        $("#backboard").fadeOut();
    });
    //点击查询工单历史时，触发主页上的查询工单历史点击事件
    $(".success-info a").click(function () {
        
    })
});
//检查履约能力是否被选中，改变相应样式
function powerCheck(){
    var fillPower = $("#fillPower");
    var power = $(".power");
    if(fillPower.is(":checked")){
        power.slideDown();
        $(".mif-chevron-thin-left").addClass("chevron-down");
    }else{
        power.slideUp();
        $("input[name='fillPower']").removeAttr("checked");
        //powerValue = null;
        $(".mif-chevron-thin-left").removeClass("chevron-down");
    }
}
//跳转到某一页
function turnToPage(curPage){
    //先把所以行隐藏起来
    $("#table-total tr").hide();
    //显示表头
    $("#table-total tr:first-child").show();
    var begin = curPage*pageSize-(pageSize-1);//设置当前页面需要显示的表格的开始行数
    var end = curPage*pageSize;//设置当前页面需要显示的表格的结束行数
    //console.log($("#table-total tr").length - 1);
    $("#table-total tr").each(function(index){
        if(index>=begin && index<=end){
            $(this).show();
        }
    });
    if(curPage == 1){
        $("#prepage").hide();
    }else if(curPage === pageTotal){
        $("#nextpage").hide();
    }else{
        $("#prepage").show();
        $("#nextpage").show();
    }

}