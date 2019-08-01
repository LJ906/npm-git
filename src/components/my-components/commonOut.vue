<style scoped>
  .ivu-card-head p{height:35px;}
  .ivu-tabs-bar{margin-bottom: 8px}
  #tableOutManual{border-collapse: collapse;margin-left:5px;width:96.5%;}
  #tableOutManual tr{border:1px solid #DDDEE1;color:#333}
  #tableOutManual td{border:1px solid #DDDEE1;color:#333;cursor:pointer}
  #tableOutManual th{background:#DDDEE1;color:#333;}
  #tableOutManual th div{height:29px;line-height:29px;text-align:center;}
  #tableOutManual td div{height:29px;line-height:29px;text-align:center}
  /* Padding and font style */
  #tableOutManual td, #tableOutManual th {padding: 2px 7px;  font-size: 12px;  font-family: Verdana;  font-weight: bold;}
  .floorList li{list-style:none;width:100px;float:left;height:35px;text-align: center;line-height:50px;border:1px solid #DDDEE1;border-radius:3px;border-left:none;border-bottom:none}
  .bgColor{background-color:rgb(156, 186, 95);color:#C6C8CD}
  .chartPutData{width:100%;overflow: hidden;position:relative;padding-top:40px;padding-left:40px;margin-top: -0.6%;}
  .outcoordinate{border-collapse: collapse;}
  .outcoordinateX{position:absolute;left:39px;top:0;width:auto}
  .outcoordinate tr td{border:1px solid #ccc;}
  .outcoordinateX tr td div{height:34px;width:134px;background:#DDDEE1;text-align: center;line-height:40px;}
  .outcoordinateY{position:absolute;left:3px;top:34px;width:34px;}
  .outcoordinateY tr td div{height:104px;width:34px;background:#DDDEE1;text-align: center;line-height:81px;}
  .outcoordinateContain{position:absolute;left:40px;top:40px;width: auto !important;}
  .outcoordinateContain tr td div{height:94px; width:124px;text-align:center;padding-top:10px;cursor:pointer;margin:5px;}
  .outcrdTableContainer{width:100%;overflow:auto;position:absolute;left:-1px;top:-6px;}
  .demo-spin-icon-load{  animation: ani-demo-spin 1s linear infinite;}
  .tagStyleOut{display:inline-block;height:30px;width:60px;color:#fff;text-align:center;border-radius: 5px;margin-right:10px;cursor:pointer}
  .selectedStyle{position:absolute;left:4px;top:4px;z-index:888;display:none}
  .tdIcon{display:inline-block;z-index:888;text-align: center;}
  .unselect{width:18px; height:16px;background-image: url("../../img/unselect.png");background-repeat: no-repeat;position: absolute;top: -17px;right: 17px;background-size:100% 100%}
  .selectedOut{position:absolute;top:-17px;right:0px;width:18px;height:16px;background-image: url("../../img/check.png");background-repeat: no-repeat;background-size:100% 100%;display: inline-block}
  .unbreak{width:29%; height:16px;background-image: url("../../img/unbreak.png");background-repeat: no-repeat;}
  .broken{background-image: url("../../img/broken.png");background-repeat: no-repeat;}
  .errorFree{width:29%; height:16px;background-image: url("../../img/errorFree.png");background-repeat: no-repeat;}
  .error{background-image: url("../../img/error.png");background-repeat: no-repeat;}
  .normal{width:29%; height:16px;background-image: url("../../img/normal.png");background-repeat: no-repeat;}
  .transform{background-image: url("../../img/tranform.png");background-repeat: no-repeat;}
  .iconStyle{transform:rotate(180deg);}
  .iconStyleOut{transform:rotate(180deg);position:absolute;top:-8px;}
  .tagStylesOut{position:absolute;left:399px;top:12px;z-index:99}
  .tagStylesOut b{display:inline-block;height:33px;width:39px;background:#2D8CF0;color:#fff;text-align:center;border-radius: 5px;margin-right:10px;cursor:pointer;margin-top:4px;font-size:14px;line-height:33px;}
  .titletagStyleOutManual{width:226px;height:35px;line-height: 38px;font-size:22px;top:10px;color:#333;text-align: center;background-color:#DDDEE1;margin-left: 1%}
  .ivu-col-span-6{height:44px;}

  .tagListStylesOutManual{width:530px;left:690px;top:6px;z-index: 99;}
  .badagStyle{position:absolute;top:0px;cursor: pointer;z-index: 88}
  .tagBordStyleOutManual{height:34px;width:524px;border:1px solid #19be6b;position:absolute;right:-41.4%;top:1px;border-radius:3px;}
  .tagStylesOutManual{position:absolute;left:46px;top:-2px;width:430px;height:36px;overflow: hidden}
  .tagStylesOutManual p{float:left;height:40px;width:130px;color:#333;text-align:center;margin-right:10px;cursor:pointer;margin-top:4px;font-size:14px;line-height:30px;position:relative;z-index: 9}
  .tagStylesOutManual p:after {content:"";background-color:#2D8CF0;display:inline-block;position:absolute;left:50%;top:58%;}
  .someStyleOutManual{width:800px;position:absolute;left:0;top:0px;padding-left:10px;}
  .leftStyle{position:absolute;left:12px;top:10px;cursor:pointer;z-index: 99}
  .rightStyle{position:absolute;right:12px;top:10px;cursor:pointer;z-index: 99}
  .batchTable{overflow-y: auto}
  .outNumberStyle{position:absolute;left:22px;top:-10px;display: inline-block;height:20px;width:20px;background:#ed3f14;border-radius:50%;color:#fff;text-align: center}
  .highlight{background:yellow !important;}
  .containerTDDIV{background-image:url('../../img/bgwhite.png');background-size:100% 100%;}
  .emptyTitle{font-size: 30px;  color: #ccc;  font-weight: bolder;height:65px;line-height: 50px;}
  .legend{display: inline-block;width: 40px;height:30px;text-align: center;line-height: 20px;}
  .firstRow{width:100%;height:11%;background: #FFFFFF;margin-top:1%;}
  .tableContainer{width:5%;height:11.5%;background: #DDDEE1;margin-top: -3.9%;margin-left: -3.5%;}
</style>
<style>
  #outManual .ivu-tabs-nav-wrap{left:220px !important;position:relative;}
  #outManual .ivu-card-body{padding:10px;}
</style>
<template>
  <div id="outManual">
    <Card :bordered="false" style="height:100%;background: #f7fafd">
      <div class="firstRow">
      <p style="margin-bottom:10px;margin-top:12px">
        <Row :gutter="16">
          <Col span="4" style="margin-top: 0.5%;margin-left: 0.4%">所在厂房 : <Select  style="width:60%;" v-model="defaultFactory" @on-change="factoryChange">
            <Option v-for="(items,index) in factoryData" :value="items.id" :key="index">{{ items.hclCode }}</Option>
          </Select>
          </Col>
          <Col span="4" style="margin-top: 0.5%">所在区域 : <Select  style="width:60%" v-model="selectAreaId"  @on-change="areaChange">
            <Option v-for="(items,index) in areaData" :value="items.id" :key="index">{{ items.name }}</Option>
          </Select>
          </Col>
          <Col span="2" style="margin-top: 0.5%"><Button type="primary" @click="saveFun" icon="ios-list-outline">生成出库单</Button></Col>
          <Col span="3" style="margin-top: 0.5%">批次 :
            <Input placeholder="请输入批次" clearable style="width: 60%" v-model="defaultSearchBatch"></Input>
          </Col>
          <Col span="3" style="margin-top: 0.5%">容器编号 :
            <Input placeholder="请输入容器编号" clearable style="width: 59%;" v-model="containerCode"></Input>
          </Col>
          <Col span="4" style="margin-top: 0.5%;margin-left: 2.5%;">
            <Button type="success" @click="searchManual" icon="ios-search">查询</Button>
            <!--<Button type="primary" @click="smartOut">智能出库</Button>-->
          </Col>
        </Row>
      </p>
      </div>

      <p >
      <p style="margin-bottom: 10px;">
        <Row style="margin-top: 0.5%;background: #ffffff;width:75%;height:10%;">

          <Col span="5">

      <div class="titletagStyleOutManual">
      <img src="../../img/home2.png" style="margin-top: 1%;margin-left: -85%;" />
      <p style="margin-top: -19%;margin-left: 8%;">{{defaultFactoryName}}-{{selectAreaName}}</p>
    </div>
      </Col>
          <Col span="13">&nbsp;

            <div class="tagListStylesOutManual">
              <div class="tagBordStyleOutManual" v-show="tagLists">
                <img src="../../img/leftArrow.png" class="leftStyle" @click="toPositClick(false)"/>
                <div class="tagStylesOutManual">
                  <div :style="tagLeft" class="someStyleOutManual">
                    <template v-for="tag in tagDatas">
                      <p :id="tag.id" @click="tagChange(tag.id)" class="tagStyleOut">{{tag.pidName}}库区{{tag.name}}区</p>
                    </template>
                  </div>
                </div>
                <img src="../../img/rightArrow.png" class='rightStyle' @click="toPositClick(true)"/>
              </div>
              <p class="badagStyle" :style="BadaStyle" @click="clicktagLists">
                <img src="../../img/navigate.png" />
                <span class="outNumberStyle">{{tagCount}}</span>
              </p>
            </div>

          </Col>

        </Row>
      </p>
        <Row>
          <Col span="18">
            <loading-component v-if="tableDatashow"></loading-component>

<h1 style="text-align: center;width:100%;">{{showTet}}</h1>
<!--<Tabs  @on-click="changeRealZ" style="margin:10px 6px 6px 0px;color:#000" v-show="this.showTet == ''? true:false">

  <TabPane :label="compute(index)" v-for="(tab,index) in positionSumZ" :key="index">-->

    <div class="chartPutData" :style="chartPutStyles" id="chartPutData1">
      <div class="tableContainer"></div>
      <table class="outcoordinate outcoordinateX" ref="tableX" id="outcoordinateX1" style="z-index:9">
        <tr>
          <td v-for="eleX in positionX"><div>{{eleX}}</div></td>
        </tr>
      </table>
      <table class="outcoordinate outcoordinateY" ref="tableY" id="outcoordinateY1" style="z-index:5">
        <tr v-for="(eleY,index) in positionY"><td><div>{{Arr[index]}}</div></td></tr>
      </table>
      <div class="outcrdTableContainer" ref="outcrdTableContainer">
        <table class="outcoordinate outcoordinateContain"  id="outcoordinateContain1">
          <tr v-for="(eleY,indY) in positionArr">
            <td v-for="(eleX,indX) in eleY" :style="{background:positionArr[indY][indX].container?positionArr[indY][indX].container.batchColour:'#fff'}" style="position: relative;" @click="tableTdClick(indX,indY)">
              <div :id="positionArr[indY][indX].id" :class="{containerTDDIV:positionArr[indY][indX].container}">
                <p v-if="positionArr[indY][indX].container" :id='positionArr[indY][indX].container.id' style="position:relative;font-size:12px;top:15px;">
                  {{positionArr[indY][indX].container.batch}}<br/>{{positionArr[indY][indX].container?positionArr[indY][indX].container.code:''}}
                  <!-- <br/>{{positionArr[indY][indX].container.material?positionArr[indY][indX].container.material.genericName:''}}-->
                  <br/>{{positionArr[indY][indX].container.u?positionArr[indY][indX].container.u.toFixed(5):'0.0000'}}
                  <span :id="'legendTip'+indY+indX" class="" style="display:block; height:27px;position:absolute;top:-17px;width:60%;left:13px;">
                     <span :class="{tdIcon:true, unbreak:true,broken:(positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('1') != -1)}" ></span>
                     <span :class="{tdIcon:true,errorFree:true,error:(positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('3') != -1)}" ></span>
                     <span :class="{tdIcon:true,normal:true,transform:(positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('2') != -1)}" ></span>
                   </span>
                  <span class="tdIcon unselect" ></span>
                </p>
                <p v-else class="emptyTitle">{{Arr[indY]}}{{(indX+1)<10?'0'+(indX+1):(indX+1)}}</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

<!--  </TabPane>
</Tabs>-->
</Col>
<Col span="1" style="width:2.5%;margin-left: 1px;">
  <Button type="success" size="small" style="margin-top:120px;font-size:22px;width:40px;" @click="removeArrcontainer"><Icon type="arrow-right-a"></Icon></Button>
  <Button type="success" size="small" style="margin-top:30px;font-size:22px;width:40px;" @click="removeArrAllcontainer"><Icon type="shuffle"></Icon></Button>
  <Button type="success" size="small" style="margin-top:30px;font-size:22px;width:40px;" @click="removeTableAllcontainer"><Icon type="shuffle" class="iconStyle"></Icon></Button>

  <div style="margin-top: 110px;"><img src="../../img/transformLegend.png"/><span class="legend">变形</span></div>
  <div style="margin-top: 20px;"><img src="../../img/errorLegend.png"/><span class="legend">误差</span></div>
  <div style="margin-top: 20px;"><img src="../../img/brokenLegend.png"/><span class="legend">破损</span></div>

</Col>
<Col span="5">
  <!--<p style="width:107%;border:1px solid #ccc;height:36px;line-height:36px;font-size: 13px;font-weight:bolder;margin-top:10px;position:relative;padding-left:45px;margin-left:10px;">
    <img src="../../img/toMove.png" style="position:absolute;left:0;top:0"/>
    已出库总元素量: {{sumMetalAmount}}</p>-->
        <div style="background: #FFFFFF;height:10%;width:107%;margin-left:1%;">
  <p style="width:96%;border:1px solid #ccc;height:36px;line-height:36px;font-size: 13px;margin-bottom: 10px;font-weight:bolder;margin-top:-46px;position:relative;padding-left:45px;margin-left:5px;">
    <img src="../../img/outTip.png" style="position:absolute;left:0;top:0"/>
    <span style="display: inline-block;width:50%;">总净重:{{sumMetalAmount}}</span>
    <span style="margin-left: 1%">已出库:{{cookieDataAll.length}} /总出库:{{outTotalCount}}</span>
  </p>
        </div>
  <!--<p style="width:107%;border:1px solid #ccc;height:36px;line-height:36px;margin-bottom: 10px;font-size: 13px;font-weight:bolder;margin-top:10px;position:relative;padding-left:45px;margin-left:10px;">
    <img src="../../img/toMove.png" style="position:absolute;left:0;top:0;"/>
    已出库条数: {{cookieDataAll.length}} /总出库条数：{{outTotalCount}}</p>-->
  <div class="batchTable" ref="batchsTable" style="width:107%;background: #ffffff;margin-top: -2%;margin-left: 1%">
    <table class="table" id="tableOutManual">
      <tr>
        <th><div>容器编码</div></th>
        <th><div>批次</div></th>
        <th><div>净重</div></th>
      </tr>
      <loadingCircle  v-show="cookieDataShow" style="position: absolute;top:135px;width:337px;height:603px;"></loadingCircle>
      <tr v-for="(element,index) in cookieData" v-on:dblclick="tableClick(element,index)">
        <td><div>{{element.container?element.container.code:''}}</div></td>
        <td><div>{{element.container.batch}}</div></td>
        <td><div>{{element.container.netWeight ? element.container.netWeight.toFixed(5) : '0.00000'}}</div></td>
      </tr>
    </table>
  </div>
</Col>

</Row>
</p>

</Card>

<Modal v-model="modalSmartOut"  :title="smartOutTitle" width="1020px" @on-ok="smartOutConfirm">

  <Row>
    <Col span="4">
      <span></span><Input placeholder="请输入目标吨数" clearable style="width: 150px" v-model="totalTonCount"></Input>
    </Col>
    <Col span="4">
      <Col span="3"><Button type="success" @click="smartRecommend">智能推荐</Button></Col>
    </Col>
  </Row>
  <Row style="margin-top: 10px">
    <Table border :columns="columns" :data="tableData" @on-selection-change="handleRowChange" @on-select-all="handleRowChange"></Table>
  </Row>
</Modal>

</div>
</template>
<script>
  import Store from '../../js/store.js';
  import loadingComponent from '../my-components/loading.vue';
  import loadingCircle from '../my-components/loadingCircle.vue';
  import {getmanualStorageInitial,getprintJKByRoom,getswitchMba,getswitchRoom,getBodyasyQueryDetail,getBodyasySaveDetail,getgetBodysInHead,getswitchPosition,getqueryByRoomAndBatch,getRoomListAboutBody,getsingleScanRFID} from '@/api/hclSupport.js'
  export default {
    name: 'putManual',
    components:{
      loadingComponent:loadingComponent,
      loadingCircle:loadingCircle
    },
    data () {
      const validateFromMba = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择发方平衡区'));
        }else {
          callback();
        }
      };
      const validateToMba = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择收方平衡区'));
        }else {
          callback();
        }
      };
      const validateSecret = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择密级'));
        }else {
          callback();
        }
      };
      return {
        cookieData:[],//未入库的body列表
        bodyStatesOperByUser:new Map(),//用户操作的body的状态map，键为body.container对象，值内容为{isMovedToCookieData:是否被移动到了cookieData,belongRoomId:目前所属区域ID,belongBody:container所属body}
        factoryData:'',//所有厂房
        defaultFactory:'',//默认厂房
        selectAreaId:'',//
        areaData:[],//所选平衡区下的所有区域
        allseleAreaMap:{},//所有选择过的区域map，内容为id:room
        currentRoom:{}, //当前区域Room
        Arr:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        positionX:0,//横坐标数量
        positionY:0,//纵坐标数量
        positionArr:[],//表格数组
        idListArr:[],//容器id
        container:[],//容器数据
        moveDataIndex:0,//移动数据的索引
        modal1:false,//生成入库计划单模态框状态
        title:this.$route.query.hclType == 'SI'? '内部发出表头信息': '国内发出表头信息',//生成入库计划单标题
        headSupport:{},//表头信息
        tableDatashow:true,//表格信息显示
        showTet:'',//无库区是显示的文本
        CAN_EDITE : true, //当前位置上有容器且可以编辑该位置
        CAN_NOT_EDITE : false, //当前位置上有容器但不属于该计划单的容器，不可编辑
        tagDatas:[],//标签集合
        storeBatchList:[],//小批次小计
        storeBatchListDefault:'',//默认小计
        showBatch:false,//是否展示批次小计
        currentBatch:'',//民库当前选中的批次
        JK_OR_MK: Store.isJkorMkType(), //军：2  民库：1
        editSupportHeadId:'',//当前编辑的head。新建则为空。
        positionListInCurrentRoom:[],
        beginSearchDate:'',//查询开始时间
        endSearchDate:'',//查询结束时间
        defaultSearchBatch:'',//批次
        country:'',//归属
        tempRoomID:'',//临时room传参
        state:false,//当前位置上容器是否可编辑状态
        modalSmartOut: false,//智能出库modal框
        smartOutTitle: '智能出库',//智能出库title
        totalTonCount: '',//智能出库目标吨数
        transferToCookieData:[],//从智能推荐返回到cookieData的数据
        columns:[//智能出库弹出框列
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            type: 'index',
            title:'序号',
            width: 70,
            align: 'center'
          },
          {
            title: '操作',
            key: 'action',
            width: 130,
            align: 'center',
            render:  (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.editData(params.row);
                    }
                  }
                }, '选择'),
              ]);
            },
          },
          {
            title: '容器年份',
            align: 'center',
            key: 'container',
            render:(h,{row})=>{
              return row.container?h('span', row.container.year):'';
            }
          },
          {
            title: '小批次号',
            align: 'center',
            key: 'container',
            render:(h,{row})=>{
              return row.container?h('span', row.container.batch):'';
            }
          },
          {
            title: '所在区域',
            align: 'center',
            key: 'position',
            render:(h,{row})=>{
              return row.position?h('span', row.position.name):'';
            }
          },
          {
            title: '吨数',
            align: 'center',
            key: 'tonCount'
          },
        ],
        tableData:[//智能推荐方案
          {
            container:{
              year: '2018',
              code: 'A00',
              batch: '0001',
            },
            position:{
              id: '001',
              name: '一区'
            },
            tonCount:50,
          },
          {
            container:{
              year: '2018',
              code: 'A00',
              batch: '0001',
            },
            position:{
              id: '001',
              name: '一区'
            },
            tonCount:50,
          },
          {
            container:{
              year: '2018',
              code: 'A00',
              batch: '0001',
            },
            position:{
              id: '001',
              name: '一区'
            },
            tonCount:50,
          },
          {
            container:{
              year: '2018',
              code: 'A00',
              batch: '0001',
            },
            position:{
              id: '001',
              name: '一区'
            },
            tonCount:50,
          },
        ],
        positionSumZ:1,//层数
        currentPosZ:1,//当前层数
        removeArrcoordinate:[],//存储要移动的坐标
        headData:{},//传入表头组件的数据
        formValidateModal:{
          toMbaList:[],//收方平衡区
          toMba:'',
          fromMbaList:[],
          fromMba:'',
          secret:''
        },
        ruleFormValidateModal: {
          toMba:[
            {required:true, message:'收方平衡区不能为空',trigger:'blur'}
          ],
          fromMba:[
            {required:true, message:'发方平衡区不能为空',trigger:'blur'}
          ],
        },
        defaultFactoryName:'',//平衡区
        selectAreaName:'',//库区
        chartPutStyles:{},//tab样式
        positionFrom:'',//查询入库区间开始位置
        positionTo:'',//查询入库区间结束位置
        //sumMetalAmount:0,//已出库的总金属量
        ruleFromMba:{validator: validateFromMba, trigger: 'blur'},
        ruleToMba:{validator: validateToMba, trigger: 'blur'},
        ruleSecret:{validator: validateSecret, trigger: 'blur'},
        tagCount:0,
        BadaStyle:{left:'140%'},
        tagLists:false,
        tagLeft:{},
        leftNum:0,
        sumPage: 0,//cookie总条数
        pageSize: 100,//cookie分页条数
        page: 1,//cookie当前页数
        cookieDataAll:[],//全部的cookieData
        isInit: true,//是否是初始化进入，
        mask:false,
        saveAreaId: '',
        sumU:0,//已经出库的其他库区的总元素量
        realzName:1,
        outCount:0,//已经出库的其他库区的总条数
        cookieDataShow:false,
        containerCode:'',//容器编号
        isSelect:false,

      }
    },
    props:[
      'data',
    ],
    computed:{
      sumMetalAmount:function(){
        let sum = 0;
        for(let i=0; i< this.cookieDataAll.length; i++){
          sum += this.cookieDataAll[i].container.netWeight ? this.cookieDataAll[i].container.netWeight : 0.00000;
        }
        return (sum + this.sumU).toFixed(5);
      },
      outTotalCount:function(){
        return this.outCount + this.cookieDataAll.length;
      }
    },
    watch:{
      cookieDataAll:function(){
        let that =this;
        let starIndex = Number((this.page - 1) * that.pageSize);
        let endIndex = Number(starIndex + that.pageSize);
        that.sumPage = Math.ceil(this.cookieDataAll.length / that.pageSize);
        //判断下一页的数据个数，如果小于pageSize，则不清空cookieData
        let count = 0;
        for (let i = starIndex; i < endIndex; i++) {
          if (this.cookieDataAll[i]) {
            count++;
          }
        }

        if (count >= that.pageSize) {
          that.cookieData = [];
        }
        for(let i = starIndex;i < endIndex;i++){
          if(this.cookieDataAll[i] && !this.isExist(this.cookieDataAll[i])){
            this.cookieData.push(this.cookieDataAll[i]);
          }
        }
        this.scroll();
      }
    },
    mounted:function(){
      let that = this;
      let heg = $(document).height()-169;
      this.chartPutStyles = {"height":heg+'px'};
      $(".outcrdTableContainer").css("height", heg+'px');
      $(".batchTable").css("height", $(document).height()-169+'px');
      this.cookieData = [];
      this.editSupportHeadId = this.data.id? this.data.id : undefined;
      if(this.data.id){
        this.headData = this.data.headData;
        this.headSupport = {
          'hclType':this.$route.query.hclType,
          'id': this.editSupportHeadId,
          'batch':this.headData.transitBatch,//运输批次
          'fromMba':this.headData.fromMba,
          'toMba':this.headData.toMba,
          'tranNo':this.headData.tranNo,//调拨令号
          //'otherRecNo':this.headData.fromNumber,
          'recNo':this.headData.toNumber,
          'occurDate':this.headData.fromTimeData,//发生日期
          'secret':this.headData.secret,
          'tranPerson':this.headData.sende,
          'checkPerson':this.headData.auditorValue,
          'appPerson':this.headData.appman,
          'remark':this.headData.putRemark,
          'certificate':this.headData.certificate,
          'state': this.$route.query.state?this.$route.query.state:undefined,
        };
      }
      getmanualStorageInitial({ "t":{"batch":"", "hclType":this.data.hclType}, "paraValues":{"hclType":this.data.hclTypeValue}})
        .then((res) => {
          this.tableDatashow = true;
          this.factoryData = res.result.mbaList;//所有厂房
          this.defaultFactory = res.result.defaultMba.id;//默认厂房
        }).catch(function(error){
      });
      this.$refs.outcrdTableContainer.onscroll = function () {

        that.$refs.tableX.style.left = -this.scrollLeft + 40 + 'px';
        that.$refs.tableX.style.top = '0px';
        that.$refs.tableY.style.left = '3px';
        that.$refs.tableY.style.top = -this.scrollTop + 35 + 'px';

      }

    },

    methods:{
      clicktagLists:function(){
        this.tagLists = !this.tagLists;
        //this.tagLists?this.BadaStyle = {left:'12px'}:this.BadaStyle = {left:'101.5%'};
      },
      toPositClick:function(val){
        let maxTime = this.tagCount-3;
        let leftVal = val?this.leftNum+1:this.leftNum-1;
        if(leftVal>=0 && leftVal<=maxTime) {
          this.leftNum = leftVal;
          let leftValue = this.leftNum * (-135) + 'px';
          this.tagLeft = {left: leftValue};
        }

      },
      tagChange:function(item){
        //点击标签事件
        this.selectAreaId = item;
      },
      tableTdClick:function(x,y){
        //其他增减选中
        if(this.$route.query.hclType=='AP' || (this.$route.query.hclType=='AP1') || (this.$route.query.hclType=='TW') || (this.$route.query.hclType=='GA') || (this.$route.query.hclType=='FW') ){
          //单击左表格
          let idx = this.currentPosZ-1;
          this.positionArr[y][x].selectedIcon = !this.positionArr[y][x].selectedIcon;
          if(this.$route.query.remarks=='1' && this.positionArr[y][x].container){
            if(this.positionArr[y][x].container.netWeight=='0' || this.positionArr[y][x].container.netWeight==undefined ){
              console.log(this.$route.query.remarks);
              let tet = '';
              if(this.positionArr[y][x].container){
                tet = '此位置为空容器，请选择有料容器';
              }else{
                tet = '此位置不可选';
              }
              this.$Message.info(tet);
            }else{
              if(this.positionArr[y][x].selectedIcon){
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").addClass("selectedOut");
                this.removeArrcoordinate.push(y+':'+x);
              }else{
                let removeIndex = this.removeArrcoordinate.indexOf((y+':'+x));
                this.removeArrcoordinate.splice(removeIndex,1);
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").removeClass("selectedOut");
              }
            }
          }else{
            if(this.positionArr[y][x].container){
              if(this.positionArr[y][x].selectedIcon){
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").addClass("selectedOut");
                this.removeArrcoordinate.push(y+':'+x);
              }else{
                let removeIndex = this.removeArrcoordinate.indexOf((y+':'+x));
                this.removeArrcoordinate.splice(removeIndex,1);
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").removeClass("selectedOut");
              }
            }else{
              this.$Message.info('此位置不可选');
            }
          }
        }else if(this.$route.query.hclType=='SP' || this.$route.query.hclType=='PI'){
          //单击左表格
          console.log(12);
          let idx = this.currentPosZ-1;
          this.positionArr[y][x].selectedIcon = !this.positionArr[y][x].selectedIcon;
          if(this.$route.query.remarks=='0' && this.positionArr[y][x].container){
            if(this.positionArr[y][x].container.netWeight=='0' || this.positionArr[y][x].container.netWeight==undefined){
              let tet = '';
              if(this.positionArr[y][x].container){
                tet = '此位置为空容器，请选择有料容器';
              }else{
                tet = '此位置不可选';
              }
              this.$Message.info(tet);
            }else{
              if(this.positionArr[y][x].selectedIcon){
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").addClass("selectedOut");
                this.removeArrcoordinate.push(y+':'+x);
              }else{
                let removeIndex = this.removeArrcoordinate.indexOf((y+':'+x));
                this.removeArrcoordinate.splice(removeIndex,1);
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").removeClass("selectedOut");
              }
            }
          }else{
            if(this.positionArr[y][x].container){
              if(this.positionArr[y][x].selectedIcon){
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").addClass("selectedOut");
                this.removeArrcoordinate.push(y+':'+x);
              }else{
                let removeIndex = this.removeArrcoordinate.indexOf((y+':'+x));
                this.removeArrcoordinate.splice(removeIndex,1);
                $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").removeClass("selectedOut");
              }
            }else{
              this.$Message.info('此位置不可选');
            }
          }

        }else{
          //公共的方法
          let idx = this.currentPosZ-1;
          if(this.positionArr[y][x].container && !this.positionArr[y][x].container.emptyContainer ){
            this.positionArr[y][x].selectedIcon = !this.positionArr[y][x].selectedIcon;
            if(this.positionArr[y][x].selectedIcon){
              //$("#legendTip"+y+x).addClass('legendTipSelectedClass');
              $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").addClass("selectedOut");
              this.removeArrcoordinate.push(y+':'+x);
            }else{
              //$("#legendTip"+y+x).removeClass('legendTipSelectedClass');
              let removeIndex = this.removeArrcoordinate.indexOf((y+':'+x));
              this.removeArrcoordinate.splice(removeIndex,1);
              $("#outcoordinateContain1").find('tr').eq(y).find('td').eq(x).find(".unselect").removeClass("selectedOut");
            }
          }else{
            this.$Message.error("请选择非空容器");
          }
        }
      },

      removeArrcontainer:function(){
        //点击移动按钮部分移出事件
        let len = this.removeArrcoordinate.length,that = this;
        let idx = this.currentPosZ-1;
        if(len==0){
          that.$Message.error('请选择出库容器');
        }else{
          for(let i=0;i<len;i++){
            let temporary_storage = this.removeArrcoordinate[i].split(":");
            that.closeNumber(temporary_storage[0],temporary_storage[1]);
            //$("#outcoordinateContain"+idx).eq(temporary_storage[0]).find('td').eq(temporary_storage[1]).find(".selectedStyle").hide();
          }
          $(".selectedStyle").hide();
          //tagDatas
          this.removeArrcoordinate = [];
        }

      },
      removeArrAllcontainer:function(){
        let that = this;
        //全部移出
        $(".selectedStyle").hide();
        this.page = 1;
        let len = this.positionArr.length;
        for(let i=0;i<len;i++){
          let samllLen = that.positionArr[i].length;
          for(let j=0;j<samllLen;j++){
            if(that.positionArr[i][j].container && !this.positionArr[i][j].container.emptyContainer){
              that.closeNumber(that.positionArr[i][j].realY-1,that.positionArr[i][j].realX-1);
            }
          }
        }
        // this.areaTagBuild();
        this.removeArrcoordinate = [];
        this.areaTagBuild();
      },

      removeTableAllcontainer:function(){
        let that = this;
        for (let i in that.cookieDataAll) {
          that.tableClick(that.cookieDataAll[i],i,that.cookieDataAll.length);
        }
        this.areaTagBuild();
        this.cookieDataAll = [];
        this.cookieData = [];
      },
      //平衡区改变事件方法
      factoryChange:function(item){
        let that = this;
        this.tableDatashow = true;
        getswitchMba({'id':item})
          .then((res) => {
            if(res.state && res.state == 1){
              that.$Message.error(res.msg);
              this.tableDatashow = false;
              this.areaData = [];
              this.showTet = res.msg;
            }else{
              if(that.tempRoomID){
                this.selectAreaId = that.tempRoomID;//点击右上角标签区域
                this.saveAreaId = that.tempRoomID;
                that.tempRoomID = '';
              }else{
                this.selectAreaId = res.result.defaultRoom.id;//默认区域
                this.saveAreaId = res.result.defaultRoom.id;
              }
              for (var key in that.factoryData) {
                if (that.factoryData[key].id == that.defaultFactory) {
                  that.defaultFactoryName = that.factoryData[key].name;
                }
              }
              that.currentRoom = res.result.defaultRoom;
              this.areaData = res.result.roomList;//所有区域
              this.showTet ='';
              this.tableDatashow = false;
            }
          })
          .catch(function (error) {
            that.$Message.error('数据连接失败');
          });
      },

      //区域改变事件方法
      areaChange:function(item){

        if(!item){
          return;
        }
        $('.highlight').removeClass('highlight');
       // $('.legendTipSelectedClass').removeClass('legendTipSelectedClass');
        $('.selectedOut').removeClass('selectedOut');
        this.removeArrcoordinate = [];

        if(this.isInit){
          this.getBodysInHead();
        }
        if(!this.isInit){
          this.switchRoomOrLayerSave();
        }
        this.isInit = false;
        this.defaultSearchBatch = '';
        this.beginSearchDate = '';
        this.endSearchDate = '';
      },

      switchRoom:function(item){
        let that = this;
        this.tableDatashow = true;
        that.currentRoom.id = item;
        if(!that.allseleAreaMap[item]){
          that.allseleAreaMap[item] = {"id":item};
        }

        let data = {
          "t":{'id':item,'mba':{'id':this.defaultFactory}},
          "paraValues":{"hclType":this.$route.query.hclType == 'SD'?"02":"15"}
        };

        getswitchRoom(data)
          .then((res) => {

            if(res.state && res.state=="1"){
              that.$Message.error(res.msg);
              this.tableDatashow = false;
              this.showTet = res.msg;
              this.positionX = 0;
              this.positionY = 0;
              this.positionList = [];
              this.buildTable(this.positionList);
            }else{
              //生成表格
              this.showTet = "";
              that.positionSumZ = res.result.positionList[0].room.layers;
              this.positionX = res.result.positionSumX;//X轴数量
              this.positionY = res.result.positionSumY;//Y轴数量
              this.positionList = res.result.positionList;
              this.positionListInCurrentRoom = this.positionList;
              this.buildTable(this.positionList);
              this.tableDatashow = false;
            }
            for (var key in that.areaData) {
              if (that.areaData[key].id == that.selectAreaId) {
                that.selectAreaName = that.areaData[key].name;
              }
            }

          }).catch(function (error) {
          that.$Message.error('数据连接失败');
        });
      },
      //切区或切层的保存方法
      switchRoomOrLayerSave:function(){
        let that = this;
        let submitData = this.generateData();
        if(submitData[0].remarks && submitData[0].remarks == 'delete'){
          submitData[0].fromRoom.id = this.saveAreaId;
        }
        if(submitData.length <= 0){
          return;
        }
        getBodyasySaveDetail(submitData)
          .then((res) => {
            if(res.state && res.state == 1){
              that.$Message.error(res.msg);
            }else{
              console.log(1);
              if(res.result){
                console.log(123213213);
                that.editSupportHeadId = res.result.currentHead.id;
                this.saveAreaId = this.selectAreaId;
                this.getBodysInHead();
                //this.switchRoom(this.selectAreaId);
              }
            }

          })
          .catch(function (error) {
            console.log(123213213);
            that.$Message.error('数据连接失败');
          });
      },
      //查询cookieData的方法
      getBodysInHead: function(){
        //新增时第一次进入页面时，只需要请求switchRoom方法
        if(!this.editSupportHeadId){
          this.switchRoom(this.selectAreaId);
          this.cookieDataAll = [];
          return;
        }else{
          let that = this,
            data = {
              't':{'batch':"",
                'supportHead':{'id':that.editSupportHeadId ? that.editSupportHeadId : '',
                  'hclType':this.$route.query.hclType
                }
              },
              paraValues :{
                'roomId':that.selectAreaId,
                'positionZ':that.currentPosZ,
                "hclType":this.data.hclTypeValue
              },
            };
          this.cookieDataAll = [];
          getgetBodysInHead(data)
            .then((res) => {
              that.cookieDataAll = res.result.supportBodyList ? res.result.supportBodyList : [];
              that.initBSOB();
              //渲染标签
              if(res.result.roomTagList){
                let roomTags = [];
                let tagList = res.result.roomTagList;
                for(let i=0; i < tagList.length; i++){
                  roomTags.push({
                    'id':tagList[i].id,
                    'name':tagList[i].name,
                    'pid':tagList[i].mba.id,
                    'pidName':tagList[i].mba.hclCode,
                  });
                }
                this.sumU = res.result.sumNetWeight ? res.result.sumNetWeight : 0;
                this.outCount = res.result.countCSD ? res.result.countCSD : 0;
                that.tagDatas = roomTags;
                that.tagCount = that.tagDatas.length;
              }
              this.switchRoom(this.selectAreaId);
            }).catch(function(error){
            console.log(error);
            that.$Message.error('数据连接失败');
          });
        }

      },

      /**
       * 层数改变事件方法
       * @author 'liangrui'
       * @param name 层数
       */
      changeRealZ:function(name){
        //改变层数根据层数更新库位
        var that = this;
        this.realzName = Number(name)+1;
        var data = {
          t:{
            realZ:name+1,
            room:{id:this.selectAreaId}
          },
          paraValues:{"hclType":this.$route.query.hclType == 'SD'?"02":"15"}
        };
        this.tableDatashow = true;
        getswitchPosition(data)
          .then((res) => {
            this.showTet = "";
            that.positionSumZ = res.result.positionList[0].room.layers;
            this.currentPosZ = name+1;
            this.positionX = res.result.positionSumX;//X轴数量
            this.positionY = res.result.positionSumY;//Y轴数量
            this.positionList = res.result.positionList;
            this.buildTable(this.positionList);
            this.switchRoomOrLayerSave();
          }).catch(function (error) {
          that.$Message.error('数据连接失败！');
        });
      },

      /**
       * 国内发出，编辑接口，先将选择的需要编辑的内容初始化到BSOB中
       */
      initBSOB:function(){
        let that = this;
        let tempContainerId = "";
        if(this.cookieDataAll.length>0){
          for(let i = 0;i<this.cookieDataAll.length;i++){
            tempContainerId = this.cookieDataAll[i].container.id;
            //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（未入库）
            if(!that.bodyStatesOperByUser.has(tempContainerId)){
              that.bodyStatesOperByUser.set(tempContainerId,{});
            }
            let tempBody = that.bodyStatesOperByUser.get(tempContainerId);
            tempBody.isMovedToCookieData = true;
            tempBody.belongRoomId = '';
            tempBody.belongPosition = undefined;
            tempBody.belongBody = this.cookieDataAll[i];
          }
        }
      },

      /**
       * 绘制左表格
       */
      buildTable:function(positionList){
        let that = this;
        this.positionArr.length = this.positionY;
        let emptyArr = [];
        emptyArr.length = this.positionX;
        emptyArr.fill('');
        for (var i = 0; i < this.positionY; i++) {
          this.positionArr[i] = [...emptyArr];
        }
        //生成二维数组表格
        positionList.forEach(perPosition=>{
          let state = this.CAN_EDITE; //默认该位置可编辑
          that.positionArr[perPosition.realY-1][perPosition.realX-1] = {code:perPosition.code,id:perPosition.id,container:perPosition.container,state:state,realX:perPosition.realX,realY:perPosition.realY,realZ:perPosition.realZ,room:perPosition.room,selectedIcon:false};

          //后台返回该位置上有容器,判断该容器之前是否已被移出该位置,发生移动，需要渲染当前位置的容器信息为空.
          if(perPosition.container && that.bodyStatesOperByUser.has(perPosition.container.id)){
            let bodyState = that.bodyStatesOperByUser.get(perPosition.container.id);
            if(bodyState.isMovedToCookieData){
              that.positionArr[perPosition.realY-1][perPosition.realX-1].container = undefined;
            }
          }

          //对于之前已经发出的容器，此时进行编辑（即双击后回到发出前的原位置），页面需要渲染
          for(var [key,value] in that.bodyStatesOperByUser){
            let bodyStateTemp = value;
            if(bodyStateTemp.belongPosition && bodyStateTemp.belongPosition.id == perPosition.id){
              that.positionArr[perPosition.realY-1][perPosition.realX-1] = {code:perPosition.code,id:perPosition.id,container:bodyStateTemp.belongBody.container,state:that.CAN_EDITE,realX:perPosition.realX,realY:perPosition.realY,realZ:perPosition.realZ,room:perPosition.room,selectedIcon:false};
            }
          }
        });
        this.tableDatashow = false;
      },

      /**
       * 对放在位置上的容器的移除操作
       */
      closeNumber:function(columnY,rowX){
        //this.tagDatas = [];
        let that = this;
        let currentPosition = this.positionArr[columnY][rowX];
        let containerId = currentPosition.container.id;

        //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（未入库）
        if(!that.bodyStatesOperByUser.has(containerId)){
          that.bodyStatesOperByUser.set(containerId, {});
          //国内发出，需要对发出的每个容器生成明细body
          let tempBody = {
            "batch" : currentPosition.container.batch,
            "container": currentPosition.container,
            "fromPosition" : currentPosition,
            "fromRoom": currentPosition.room,
          };
          let bodyToCookieData = that.bodyStatesOperByUser.get(containerId);
          bodyToCookieData.isMovedToCookieData = true;
          bodyToCookieData.belongRoomId = '';
          bodyToCookieData.belongPosition = undefined;
          bodyToCookieData.belongBody = tempBody;
        }else{
          let bodyToCookieData2 = that.bodyStatesOperByUser.get(containerId);
          bodyToCookieData2.isMovedToCookieData = true;
          bodyToCookieData2.belongRoomId = '';
          bodyToCookieData2.belongPosition = undefined;
        }

        this.positionArr[columnY][rowX].container = undefined;

        that.cookieDataAll.unshift(that.bodyStatesOperByUser.get(containerId).belongBody);

        $(".outcoordinateContain").find('tr').eq(columnY).find('td').eq(rowX).find(".selectedStyle").hide();
        /*//选择性的清除掉tagData中的数据，只删除掉在bodyStatesOperByUser中存在而数据,否则全清空后标签会丢失
        for(let i=0;i<this.tagDatas.length;i++){
          for(let [key,value] of that.bodyStatesOperByUser){
            let bodyStateTemp = value;
            if(bodyStateTemp.belongRoomId &&  bodyStateTemp.belongRoomId == this.tagDatas[i].id ){
              this.tagDatas.splice(i,1);
              break;
            }
          }

        }*/
        this.areaTagBuild();
      },

      /**
       * 双击右表格，容器放回原位置
       */
      tableClick:function(element,index,numLen){
        let that = this;

        $("#tableOutManual").find('tr').attr("class","");
        $("#tableOutManual").find('tr').eq(index+1).addClass('bgColor');
        let currentContainer = element.container;
        let realX = element.fromPosition.realX;
        let realY = element.fromPosition.realY;
        let realZ = element.fromPosition.realZ;
        let roomId = element.fromRoom.id;

        this.bodyStatesOperByUser.set(element.container.id,
          {isMovedToCookieData:false,
            belongRoomId:element.fromRoom.id,
            belongPosition:element.fromPosition,
            belongBody:element,
          });

        //将container放回原位置，重新渲染左边的table
        if(roomId == this.selectAreaId && realZ == this.currentPosZ){
          this.positionArr[realY-1][realX-1] = {
            code:element.fromPosition.code,
            id:element.fromPosition.id,
            container:currentContainer,
            state:this.CAN_EDITE,
            realX:realX,
            realY:realY,
            realZ:realZ,
            room:element.fromRoom
          };
        }
        //从cookieData中删除所选的数据
        if(!numLen){
          this.cookieData.splice(index,1);

          let cookieDataAllLength = this.cookieDataAll.length;
          for(let m=0;m<cookieDataAllLength;m++){
            if( this.cookieDataAll[m].container.id == element.container.id){
              this.cookieDataAll.splice(m,1);
              break;
            }
          }
        }

        //选择性的清除掉tagData中的数据，只删除掉在bodyStatesOperByUser中存在而数据,否则全清空后标签会丢失
        for(let i=0;i<this.tagDatas.length;i++){
          for(let [key,value] of that.bodyStatesOperByUser){
            let bodyStateTemp = value;
            if(bodyStateTemp.belongRoomId &&  bodyStateTemp.belongRoomId == this.tagDatas[i].id ){
              this.tagDatas.splice(i,1);
              break;
            }
          }

        }
        this.areaTagBuild();
      },


      /**
       * 根据批次查询容器
       * 返回容器涉及的所有库区room的List
       */
      searchManual:function(){
        let that = this;
        let data = {
          "t":{
            'container':{"code": this.containerCode.trim(),"batch":this.defaultSearchBatch.trim()},
            "supportHead":{
              "hclType":this.data.hclType,
            }
          },
          "paraValues":{"hclType":this.data.hclTypeValue}
        };
        $('.highlight').removeClass('highlight');
        getRoomListAboutBody(data)
          .then((res) => {
            if(res.state && res.state == '1'){
              that.$Message.error(res.msg);
            }else{
              //this.tagDatas = res.result.roomListAboutBody;
              this.tagCount = this.tagDatas.length;
              //根据容器编号查询出容器进行高亮显示
              let containerList = res.result.containerList ? res.result.containerList: [];
              let realzNameTemp = this.realzName-1;
              containerList.forEach(item => {
                $('#chartPutData1').find('#'+item.id).parent().addClass('highlight');
              });
            }
          }).catch(function(error){
          that.$Message.error('数据连接失败');
        });
      },


      /**
       * 对于操作过的区域生产右上角标签
       */
      areaTagBuild:function(){
        //生成厂房标签
        let that = this;
        for(let [key,value] of that.bodyStatesOperByUser){
          let bodyStateTemp = value;
          if(bodyStateTemp.isMovedToCookieData){
            let saveObj = {};
            saveObj.id = bodyStateTemp.belongBody.fromRoom.id;
            saveObj.pid = that.defaultFactory;
            saveObj.name = bodyStateTemp.belongBody.fromRoom.name;
            saveObj.pidName = that.getPidName(that.defaultFactory);
            let flag = true;
            for(let i=0; i<this.tagDatas.length;i++){
              if(saveObj.id == this.tagDatas[i].id){
                flag=false;
              }
            }
            if(flag){
              that.tagDatas.push(saveObj);
            }

          }
        }
        this.tagCount = this.tagDatas.length;
        this.tagDatas.sort(function(a,b){
          if(parseInt(a.name)<parseInt(b.name)){
            return -1;
          }else if(parseInt(a.name)>parseInt(b.name)){
            return 1;
          }
          return 0;
        });
      },
      getPidName:function(id){
        let len = this.factoryData.length,pidName = '';
        for(var i=0;i<len;i++){
          if(id==this.factoryData[i].id){
            pidName = this.factoryData[i].hclCode;
          }
        }
        return pidName;

      },

      beginSearchChange:function(val){
        this.beginSearchDate = val;
      },
      endSearchChange:function(val){
        this.endSearchDate = val;
      },

      beginChange:function(val){
        this.headData.fromTimeData = val;
      },
      endChange:function(val){
        this.toTimeData = val;
      },
      generateData:function(){
        let that = this;
        let cookieDataLen =  this.cookieDataAll.length;
        let submitData = [];
        this.headSupport.id = this.editSupportHeadId ? this.editSupportHeadId:'';
        //未入库容器
        if(cookieDataLen == 0){
          let body = {
            "supportHead":this.headSupport,
            "batch" : '',
            'hclType':this.data.hclType,
            'remarks':'delete',
            'fromRoom':{'id':that.selectAreaId},
            'fromPosition':{'realZ':that.currentPosZ},
          };
          submitData.push(body);
        }else{
          for(let i=0; i<cookieDataLen;i++){
            this.cookieDataAll[i].supportHead = this.headSupport;
            submitData.push(this.cookieDataAll[i]);
          }
        }
        return submitData;
      },
      saveFun:function(){
        let that = this;
        let submitData = this.generateData();
        this.tableDatashow = true;
        this.$emit('saveData',submitData);
        setTimeout(() => {this.tableDatashow = false;},0);
      },
      setAreaChange:function(areaId,FactoryPid){
        if(areaId==this.selectAreaId){
          return;
        }else{
          this.tableDatashow = true;
          this.defaultFactory = FactoryPid;//厂房设置
          this.selectAreaId = areaId;//区域设置
        }
      },
      smartOut:function(){
        //点击智能出库按钮，弹出modal框
        this.modalSmartOut = true;
      },
      smartRecommend:function(){
        //点击智能推荐，查询推荐的出库方案

      },
      smartOutConfirm:function(){
        this.cookieDataAll = [...this.transferToCookieData];
      },
      handleRowChange:function(data){
        //自定义选择
        this.transferToCookieData= data;
      },

      /**
       * @author 'liangrui'
       */
      compute: function(index){
        var str = (index+1) + "层";
        return str;
      },
      scroll: function () {
        /**
         * @author 'zxq'
         */
          //滚动加载
        let that = this;
        Store.scroll(that.$refs.batchsTable, that.sumPage, that.page, function (page) {
          that.page = page;
          that.loadingcookieData(page);
        }, that);
      },
      loadingcookieData: function (page) {
        //滚动分页使用，每次翻页用
        let that = this;
        that.cookieDataShow = true;
        let starIndex = Number((page - 1) * that.pageSize);
        let endIndex = Number(starIndex + that.pageSize);
        that.sumPage = Math.ceil(this.cookieDataAll.length / that.pageSize);
        //判断下一页的数据个数，如果小于pageSize，则不清空cookieData
        let count = 0;
        for (let i = starIndex; i < endIndex; i++) {
          if (this.cookieDataAll[i]) {
            count++;
          }
        }

        if (count >= that.pageSize) {
          that.cookieData = [];
        }
        for(let i = starIndex;i < endIndex;i++){
          if(this.cookieDataAll[i] && !this.isExist(this.cookieDataAll[i])){
            this.cookieData.push(this.cookieDataAll[i]);
          }
        }
        that.$refs.batchsTable.scrollTop = 5;
        that.cookieDataShow = false;
      },
      cancelSave:function(){
        if(this.$route.query.hclType == 'SD'){
          this.$router.push({path: '/outPlan',query:{}});
        }else if(this.$route.query.hclType == 'SI'){
          this.$router.push({path: '/movePlanSI',query:{hclType:this.$route.query.hclType}});
        }
      },
      isExist:function(data){
        for(let i=0; i < this.cookieData.length;i++){
          if(this.cookieData[i].container.id == data.container.id){
            return true;
          }
        }
        return false;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

