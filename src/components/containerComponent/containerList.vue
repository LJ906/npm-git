<style scoped>
  .iconStyle{transform:rotate(180deg);}
  .btnRightLastNext{position:absolute;right:2%;bottom:14%;z-index:999;}
  .containerList{padding:10px;padding-top:20px;background:#f1f3f4;padding-left:13px;}
  .containerListTable{position:absolute;left:0;top:0;font-size:14px;height:30px;padding-left:10px;line-height:30px;border-left:2px solid #71c6ff}
</style>
<style>
  #containerList .ivu-table .demo-table-info-row td{
    background-color: #ebf7ff;/*#E28DFF ;*/
    color: #000;
  }
  #batchsTable .ivu-table-cell{padding-left: 0px;padding-right: 0px;}
  #containerList .ivu-card-body{padding-right: 5px;}
</style>
<template>
  <div id="containerList" class="containerList">
    <!-- 筛选项 -->
    <con-search-bar v-bind="$attrs" v-on="$listeners" v-model="queryForm"></con-search-bar>
  
    <Row style="margin-top:10px;">
      <i-col span="18">
        <div style="width: 100%;display: inline-block;">
          <componentPage v-bind="$attrs" v-on="$listeners"></componentPage>
            <!-- :page="page" :total="total" :sumPage="sumPage" v-on:pageChange="pageChange" :loading="loading" v-on:lastPage="lastPage" v-on:nextPage="nextPage" -->
        </div>
        <div class="containerListTable">容器列表</div>
        <Table  
          v-bind="$attrs" 
          v-on="$listeners"
          :height="tableHeight" size="small" :loading="loading" :columns="containerCol" :row-class-name="rowClassName" :data="containerList"
          @on-row-click="(row, index)=>$emit('conTableRowClick', row, index)" 
          @on-selection-change="(selection)=>$emit('conTableSelectChange', selection)"
          @on-select-all="(selection)=>$emit('conTableSelectAll', selection)"
          @on-sort-change="(data)=>$emit('conTableSortChange', data)"
          ></Table>
      </i-col>
      <i-col span="1" style="width:2.5%;padding-left:7px;">
        <Button type="success" size="small" style="margin-top:162px;font-size:16px;width:35px;" @click="$emit('removeArrcontainer')"><Icon type="arrow-right-a"></Icon></Button>
        <Button type="success" size="small" style="margin-top:30px;font-size:16px;width:35px;" @click="$emit('removeArrAllcontainer')"><Icon type="ios-shuffle"></Icon></Button>
        <Button type="success" size="small" style="margin-top:30px;font-size:16px;width:35px;" @click="$emit('removeTableAllcontainer')"><Icon type="ios-shuffle" class="iconStyle"></Icon></Button>

      </i-col>
      <i-col span="5" style="width:22.3%;">
        <!-- <p  v-if="!(hclType == 'SE' || hclType == 'SIE' || hclType == 'DE') " style="width:100%;border:1px solid #ccc;height:36px;line-height:36px;font-size: 13px;font-weight:bolder;position:relative;padding-left:45px;margin-left:10px;">
          <img src="../../img/toMove.png" style="position:absolute;left:0;top:0"/>
          总净重: {{totalU.toFixed(5)}}
        </p>
        <p style="width:100%;border:1px solid #ccc;height:36px;line-height:36px;font-size: 13px;font-weight:bolder;margin-top:4px;position:relative;padding-left:45px;margin-left:10px;">
          <img src="../../img/toMove.png" style="position:absolute;left:0;top:0"/>
          已选择总条数: {{rightTotalNum}}
        </p>-->
        <p style="width:100%;border:1px solid #ccc;height:33px;line-height:33px;font-size: 13px;font-weight:bolder;padding-left:20px;margin-left:5px;"> 总净重: {{totalU.toFixed(5)}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已选择总条数: {{rightTotalNum}}</p>
        <div class="btnRightLastNext">
          <p><img src="../../img/last.png"  @click="$emit('rightLastPage')"/></p>
          <p><img src="../../img/next.png"  @click="$emit('rightNextPage')"/></p>
        </div>
        <Table :columns="rightColumns" size="small" id="batchsTable" :loading="rightLoading" :height="tableHeight" :data="selectedData" @on-row-dblclick="(row, index)=>$emit('rightTableDbclick', row, index)" style="margin-left: 5px;width:100%;margin-top: 3px;"></Table>
      </i-col>
    </Row>

  </div>
</template>
<script>
  import componentPage from '../page.vue';
  import conSearchBar from '../conSearchBar'

  export default {
    name:'containerList',
    components:{
      componentPage:componentPage, 
      conSearchBar
    },
  
    props: {
      queryForm: Object, // 搜索框绑定的对象
      loading: {
        type: Boolean,
        default: false
      },
      rightLoading: {
        type: Boolean,
        default: false
      }, 
      tableHeight:{
          type: Number, 
          default: 0
      },
      containerCol: Array, // 左侧table 列
      containerList: Array, // 左侧 table 数据
      rightColumns: Array, //  右侧table列
      selectedData: Array, // 右侧table 数据
      totalU:{ // 总净重
        type: Number,
        default: 0
      },
      rightTotalNum: { //已选择总条数
        type: Number,
        default: 0
      }
    },
    methods: {
      rowClassName:function(row,index){
        if(row.selected){
          return 'demo-table-info-row';
        }
      },
    }
     
  }
</script>
