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
        let path = window.location.href;
        if(path.indexOf('mainPage') != -1){
          this.common.showTopTip('以下内容未对PC端做适配，建议在手机上观看')
        }
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
  }
</style>
