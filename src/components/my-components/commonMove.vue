<style>
  .ivu-card-head p{height:35px;}
  #moveManual .ivu-card-body{padding:10px;}
  .ivu-tabs-bar{margin-bottom: 8px}
  #table{border-collapse: collapse;;margin-left:5px;width:97.7%;}
  #table tr{border:1px solid #DDDEE1;color:#333}
  #table td{border:1px solid #DDDEE1;color:#333;cursor:pointer}
  #table th{background:#DDDEE1;color:#333;}
  #table th div{height:29px;width:143px;line-height:29px;text-align:center}
  #table td div{height:29px;width:143px;line-height:29px;text-align:center}
  /* Padding and font style */
  #table td, #table th {
    padding: 2px 7px;  font-size: 12px;  font-family: Verdana;  font-weight: bold;
  }
  .batchTable{overflow-y: auto}
  .floorList li{list-style:none;width:100px;float:left;height:35px;text-align: center;line-height:50px;border:1px solid #DDDEE1;border-radius:3px;border-left:none;border-bottom:none}
  .bgColor{background-color:rgb(156, 186, 95);color:#C6C8CD}
  .closeXMove{display:inline-block;background-image: url("../../img/closeX.png");position:absolute;right:2px;top:-18px;line-height: 17px;width:17px;font-size:10px;cursor:pointer}
  .chartMoveData1{width:100%;overflow: hidden;position:relative;padding-top:40px;padding-left:40px;}
  .coordinate{border-collapse: collapse;}
  .coordinateX{position:absolute;left:40px;top:0;width: auto;}
  .coordinate tr td{border:1px solid #ccc;}
  .coordinateX tr td div{height:40px;width:116px;background:#DDDEE1;text-align: center;line-height:40px;}
  .coordinateY{position:absolute;left:0px;top:40px;width:40px}
  .coordinateY tr td div{height:81px;width:40px;background:#DDDEE1;text-align: center;line-height:81px;}
  .coordinateContain{position:absolute;left:40px;top:40px;width: auto !important;}
  .coordinateContain tr td div{height:71px; width:106px;text-align:center;padding-top:10px;cursor:pointer;margin:5px;}
  .movecrdTableContainer{width:100%;overflow:auto;position:absolute;left:0px;top:0px;}
  .demo-spin-icon-load{  animation: ani-demo-spin 1s linear infinite;}
  .tagStyleMove{display:inline-block;height:30px;width:60px;color:#fff;text-align:center;border-radius: 5px;margin-right:10px;cursor:pointer}
  .tdIcon{display:inline-block;z-index:888;text-align: center;}
  .unselect{width:25%; height:27px;background-image: url("../../img/unselect.png");background-repeat: no-repeat; display: none}
  .selected{position:absolute;bottom:23px;right:5px;width:15px;height:15px;background-image: url("../../img/check.jpg");background-repeat: no-repeat;background-size:100% 100%;display: inline-block}
  .unbreak{width:29%; height:16px;background-image: url("../../img/unbreak.png");background-repeat: no-repeat;}
  .broken{background-image: url("../../img/broken.png");background-repeat: no-repeat;}
  .errorFree{width:29%; height:16px;background-image: url("../../img/errorFree.png");background-repeat: no-repeat;}
  .error{background-image: url("../../img/error.png");background-repeat: no-repeat;}
  .normal{width:29%; height:16px;background-image: url("../../img/normal.png");background-repeat: no-repeat;}
  .transform{background-image: url("../../img/tranform.png");background-repeat: no-repeat;}
  .iconStyle{transform:rotate(180deg);}
  .iconStyleOut{transform:rotate(180deg);position:absolute;top:-8px;}
  .ivu-col-span-6{height:44px;}
  .disable{background-color: #bec0c7;}
  .posun{right:93px;top:-18px}
  .bianxing{right:63px;top:-18px}
  .wuchada{right:34px;top:-18px}
  .highlight{background:yellow !important;}
  .iconStyle{transform:rotate(180deg);}
  .containerTDDIV{background-image:url('../../img/bgwhite.png');background-size:100% 100%;}
  .emptyTitle{font-size: 30px;  color: #ccc;  font-weight: bolder;height:65px;line-height: 50px;}
  .tagListStylesMoveManual{width:530px;left:690px;top:6px;z-index: 99;}
  .badagStyleMove{position:absolute;top:0px;cursor: pointer;z-index: 88}
  .tagBordStyleMoveManual{height:34px;width:524px;border:1px solid #19be6b;position:absolute;right:-4.4%;top:1px;border-radius:3px;}
  .tagStylesMoveManual{position:absolute;left:46px;top:-2px;width:430px;height:36px;overflow: hidden}
  .tagStylesMoveManual p{float:left;height:40px;width:130px;color:#333;text-align:center;margin-right:10px;cursor:pointer;margin-top:4px;font-size:14px;line-height:30px;position:relative;z-index: 999}
  .tagStylesMoveManual p:after {content:"";background-color:#2D8CF0;display:inline-block;position:absolute;left:50%;top:58%;}
  .someStyleMoveManual{width:800px;position:absolute;left:0;top:0px;padding-left:10px;}
  .leftStyleMove{position:absolute;left:12px;top:10px;cursor:pointer;z-index: 99}
  .rightStyleMove{position:absolute;right:12px;top:10px;cursor:pointer;z-index: 99}
  .titletagStyleMoveManual{width:216px;height:35px;line-height: 38px;font-size:22px;top:10px;color:#333;text-align: center;background-color: #dddee1;}
  .tagStyleMove{display:inline-block;height:30px;width:60px;color:#fff;text-align:center;border-radius: 5px;margin-right:10px;cursor:pointer}
  .moveNumberStyle{position:absolute;left:22px;top:-10px;display: inline-block;height:20px;width:20px;background:#ed3f14;border-radius:50%;color:#fff;text-align: center}
  .closeX{width:16px;height:16px;cursor:pointer;position:absolute;top:-22px;background-image: url("../../img/closeRed.png");background-repeat:no-repeat;background-size:100% 100%;}
 .unselecteClose{width:16px;height:16px;cursor:pointer;position:absolute;top:-22px;right:5px;background-image: url("../../img/unselect.png");background-repeat:no-repeat;background-size:100% 100%;}
  .fontColor{color:#ff9932;line-height:30px;}
</style>
<template>
  <div id="moveManual">
    <Card :bordered="false" style="height:100%;">
      <p style="margin-bottom:10px;margin-top:12px">
        <Row>
          <Col span="4">所在厂房 : <Select  style="width:160px" v-model="defaultFactory" @on-change="factoryChange">
            <Option v-for="(items,index) in factoryData" :value="items.id" :key="items.index">{{ items.name }}</Option>
          </Select>
          </Col>
          <Col span="4">所在区域 : <Select  style="width:160px" v-model="selectAreaId"  @on-change="areaChange">
            <Option v-for="items in areaData" :value="items.id" :key="items.name">{{ items.name }}</Option>
          </Select>
          </Col>
          <Col span="3"><Button type="success" @click="saveSure" :disabled="buildBtn">生成支持性文件</Button></Col>
          <Col span="4" v-if="!isExcludeBatch">批次 :
            <Input placeholder="请输入批次" clearable style="width: 150px;" v-model="defaultSearchBatch"></Input>
          </Col>
          <Col span="3">容器编号 :
            <Input placeholder="请输入容器编号" clearable style="width: 60%;" v-model="containerCode"></Input>
          </Col>
          <Col span="2"><Button type="success" @click="searchManual">查询</Button></Col>
        </Row>
      </p>
      <p style="margin-bottom: 10px;">
        <Row>
          <Col span="5"><p class="titletagStyleMoveManual">{{defaultFactoryName}}-{{selectAreaName}}</p></Col>
          <Col span="13">&nbsp;
            <div class="tagListStylesMoveManual">
              <div class="tagBordStyleMoveManual" v-show="tagLists">
                <img src="../../img/leftArrow.png" class="leftStyleMove" @click="toPositClick(false)"/>
                <div class="tagStylesMoveManual">
                  <div :style="tagLeft" class="someStyleMoveManual">
                    <template v-for="tag in tagDatas">
                      <p :id="tag.id" @click="tagChange(tag.id)" class="tagStyleMove">{{tag.pidName}}库区{{tag.name}}区</p>
                    </template>
                  </div>
                </div>
                <img src="../../img/rightArrow.png" class='rightStyleMove' @click="toPositClick(true)"/>
              </div>
              <p class="badagStyleMove" :style="BadaStyleMove" @click="clicktagLists">
                <img src="../../img/navigate.png" />
                <span class="moveNumberStyle">{{tagCount}}</span>
              </p>
            </div>
          </Col>
        </Row>
      </p>
      <p>
        <Row>
          <Col span="19">
            <loading-component v-if="tableDatashow"></loading-component>
            <div style="width:100%;positon:relative;">


            </div>
            <h1 style="text-align: center;width:100%;">{{showTet}}</h1>
            <div class="chartMoveData1"  id="chartMoveData1" >

              <table class="coordinate coordinateX" ref="tableX" id="coordinateX1" style="z-index:6">
                <tr>
                  <td v-for="eleX in positionX"><div>{{eleX}}</div></td>
                </tr>
              </table>
              <table class="coordinate coordinateY" ref="tableY" id="coordinateY1" style="z-index:5">
                <tr v-for="(eleY,index) in positionY"><td><div>{{Arr[index]}}</div></td></tr>
              </table>
              <div class="movecrdTableContainer" ref="movecrdTableContainer">
                <table class="coordinate coordinateContain"  id="coordinateContain1">
                  <tr v-for="(eleY,indY) in positionArr">
                    <td v-for="(eleX,indX) in eleY"  @click="getData(indX,indY)" :style="{background:positionArr[indY][indX].container?positionArr[indY][indX].container.batchColour:'#fff'}">
                      <div :id="positionArr[indY][indX].id" :class="{containerTDDIV:positionArr[indY][indX].container}">
                        <div v-if="positionArr[indY][indX].container" :id='positionArr[indY][indX].container.id' style="position:relative;font-size:12px;top:7px;">
                          {{positionArr[indY][indX].container.batch}}<br/>{{positionArr[indY][indX].container?positionArr[indY][indX].container.code:''}}
                          <span class="tdIcon unselect"></span>
                          <p class="unselecteClose" v-if="!positionArr[indY][indX].state"></p>
                          <p class="closeX" v-if="positionArr[indY][indX].state" @click.stop.prevent="closeNumber(indY,indX)"></p>
                            <span :id="'legendTip'+indY+indX" style="display:inline-block;width:91%; height:27px;position:absolute;top:-22px;left:-7px">
                             <span :class="{tdIcon:true, unbreak:true,broken:(positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('1') != -1)}"></span>
                             <span :class="{tdIcon:true,errorFree:true,error:(positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('3') != -1)}"></span>
                             <span :class="{tdIcon:true,normal:true,transform:(positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('2') != -1)}"></span>
                           </span>
                        </div>
                        <p v-if="!positionArr[indY][indX].container && !positionArr[indY][indX].canNotSelect" class="emptyTitle">{{Arr[indY]}}{{(indX+1)<10?'0'+(indX+1):(indX+1)}}</p>
                        <p v-if="!positionArr[indY][indX].container && positionArr[indY][indX].canNotSelect" class="sizeMegStyle fontColor">已占用</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </Col>

          <Col span="1" style="width:2.5%;margin-left:10px;">

            <Button type="success" size="small" style="margin-top:120px;font-size:22px;width:40px;" @click="removeArrcontainer"><Icon type="arrow-right-a"></Icon></Button>
            <Button type="success" size="small" style="margin-top:30px;font-size:22px;width:40px;" @click="removeArrAllcontainer"><Icon type="shuffle"></Icon></Button>
            <Button type="success" size="small" style="margin-top:30px;font-size:22px;width:40px;" @click="removeTableAllcontainer"><Icon type="shuffle" class="iconStyle"></Icon></Button>

            <div style="margin-top: 120px;"><img src="../../img/transformLegend.png"/><span class="legend">变形</span></div>
            <div style="margin-top: 40px;"><img src="../../img/errorLegend.png"/><span class="legend">误差</span></div>
            <div style="margin-top: 40px;"><img src="../../img/brokenLegend.png"/><span class="legend">破损</span></div>

          </Col>
          <Col span="4">
            <div class="batchTable" style="width:107%;">
              <table class="table" id="table">
                <tr>
                  <th><div>容器编码</div></th>
                  <th><div>批次</div></th>
                </tr>
                <loadingCircle  v-show="cookieDataShow" style="position: absolute;top:135px;width:337px;height:603px;"></loadingCircle>
                <tr v-for="(element,index) in cookieData" @click.prevent="tableClick(index)" v-on:dblclick="tabledbClick(element,index)">
                  <td><div>{{element.container?element.container.code:''}}</div></td>
                  <td><div>{{element.container.batch}}</div></td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </p>
    </Card>
  </div>
</template>
<script>
  import Store from '../../js/store.js';
  import loadingComponent from '../my-components/loading.vue';
  import loadingCircle from '../my-components/loadingCircle.vue'
  export default {
    name: 'commonMove',
    components:{
      loadingComponent:loadingComponent,
      loadingCircle:loadingCircle
    },
    data () {
      const validateSecret = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择密级'));
        }else {
          callback();
        }
      };
      return {
        cookieData:[],//未入库的body列表
        bodyStatesOperByUser:{},//用户操作的body的状态map，键为body.container对象，值内容为{isMovedToCookieData:是否被移动到了cookieData,belongRoomId:目前所属区域ID,belongBody:container所属body}
        //134345:'',
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
        title:'位置转移表头信息',//生成入库计划单标题
        tableDatashow:true,//表格信息显示
        showTet:'',//无库区是显示的文本
        CAN_EDITE : true, //当前位置上有容器且可以编辑该位置
        CAN_NOT_EDITE : false, //当前位置上有容器但不属于该计划单的容器，不可编辑
        tagDatas:[],//标签集合
        positionOfRemoveCon:[],//该数组用于存放当前计划单下被移除容器的位置id
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
        belongsTo:'',//归属
        tempRoomID:'',//临时room传参
        state:false,//当前位置上容器是否可编辑状态
        modalSmartOut: false,//智能出库modal框
        totalTonCount: '',//智能出库目标吨数
        transferToCookieData:[],//从智能推荐返回到cookieData的数据
        buildBtn:false,
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
        headData:{},//传入表头组件的数据
        removeArrcoordinate:[],//存储要移动的坐标
        containerCode:'',
        realzName:1,
        maskClose:false,
        BadaStyleMove:{left:'104.3%'},
        tagLists:false,
        //tagCount:0,
        tagLeft:{},
        leftNum:0,
        defaultFactoryName:'',//平衡区
        selectAreaName:'',//库区
        ruleSecret:{validator: validateSecret, trigger: 'blur'},
        formValidateModal:{
          secret:''
        },
        secretList:[],
        isExcludeBatch:false,
        cookieDataShow:false,

      }
    },
    props:[
      'data',
    ],
    mounted:function(){
      this.isExcludeBatch = this.data.isExcludeBatch;
      let heg = $(document).height()-169,that = this;
      $(".movecrdTableContainer").css("height", heg+'px');
      $(".batchTable").css("height", $(document).height()-169+'px');
      $(".chartMoveData1").css("height",heg);
      this.cookieData = [];
      this.transferData = [];
      this.editSupportHeadId = this.$route.query.id? this.$route.query.id : undefined;
      if(this.editSupportHeadId){
        let outDatas = this.data.moveData;
        this.cookieData = outDatas ? outDatas.page : [];
        this.transferData = outDatas ? outDatas.page : [];
        this.initBSOB();

      }
      this.$post('/a/storage/supportBody/invokeSpecifiedMehtod/manualStorageInitial',{ "t":{"batch":""}, "paraValues":{"hclType":this.data.hclTypeValue}})
        .then((res) => {
          this.tableDatashow = true;
          this.factoryData = res.result.mbaList;//所有厂房
          this.defaultFactory = res.result.defaultMba.id;//默认厂房
        }).catch(function(error){
        }).catch(function(error){
      });
      this.$refs.movecrdTableContainer.onscroll = function () {

        that.$refs.tableX.style.left = -this.scrollLeft + 40 + 'px';
        that.$refs.tableX.style.top = '0px';
        that.$refs.tableY.style.left = '0px';
        that.$refs.tableY.style.top = -this.scrollTop + 40 + 'px';

      }
    },
    computed:{
      tagCount:function(){
        return this.tagDatas.length;
      }
    },
    methods:{
      beginChange: function (val) {
        this.headData.fromTimeData = val;
      },
      endChange:function(val){
        this.headData.sendDate = val;
      },

      /**
       * 移库，编辑接口，先将选择的需要编辑的内容初始化到BSOB中
       */
      initBSOB:function(){
        let that = this;
        let tempContainerId = "";
        if(this.cookieData && this.cookieData.length>0){
          for(let i = 0;i<this.cookieData.length;i++){
            tempContainerId = this.cookieData[i].container.id;
            //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（未入库）
            if(!that.bodyStatesOperByUser[tempContainerId]){
              that.bodyStatesOperByUser[tempContainerId] = {};
            }
            that.bodyStatesOperByUser[tempContainerId].isMovedToCookieData = false;
            that.bodyStatesOperByUser[tempContainerId].belongRoomId = this.cookieData[i].toRoom.id;
            that.bodyStatesOperByUser[tempContainerId].belongPosition = this.cookieData[i].toPosition;
            that.bodyStatesOperByUser[tempContainerId].belongBody = this.cookieData[i];
          }
        }
        this.cookieData = [];
        this.areaTagBuild();
      },


      //平衡区改变事件方法
      factoryChange:function(item){
        let that = this;
        this.tableDatashow = true;
        this.$post('/a/entity/mba/switchMba',{'id':item})
          .then((res) => {
            if(res.state && res.state == 1){
              that.$Message.error(res.msg);
              this.tableDatashow = false;
              this.areaData = [];
              this.showTet = res.msg;
            }else{
              if(that.tempRoomID){
                this.selectAreaId = that.tempRoomID;//点击右上角标签区域
                that.tempRoomID = '';
              }else{
                this.selectAreaId = res.result.defaultRoom.id;//默认区域
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
        let that = this;
        $('.selected').hide();
        this.removeArrcoordinate = [];

        that.currentRoom.id = item;
        if(!that.allseleAreaMap[item]){
          that.allseleAreaMap[item] = {"id":item};
        }

        let data = {
          "t":{'id':item,'mba':{'id':this.defaultFactory}},
          "paraValues":{"hclType":this.data.hclTypeValue}
        };
        this.tableDatashow = true;
        this.$post('/a/entity/room/switchRoom',data)
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
              that.positionListInCurrentRoom = this.positionList;
              this.buildTable(this.positionList);
              //this.areaTagBuild();
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
          paraValues:{"hclType":"20"}
        };
        this.tableDatashow = true;
        this.$post('/a/entity/position/switchPosition',data)
          .then((res) => {
            this.showTet = "";
            that.positionSumZ = res.result.positionList[0].room.layers;
            this.currentPosZ = name+1;
            this.positionX = res.result.positionSumX;//X轴数量
            this.positionY = res.result.positionSumY;//Y轴数量
            this.positionList = res.result.positionList;
            this.buildTable(this.positionList);

          }).catch(function (error) {
          that.$Message.error('数据连接失败！');
        });
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

          that.positionArr[perPosition.realY-1][perPosition.realX-1] = {
            code:perPosition.code,
            id:perPosition.id,
            container:perPosition.container,
            state:perPosition.container && perPosition.container.supportHeadId==this.$route.query.id ? this.CAN_EDITE:this.CAN_NOT_EDITE ,
           // state:this.CAN_NOT_EDITE,
            realX:perPosition.realX,
            realY:perPosition.realY,
            realZ:perPosition.realZ,
            room:perPosition.room,
            canNotSelect: false
            //perPosition.remarks == 'PLAN' ? true : false,
          };

          //后台返回该位置上有容器,判断该容器之前是否已被移动到其他位置,发生移动，需要渲染当前位置的容器信息为空.
          if(perPosition.container && that.bodyStatesOperByUser[perPosition.container.id]){
            let bodyState = that.bodyStatesOperByUser[perPosition.container.id];
            if(bodyState.isMovedToCookieData || perPosition.id != bodyState.belongBody.toPosition.id){
              that.positionArr[perPosition.realY-1][perPosition.realX-1].container = undefined;
            }
          }

          //该数组用于存放所有目的位置的id
          let tempPosition = [];

          //本计划单下有容器被移动到该位置，需要渲染当前位置
          for(var key in that.bodyStatesOperByUser){
            let bodyStateTemp = that.bodyStatesOperByUser[key];
            if(bodyStateTemp.belongBody.toPosition && bodyStateTemp.belongBody.toPosition.id == perPosition.id){
              /*that.positionArr[perPosition.realY-1][perPosition.realX-1] = {
                code:perPosition.code,
                id:perPosition.id,
                container:bodyStateTemp.belongBody.container,
                state:that.CAN_EDITE,
                realX:perPosition.realX,
                realY:perPosition.realY,
                realZ:perPosition.realZ,
                room:perPosition.room,
                canNotSelect:false
              };*/
              that.positionArr[perPosition.realY-1][perPosition.realX-1].container = bodyStateTemp.belongBody.container;
              that.positionArr[perPosition.realY-1][perPosition.realX-1].state = that.CAN_EDITE;
            }

            if(bodyStateTemp.belongPosition){
              tempPosition.push(bodyStateTemp.belongPosition.id);
            }
          }
          //该位置状态为plan（有容器计划放入该位置），且该位置不属于本计划单下的目的位置，则不可编辑（即有其他计划单的容器计划放入该位置，则该位置被占用，不可操作）
          if(perPosition.remarks && perPosition.remarks == "PLAN"
            && tempPosition.indexOf(perPosition.id) == -1 && that.positionOfRemoveCon.indexOf(perPosition.id)==-1 ){
            that.positionArr[perPosition.realY - 1][perPosition.realX - 1].canNotSelect = true;
          }

        });
        this.tableDatashow = false;
      },

      /**
       * 对放在位置上的容器的移除操作
       */
      closeNumber:function(columnY,rowX){
        $(".coordinateContain").find('tr').eq(columnY).find('td').eq(rowX).find(".selected").hide();
        if(this.positionArr[columnY][rowX].container && this.positionArr[columnY][rowX].container.emptyContainer == this.data.isEmptyContainer){
          this.tagDatas = [];
          let that = this;
          let currentPosition = this.positionArr[columnY][rowX];
          let containerId = currentPosition.container.id;

          //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（未入库）
          if(!that.bodyStatesOperByUser[containerId]){
            that.bodyStatesOperByUser[containerId] = {};
            //国内发出，需要对发出的每个容器生成明细body
            let tempBody = {
              "batch" : currentPosition.container.batch,
              "container": currentPosition.container,
              "fromPosition" : currentPosition,
              "fromRoom": currentPosition.room,
            };
            that.bodyStatesOperByUser[containerId].isMovedToCookieData = true;
            that.bodyStatesOperByUser[containerId].belongRoomId = '';
            that.bodyStatesOperByUser[containerId].belongPosition = undefined;
            that.bodyStatesOperByUser[containerId].belongBody = tempBody;
          }else{
            that.bodyStatesOperByUser[containerId].isMovedToCookieData = true;
            that.bodyStatesOperByUser[containerId].belongRoomId = '';
            that.bodyStatesOperByUser[containerId].belongPosition = undefined;
            that.bodyStatesOperByUser[containerId].belongBody.toPosition = undefined;
            that.bodyStatesOperByUser[containerId].belongBody.toRoom = undefined;
          }
          this.positionArr[columnY][rowX].container = undefined;
          that.positionOfRemoveCon.push(currentPosition.id);
          that.cookieData.push(that.bodyStatesOperByUser[containerId].belongBody);
          $(".coordinateContain").find('tr').eq(columnY).find('td').eq(rowX).children().removeClass('highlight');
          this.areaTagBuild();
        }else{
          if(this.data.isEmptyContainer){
            this.$Message.error("请选择空容器");
          }else{
            this.$Message.error("请选择非空容器");
          }

        }
        //console.log(this.cookieData);

      },
      removeArrcontainer:function(){
        //点击移动按钮部分移出事件
        let len = this.removeArrcoordinate.length,that = this;
        if(len==0){
          that.$Message.error('请选择出库容器');
        }else{
          for(var i=0;i<len;i++){
            let temporary_storage = this.removeArrcoordinate[i].split(":");
            that.closeNumber(temporary_storage[0],temporary_storage[1]);
          }
          this.removeArrcoordinate = [];
        }

      },
      removeArrAllcontainer:function(){
        let that = this;
        //全部移出
        $(".selected").hide();
        let len = this.positionArr.length;
        for(let i=0;i<len;i++){
          let samllLen = that.positionArr[i].length;
          for(let j=0;j<samllLen;j++){
            if(that.positionArr[i][j].container && this.positionArr[i][j].container.emptyContainer  == this.data.isEmptyContainer){
              that.closeNumber(that.positionArr[i][j].realY-1,that.positionArr[i][j].realX-1);
            }
          }
        }

      },

      removeTableAllcontainer:function(){
        let that = this;
        for (let i in that.cookieData) {
          that.tabledbClick(that.cookieData[i],i,that.cookieData.length);
        }
        this.cookieData = [];
      },
      tableClick:function(idx){
        ///单击右表格
        this.moveDataIndex = idx;
        $("#table").find('tr').attr("class","");
        $("#table").find('tr').eq(idx+1).addClass('bgColor');
      },

      /**
       * 双击右表格，容器放回原位置
       */
      tabledbClick:function(element,index,num){
        $("#table").find('tr').attr("class","");
        $("#table").find('tr').eq(index+1).addClass('bgColor');
        let currentContainer = element.container;
        let realX = element.fromPosition.realX;
        let realY = element.fromPosition.realY;
        let realZ = element.fromPosition.realZ;
        let roomId = element.fromRoom.id;

        if(this.positionArr[realY-1][realX-1].container){
            this.$Message.error('原位置:'+  this.Arr[realY-1]+(realX)  +'上有容器,请移除原位置上的容器，此容器才可回归原位');
        }else{
          //移库双击操作：将容器放回初始位置，并且将其目的位置置空。
          this.bodyStatesOperByUser[currentContainer.id].isMovedToCookieData = false;
          this.bodyStatesOperByUser[currentContainer.id].belongRoomId = roomId;
          this.bodyStatesOperByUser[currentContainer.id].belongPosition = element.fromPosition;

          //设置body的toposition和toRoom
          this.bodyStatesOperByUser[currentContainer.id].belongBody.toPosition = element.fromPosition;
          this.bodyStatesOperByUser[currentContainer.id].belongBody.toRoom = element.fromRoom;

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
              room:element.fromRoom,
              remarks:element.remarks
            };
            //console.log(this.positionArr[realY-1][realX-1]);
          }
          //从cookieData中删除所选的数据
          if(!num){
            this.cookieData.splice(index,1);
          }
        }


      },
      /**
       * 将容器移动到某位置上
       */
      getData:function(rowX,columnY){
        //点击左表格
        if(this.positionArr[columnY][rowX].canNotSelect){
          //element.remarks == 'PLAN'表示此位置上有未审核的容器，USED表示已经有容器，EMPTY表示没有容器
          this.$Message.error("此位置已有其他计划单尚未审核的容器，请选择其他位置");
          return;
        }
        let that = this,bgColorLen = $("#table").find(".bgColor").length;
        let currentPosition = this.positionArr[columnY][rowX];
        let hasContainer = currentPosition.container;
        if(bgColorLen && !hasContainer){
          //that.tableDatashow = true;
          let bodyBeforeMove = this.cookieData[this.moveDataIndex];

          bodyBeforeMove.toPosition = currentPosition;//设置该明细的目的位置
          bodyBeforeMove.toRoom = currentPosition.room;//{"id":that.currentRoom.id};//设置该明细的目的位置
          //bodyBeforeMove.ContainerStata = that.defaultContainerStata;

          //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（已入库），belongRoomID为null
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].isMovedToCookieData = false;
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongRoomId = bodyBeforeMove.toRoom.id;
          //设置body的toposition和toRoom
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongBody.toPosition = currentPosition;
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongBody.toRoom = currentPosition.room;

          currentPosition.container = bodyBeforeMove.container;//设置该位置的容器
          currentPosition.state = true;
          that.cookieData.splice(that.moveDataIndex,1);
          //$("#table").find('tr').attr("class","");
          this.areaTagBuild();
        }else if(hasContainer && !currentPosition.canNotSelect){
          if(this.positionArr[columnY][rowX].container && this.positionArr[columnY][rowX].container.emptyContainer  == this.data.isEmptyContainer){
            this.positionArr[columnY][rowX].selectedIcon = !this.positionArr[columnY][rowX].selectedIcon;
            if(this.positionArr[columnY][rowX].selectedIcon){
              $("#coordinateContain1").find('tr').eq(columnY).find('td').eq(rowX).find(".unselect").addClass("selected");
              this.removeArrcoordinate.push(columnY+':'+rowX);
            }else{
              $("#coordinateContain1").find('tr').eq(columnY).find('td').eq(rowX).find(".unselect").removeClass("selected");
              let removeIndex = this.removeArrcoordinate.indexOf((columnY+':'+rowX));
              this.removeArrcoordinate.splice(removeIndex,1);
            }
          }else if(this.positionArr[columnY][rowX].container && this.positionArr[columnY][rowX].container.emptyContainer == !this.data.isEmptyContainer){
            if(this.data.isEmptyContainer){
              this.$Message.error("请选择空容器");
            }else{
              this.$Message.error("请选择非空容器");
            }
          }
        }else if(!bgColorLen){
          that.$Message.error("请选择入库容器");
        }
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
        this.$post('a/storage/supportBody/invokeSpecifiedMehtod/getRoomListAboutBody',data)
          .then((res) => {
            if(res.state && res.state == '1'){
              that.$Message.error(res.msg);
            }else{
              /*if(this.defaultFactory == res.result.defaultRoom.mba.id){
                this.selectAreaId = res.result.defaultRoom.id;
              }else{
                this.defaultFactory = res.result.defaultRoom.mba.id;
                this.tempRoomID = res.result.defaultRoom.id;
              }*/
              this.tagDatas = res.result.roomListAboutBody;
              // this.tagCount = this.tagDatas.length;
              //根据容器编号查询出容器进行高亮显示
              let containerList = res.result.containerList ? res.result.containerList: [];
              let realzNameTemp = this.realzName-1;
              containerList.forEach(item => {
                $('#chartMoveData1').find('#'+item.id).parent().addClass('highlight');
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
        that.tagDatas = [];
        for(var key in that.bodyStatesOperByUser){
          let bodyStateTemp = that.bodyStatesOperByUser[key];

          if(!bodyStateTemp.isMovedToCookieData){
            let saveObj = {};
            saveObj.id = bodyStateTemp.belongRoomId;
            saveObj.pid = that.defaultFactory;
            saveObj.name = bodyStateTemp.belongBody.toRoom.name;
            /**
             * @author 'liangrui'
             */
            let flag = true;
            for(let i=0; i<this.tagDatas.length;i++){
              if(saveObj.id == this.tagDatas[i].id){
                flag=false;
                break;
              }
            }
            if(flag){
              that.tagDatas.push(saveObj);
            }
          }
        }
      },

      beginSearchChange:function(val){
        this.beginSearchDate = val;
      },
      endSearchChange:function(val){
        this.endSearchDate = val;
      },
      //生成支持性文件保存方法
      saveSure:function(){
        let that = this;
        let submitData = [];

        //判断是否有未入库容器
        if(this.cookieData.length >=1){
          that.$Message.error("存在未完成移库的容器！请全部移库后再提交数据。");
          return;
        }
        //将已经移库的容器放入保存的列表
        for(var key in that.bodyStatesOperByUser){

          let bodyStateTemp = that.bodyStatesOperByUser[key];

          //bodyStateTemp.belongBody.supportHead = this.headSupport;
          //fromRoom是原来的位置，toRoom是新的位置
          if(bodyStateTemp.belongBody.toPosition.id == bodyStateTemp.belongBody.fromPosition.id){
            continue;
          }
          submitData.push(bodyStateTemp.belongBody);
        }

        if(!submitData.length){
          that.$Message.error("所有的容器都回归原位置，请确认是否删除该计划单，或者重新移库");
          return;
        }
        this.tableDatashow = true;
        //this.buildBtn = true;
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
          this.tableDatashow = false;
        }
      },
      cancelTabHead:function(){
        this.$router.push({path:'/movePlanWY',query:{'hclType':'WY'}});
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
      clicktagLists:function(){
        this.tagLists = !this.tagLists;
        //this.tagLists?this.BadaStyleMove = {left:'12px'}:this.BadaStyleMove = {left:'89.5%'};
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

