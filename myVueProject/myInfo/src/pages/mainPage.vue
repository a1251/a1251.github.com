<template>
  <div id="mainPage">
    <myInfoTitleLeft></myInfoTitleLeft>
    <div id="rightInfoBox">
      <mainInfoRight></mainInfoRight>
    </div>
  </div>
</template>

<script>
  import router from '@/router';
  import store from '@/store'
  import myInfoTitleLeft from '@/components/myInfoTitleLeft.vue'
  import mainInfoRight from '@/components/mainInfoRight.vue'
  export default {
    name: 'mainPage',
      router,
      store,
      components: {myInfoTitleLeft,mainInfoRight},
      data(){
        return {
          myBaseInfo: this.store.state.myBaseInfo,
          infoList: this.store.state.infoList,
          lang: this.store.state.lang
        }

      },
      mounted() {
        // debugger
        this.$nextTick(() => {
          let path = window.location.href;
          let screenWidth = document.body.offsetWidth;
        if(path.indexOf('mainPage') != -1 && screenWidth > 450){
          this.common.showTopTip('以下内容未对PC端做适配，部分功能无法实现，建议在手机上观看')
        }
        })

      },
      methods:{

      }
  }
</script>

<style scoped>
  #mainPage{
    max-width: 420px;
    position: relative;
    height: 100%;
    margin: 0 auto;
  }
  #rightInfoBox{
    height: 100%;
  }
</style>
