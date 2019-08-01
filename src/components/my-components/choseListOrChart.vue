<style scoped>
  .ChartBtnStyle{width:140px;height:33px;border-radius:5px;}
  .listStyle{border:1px solid #ccb8b8;width:54px;height:32px;float:left;background:#fff;color:#ddd;text-align: center;font-size: 13px;line-height: 55px;cursor:pointer;position:relative;}
  .radiusLeft{border-radius:5px 0 0 5px}
  .radiusRight{border-radius:0 5px 5px 0 }
  .active{background:url(../../img/activeBg.png) no-repeat left top;color:#fff;font-weight:bolder;line-height:52px;background-size:100% 100%;}
</style>
<template>
  <div class="ChartBtnStyle">
    <div class="listStyle radiusLeft" style="border-right: 0px;"  @click="addDetailChart">
      <div style="position:absolute;left:-10px;top:-11px;width:70px;height:51px;" :class="{active:chartBoo}">图形</div>
    </div>
    <div class="listStyle radiusRight" style="border-left: 0px;"  @click="addDetailList">
      <div style="position:absolute;left:-7px;top:-11px;width:70px;height:54px;" :class="{active:listBoo}">列表</div>
    </div>
  </div>
</template>

<script>
  import Store from '../../js/store.js'
  export default {
    data(){
      return {
        //表头信息
        chartBoo:false,
        listBoo:true,
      }
    },
    mounted:function(){
     //this.$store.state.choseState
     if(this.$store.state.choseState==1){
       this.chartBoo = true;
       this.listBoo = false;
     }else if(this.$store.state.choseState==2){
       this.chartBoo = false;
       this.listBoo = true;
     }

    },
    methods:{
      addDetailChart:function(){
        //二维图
        this.chartBoo = true;
        this.listBoo = false;
        this.$store.state.choseState = 1;

      },
      addDetailList:function(){
        //列表
        this.chartBoo = false;
        this.listBoo = true;
        this.$store.state.choseState = 2;

      }
    }
  }

</script>

