var app = {
    vm: {},
    initFun: function(){
        app.initVue();
        app.getChatListData();
    },
    initVue: function(){
        app.vm = new Vue({
            el: "#app",
            data: {
                chatList: [],
            },
            filters: {
                messageTimeShow: function(time){
                    if(time){
                        var date = new Date(time);
                        var y = date.getFullYear();
                        var m = date.getMonth();
                        var d = date.getDate();
                        var h = date.getHours();
                        var min = date.getMinutes();
                        var s = date.getSeconds();
                        var nowDate = new Date();
                        var ny = nowDate.getFullYear();
                        var nm = nowDate.getMonth();
                        var nd = nowDate.getDate();
                        if(y == ny){
                            if(m == nm){
                                if(d == nd){
                                    if(h < 12){
                                        return "上午" + h + ":" + min;
                                    }else{
                                        return "下午" + (h - 12) + ":" + min;
                                    }
                                }else{
                                    return y + "年" + (m+1) + "月" + d + "日";
                                }
                            }else{
                                return y + "年" + (m+1) + "月" + d + "日";
                            }
                        }else{
                            return y + "年" + (m+1) + "月" + d + "日";
                        }
                    }
                }
            },
            methods: {

            }
        });
    },
    testData: {
        chatListData: [{
            headPic: '../img/headP1.jpg',
            name: '聊天者1',
            lastMessage: '最新消息',
            lastUpdateTime: '2019-10-09 18:33:30'
        },
        {
            headPic: '../img/headP2.jpeg',
            name: '聊天者2',
            lastMessage: '最新消息',
            lastUpdateTime: '2019-10-09 08:33:30'
        },
        {
            headPic: '../img/headP3.jpeg',
            name: '聊天者3',
            lastMessage: '最新消息',
            lastUpdateTime: '2019-10-08 08:33:30'
        },
        {
            headPic: '../img/headP4.jpeg',
            name: '聊天者4',
            lastMessage: '最新消息',
            lastUpdateTime: '2019-10-08 08:33:30'
        },
        {
            headPic: '../img/headP4.jpeg',
            name: '聊天者5',
            lastMessage: '最新消息',
            lastUpdateTime: '2019-10-08 08:33:30'
        }]
    },
    getChatListData: function(){
        $.ajax({
            type: 'get',
            url: '../chatList.json',
            dataType: 'jsonp',
            data: {},
            success: function(result){
                console.log("getChatListData result = " + JSON.stringify(result));
            },
            error: function(){

            }
        });
    }
}
app.initFun();