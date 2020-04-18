<template>
  <div id="mainPage">
    这是我的主页
    <test>ceshi</test>
  </div>
</template>

<script>
  import router from '@/router';
  import test from '@/components/test.vue'
  export default {
    name: 'mainPage',
      router,
      components: {test},
      data(){
        return {
            showLeft: true,
            showRight: true,
            showBtn: true,
        }
      },
      methods:{

      }
  }
</script>

<style>
</style>
