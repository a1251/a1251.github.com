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
      methods:{

      }
  }
</script>

<style>
</style>
