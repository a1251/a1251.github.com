<template>
  <div class="chat-list-content">
    <header class="chat-list-header">
    </header>
    <section class="chat-list-box" @touchstart="sectionClick">
        <ul>
          <transition-group  :duration="300">
            <li class="chatter-box" v-for="(chat,index) in chatList.resultList" :class="{'showDelete': chat.showDelete}" :key="chat.name">
              <a @click="chatItemClick(chatList)" @touchstart="onTouchStart(chat)" @touchend="onTouchEnd(chat)">
                <div class="chatter-head-box">
                    <img :src="chat.headPic" alt="">
                </div>
                <div class="chatter-content-box">
                    <div class="chatter-name">
                      {{chat.name}}
                    </div>
                    <div class="chatter-last-message">
                      {{chat.lastMessage}}
                    </div>
                    <div class="chatter-message-time">
                      {{chat.lastUpdateTime|messageTimeShow}}
                    </div>
                </div>
              </a>
              <div class="more-function">
                <button class="delete-btn" @touchstart="deleteItem(chatList.resultList,index)">
                  {{$t('delete')}}
                </button>
              </div>
            </li>
            </transition-group>
        </ul>
    </section>
    <footer class="chat-nav-bar">

    </footer>
  </div>
</template>

<script>
  export default{
    name: 'chatList',
    data(){
      return{
        chatList: require('../../testData/chat/chatList.json'),
        touchStartP: ''
      }
    },
     filters: {
       messageTimeShow(time){
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
      chatItemClick(list){

      },
      deleteItem(list,index){
        let e = event || window.event;
        e.stopPropagation()
        e.preventDefault()
         list.splice(index,1)

      },
      sectionClick(){
        this.chatList.resultList.forEach((item,i) => {
          item.showDelete = false;
        })
      },
      onTouchStart(item){
        let e = event || window.event;
        console.log("start = " + e.touches[0].clientX);
        this.touchStartP = e.touches[0].clientX;
      },
      onTouchEnd(item){
         let e = event || window.event;
          console.log("end = " + e.changedTouches[0].clientX);
          let end = e.changedTouches[0].clientX;
          if(end - this.touchStartP < -100){
            item.showDelete = true;
          }
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    border: none;
  }
  .chat-list-content{
    height: 100%;
    position: relative;
    min-height: 210px;
    max-width: 450px;
  }
  .chat-list-header{
      width: 100%;
      height: 60px;
      background: rgba(0, 0, 0, 0.7);
  }
  .chat-nav-bar{
      width: 100%;
      height: 60px;
      background: #f5f5f5;
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 1px solid #dddddd;
  }
  .chat-list-box{
      width: 100%;
      height: calc(100% - 120px);
      position: absolute;
      top: 60px;
      left: 0;
      overflow-x: hidden;
      overflow-y: scroll;
  }
  .chat-list-box::-webkit-scrollbar{
    display: none;
  }
  .chatter-box{
      padding: 10px;
      position: relative;
      height: 60px;
      display: flex;
      align-items: center;
      left: 0;
      transition: left 0.3s;
  }
  .chatter-box.showDelete{
    left: -80px;
  }
  .chatter-box a{
      text-decoration: none;
      width: 100%;
      height: 100%;
  }
  .chatter-box::after{
      content: '';
      display: block;
      width: calc(100% - 80px);
      height: 1px;
      background: #dddddd;
      position: absolute;
      bottom: 0;
      right: 0;
  }
  .chatter-head-box{
      width: 60px;
      height: 60px;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
  }
  .chatter-head-box img{
      width: 100%;
      height: 100%;
      border: 1px solid #dddddd;
      border-radius: 4px;
      box-sizing: border-box
  }
  .chatter-content-box{
      padding-left: 70px;
      text-align: left;
  }
  .chatter-name{
      font-size: 16px;
      color: #000000
  }
  .chatter-last-message{
      color: #999999;
      margin-top: 3px;
      font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
  }
  .chatter-message-time{
      position: absolute;
      top: 10px;
      right: 10px;
      color: #999999;
      font-size: 12px;
  }
  .more-function{
    position: absolute;
    height: 100%;
    top: 0;
    left: 100%;
  }
  .delete-btn{
    width: 80px;
    height: 100%;
    background: #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
  }
  .v-leave-active.v-leave-to{
    animation: moveLeft 0.3s;
  }
  @keyframes fade{
    from{opacity: 1;}
    to{opacity: 0;}
  }
  @keyframes moveLeft{
    from{left: -80px;}
    to{left: calc(-100% - 80px);}
  }
</style>
