<template>
  <div>
    <div class="my-info-title-left" id="myInfoTitleLeft" :class="{'collapse':!expandInfo}" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <div class="head-pic-box" :class="{'collapse':!expandInfo}">
          <div class="img-box" @click="headClick">
              <img :src="myBaseInfo.headP" alt="头像加载失败">
            <a href="../../static/file/myResume-2020.docx">
              <div class="head-tip" v-show="showHeadTip">点击头像下载我的简历</div>
            </a>
          </div>
          <div class="name-box">
            {{myBaseInfo.name}}
          </div>
          <div class="profession-box">
            {{myBaseInfo.profession}}
          </div>
        </div>
        <baseInfoList :info-list="infoList"></baseInfoList>
        <div class="expand-title-info" @click="expandClick" :class="{'collapsed':!expandInfo}">
          <span class="expand-icon">

          </span>
        </div>
    </div>
    <div class="info-back" v-show="expandInfo" @click="infoBackClick"></div>
  </div>
</template>

<script>
  import baseInfoList from './baseInfoList.vue'
  export default {
    name: 'myInfoTitleLeft',
    props: [],
    components:{baseInfoList},
    data (){
      return {
        expandInfo: true,
        myBaseInfo: {
          headP: '../../static/img/my_photo.jpg',
          name: this.$t('myName'),
          sex: '男',
          profession: 'H5前端工程师'
        },
        infoList: [{
            title: '个人信息',
            parts: [
              {
                title: '出生年月:',
                value: '1995-03-11'
              },
              {
                title: '学历:',
                value: '本科'
              },
              {
                title: '专业:',
                value: '软件工程'
              }
            ]
          },{
            title: '联系方式',
            parts: [
              {
                title: '手机:',
                value: '1995-03-11'
              },
              {
                title: '邮箱:',
                value: '1446736401@qq.com'
              },
              {
                title: '现居地:',
                value: '深圳市-龙岗区'
              }
            ]
          },{
            title: '证书',
            parts: [
              {
                title: '',
                value: '大学英语四级（466）'
              },
              {
                title: '',
                value: '学士学位证书'
              }
            ]
          }],
          showHeadTip: true,
          touchStartP:'',
          touchEndP: ''
      }
    },
    methods:{
      headClick(){
        console.log("head click");
        // this.common.showToast("shishi")
        this.showHeadTip = false;
      },
      expandClick(){
        this.expandInfo ? this.expandInfo = false : this.expandInfo = true;
      },
      onTouchStart(e){
        // debugger
          console.log("start = " + e.touches[0].clientX);
          this.touchStartP = e.touches[0].clientX
      },
      onTouchEnd(e){
        // debugger
          console.log("end = " + e.changedTouches[0].clientX);
          let end = e.changedTouches[0].clientX;
          if(end - this.touchStartP < -100){
            this.expandInfo = false;
          }
      },
      infoBackClick(){
        this.expandInfo = false;
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
    overflow-y: auto;
    z-index: 4;
    box-shadow: 2px 0 5px #2C3E50;
  }
  #myInfoTitleLeft::-webkit-scrollbar{
    display: none;
  }
  .info-back{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 3;
    background: rgba(256,256,256,0.3);
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
    position: relative;
  }
  .head-tip{
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: rgba(256,256,256,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    color: #FFFFFF;
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
