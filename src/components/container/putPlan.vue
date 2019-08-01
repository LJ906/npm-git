<style scoped>
  .ivu-card-head p{height:35px;}
  .ivu-notice-notice{top:54px;right:100px;}
  #putPlan{height:100%;padding-top:10px;}
  .contaiStyles{height:50px;background:#fff;margin-left:10px;position:relative;top:10px;border-radius:5px;margin-right:10px;}
</style>
<style>
  #putPlan .ivu-card-body{
    padding:0px;
    opacity:1;
    background:#f1f3f4;
    position:relative;
    height:800px;
  }
  .ivu-form .ivu-form-item-label{
    margin:0;
  }

</style>
<template>

  <div id="putPlan" >
        <Spin fix v-show="markLoading">
          <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
          <div>{{loadingTet}}</div>
        </Spin>
        <div class="contaiStyles">
          <Row>
            <Col span="20" style="width:100%;position:relative;margin-top: 9px;margin-left: 20px;">
              <Col span="4">
                <!--批号 :  <Input placeholder="请输入" clearable style="width: 150px;" v-model="submitNumber"></Input>&#12288;-->
                表单状态 : <Select  style="width:150px" v-model="sumitState">
                <Option value="" key="">请选择</Option>
                <Option v-for="items in formStates" :value="items.formValue" :key="items.formValue">{{ items.formState }}</Option>
              </Select>&#12288;
              </Col>
              <Col span="4" >
                收方表单编号: <Input placeholder="请输入" clearable style="width: 150px;" v-model="recNo"></Input>&#12288;
              </Col>
              <Col span="9" >
                &nbsp;&nbsp;&nbsp;开始时间: <DatePicker type="date" placeholder="开始时间" format="yyyy-MM-dd HH:mm:ss"  style="width: 170px;" :value="beginData" @on-change="beginChange"></DatePicker>
                结束时间:&nbsp;<DatePicker  type="date" placeholder="结束时间" format="yyyy-MM-dd HH:mm:ss" style="width: 170px;" :value="endData" @on-change="endChange"></DatePicker>&#12288;
              </Col>
              <Button type="success" @click="searchMethod" icon="ios-search">查询</Button>
              <template v-if='isLeafMba'>
                <Button type="success" @click="createHead" icon="ios-plus-outline">新建</Button>
              </template>
              <template v-if='isLeafMba'>
                <Upload multiple :action="ctx+'/a/storage/uploadFile/uploadxml?thread='+randomNum+''" :on-success='JKimportDataList'
                        :with-credentials="true" :show-upload-list="false" :before-upload="JKuploadbefore"
                        style="display:inline-block">
                  <Button type="primary" icon="ios-download-outline">导入xml</Button>
                </Upload>
              </template>
            </Col>
          </Row>
        </div>
       <componentPage :title="textTitle" :page="page" :total="totalNum" :sumPage="sumPage" v-on:pageChange="pageChange" style="margin-top:17px;margin-left:10px;"></componentPage>
        <div style="text-align:center; margin:10px 10px 10px 10px;padding-bottom:15px;" >
          <Table size="small" :columns="columns7" :data="putPlandata" :loading="loading" @on-sort-change="sortFun" :height="scrollTableStyle"></Table>
        </div>
        <Modal v-model="deleteModel"  :title="title" width="250px" @on-ok="deleteSure">
          <p>确定要删除么？</p>
        </Modal>
        <Modal v-model="examineModel"  title="系统提示" width="250px" @on-ok="examine">
          <p>确定要提交么？</p>
        </Modal>
        <Modal v-model="deleteSureModel"  :title="title" width="250px" @on-ok="deleteFun">
          <p>计划单有关联的明细计划，请确认是否删除？</p>
        </Modal>
        <Modal v-model="expExcelModel"  :title="title" width="250px" @on-ok="expExcel">
          <p>确定要导出Excel报表吗？</p>
        </Modal>
        <Modal v-model="createHeadModal"  title="新建表头" width="1120px" @on-ok="validateData('formValidateModal')">
          <Form ref="formValidateModal" :model="formValidateModal" :rules="ruleFormValidateModal" :label-width="100">
            <Row>
              <Col span="6">
                <FormItem label="发方表单号:" prop="fromNumber">
                  <Input placeholder="无" v-model="formValidateModal.fromNumber"></Input>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="发方平衡区:" prop="fromMba">
                  <Select v-model="formValidateModal.fromMba">
                    <Option v-for="(items,index) in fromMbaList" :value="items.id" :key="index">{{ items.hclCode }}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="发出日期:" prop="sendDate">
                  <DatePicker type="datetime" placeholder="无" format="yyyy-MM-dd HH:mm:ss" :value="formValidateModal.sendDate" @on-change="sendDateChange"></DatePicker>
                </FormItem>`
              </Col>
              <Col span="6">
                <FormItem label="收方表单号:" prop="toNumber">
                  <Input placeholder="无" disabled v-model="formValidateModal.toNumber"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="6">
                <FormItem label="收方平衡区:" prop="toMba">
                  <Select v-model="formValidateModal.toMba">
                    <Option v-for="(items,index) in toMbaList" :value="items.id" :key="index">{{ items.hclCode }}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="接收日期:" prop="fromTimeData">
                  <DatePicker type="datetime" placeholder="无" format="yyyy-MM-dd HH:mm:ss" :value="formValidateModal.fromTimeData" @on-change="fromTimeDataChange"></DatePicker>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="密级:" prop="secret">
                  <!--<Input placeholder="无" style="width:60%" v-model="headData.secret"></Input>-->
                  <Select v-model="formValidateModal.secret">
                    <Option v-for="(items,index) in secretList" :value="items.value" :key="index">{{ items.label }}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="调拨令号:" prop="tranNo">
                  <Input placeholder="无" clearable v-model="formValidateModal.tranNo"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="6">
                <FormItem label="原始凭证:" prop="certificate">
                  <Input placeholder="无" clearable v-model="formValidateModal.certificate"></Input>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="验收人:" prop="appman">
                  <Input placeholder="无" clearable v-model="formValidateModal.appman"></Input>
                </FormItem>
              </Col>
              <Col span="6" >
                <FormItem label="经手人:" prop="sende">
                  <Select v-model="formValidateModal.sende">
                    <Option v-for="items in sendeList" :value="items.name" :key="items.name">{{ items.name }}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="审核人:" prop="auditorValue">
                  <Select  v-model="formValidateModal.auditorValue">
                    <Option v-for="items in auditor" :value="items.name" :key="items.name">{{ items.name }}</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="6">
                <FormItem label="备注:" prop="putRemark">
                  <Input placeholder="无" clearable v-model="formValidateModal.putRemark"></Input>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
  </div>
</template>

<script>
  import Store from '../../js/store.js';
  import headInfo from '../my-components/headInfo.vue';
  import componentPage from '../my-components/newPage.vue';
  import {getPutHeadList,getAsySubmit,getPc2pdaRuKu,getEditPlan,getAsyDeletePlanTips,getAsyDeletePlan,getAsyQueryPlan,getimportStates,getrdSupportHeadFillIn,getasySavePlan} from '@/api/hclSupport.js'
  export default {
    name: 'putPlan',
    components:{
      headInfo:headInfo,
      componentPage:componentPage
    },
    created(){},
    data () {
      return {
        textTitle:'国内接收表单',
        isRootMba:0,//是否是总平衡区
        isLeafMba:0,//是否是叶子平衡区
        examineModel:false,
        columns7: [
          //表头
          {type:'index2',title:'序号',width: 70,align: 'center',
            render: (h, params) => {
              return h('span', params.index+(this.page-1)*this.pageSize+1);
            }
          },
          /*{title: '批号',align: 'center',width:120,sortable:true,key: 'batch'},*/
          {title: '件数',align: 'center',width:120,key: 'viContainerCnt'},
          {title: '收方平衡区',align: 'center',width:120,key: 'toMba',
            render:(h,{row})=>{
              return row.toMba?h('span', row.toMba.hclCode):'';
            }
          },
          {title: '发方平衡区',align: 'center',width:120,key: 'fromMba',
            render:(h,{row})=>{
              return row.fromMba?h('span', row.fromMba.hclCode):'';
            }
          },
          {title: '发方表单号',align: 'center',width:200,sortable:true,key: 'otherRecNo'},
          {title: '收方表单号',align: 'center',width:200,sortable:true,key: 'recNo',
            render:(h,params)=>{
              return h('div', [
                h('span', {
                  style: {
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      this.detailData(params.row);
                    }
                  }
                },params.row.recNo)
              ]);
            }
          },
          {title: '发出日期',align: 'center',width:160,sortable:true,key: 'sendDate',
            render:(h,{row})=>{
              let sendDataFormat = row.sendDate?row.sendDate.split(" ")[0]:'';
              return h('span', sendDataFormat);
            }
          },
          {title: '接收日期',align: 'center',width:160,sortable:true,key: 'occurDate',
            render:(h,{row})=>{
              let sendDataFormat = row.occurDate?row.occurDate.split(" ")[0]:'';
              return h('span', sendDataFormat);
            }
          },
          {title: '调拨号令',align: 'center',width:120,key: 'tranNo'},
          {title: '原始凭证',align: 'center',width:120,key: 'certificate'},
          {title: '接收人',align: 'center',width:120,key: 'tranPerson'},
          {title: '审核人',align: 'center',width:120,key: 'checkPerson'},
          {title: '验收人',align: 'center',width:120,key: 'appPerson'},
          {title: '密级',align: 'center',width:120,key: 'viSecret'},
          {title: '备注',align: 'center',width:120,key: 'remark'},
          {title: '操作',key: 'action',width:300,align: 'center', fixed: 'right',
            render: (h, params) => {
              if(this.isLeafMba) {
                if (params.row.state != 'Complete') {
                  //未提交审核
                  return h('div', [
                    h('Button', {
                      props: {type: 'primary', size: 'small',icon: 'ios-compose-outline',},
                      style: {marginRight: '5px'},
                      on: {
                        click: () => {
                          this.editData(params.row);
                        }
                      }
                    }, '修改'),
                    h('Button', {
                      props: {type: 'error', size: 'small',icon: 'ios-trash-outline',},
                      style: {marginRight: '5px'},
                      on: {
                        click: () => {
                          this.deleteModel = true;
                          this.deleteId = params.row.id;
                        }
                      }
                    }, '删除'),
                    h('Button', {
                      props: {type: 'warning', size: 'small',icon: 'android-checkmark-circle',},
                      style: {marginRight: '5px'},
                      on: {
                        click: () => {
                          this.examineModel = true;
                          this.examineId = params.row.id;
                        }
                      }
                    }, '提交'),
                  ]);
                } else {
                  //提交审核
                  return h('div', [
                    h('Button', {
                      props: {type: 'info', size: 'small', icon: 'grid',},
                      style: {marginRight: '5px'},
                      on: {
                        click: () => {
                          this.detailData(params.row);
                        }
                      }
                    }, '明细'),
                  ]);
                }
              }else{
                return h('div', [
                  h('Button', {
                    props: {type: 'info', size: 'small'},
                    style: {marginRight: '5px'},
                    on: {
                      click: () => {
                        this.detailData(params.row);
                      }
                    }
                  }, '明细'),
                ]);
              }
            }
          },
        ],
        putPlandata: [],//表格数据
        loading:true,
        formStates:[],//表单状态
        page:1,//当前页
        pageSize:20,
        deleteModel:false,
        pc2pdaModel:false, //导入PDA确认框
        pda2pcModel:false, //从PDA同步确认框
        pc2pdaRecNo:'', //导入PDA时的表单编号
        pc2pdaId:'', //导入PDA时的表单headId
        title:"系统提示",
        deleteId:'',//删除id
        submitNumber:'',//大批次
        viContainerCnt:'',
        sumitState:'',//表单状态
        beginData:'',//开始时间
        endData:'',//结束时间
        deleteSureModel:false,
        JkorMk:'',
        scrollTableStyle:0,//表格高度
        markLoading:false,//导入加载状态
        loadingTet:'正在导入...',//导入提示文字
        ctx:'',
        intetFun:null,//定时函数
        randomNum:'',//随机数
        totalNum:0,
        sumPage:1,
        examineId:'',
        expExcelModel:false,
        headIdLS:'',
        createHeadModal:false,
        formValidateModal:{
          fromNumber:'',
          toMba:'',
          fromMba:'',
          secret:'',
          sendDate:'',
          transitBatch:'',
          tranNo:'',
          certificate:'',
          toNumber:'',
          appman:'',
          fromTimeData:'',
          sende:'',
          auditorValue:'',
          putRemark:'',
        },
        ruleFormValidateModal: {
          toMba:[
            {required:true, message:'收方平衡区不能为空',trigger:'blur'}
          ],
          fromMba:[
            {required:true, message:'发方平衡区不能为空',trigger:'blur'}
          ],
          secret:[
            {required:true, message:'密级不能为空',trigger:'blur'}
          ],
        },
        toMbaList:[],//收方平衡区
        fromMbaList:[],//发方平衡区
        sendeList:[],//经手人
        auditor:[],//审核人
        recNo:'',//表单编号
        secretList:[],

      }
    },
    mounted:function(){
      let window_width = $(window).height()-183;
      this.isLeafMba = Store.fetch('isLeafMba');
      this.isRootMba = Store.fetch('isRootMba');
      this.randomNum = (Store.fetch('userId'))+(Math.random());
      this.ctx = Store.requesrXhr();
      this.scrollTableStyle = window_width;
      this.initialData();
    },
    methods:{
      beginChange:function(val){
        this.beginData = val;
      },
      endChange:function(val){
        this.endData = val;
      },
      initialData:function(){
        //滚动加载数据
        let that = this;
        getPutHeadList({'page.pageNo':this.page,'page.pageSize':this.pageSize,hclType:'RD'})
          .then((res) => {
            this.formStates = res.searchContent;
            this.putPlandata = res.result?res.result:[];
            this.beginData = res.beginDate ? res.beginDate : '';
            this.endData = res.endDate ? res.endDate : '';
            this.totalNum = res.totalNum;
            if(this.totalNum>0){
              this.sumPage = Math.ceil(this.totalNum/this.pageSize);
            }
            this.loading = false;
          }).catch(function(error){
          that.$Message.error('数据加载失败！');

        });
      },
      pageChange:function(page){
        this.page = page;
        this.loading = true;
        this.initialData();

      },
      examine:function(){
        //审核
        let that = this;
        getAsySubmit({"id": this.examineId ,"batch": "",hclType:"RD"})
          .then((res) => {
            if(res.state && res.state=="1"){
              that.$Notice.error({
                title: res.msg,
                desc:res.detail,
                duration: 0,
              });
            }else{
              that.$Message.success(res.msg);
              this.putPlandata = [];
              that.initialData();
            }
            that.loading = false;
          }).catch(function(error){
          that.$Message.error('数据请求失败！');
          that.loading = false;
        });
      },
      //导入PDA
      dataToPda:function(){
        this.loading = true;
        let that = this;
        let data = {'headId':this.pc2pdaId};
        getPc2pdaRuKu(data)
          .then((res) => {
            this.pc2pdaModel = false;
            this.loading = false;
            if(res.state==0){
              that.$Message.success(res.msg);
            }else{
              that.$Message.error(res.msg);
            }
            this.pc2pdaId = '';
          }).catch(function(error){
          that.$Message.error('数据连接失败！');
        });
      },
      detailData:function(pas){
        //明细
        let that = this;
        Store.save('supportHead',pas);
        this.$router.push({path: '/putdetailMange',query:{id:pas.id,hclType:"RD",state:pas.state}});
      /*  this.$post('/a/storage/supportBody/asyQueryDetail',{"page":{"pageNo":1,"pageSize":this.pageSize},"supportHead":{id:pas.id,hclType:"RD"},"batch":""})
          .then((res) => {
            if(res.result.length){
              //将表头信息保存到Store里，在明细页面进行展示

            }else{
              that.$Message.error('无明细列表')
            }
            this.loading = false;
          }).catch(function(error){
          that.$Message.error('数据请求失败！');
        })*/
      },
      editData:function(pas){
        //编辑
        let that = this;
        this.loading = true;
        getEditPlan({"t":{id:pas.id,hclType:"RD","page":{"pageNo":1,"pageSize":1}},"paraValues":{"hclType":this.$route.query.hclType == 'RD'?"01":"14"}})
          .then((res) => {
            if(res.state && res.state=="1"){
              that.$Message.error(res.msg);
            }else{
              this.$router.push({path: '/putEditMange',query:{id:pas.id,hclType:"RD"}});
            }
            this.loading = false;

          }).catch(function(error){
          that.$Message.error('数据请求失败！')
        });

      },
      deleteSure:function(){
        //删除
        let that = this;
        that.loading = true;
        getAsyDeletePlanTips([{"id":this.deleteId, "hclType":"RD","page":{"pageNo":1,"pageSize":1}}])
          .then((res) => {
            if(res.state=='1'){
              //res.state == '1'表示有关联数据
              that.loading = false;
              this.deleteSureModel = true;
            }else{
              that.$Message.success('删除成功');
              this.putPlandata = [];
              that.initialData();
            }
          }).catch(function(){
          that.$Message.error('删除失败');
        });
      },
      deleteFun:function(){
        let that = this;
        that.loading = true;
        getAsyDeletePlan([{"id":this.deleteId, "hclType":"RD"}])
          .then((res) => {
            that.$Message.success('删除成功');
            that.loading = false;
            this.putPlandata = [];
            that.initialData();
          }).catch(function(){
          that.$Message.error('删除失败');
        });
      },
      searchMethod:function(){
        //点击查询按钮，默认按照接受日期排序
        this.searchFun('occurDate','desc');
      },
      searchFun:function(key,order){
        //查询，点击某一列进行排序
        let that = this,data = {};
        this.loading = true;
        if(this.sumitState){
          data = {"page":{"pageNo":1,"pageSize":this.pageSize,"orderBy": key+" "+ order},"batch":this.submitNumber.trim(),'recNo':this.recNo.trim(),'state':this.sumitState,'beginDate':this.beginData,'endDate':this.endData, "hclType":"RD"};
        }else{
          data = {"page":{"pageNo":1,"pageSize":this.pageSize,"orderBy": key+" "+ order},"batch":this.submitNumber.trim(),'recNo':this.recNo.trim(),'beginDate':this.beginData,'endDate':this.endData, "hclType":"RD"};
        }
        getAsyQueryPlan(data)
          .then((res) => {
            this.putPlandata = res.result;
            this.loading = false;
          }).catch(function(){
          that.$Message.error('查询失败');
          this.loading = false;
        });
      },
      JKuploadbefore:function(res){
        //导入之前
        this.markLoading = true;
        this.loadingTet = '正在导入...';
        this.intetFun = [];

      },
      JKProgress:function(res){
        //导入过程中
        this.intetFun.push(setInterval(this.dataRequest,1000));
      },
      JKimportDataList:function(res){
        //导入成功
        let that= this;
        this.loadingTet = res.msg;
        if(res.state==0){
          this.markLoading = false;
          for (let i in this.intetFun) clearInterval(this.intetFun[i]);
          this.putPlandata = [];
          this.initialData();
          this.randomNum = (Store.fetch('userId'))+(Math.random());

        }
        else if(res.state==22 || res.state==22) {
          this.markLoading = false;
          for (let i in this.intetFun) clearInterval(this.intetFun[i]);
          this.putPlandata = [];
          this.initialData();
// that.$Message.error(res.detail);//返回导入失败的错误信息
          that.$Notice.error({
            title: res.msg,
            desc: res.detail,
            duration: 0,

          });
          this.randomNum = (Store.fetch('userId')) + (Math.random());
        }else if(res.state==24){
          this.markLoading = false;
          for (let i in this.intetFun) clearInterval(this.intetFun[i]);
          this.putPlandata = [];
          this.initialData();
          // that.$Message.error(res.detail);//返回导入失败的错误信息
          that.$Notice.error({
            title: res.msg,
            desc:res.detail,
            duration: 0,

          });
          this.randomNum = (Store.fetch('userId'))+(Math.random());
        }
      },
      dataRequest:function(){
        let that = this;
        getimportStates({"type":"1","thread":that.randomNum})
          .then((res) => {
            this.loadingTet = res.msg;
          })
          .catch(function(){
            //that.$Message.error('数据请求失败');
          });
      },
      sortFun:function(column){
        //表格排序,column.key是点击的字段，column.order是升序，或降序，asc/desc
        let order = column.order == 'normal' ? 'asc' : column.order;
        this.searchFun(column.key,order);
      },
      expExcel:function(){},
      sendDateChange:function(val){
        this.formValidateModal.sendDate = val;
      },
      fromTimeDataChange:function(val) {
        this.formValidateModal.fromTimeData = val;
      },
      createHead:function () {
        //新建表头功能
        let that = this;
        getrdSupportHeadFillIn({"t":{"hclType":"RD"},"paraValues":{"hclType":"01"}})
          .then((res) => {
            this.toMbaList = res.result.toMbaList ? res.result.toMbaList:'';//收方平衡区
            this.fromMbaList = res.result.fromMbaList ? res.result.fromMbaList:'';//发方平衡区

            this.auditor = res.result.checkPersonList;//审核人
            this.sendeList = res.result.tranPersonList?res.result.tranPersonList:'';//经手人list
            this.secretList = res.result.secretList?res.result.secretList:'';//密级list
            this.formValidateModal.fromTimeData = res.result.occurDate?res.result.occurDate:'';
            this.formValidateModal.toNumber = res.result.recNo?res.result.recNo:'';
            this.createHeadModal = true;
          })
          .catch(function (error) {
            that.$Message.error("数据请求失败");
          });
      },
      validateData:function(name){
        let that = this;
        setTimeout(() => {
          that.$refs[name].validate((valid) => {
            if(valid) {
              this.saveFunHead();
            }else {
              this.createHeadModal = true;
            }
          })
        },1);
      },
      saveFunHead:function(){
        let that = this;
        this.headSupport = {
          'hclType':"RD",
          'batch':this.formValidateModal.transitBatch,//运输批次
          'fromMba':{'id':this.formValidateModal.fromMba},
          'toMba':{'id':this.formValidateModal.toMba},
          'tranNo':this.formValidateModal.tranNo,//调拨令号
          'otherRecNo':this.formValidateModal.fromNumber,
          'recNo':this.formValidateModal.toNumber,
          'sendDate':this.formValidateModal.sendDate,//发出日期
          'occurDate':this.formValidateModal.fromTimeData,//接收日期
          'secret':this.formValidateModal.secret,
          'tranPerson':this.formValidateModal.sende,
          'checkPerson':this.formValidateModal.auditorValue,
          'appPerson':this.formValidateModal.appman,
          'remark':this.formValidateModal.putRemark,
          'certificate':this.formValidateModal.certificate,
        };
        getasySavePlan([this.headSupport])
          .then((res) => {
            if(res.state && res.state == 1){
              that.$Message.success(res.msg);
            }else{
              that.$Message.success(res.msg);
              this.initialData();
            }
          })
          .catch(function (error) {
            console.log(error);
            that.$Message.error('数据连接失败');
          });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--

      -->
