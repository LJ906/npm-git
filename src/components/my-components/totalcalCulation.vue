<style scoped>
  .sumStyle{width:100%; border-collapse:collapse;position:absolute;bottom:9px;background: #fff;}
  .sumStyle th{border-top:1px solid #ccc;}
  .sumStyle th:last-child{border-right:1px solid #ccc;}
  .sumStyle th div{height:30px;text-align: center;font-weight: bolder;overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;line-height:30px;cursor:pointer}
  .sumStyle td{border-bottom:1px solid #ccc;}
  .sumStyle td:last-child{border-right:1px solid #ccc;}
  .sumStyle td div{height:30px;text-align: center;font-weight: bolder;overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;line-height:30px;cursor:pointer}
  .handStyle{width: 100%;text-align: center;line-height: 44px;}
  .tableHeadStyle td{text-align: center}
</style>
<template id="subtotalInfo">
  <table class="sumStyle">
    <tr class="tableHeadStyle">
      <td rowspan="2" style="border:1px solid #ccc;border-right:none;"><div :style="tableWidth" style="height:40px;border-right:1px solid #ccc;line-height:40px;">合计:</div></td>
      <th v-for="(item,index) in subtotalData"><div :style="tableWidth">{{item.name}}</div></th>
    </tr>
    <tr>
      <td v-for="(item,index) in subtotalData"><div :style="tableWidth">{{item.value}}</div></td>
    </tr>

  </table>

</template>

<script>
  export default {
    data:function(){
      return {
        tableWidth:{},//合计宽
      }
    },
    props:[
      'subtotalData',
      'elementWidth'
    ],
    watch:{

    },
    mounted:function(){
      let len = this.subtotalData.length+1;
      let window_width = ($(".sumStyle").width()-100)/len;
      this.tableWidth = {width:window_width+'px'};
    },
    methods:{

    }
  }

</script>
