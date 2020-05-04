<template>
  <div class="chat-whole-box">
    <chatting :contentList="contentList" :myAccount="myAccount"></chatting>
    <div class="input-box">
      <input type="text" v-model="inputText">
      <button class="send-message" v-show="inputText.trim()" @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
  import chatting from '@/components/chatting.vue'
  export default{
    name: 'chatDetai',
    components: {chatting},
    data(){
      return{
        inputText: '',
        myAccount: 'xiaowu',
        contentList: [
          {
            headP: '../../../static/img/headP1.jpg',
            createTime: '2020-05-04 18:00:00',
            content: '1.回复“简历”获取简历下载地址，\n2.也可以直接输入问题获取询问我的回答,如：“你叫什么”\n3.直接输入年份获取我在该年份的工作经历简述,如“2019”',
            createName: '机器人',
            createAccount: 'xiao1',
            id: '1'
          },
          // {
          //   headP: '../../../static/img/headP2.jpeg',
          //   createTime: '2020-05-04 18:00:00',
          //   content: '看到了',
          //   createName: '蒋小武',
          //   createAccount: 'xiaowu',
          //   id: '4'
          // }
        ]
      }
    },
    updated() {
      // setTimeout(() => {
        this.scrollToBottom()
      // },50)
    },
    methods: {
      sendMessage(){
        let that = this;
        let content = {
          headP: '../../../static/img/headP2.jpeg',
          createTime: '2020-05-04 18:00:00',
          content: that.inputText,
          createName: '蒋小武',
          createAccount: 'xiaowu',
          id: Math.floor(Math.random()*100000000000)
        };
        that.contentList.push(content);
        let cloneText = that.inputText;
        that.inputText = '';
        setTimeout(() => {
           that.autoReply(cloneText)
        },200)

      },
      scrollToBottom(){
          let content = document.getElementsByClassName("content-box")[0];
          let chat = document.getElementsByClassName("chat")[0];
          // debugger
          let cH = chat.clientHeight;
          content.scroll({top:cH,left:0,behavior:'smooth' })
      },
      //自动回复
      autoReply(text){
        let that = this;
        let content = {
          headP: '../../../static/img/headP1.jpg',
          createTime: that.getFormatterNowTime(),
          content: '',
          createName: '机器人',
          createAccount: 'xiao1',
          id: Math.floor(Math.random()*100000000000)
        };
        let experience = require('../../testData/resume/myResume.json')
         let now = new Date()
        // debugger
        if(text.indexOf('简历') != -1){
           content.content = '<a href="../../static/file/myResume-2020.docx">点此下载我的简历</a>'
        }else if(text.indexOf("你叫什么") != -1 || text.indexOf("姓名") != -1){
          content.content = this.$t('myName')
        }else if(text.indexOf("年龄") != -1 || text.indexOf("你多大") != -1){

          content.content = now.getFullYear() - 1995;
        }else if(text.indexOf('专业') != -1){
          content.content = '软件工程'
        }else if(text.indexOf("2019") != -1 || text.indexOf("2020") != -1 || text > now.getFullYear()){
          content.content = experience.experience[2019].description;
        }else if(text.indexOf("2018") != -1){
          content.content = experience.experience[2018].description;
        }else if(text.indexOf("2017") != -1){
          content.content = experience.experience[2017].description;
        }else if((text < 2017 && text > 2013) || text.indexOf("大学") != -1){
          content.content = experience.experience.school.honor;
        }else {
          content.content = '抱歉，这里没有你想要的答案'
        }
        that.contentList.push(content);
      },
      getFormatterNowTime(){
        let now = new Date();
        let y = now.getFullYear();
        let m = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
        let d = now.getDate()> 9 ? now.getDate() : '0' + now.getDate();
        let h = now.getHours()> 9 ? now.getHours() : '0' + now.getHours();
        let min = now.getMinutes()> 9 ? now.getMinutes() : '0' + now.getMinutes();
        let s = now.getSeconds()> 9 ? now.getSeconds() : '0' + now.getSeconds();
        return y + '-' + m + '-' + d + ' ' + h + ":" + min + ":" + s;
      }
    }
  }
</script>

<style scoped>
  .chat-whole-box{
    width: 100%;
    height: 100%;
    transform: translate(0,0);
    }
 .input-box{
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   padding: 5px 10px;
   background: #f0f0f0;
   border-top: 1px solid #DDDDDD;
   display: flex;
   align-items: center;
 }
 .input-box input{
   height: 32px;
   flex-grow: 1;
   background: #FFFFFF;
   border-radius: 4px;
   line-height: 32px;
   border: none;
   padding: 0 10px;
 }
 input:focus{
   outline: none;
 }
 .send-message{
   height: 32px;
   width: auto;
   background: #42B983;
   color: #FFFFFF;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
   border: 1px solid #42B983;
   margin-left: 10px;
   padding: 0 15px;
 }
</style>
