<style scoped>
  .ivu-col-span-6{height:50px}
</style>
<template>
  <div>
    <Row>
      <Col span="4">
        <span>表单编号&#12288;: </span><Input placeholder="无" readonly  style="width:60%" v-model="toNumber" disabled></Input>
      </Col>
      <Col span="4">
        <span>大&#12288;批&#12288;次: </span><Input placeholder="无"  style="width:60%" v-model="transitBatch" disabled></Input>
      </Col>
      <Col span="4" v-if="this.$route.query.hclType != 'RIE'">
        <span>当前平衡区: </span><Input placeholder="无" readonly  style="width:60%" v-model="mbaList.hclCode" disabled></Input>
      </Col>
      <Col span="4" v-if="this.$route.query.hclType == 'RIE'">
        <span>发方平衡区: </span><Input placeholder="无" readonly  style="width:60%" v-model="mbaList.hclCode" disabled></Input>
      </Col>
      <Col span="4" v-if="this.$route.query.hclType == 'RIE'">
        <span>收方平衡区: </span><Input placeholder="无" readonly  style="width:60%" v-model="mbaList.hclCode" disabled></Input>
      </Col>
      <Col span="4">
        <span>发生日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="fromTimeData" @on-change="addDateModalChange"></DatePicker>
      </Col>
      <Col span="4">
        <span>验&#12288;收&#12288;人: </span>
        <Select  style="width:60%" v-model="appman">
          <Option v-for="items in appmanList" :value="items.name" :key="items.name">{{ items.name }}</Option>
        </Select>
      </Col>
      <Col span="4" >
        <span>经&#12288;手&#12288;人: </span>
        <Select  style="width:60%" v-model="sende">
          <Option v-for="items in sendeList" :value="items.name" :key="items.name">{{ items.name }}</Option>
        </Select>
      </Col>
      <Col span="4">
        <span>审&#12288;核&#12288;人: </span><Select  style="width:60%" v-model="auditorValue">
        <Option v-for="items in auditorList" :value="items.name" :key="items.name">{{ items.name }}</Option>
      </Select>
      </Col>
      <Col span="4">
        <span>调拨令号&#12288;: </span><Input placeholder="无" clearable style="width: 60%" v-model="tranNo" disabled></Input>
      </Col>
      <Col span="4">
        <span>原始凭证&#12288;: </span><Input placeholder="无" clearable style="width: 60%" v-model="certificate" disabled></Input>
      </Col>
      <Col span="4">
        <span>密&#12288;&#12288;&#12288;级: </span>
        <Select  style="width:60%" v-model="secret">
          <Option v-for="items in secretList" :value="items.value" :key="items.value">{{ items.label }}</Option>
        </Select>
      </Col>
      <Col span="4">
        <span>&#12288;备&#12288;&#12288;注: </span><Input placeholder="无" clearable style="width:60%" v-model="remark"></Input>
      </Col>
      <Col span="10" v-if="this.$route.query.hclType != 'RIE'" style="text-align: right">
        <Button type="primary" style="width:82px;" @click="saveHead">保存</Button>
      </Col>
      <Col span="6" v-if="this.$route.query.hclType == 'RIE'" style="text-align: right;width:27%">
        <Button type="primary" style="width:82px;" @click="saveHead">保存</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        transitBatch:'',//大批次
        toNumber:'',//表单编号
        mbaList:[],//当前平衡区
        fromTimeData:'',//fromTimeData
        appman:'',//验收人
        appmanList:[],
        sende:'',//经手人
        sendeList:[],
        auditorValue:'',//审核人
        auditorList:[],
        tranNo:'',//调拨令号
        certificate:'',//原始凭证
        secret:'',//密级
        secretList:[],
        remark:'',//备注
        showType:true,
      }
    },
    mounted:function(){
      //此组件调用 必需获取：{hclType:''} + paraValues:{hclType:num};
    },
    methods:{
      addDateModalChange:function(val){
        this.fromTimeData = val;
      },
      saveHead:function(){
        //保存表头
        let that = this;
        let headSupport = {
          id:this.$route.query.id,
          hclType:this.$route.query.hclType,
          batch:this.transitBatch,//大批次
          recNo:this.toNumber,//表单编号
          mba:this.mbaList,//当前平衡区
          occurDate:this.fromTimeData, //fromTimeData
          appPerson:this.appman, //验收人
          tranPerson:this.sende,//经手人
          checkPerson:this.auditorValue, //审核人
          tranNo:this.tranNo,//调拨令号
          certificate:this.certificate,//原始凭证
          secret:this.secret,//密级
          remark:this.remark,//备注
        };

        this.$post('/a/storage/supportHead/asySavePlan',[headSupport])
          .then((res) => {
            if(res.state==0){
              this.$Message.success(res.msg);
              if(this.$route.query.hclType=='DE' ){
                this.$router.push({path: '/emptyConOutPlanDestroy',query:{"hclType":this.$route.query.hclType,'hclTypeValue':this.$route.query.hclTypeValue}});
              }else{
                this.$router.push({path: '/emptyConOutPlan',query:{"hclType":this.$route.query.hclType,'hclTypeValue':this.$route.query.hclTypeValue}});
              }

            }
          }).catch(function(error){
          that.$Message.error('数据请求失败！')
        })
      },
      showHead:function(id,type){
        let that = this;
        this.$post('/a/storage/supportBody/asyInitial',{supportHead: {id: id,hclType:type}})
          .then((res) => {
              this.sendeList = res.result.tranPersonList;
              this.appmanList = res.result.appPersonList;
              this.auditorList = res.result.checkPersonList;
              this.secretList = res.result.secretList;
              this.transitBatch = res.result.supportHead.batch;//大批次
              this.toNumber = res.result.supportHead.recNo;//表单编号
              this.mbaList = res.result.supportHead.mba;//当前平衡区
             // this.fromList = res.result.supportHead.mba;//当前平衡区
             // this.toList = res.result.supportHead.mba;//当前平衡区
              this.fromTimeData = res.result.supportHead.occurDate;//fromTimeData
              this.appman = res.result.supportHead.appPerson;//验收人
              this.sende = res.result.supportHead.tranPerson;//经手人
              this.auditorValue = res.result.supportHead.checkPerson;//审核人
              this.tranNo = res.result.supportHead.tranNo;//调拨令号
              this.certificate = res.result.supportHead.certificate;//原始凭证
              this.secret = res.result.supportHead.secret;//密级
              this.remark = res.result.supportHead.remark;//备注
          }).catch(function(error){
            that.$Message.error('数据连接失败');
        });
      },
      cancelSave:function(){

      },
      beginChange:function(val){
        this.fromTimeData = val;
      }


    }
  }

</script>
