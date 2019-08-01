<style scoped>
  .submitHead{height:40px;padding: 10px;border-left:2px solid #1890ff;margin-top:10px;}
  .pageComsStyle{float:right;color:#000;line-height:22px;border-bottom:2px solid #22abea;padding:0 5px;}
  .btnLastNext{position:absolute;right:2%;bottom:14%;z-index:999;}
  .componentsPageStyle{float:right;width:10%;margin-left:50px;text-align: right;padding-right:14px;color:#000}
</style>
<style>
  #comPage .componentsPageStyle .ivu-select-selection{border-color:#22abea !important;text-align: center !important;}
</style>
<template>
  <div class='submitHead'>
    <p style="line-height:15px;float:left;height:35px;">{{title}}</p>
    <div id="comPage">
      <p class="pageComsStyle"> 共{{total}}条/{{sumPage}}页</p>
      <p class="componentsPageStyle">
        <span>跳至：</span><Select  style="width:60px" @on-change="pageChange" v-model="currentPage" size="small">
        <Option v-for="items in sumPage" :value="items" :key="items">{{ items }}</Option>
      </Select> 页
      </p>
      <div class="btnLastNext">
        <p><img src="../../img/last.png" @click="lastPage"/></p>
        <p><img src="../../img/next.png" @click="nextPage"/></p>
      </div>
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
      'sumPage',
      'title'
  ],
    watch:{
      page:function(){
        this.currentPage = this.page;
      },

    },
    mounted:function(){

    },
    methods:{
      pageChange:function(){
        this.$emit('pageChange', this.currentPage);
      },
      lastPage:function(){
        if(this.page>1){
          //this.$emit('lastPage', this.currentPage);
          this.page--;
        }else{
          this.$Message.success('已经是第一页数据！')
        }

      },
      nextPage:function(){
        if(this.page<this.sumPage){
          //this.$emit('nextPage', this.currentPage);
          this.page++;
        }else{
          this.$Message.success('已经是最后一页数据！')
        }

      }


    }
  }

</script>
