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
      <Row style="background:#fff;padding:10px;border-radius:5px;">
        <Col span="4">库区 :
          <Select  style="width:70%;" v-model="room">
            <Option value="" key="">请选择</Option>
            <Option v-for="(items,index) in roomList" :value="items.id" :key="index">{{ items.name }}</Option>
          </Select>
        </Col>
        <Col span="4" v-if="!(hclType == 'SE' || hclType == 'SIE' || hclType == 'DE') ">材料代码 :
          <Select  style="width:70%;" v-model="material" filterable :disabled="materialDisabled">
            <Option value="" key="">请选择</Option>
            <Option v-for="(items,index) in materialList" :value="items.thisMaterialCode" :key="index">{{ items.thisMaterialCode }}</Option>
          </Select>
        </Col>
        <Col span="4" v-if="!(hclType == 'SE' || hclType == 'SIE' || hclType == 'DE') ">批号 :
          <Input placeholder="请输入批号" clearable style="width: 70%" v-model="defaultSearchBatch"></Input>
        </Col>
        <Col span="4">容器编号 :
          <Input placeholder="请输入容器编号" clearable style="width: 60%;" v-model="containerCode"></Input>
        </Col>
       <Col span="4">容器类型 :
          <Select  style="width:60%;" v-model="containerType">
            <Option value="" key="">请选择</Option>
            <Option v-for="(items,index) in containerTypeList" :value="items.value" :key="index">{{ items.label }}</Option>
          </Select>
        </Col>
        <Col span="4">
          <Button type="success"  @click="searchManual" style="margin-left:20px">查询</Button>
          <Button type="success"  @click="clear" style="margin-left:20px">清空</Button>
          <Button type="success"  @click="saveSure" style="margin-left:20px">生成支持性文件</Button>
        </Col>
      </Row>
      <Row style="margin-top:10px;">
        <Col span="18">
          <div style="width: 100%;display: inline-block;">
            <componentPage :page="page" :total="total" :sumPage="sumPage" v-on:pageChange="pageChange" :loading="loading" v-on:lastPage="lastPage" v-on:nextPage="nextPage"></componentPage>
          </div>
          <div class="containerListTable">容器列表</div>
          <Table :height="height" size="small" :loading="loading" :columns="(hclType == 'SE' || hclType == 'SIE' || hclType == 'DE')? containerColEmptyCon : containerCol" :row-class-name="rowClassName" :data="containerList" @on-row-click="rowClick" @on-selection-change="handleRow"  @on-select-all="handleRow" @on-sort-change="sortChangeData"></Table>
        </Col>
        <Col span="1" style="width:2.5%;padding-left:7px;">
          <Button type="success" size="small" style="margin-top:162px;font-size:16px;width:35px;" @click="removeArrcontainer"><Icon type="arrow-right-a"></Icon></Button>
          <Button type="success" size="small" style="margin-top:30px;font-size:16px;width:35px;" @click="removeArrAllcontainer"><Icon type="shuffle"></Icon></Button>
          <Button type="success" size="small" style="margin-top:30px;font-size:16px;width:35px;" @click="removeTableAllcontainer"><Icon type="shuffle" class="iconStyle"></Icon></Button>

        </Col>
        <Col span="5" style="width:22.3%;">
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
            <p><img src="../../img/last.png"  @click="rightLastPage"/></p>
            <p><img src="../../img/next.png"  @click="rightLastPage"/></p>
          </div>
          <Table :columns="(hclType == 'SE' || hclType == 'SIE' || hclType == 'DE') ? selectedDataColEmptyCon : selectedDataCol" size="small" id="batchsTable" :loading="rightLoading" :height="height" :data="selectedData" @on-row-dblclick="rowdbClick" style="margin-left: 5px;width:100%;margin-top: 3px;"></Table>
        </Col>
      </Row>

  </div>
</template>
<script>
  import Store from '../../js/store.js';
  import componentPage from '../my-components/page.vue';
  export default {
    name:'containerList',
    components:{
      componentPage:componentPage
    },
    data() {
      return {
        roomList:[],//库区list
        room:'',//选中的库区
        materialList:[],//材料编码List
        material:'',//选中的材料编码
        containerTypeList:[],//容器类型List
        containerType:'',//容器类型
        defaultSearchBatch:'',//排序
        containerCode:'',//排序
        containerCol:[
          /*{
          type: 'selection',
          width: 60,
          align: 'center'
          },*/
          {type: 'index2',title:'序号',width: 60,align: 'center',
            render: (h, params) => {
              return h('span', params.index+(this.page-1)* this.pageSize+1);
            }
          },
          {
            title: '批号',
            align: 'center',
            width:100,
            sortable: true,
            key: 'batch'
          },
          {
            title: '容器编号',
            align: 'center',
            width:110,
            sortable:true,
            key: 'code',
          },
          {
            title: '材料代码',
            align: 'center',
            width:200,
            key: 'material',
            render:(h,{row})=>{
              return row.material?h('span', row.material.thisMaterialCode):'';
            }
          },
          {
            title: '通用名称',
            align: 'center',
            width:100,
            key: 'material',
            render:(h,{row})=>{
              return row.material?h('span', row.material.genericName):'';
            }
          },
          {
            title: '内部名称',
            align: 'center',
            width:100,
            key: 'material',
            render:(h,{row})=>{
              return row.material?h('span', row.material.internalName):'';
            }
          },
          {
            title: '毛重',
            align: 'center',
            width:120,
            key: 'grossWeight',
            //sortable: true,
            render:(h,{row})=>{
              let tet = row.grossWeight?row.grossWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '皮重',
            align: 'center',
            width:120,
            key: 'tareWeight',
            //sortable: true,
            render:(h,{row})=>{
              let tet = row.tareWeight?row.tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '净重',
            align: 'center',
            width:120,
            key: 'netWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.netWeight?row.netWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          /*{
            title: '元素代码',
            align: 'center',
            width:120,
            key: 'elementCode'
          },
          {
            title: '元素百分含量(%)',
            align: 'center',
            width:160,
            key: 'yuanSuPercent',
            render:(h,{row})=>{
              let tet = row.yuanSuPercent?row.yuanSuPercent:0;
              return h('span',tet.toFixed(3));
            }
          },*/
          {
            title: '元素量',
            align: 'center',
            width:120,
            key: 'u',
            render:(h,{row})=>{
              let tet = row.u?row.u:0;
              return h('span',tet.toFixed(5));
            }
          },
          /*{
            title: '同位素代码',
            align: 'center',
            width:120,
            key: 'isotopeCode'
          },
          {
            title: '同位素百分比(%)',
            align: 'center',
            width:200,
            key: 'tongWeiSuPercent',
            render:(h,{row})=>{
              let tet = row.tongWeiSuPercent?row.tongWeiSuPercent:0;
              return h('span',tet.toFixed(3));
            }
          },*/
          {
            title: '同位素量',
            align: 'center',
            width:120,
            key: 'u235',
            render:(h,{row})=>{
              let tet = row.u235?row.u235:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '单位',
            align: 'center',
            width:120,
            key: 'unit'
          },
          {
            title: '备注',
            align: 'center',
            width:120,
            key: 'remark'
          },
        ],//列信息
        containerColEmptyCon:[
          /*{
          type: 'selection',
          width: 60,
          align: 'center'
          },*/
          {type: 'index2',title:'序号',width: 100,align: 'center',
            render: (h, params) => {
              return h('span', params.index+(this.page-1)* this.pageSize+1);
            }
          },
          {
            title: '容器编号',
            align: 'center',
            width:350,
            sortable:true,
            key: 'code',
          },
          {
            title: '皮重',
            align: 'center',
            width:350,
            key: 'tareWeight',
            //sortable: true,
            render:(h,{row})=>{
              let tet = row.tareWeight?row.tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '单位',
            align: 'center',
            width:350,
            key: 'unit'
          },
          {
            title: '备注',
            align: 'center',
            key: 'remark'
          },
        ],//列信息空容器
        selectedDataCol:[
          {
            title: '容器编号',
            align: 'center',
            width:85,
            key: 'code',
          },
          {
            title: '批号',
            align: 'center',
            width:140,
            key: 'batch'
          },
          {
            title: '净重',
            align: 'center',
            key: 'netWeight',
            render:(h,{row})=>{
              let tet = row.netWeight?row.netWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
        ],//已选择的容器列信息
        selectedDataColEmptyCon:[
          {
            title: '容器编号',
            align: 'center',
            width:150,
            key: 'code',
          },
          {
            title: '皮重',
            align: 'center',
            key: 'tareWeight',
            render:(h,{row})=>{
              let tet = row.tareWeight?row.tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
        ],//已选择的容器列信息，空容器
        selectedData:[],//已选择的数据
        containerList:[],//数据
        checkDataList:new Map(),//传递的数据
        hclType: this.$route.query.hclType,//hclType
        page:1,//当前页
        pageSize:50,//每页显示的条数
        sumPage:1,//总页数
        loading:true,//loading
        total:0,//总条数
        orderKey:'code',//排序
        orderRule:'asc',//排序
        existBody:[],//已有的body
        headSupport:{},
        height:0,
        rightPageSize:100,
        rightPage:1,
        rightSumPage:1,
        supportHeadId:'',
        operatedDataMap:new Map(),//存的是页面操作过的数据，key为containerId, value为状态（‘in’-->从右侧放回到右边的数据，‘out’表示从左侧放到右边的数据）
        delConIdList:[],//存从右侧回到左侧的数据
        addConIdList:[],//存从左侧到右侧的数据
        rightLoading: false,
        totalU:0,
        rightTotalNum:0,
        materialDisabled:this.$route.query.hclType == 'RP' ? true :false,
      }
    },
    mounted: function() {

      let that = this;
      this.$get('/a/entity/container/conditionsOfQueryContainer',{hclType:this.$route.query.hclType})
        .then((res) => {
          //绑定查询条件的list
          that.roomList = res.roomList;
          that.materialList = res.materialCodeList;
          if(this.$route.query.hclType == 'RP'){
            this.material = this.foreachUnit(that.materialList,that.$route.query.meterialId,'thisMaterialCode').id;
          }
          that.containerTypeList = res.conNetWeightType;
          that.loadingData(this.page);
          //如果是编辑，则需要查询右侧的容器列表
          if(this.$route.query.id){
            this.supportHeadId = this.$route.query.id;
            this.getSelectData(this.page);
          }
          this.$nextTick(function(){
            //如果是批重组增，材料编码需要带上，而且材料编码不可变
            if(this.$route.query.hclType == 'RP'){
              this.material = this.$route.query.meterialId;
            }
          });
        }).catch(function(error){
        that.$Message.error('数据请求失败！')
      })

      this.height = $(window).height()-178;
      this.headSupport = this.$route.query.header;
      //监听滚动条事件
      //this.bindScroll();
    },
    methods:{
      changeDate:function(val){
        this.formValidate.occurDate = val;
      },
      foreachUnit:function(data,unit,name){
        let obj = {};
        data.forEach(item=>{
          if(unit==item[name]){
            obj = item;
          }
        });
        return obj;
      },
      loadingData:function(page){
        let that = this;
        let data = {
          "t":{
            "supportHead":{
              "hclType":this.$route.query.hclType ? this.$route.query.hclType : undefined,
            },
            "container":{
              "supportHead": {"id": this.$route.query.id ? this.$route.query.id : undefined},
              "batch":this.defaultSearchBatch.trim() ? this.defaultSearchBatch.trim(): "",
              'room': this.room ? {'id': this.room} : undefined,
              'code': this.containerCode.trim() ? this.containerCode.trim():"",
              'material':{
                'id':this.material
              },
              "page":{
                "pageNo":page,
                "pageSize":this.pageSize,
                "orderBy":this.orderKey+" "+this.orderRule
              }
            }
          },
          "paraValues":{
            "hclType":this.$route.query.hclTypeValue ? this.$route.query.hclTypeValue : undefined,
          },
        };
        this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/outConListQuery',data)
          .then((res) => {
            //绑定查询的结果集
            let containerListTemp = res.containerList ? res.containerList :[];
            for(let i=0; i < this.selectedData.length; i++){
              for(let j=0; j < containerListTemp.length;j++){
                if( this.selectedData[i].id == containerListTemp[j].id){
                  containerListTemp.splice(j,1);
                  j--;
                }
              }
            }
            that.containerList = containerListTemp;
            that.loading = false;
            that.total = res.totalNum ? res.totalNum : 0;
            that.sumPage = Math.ceil(Number(that.total)/Number(that.pageSize));
          }).catch(function(error){
          that.$Message.error('数据请求失败！')
        })
      },
      getSelectData:function(page){
        let that = this;
        let data = {
          "t": {
            "supportHead":{"hclType":this.$route.query.hclType ? this.$route.query.hclType : undefined},
            "container":{
              "supportHeadId":that.supportHeadId,
              "page":{
                "pageNo":page,
                "pageSize":that.rightPageSize,
              }
            }
          },
          "paraValues":{
            "hclType":this.$route.query.hclTypeValue ? this.$route.query.hclTypeValue : undefined,
          },
        }
        that.rightLoading = true;
        this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/getConInTheHead',data)
          .then((res) => {
            that.selectedData = res.conInTheHead ? res.conInTheHead : [];
            that.rightTotalNum = res.outConSumNum ? res.outConSumNum : 0;
            that.rightSumPage = Math.ceil(Number(that.rightTotalNum) / Number(that.rightPageSize));
            that.totalU = res.sumNetWeight ? res.sumNetWeight : 0;
            //$('#batchsTable').find(".ivu-table-body")[0].scrollTop = 5;
            that.rightLoading = false;
          }).catch(function(error){
          console.log(error);
          that.$Message.error('数据请求失败！')
        })
      },
      handleRow:function(data){
        //自定义选择
        this.transferList = data;
        this.checkDataList.set(this.page,data);
      },
      sortChangeData:function(data){
        this.orderKey = data.key == 'container' ? 'code' : data.key;
        this.orderRule = data.order == 'normal' ? 'asc' : data.order;
        this.page = 1;
        this.loadingData(this.page);
      },
      lastPage:function(num){
        if(num>1){
          this.loading = true;
          this.page--;
        }else{
          this.$Message.success('已经是第一页数据！')
        }

      },
      nextPage:function(num){
        if(num<this.sumPage){
          this.loading = true;
          this.page++;
        }else{
          this.$Message.success('已经是最后一页数据！')
        }

      },
      pageChange:function(num){
        this.loading = true;
        this.page = num;
        this.loadingData(num);
      },
      /**
       * 根据批次查询容器
       * 返回容器涉及的所有库区room的List
       */
      searchManual:function(){
        let that = this;
        let data = {
          "t":{
            "supportHead":{
              "hclType":this.$route.query.hclType ? this.$route.query.hclType : undefined,
            },
            "container":{
              "supportHead": {"id": this.$route.query.id ? this.$route.query.id : undefined},
              'batch':this.defaultSearchBatch.trim() ? this.defaultSearchBatch.trim(): undefined,
              'code':this.containerCode.trim() ? this.containerCode.trim() : undefined,
              'room': this.room ? {'id': this.room} : undefined,
              'material':this.material ? {'thisMaterialCode':this.material} :undefined,
              "remarks":this.$route.query.hclType == 'RP' ? (this.containerType ? this.containerType : 'ALL'):(this.containerType ? this.containerType : undefined),
              "page":{
                "pageNo":1,
                "pageSize":this.pageSize,
                "orderBy":this.orderKey+" "+this.orderRule
              }
            }
          },
          "paraValues":{
            "hclType":this.$route.query.hclTypeValue ? this.$route.query.hclTypeValue : undefined,
          },
        };
        if(this.$route.query.hclType=='RP' && this.containerType=='K'){
          data.t.container.material = '';
        }
        this.loading = true;
        this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/outConListQuery',data)
          .then((res) => {
            if(res.state && res.state == '1'){
              that.$Message.error(res.msg);
            }else{
              let containerListTemp = res.containerList ? res.containerList: [];
              for(let i=0; i < this.selectedData.length; i++){
                for(let j=0; j < containerListTemp.length;j++){
                  if( this.selectedData[i].id == containerListTemp[j].id){
                    containerListTemp.splice(j,1);
                    j--;
                  }
                }
              }

              that.containerList = containerListTemp;
              that.total = res.totalNum;
              //that.sumPage = Math.ceil(Number(res.totalNum)/Number(that.pageSize));
              that.sumPage = Math.ceil(Number(res.totalNum)/Number(that.pageSize)) ? Math.ceil(Number(that.total)/Number(that.pageSize)) : 1;
              that.page = 1;
              that.loading = false;
            }
          }).catch(function(error){
          that.$Message.error('数据连接失败');
        });
      },
      saveSure:function(){
        let that = this;
        that.addConIdList = [];
        that.delConIdList = [];
        this.headSupport.id = this.$route.query.id ? this.$route.query.id  : (this.supportHeadId ? this.supportHeadId : undefined);
        this.operatedDataMap.forEach(function(value, key, map) {
          if(value == 'OUT'){
            that.addConIdList.push(key);
          }else if(value == 'IN'){
            that.delConIdList.push(key);
          }
        });
        let data = {
          "t":{'supportHead':that.headSupport},
          "paraValues":{
            'hclType':this.$route.query.hclTypeValue,
            'addConIdList':that.addConIdList.length>0 ? that.addConIdList : undefined,
            'delConIdList': that.delConIdList.length>0 ? that.delConIdList : undefined
          }
        };

        this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/conListSave',data)
          .then((res) => {
            if(res.state && res.state == 1){
              that.$Message.error(res.msg);

            }else{
              that.supportHeadId = res.headId ? res.headId : '';

              //其他增减
              if(this.$route.query.hclType=='RM' || this.$route.query.hclType=='RP'){
                that.$router.push({path: '/rprmBodyList',query:{'id':that.supportHeadId,'status':'1','hclType':this.$route.query.hclType}});
           /*   }else if(this.$route.query.hclType=='SP' || this.$route.query.hclType =='PI'){
                that.$router.push({path: '/produceBodyList',query:{'id':that.$route.query.id,'status':'NotComplete','hclType':this.$route.query.hclType,disabled:'true'}});
              }else if(this.$route.query.hclType == 'LS'|| this.$route.query.hclType =='CI'){
                that.$router.push({path: '/expendBodyList',query:{'id':that.$route.query.id,'status':'NotComplete',disabled:'true','hclType':this.$route.query.hclType}});
*/            } else if(this.$route.query.hclType == 'SD'|| this.$route.query.hclType =='SI'){
                that.$router.push({path: '/outEditManage',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,hclTypeValue:'02',disabled:'true'}});
              }else if(this.$route.query.hclType == 'SE'|| this.$route.query.hclType =='SIE'|| this.$route.query.hclType =='DE') {
                that.$router.push({path: '/emptyConOutEdit',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,state:'NotComplete',disabled:'true'}});
              }else if(this.$route.query.hclType =='CI'){
                that.$router.push({path: '/expendBodyListObject',query:{'id':that.$route.query.id,'status':'NotComplete',disabled:'true','hclType':this.$route.query.hclType}});
              }else if(this.$route.query.hclType =='LS'){
                that.$router.push({path: '/expendBodyList',query:{'id':that.$route.query.id,'status':'NotComplete',disabled:'true','hclType':this.$route.query.hclType}});
              } else if(this.$route.query.hclType=='SP' ){
                that.$router.push({path: '/produceBodyList',query:{'id':that.$route.query.id,'status':'NotComplete','hclType':this.$route.query.hclType,disabled:'true'}});
              } else if(this.$route.query.hclType=='PI' ){
                  that.$router.push({path: '/produceBodyListObject',query:{'id':that.$route.query.id,'status':'NotComplete','hclType':this.$route.query.hclType,disabled:'true'}});
              } else if(this.$route.query.hclType == 'AP'){
                that.$router.push({path: '/otherIncreaseOrDecBodyAdd',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'AM'){
                that.$router.push({path: '/otherIncreaseOrDecBodyMin',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'AP1'){
                that.$router.push({path: '/otherIncreaseOrDecBodyMore',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'AM1'){
                that.$router.push({path: '/otherIncreaseOrDecBodyLess',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'TW'){
                that.$router.push({path: '/otherIncreaseOrDecBodyTW',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'LD'){
                that.$router.push({path: '/otherIncreaseOrDecBodyLD',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'FW'){
                that.$router.push({path: '/otherIncreaseOrDecBodyFW',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'GA'){
                that.$router.push({path: '/otherIncreaseOrDecBodyGA',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }else if(this.$route.query.hclType == 'LA'){
                that.$router.push({path: '/otherIncreaseOrDecBodyLA',query:{'id':that.supportHeadId,'hclType':this.$route.query.hclType,disabled:'true',state:'NotComplete'}});
              }

            }
          })
          .catch(function (error) {
            console.log(error);
            that.$Message.error('数据连接失败');
          });

      },
      saveData:function(data){
        //每选够100条，自动保存到后台
        let that = this;
        that.addConIdList = [];
        that.delConIdList = [];
        for(let i=0;i<data.length;i++){
          if(that.operatedDataMap.has(data[i].id)){
            let value = that.operatedDataMap.get(data[i].id);

            if(value == "OUT"){
              that.addConIdList.push(data[i].id);
            }else if(value == "IN"){
              that.delConIdList.push(data[i].id);
            }
          }
          this.operatedDataMap.delete(data[i].id);
        }

        this.headSupport.id = this.$route.query.id ? this.$route.query.id  : (this.supportHeadId ? this.supportHeadId : undefined);
        let submitData = {
          "t":{'supportHead':that.headSupport},
          "paraValues":{
            'hclType':this.$route.query.hclTypeValue,
            'addConIdList':that.addConIdList.length>0 ? that.addConIdList : undefined,
            'delConIdList': that.delConIdList.length>0 ? that.delConIdList : undefined
          }
        };
        this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/conListSave',submitData)
          .then((res) => {
            if(res.state && res.state == 1){
              that.$Message.error(res.msg);
              //没保存成功就把数据在放回右边
              data.forEach((item)=>{
                this.selectedData.unshift(item);
              });
              that.rightPage--;

            }else{
              that.supportHeadId = res.headId ? res.headId : '';
              //保存后page+1
              that.rightPage++;
              //清空缓存变量
              that.addConIdList = [];
              that.delConIdList = [];
              //that.operatedDataMap.clear();
            }
          })
          .catch(function (error) {
            console.log(error);
            that.$Message.error('数据连接失败');
          });

      },
      clear: function(){
        this.room = '';
        this.material = '';
        this.containerType = '';
        this.defaultSearchBatch = '';
        this.containerCode = '';
      },
      rowClick:function(data, index){
        data.selected = !data.selected;
        this.$set(this.containerList,index,data);
        //获取到该页所有选中的数据，按照页码存起来
        let selectDataByPage = [];
        for(let i =0; i<this.containerList.length; i++){
          if(this.containerList[i].selected){
            selectDataByPage.push(this.containerList[i]);
          }
        }
        this.checkDataList.set(this.page,selectDataByPage);

      },
      removeArrcontainer:function(){
        //将选择的数据放入右边
        if($('.demo-table-info-row').length > 0){
          for (let key in this.checkDataList){
            let temp = this.checkDataList.get(this.page);
            for(let i=0;i<temp.length;i++){
              this.$set(this.selectedData,this.selectedData.length,temp[i]);
              //存入放入operatedDataMap中，
              if(this.operatedDataMap.get(temp[i].id) && this.operatedDataMap.get(temp[i].id) == 'IN'){
                this.operatedDataMap.set(temp[i].id,'') ;
              }else{
                this.operatedDataMap.set(temp[i].id, 'OUT');
              }

              //修改元素量和总条数
              this.rightTotalNum++;
              this.totalU += temp[i].netWeight;

              //检查是否已经选够了100条，超出100条则保存到后台
              this.$nextTick(function(){this.watchData()});
              //从左边删除掉
              for(let j=0; j < this.containerList.length; j++){
                if(this.containerList[j].id == temp[i].id){
                  this.containerList.splice(j,1);
                  break;
                }
              }
            }
          }
        }else{
          this.$Message.error("请选择容器");
        }
      },
      watchData:function(){
        let that = this;
        if(this.selectedData.length >= that.rightPageSize){
          //将数组分成若干份,分成多次提交后台，每次提交100条
          let data = [];
          this.rightSumPage = Math.ceil(this.selectedData.length / that.rightPageSize);
          for(let i=0; i < this.rightSumPage; i++){
            if(this.selectedData.length >= that.rightPageSize){
              //每次取出100个
              data = this.selectedData.splice(0, that.rightPageSize);
              //保存到后台，如果保存不成功，需要再放回到右边列表中
              that.saveData(data);

            }
          }
        }
      },
      removeArrAllcontainer:function(){
        //将全部数据放入右边
        this.containerList.forEach(item => {
          this.selectedData.push(item);
          //存入放入operatedDataMap中，
          if(this.operatedDataMap.get(item.id) && this.operatedDataMap.get(item.id) == 'IN'){
            this.operatedDataMap.set(item.id,'');
          }else{
            this.operatedDataMap.set(item.id, 'OUT');
          }
          //修改元素量和总条数
          this.rightTotalNum++;
          this.totalU += item.netWeight;
        });
        this.containerList = [];
      },
      removeTableAllcontainer:function(){
        //全部放回左边
        this.selectedData.forEach((item)=>{
          item.selected = undefined;
          this.containerList.push(item);

          //存入放入operatedDataMap中，
          if(this.operatedDataMap.get(item.id) && this.operatedDataMap.get(item.id) == 'OUT'){
            this.operatedDataMap.set(item.id,'');
          }else{
            this.operatedDataMap.set(item.id,'IN');
          }
          //修改元素量和总条数
          this.rightTotalNum--;
          this.totalU -= item.netWeight;

        });
        this.containerList.sort(function(a,b){
          if(parseInt(a.code)<parseInt(b.code)){
            return -1;
          }else if(parseInt(a.code)>parseInt(b.code)){
            return 1;
          }
          return 0;
        });
        this.selectedData = [];
      },
      rowClassName:function(row,index){
        if(row.selected){
          return 'demo-table-info-row';
        }
      },
      rowdbClick:function(data, index){
        //放入左边，并且排序，再从右边删除掉
        data.selected = undefined;
        this.containerList.push(data);
        this.containerList.sort(function(a,b){
          if(parseInt(a.code)<parseInt(b.code)){
            return -1;
          }else if(parseInt(a.code)>parseInt(b.code)){
            return 1;
          }
          return 0;
        });

        //存入放入operatedDataMap中，
        if(this.operatedDataMap.get(data.id) && this.operatedDataMap.get(data.id) == 'OUT'){
          this.operatedDataMap.set(data.id,'');
        }else{
          this.operatedDataMap.set(data.id, 'IN');
        }
        //修改元素量和总条数
        this.rightTotalNum--;
        this.totalU -= data.netWeight;

        this.selectedData.splice(index,1);
      },
      loadingcookieData:function(page){
        //从后台获取已经保存的数据
        this.getSelectData(page);
      },
      rightLastPage:function(){
        if(this.rightPage>1){

          //判断是否有没保存的数据，如果有没保存的先保存
          this.addConIdList = [];
          this.delConIdList = [];
          if(this.selectedData.length > 0 && this.selectedData.length < this.rightPageSize){
            let data = this.selectedData,that = this;
            for(let i=0;i<data.length;i++){
              if(that.operatedDataMap.has(data[i].id)){
                let value = that.operatedDataMap.get(data[i].id);
                if(value == "OUT"){
                  that.addConIdList.push(data[i].id);
                }else if(value == "IN"){
                  that.delConIdList.push(data[i].id);
                }
              }
              this.operatedDataMap.delete(data[i].id);
            }

            this.headSupport.id = this.$route.query.id ? this.$route.query.id  : (this.supportHeadId ? this.supportHeadId : undefined);
            let submitData = {
              "t":{'supportHead':that.headSupport},
              "paraValues":{
                'hclType':this.$route.query.hclTypeValue,
                'addConIdList':that.addConIdList.length>0 ? that.addConIdList : undefined,
                'delConIdList': that.delConIdList.length>0 ? that.delConIdList : undefined
              }
            };
            this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/conListSave',submitData)
              .then((res) => {
                if(res.state && res.state == 1){
                  that.$Message.error(res.msg);
                  //没保存成功就把数据在放回右边
                  data.forEach((item)=>{
                    this.selectedData.unshift(item);
                  });
                  that.rightPage--;

                }else{
                  that.supportHeadId = res.headId ? res.headId : '';
                  //清空缓存变量
                  that.addConIdList = [];
                  that.delConIdList = [];
                  that.rightLoading = true;

                  that.rightPage--;
                  this.loadingcookieData(that.rightPage);
                }
              })
              .catch(function (error) {
                that.$Message.error('数据连接失败');
              });
          }else{
            this.rightLoading = true;
            this.rightPage--;
            this.loadingcookieData(this.rightPage);
          }
        }else{
          this.$Message.success('已经是第一页数据！')
        }
      },
      rightNextPage:function(){
        this.rightSumPage = Math.ceil(Number(this.rightTotalNum) / Number(this.rightPageSize));
        if(this.rightPage<this.rightSumPage){
          this.rightLoading = true;
          this.rightPage++;
          this.loadingcookieData(this.rightPage);
        }else{
          this.$Message.success('已经是最后一页数据！')
        }

      },
    }
  }
</script>
