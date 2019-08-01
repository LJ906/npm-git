<template>
    <div>
      <Spin fix>
        <Icon type="load-c" size=18 class="demo-spin-icon-load" style="color:#000;"></Icon>
        <div style="font-size: 18px;">Loading</div>
      </Spin>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        //表头信息

      }
    },
    props:[
    ],
    mounted:function(){
    },
    methods:{

    }
  }

</script>
<style scoped>
  .demo-Circle-custom h3 {color: #fff;font-size: 23px;font-weight: normal;  margin-top: 7px;}
  .demo-Circle-custom p{color: #fff;font-size: 14px;  margin: 10px 0 15px;}
  .demo-Circle-custom span{display: block;color: #fff;font-size: 14px;}
  .demo-Circle-custom span i,p{  font-style: normal;color: #fff;}
  .detailDiv div{padding-left: 0px !important;padding-right: 0px !important; color: #000; }
  .detailDiv span{color:#fa743a;  font-weight: bold; font-family: 'Hiragino Sans GB'; }
  .demo-spin-icon-load{  animation: ani-demo-spin 1s linear infinite;  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
