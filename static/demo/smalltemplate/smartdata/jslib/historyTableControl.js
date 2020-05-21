/**
 * Created by Xiao on 2017/1/16.
 */
//模拟服务器传来的数据
var data = [
    {
        checkNum: '27841490',
        checkName: '最大负债能力预测 消费能力查询 最大负债能力预测 职业个性查询 消费稳定性查询',
        num: 5,
        username: '青青河边草',
        time: '2017-01-09 11:29:59',
        status: '工单成功',
        finishTime: '2017-01-09 11:29:59',
        percentage: '74%'
    },
    {
        checkNum: '27841490',
        checkName: '最大负债能力预测 消费能力查询 最大负债能力预测 职业个性查询 消费稳定性查询',
        num: 5,
        username: '青青河边草',
        time: '2017-01-09 11:29:59',
        status: '工单成功',
        finishTime: '2017-01-09 11:29:59',
        percentage: '74%'
    },
    {
        checkNum: '27841490',
        checkName: '最大负债能力预测 消费能力查询 最大负债能力预测 职业个性查询 消费稳定性查询',
        num: 5,
        username: '青青河边草',
        time: '2017-01-09 11:29:59',
        status: '工单成功',
        finishTime: '2017-01-09 11:29:59',
        percentage: '74%'
    }
]
$(function () {
    $("#table").bootstrapTable({
        data: data,
        striped: false,
        cache: false,
        pagination: true,//是否显示分页
        paginationPreText: '上一页',
        paginationNextText:'下一页',
        sortable: true,//是否启用排序
        sortOrder: 'asc',//排序方式
        sidePagination: 'client',//分页方式，client，server
        pageNumber: 1,//初始化加载第一页，默认第一页
        pageSize: 10,//每页记录函数
        //pageList: [5,10,15,20],//可供选择的每页行数
        search: true,//是否显示表格搜索，次搜索是客户端搜索
        strictSearch: false,//严格搜索
        //searchOnEnterKey: true,//按下回车键之后才进行搜索
        formatter: '',
        showColumns: true,//是否显示所有列
        showRefresh: true,//是否显示刷新按钮
        minimumCountColumns: 3,  //最少允许列数
        clickToSelect: true,//是否启用点击选中行
        //height: 500,
        uniqueId: 'ID', //每一行的唯一标识
        showToggle: true,//食肉显示详细视图和列表视图的切换按钮
        cardView: false,//是否显示详细视图
        detailView: false,//是否显示父子表
        buttonsClass: 'warning',

        columns: [
            {
                checkbox: true,
            },
            {
                field: 'orderid',
                title: '工单号'
            },
            {
                field: 'method',
                title: '指标名称'
            },
            {
                field: 'total',
                title: '订单数'
            },
            {
                field: 'submiterName',
                title: '提交者'
            },
            {
                field: 'start_time',
                title: '提交时间'
            },
            {
                field: 'status',
                title: '还行状态'
            },
            {
                field: 'end_time',
                title: '完成时间'
            },
            {
                field: 'success',
                title: '成功率'
            },
            {
                field: 'operation',
                title: '操作',
                formatter: '<div class="operation"><span class="glyphicon glyphicon-file"></span><span>查看详情</span><span class="glyphicon glyphicon-print"></span><span>打印工单</span></div>'
            }
        ]
    })
});