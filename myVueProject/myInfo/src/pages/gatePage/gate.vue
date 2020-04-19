<template>
  <div id="gateBox">
    <div class="gate-left" v-show="showLeft">
    </div>
    <div class="gate-right" v-show="showRight">
    </div>
    <transition name="btn" :duration="300">
      <div class="btn-box" v-show="showBtn">
      <button class="ensure-enter" @click="openGate()">
        查看蒋小武的个人简历
      </button>
    </div>
    </transition>

  </div>
</template>
<script>
  import router from '@/router'
  export default {
    name: 'gate',
    router,
    data(){
      return {
          showLeft: true,
          showRight: true,
          showBtn: true,
      }
    },
    methods:{
      openGate(){
        let e = event||window.event;
        var that = this;
        let leftGate = document.getElementsByClassName("gate-left")[0];
        let rightGate = document.getElementsByClassName("gate-right")[0];
        leftGate.style.transform = 'translateX(-100%)';
        rightGate.style.transform = 'translateX(100%)';
        e.currentTarget.classList.add('btn-animation');
        this.showBtn = false
        setTimeout(function(){
          that.$router.push('/mainPage')
        },800);
      }
    }
  }

</script>
<style scoped>
  html,body{
    widows: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #gateBox{
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  }
  .gate-left,.gate-right{
    width: 50%;
    height: 100%;
    background: #42B983;
    transition: all 1s;
  }
  @media  screen and (max-width: 736px) {
     .gate-left{
    background: url(../../../static/img/my_photo.jpg) 0 0 no-repeat;
    background-size: 200% 100%;
  }
  .gate-right{
    background: url(../../../static/img/my_photo.jpg) 100% 0 no-repeat;
    background-size: 200% 100%;
  }
  }

  .btn-box{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .ensure-enter{
    padding: 0.625rem;
    border: 1px solid #1890ff;
    background: #FFFFFF;
    color: #1890FF;
    transition: all 1s;
  }
  .btn-animation{
    animation: btn-rotate 1s;
  }
  @-ms-keyframes btn-rotate{
    from{
      transform: rotateX('0');
    }
    to{
      transform: rotateX('180deg');
    }
  }
  @keyframes btn-rotate{
    from{
      transform: rotateX('0deg')
    }
    to{
      transform: rotateX(180deg);
    }
  }
</style>
