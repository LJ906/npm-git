<style scoped>
  .pageComsStyle{float:right;color:#000;line-height:30px;border-bottom:2px solid #22abea;padding:0 5px;}
  .btnLastNext{position:absolute;right:2%;bottom:14%;z-index:999;}
</style>
<style>
  #comPage .componentsPageStyle .ivu-select-selection{border-color:#22abea !important;text-align: center !important;}
</style>
<template>
  <div id="comPage">
    <p class="pageComsStyle"> 共{{total}}条/{{sumPage}}页</p>
    <p style="float:right;width:10%;margin-left:50px;text-align: right;padding-right:14px;color:#000" class="componentsPageStyle">
      <span>跳至：</span><Select  style="width:60px" @on-change="pageChange" v-model="currentPage">
      <Option v-for="items in sumPage" :value="items" :key="items">{{ items }}</Option>
    </Select> 页
    </p>
    <div class="btnLastNext">
      <p><img src="../../img/last.png" @click="lastPage"/></p>
      <p><img src="../../img/next.png" @click="nextPage"/></p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        //表头信息
        currentPage: this.page,
      }
    },
    props:[
      'page',
      'total',
      'sumPage'
  ],
    watch:{
      page:function(){
        this.currentPage = this.page;
      }
    },
    mounted:function(){
    },
    methods:{
      pageChange:function(){
        this.$emit('pageChange', this.currentPage);
      },
      lastPage:function(){
        this.$emit('lastPage', this.currentPage);
      },
      nextPage:function(){
        this.$emit('nextPage', this.currentPage);
      }


    }
  }

</script>
