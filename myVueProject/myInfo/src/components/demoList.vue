<template>
  <div class="all-content-box">
    <div class="list-box">
      <span class="close-icon" @click="closeCard"  v-show="showCloseBtn"></span>
      <div class="item-card" @click="cardClick">
        <chatList></chatList>
      </div>
    </div>
  </div>
</template>

<script>
  import chatList from '@/pages/demos/chatList.vue'
  export default{
    name: 'demoList',
    data(){
      return{
        showCloseBtn: false
      }
    },
    components: {chatList},
    computed:{
      
    },
    methods:{
      cardClick(){
        let e = event || window.event
        e.currentTarget.classList.add('open');
        this.showCloseBtn = true;
      },
      closeCard(){
        var cards = document.getElementsByClassName('item-card');
        for(let i in cards){
          if(cards[i].classList){
            cards[i].classList.remove('open')
          }
        }
        this.showCloseBtn = false;
      }
    }
  }
</script>

<style scoped>
  .all-content-box{
    width: 100%;
    height: 100%;
  }
  .list-box{
    padding: 15px 10px;
  }
  .close-icon{
    display: block;
    position: absolute;
    z-index: 15;
    width: 30px;
    height: 30px;
    background: url('../../static/img/icons.jpg')  -493px -132px no-repeat;
    /* background: #000000; */
    background-size: 600px 500px;
    top: 15px;
    right: 15px;
    border-radius: 100%;
  }
  .item-card{
    width: 100%;
    min-width: 300px;
    height: 150px;
    box-shadow: 1px 1px 5px 1px #7aabdc;
    border-radius: 4px;
    transition: all 0.3s;
    background: #FFFFFF;
    overflow: hidden;
  }
  @media screen and (min-width: 420px) {
    .item-card{
      width: 25%;
    }
  }
  .item-card.open{
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: none;
      border-radius: 0;
  }
  @keyframes openCard{
    0%{
      position: absolute;
      top: 0;
      left: 0;
    }
    80%{
      width: 100%;
      height: 100%;
    }
    100%{
      width: 100%;
      height: 100%;
      box-shadow: none;
    }
  }
</style>
<style>
  .item-card{
    overflow: hidden;
  }
</style>
