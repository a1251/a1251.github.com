<template>
  <div class="my-info-title-left" id="myInfoTitleLeft" :class="{'collapse':!expandInfo}">
      <div class="head-pic-box" :class="{'collapse':!expandInfo}">
        <div class="img-box">
          <img :src="myBaseInfo.headP" alt="头像加载失败" @click="headClick">
        </div>
        <div class="name-box">
          {{myBaseInfo.name}}
        </div>
        <div class="profession-box">
          {{myBaseInfo.profession}}
        </div>
      </div>
      <baseInfoList></baseInfoList>
      <div class="expand-title-info" @click="expandClick" :class="{'collapsed':!expandInfo}">
        <span class="expand-icon">

        </span>
      </div>
  </div>
</template>

<script>
  import baseInfoList from './baseInfoList.vue'
  export default {
    name: 'myInfoTitleLeft',
    props: ['my-base-info'],
    components:{baseInfoList},
    data (){
      return {
        expandInfo: true
      }
    },
    methods:{
      headClick(){
        console.log("head click");
        // this.expandInfo ? this.expandInfo = false : this.expandInfo = true;
      },
      expandClick(){
        this.expandInfo ? this.expandInfo = false : this.expandInfo = true;
      }
    }
  }
</script>

<style scoped>
  #myInfoTitleLeft{
    display: inline-block;
    width: 18.75rem;
    height: 100%;
    position: fixed;
    background-color: #2C3E50;
    color: #FFFFFF;
    left: 0;
    top: 0;
    overflow-x: hidden;
    transition: all 0.6s;
    overflow-y: scroll;
    z-index: 4;
    box-shadow: 2px 0 5px #2C3E50;
  }
/*  @media screen and (max-width:736px) {
    #myInfoTitleLeft{
      left: -300px;
      box-shadow: none;
    }
  } */
  #myInfoTitleLeft.collapse{
    left: -300px;
    box-shadow: none;
  }
  .head-pic-box{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1.875rem;
  }
/*  .head-pic-box.collapse{
    padding: 0;
  } */
  .img-box{
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
  }
  .img-box img{
    width: 100%;
    height: auto;
  }
  .name-box{
    width: 100%;
    padding-top: 1rem;
    font-size: 20px;
    font-weight: bold;
  }
  .profession-box{
    padding: 15px 0;
    font-size: 1.125rem;
  }
  .expand-title-info{
    position: fixed;
    top: calc(50% - 30px);
    left: 285px;
    width: 15px;
    height: 60px;
    z-index: 5;
    background: rgba(256,256,256,.5);
    border: 1px solid #FFFFFF;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.6s;
  }
  .expand-icon{
    width: 0;
    height: 0;
    border: 10px solid #FFFFFF;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    position: relative;
    left: -7px;
  }
  .expand-title-info.collapsed{
    left: 0;
    border-radius: 0 5px 5px 0;
    background-color: rgba(0,0,0,.3);
  }
  .expand-title-info.collapsed .expand-icon{
    border-right-color: transparent;
    border-left-color: #2C3E50;
    left: 1px;
  }
</style>
