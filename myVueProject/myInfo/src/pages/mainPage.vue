<template>
  <div id="mainPage">
    <myInfoTitleLeft :my-base-info="myBaseInfo"></myInfoTitleLeft>
  </div>
</template>

<script>
  import router from '@/router';
  import store from '@/store'
  import myInfoTitleLeft from '@/components/myInfoTitleLeft.vue'
  export default {
    name: 'mainPage',
      router,
      store,
      components: {myInfoTitleLeft},
      data(){
        return {
          myBaseInfo: store.state.myBaseInfo
        }
      },
      methods:{

      }
  }
</script>

<style>
</style>
