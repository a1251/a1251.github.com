<template>
  <div class="main-info-right-box">
    <!-- <demoList></demoList> -->
    <div class="router-view" :class="{'open':!showBottomNav}">
      <router-view/>
    </div>
    <ul class="router-box" v-show="showBottomNav">
      <li class="router"><router-link :to="{name: 'demoList'}">demo</router-link></li>
      <li class="router"><router-link :to="{name: 'myResume'}">简历</router-link></li>
    </ul>
  </div>

</template>

<script>
  import demoList from '@/components/demoList.vue'
  import {mapState} from 'vuex'
  export default{
    name: 'mainInfoRigth',
    components: {demoList},
    computed:{
      ...mapState(['showBottomNav'])
    }
  }
</script>

<style scoped>
  .main-info-right-box{
    width: 100%;
    height: 100%;
  }
  .router-view{
    height: calc(100% - 40px);
    position: relative;
  }
  .router-view.open{
    height: 100%;
  }
  .router-box{
    margin: 0;
    position: absolute;
    width: 100%;
    list-style: none;
    display: flex;
    bottom: 0;
    left: 0;
    padding: 0;
    box-shadow: 0 -1px 10px 1px #dddddd;
  }
  .router{
    width: 50%;
  }
  .router a{
    text-decoration: none;
    color: #333333;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .router-link-exact-active.router-link-active{
    background: #1890FF;
    color: #FFFFFF;
  }
</style>
