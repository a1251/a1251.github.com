<template>
  <div class="base-info-list-box">
    <div class="base-info-list-item"  v-for="(li,index) in infoList">
      <div class="info-title-box">
        <span class="info-title-text">{{li.title}}</span>
        <span class="info-title-icon-right"></span>
      </div>
      <div class="info-part-list">
        <div class="info-part-item" v-for="(part,partIndex) in li.parts">
          <span class="item-title" v-if="part.title">
            {{part.title}}
          </span>
          <span class="item-value">
            {{part.value}}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'baseInfoListBox',
    data(){
      return {
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
        }]
      }
    }
  }
</script>

<style>
  .base-info-list-box{
    padding-left: 1rem;
  }
  .info-title-box{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .info-title-text{
    margin: 0 15px 0 10px;
    font-size: 1.125rem;
  }
  .info-title-icon-right{
    display: inline-block;
    flex-grow: 1;
    height: 0;
    border: 1px solid #FFFFFF
  }
  .info-part-list{
    padding: 1rem 0;
  }
  .info-part-item{
    padding: 0.625rem 0 0.625rem 1.5rem;
    text-align: left;
  }
  .item-title{
    display: inline-block;
    width: 90px;
  }
</style>
