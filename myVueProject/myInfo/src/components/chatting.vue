<template>
  <div class="content-box">
    <div class="chat">
      <transition-group :duration="500">
        <div class="chat-item" v-for="(item,index) in contentList" :key="item.id">
       <div class="person-content other" v-if="item.createAccount!=myAccount">
        <div class="head-box">
          <img :src="item.headP" alt="">
        </div>
        <div class="chat-content-box">
          <span class="triangle-to-left"></span>
          <div class="chat-text" v-html="item.content">{{item.content}}</div>
        </div>
      </div>
      <div class="person-content self" v-else="item.createAccount!=myAccount">
        <div class="chat-content-box">
          <div class="chat-text self" v-html="item.content">{{item.content}}</div>
          <span class="triangle-to-left to-right"></span>
        </div>
        <div class="head-box">
          <img :src="item.headP" alt="">
        </div>
      </div>
      </div>
      </transition-group>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'chatting',
    props: ['contentList','myAccount'],

  }
</script>

<style scoped>
    .content-box{
      padding: 10px;
      background-color: #F5F5F5;
      height: calc(100% - 40px);
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .person-content{
      display: flex;
      margin-bottom: 15px;
    }
    .person-content.other{
      padding-right: 50px;
    }
    .person-content.self{
      padding-left: 50px;
      justify-content: flex-end;
    }
    .head-box{
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      flex: 0 0 40px;
    }
    .head-box img{
      width: 100%;
      height: 100%;
    }
    .chat-content-box{
      display: flex;
      align-items: center;
      position: relative;
      max-width: 100%;
    }
    .chat-text{
      background: #ffffff;
      min-height: 40px;
      padding: 10px;
      border-radius: 4px;
      white-space: pre-line;
      word-wrap: break-word;
      word-break: break-all;
      margin-left: 10px;
      text-align: left;
      max-width: calc(100% - 10px);
    }
    .chat-text.self{
      margin-left: 0;
      margin-right: 10px;
      background-color: #42B983;
    }
    .triangle-to-left{
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid #FFFFFF;
      border-left-color: transparent;
      border-top-color: transparent;
      border-bottom-color: transparent;
      position: absolute;
      left: 0;
      top: 16px;
    }
    .triangle-to-left.to-right{
      border-left-color: #42B983;
      border-right-color: transparent;
      left: auto;
      right: 0;
    }
    .chat-item{
      transition: 0.2s;
    }
    .chat-item.v-enter-active.v-enter-to{
      /* position: fixed;
      top: 100%; */
    }
    @keyframes moveUp{
      from{
        position: absolute;
        top: 100%;
      }
      to{
        position: relative;
        top: unset;
      }
    }
</style>
