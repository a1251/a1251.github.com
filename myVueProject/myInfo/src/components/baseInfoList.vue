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
    props: ['info-list'],
    data(){
      return {

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
