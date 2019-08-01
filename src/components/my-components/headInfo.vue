<template id="headInfo">
  <div class="handStyle">
    <div v-if="!(headData.isDetail)">
      <Row>
        <!--国内接受显示表单编号，其他页面显示发方表单编号-->
        <Col span="4" v-if="(headData.hclType && headData.hclType =='SD')  || (headData.hclType && headData.hclType =='WY')">
        <span>表单编号&#12288;: </span><Input placeholder="无" readonly :disabled="headData.disabled?true:false" style="width:60%" v-model="headData.toNumber"></Input>
        </Col>
        <Col span="4" v-else>
        <span>发方表单号: </span><Input placeholder="无" :clearable="headData.clearable?true:false" :disabled="headData.disabled?true:false" style="width: 60%" v-model="headData.fromNumber"></Input>
        </Col>
        <Col span="4" v-if="!(headData.hclType && headData.hclType =='WY')">
          <span>发方平衡区: </span><Select  style="width:60%" v-model="headData.fromMba">
          <Option v-for="items in headData.fromMbaList" :value="items.id" :key="items.id">{{ items.hclCode }}</Option>
        </Select>
        </Col>
        <Col span="4" v-if="(headData.hclType && headData.hclType =='WY')">
          <span>当前平衡区: </span><Select  style="width:60%" v-model="headData.fromMba" disabled>
          <Option v-for="items in headData.fromMbaList" :value="items.id" :key="items.id">{{ items.hclCode }}</Option>
        </Select>
        </Col>
         <Col span="4" v-if="!(headData.hclType && headData.hclType =='WY')">
            <span>发出日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="headData.sendDate" @on-change="endChange"></DatePicker>
          </Col>
        <Col span="4">
          <span>&#12288;&#12288;批&#12288;号: </span><Input placeholder="无" :clearable="headData.clearable?true:false" :disabled="headData.disabled?false:false" style="width:60%" v-model="headData.transitBatch" ></Input>
        </Col>
        <Col span="4">
          <span>调拨令号&#12288;: </span><Input placeholder="无" clearable style="width: 60%" v-model="headData.tranNo"></Input>
        </Col>
        <Col span="4">
          <span>原始凭证&#12288;: </span><Input placeholder="无" clearable style="width: 60%" v-model="headData.certificate"></Input>
        </Col>
        <Col span="4">
          <span>密&#12288;&#12288;&#12288;级: </span>
          <Select  style="width:60%" v-model="headData.secret">
            <Option v-for="items in headData.secretList" :value="items.value" :key="items.value">{{ items.label }}</Option>
          </Select>
        </Col>

        <!--国内接受显示表单编号，不显示收方表单编号-->
        <Col span="4" v-if="!((headData.hclType && headData.hclType =='SD')  || (headData.hclType && headData.hclType =='WY'))">
        <span>收方表单号: </span><Input placeholder="无" :clearable="headData.clearable?true:false" :disabled="headData.disabled?true:false" style="width: 60%" v-model="headData.toNumber"></Input>
        </Col>
        <Col span="4" v-if="!(headData.hclType && headData.hclType =='WY')">
          <span>收方平衡区: </span><Select  style="width:60%" v-model="headData.toMba">
          <Option v-for="items in headData.toMbaList" :value="items.id" :key="items.id">{{ items.hclCode }}</Option>
        </Select>
        </Col>
        <Col span="4" v-if="(headData.hclType && headData.hclType =='RD')">
          <span>接收日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="headData.fromTimeData" @on-change="beginChange"></DatePicker>
        </Col>
        <Col span="4" v-else>
        <span>发生日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="headData.fromTimeData" @on-change="beginChange"></DatePicker>
        </Col>

        <Col span="4">
        <span>验&#12288;收&#12288;人: </span>
        <Input placeholder="无" clearable style="width: 60%" v-model="headData.appman"></Input>
        </Col>
        <Col span="4" >
        <span>经&#12288;手&#12288;人: </span>
        <Select  style="width:60%" v-model="headData.sende">
          <Option v-for="items in headData.sendeList" :value="items.name" :key="items.name">{{ items.name }}</Option>
        </Select>
        </Col>
        <Col span="4">
        <span>审&#12288;核&#12288;人: </span><Select  style="width:60%" v-model="headData.auditorValue">
        <Option v-for="items in headData.auditor" :value="items.name" :key="items.name">{{ items.name }}</Option>
      </Select>
        </Col>
        <Col span="4">
          <span>备&#12288;&#12288;&#12288;注: </span><Input placeholder="无" clearable style="width:60%" v-model="headData.putRemark"></Input>
        </Col>
      </Row>
    </div>
    <!--以下是详情页面只做展示-->
    <div v-if="headData.isDetail">
      <Row>
        <!--是国内接受只显示表单编号，其他页面显示发方表单编号-->
        <Col span="4" v-if="(headData.hclType && headData.hclType =='SD') || (headData.hclType && headData.hclType =='WY') ">
        <span>表单编号&#12288;: </span><Input placeholder="无" disabled style="width: 60%" v-model="headData.toNumber"></Input>
        </Col>
        <Col span="4" v-else>
        <span>发方表单号: </span><Input placeholder="无" disabled style="width: 60%" v-model="headData.fromNumber"></Input>
        </Col>
        <Col span="4" v-if="!(headData.hclType && headData.hclType =='WY')">
          <span>发方平衡区: </span>
          <Input placeholder="无" disabled style="width: 60%" v-model="headData.fromMba.hclCode"></Input>
        </Col>
        <Col span="4" v-if="(headData.hclType && headData.hclType =='WY')">
          <span>当前平衡区: </span>
          <Input placeholder="无" disabled style="width: 60%" v-model="headData.fromMba.hclCode"></Input>
        </Col>
        <Col span="4" v-if="!(headData.hclType && headData.hclType =='WY')">
          <span>发出日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" disabled format="yyyy-MM-dd HH:mm:ss" :value="headData.sendDate" @on-change="endChange"></DatePicker>
        </Col>
        <Col span="4">
          <span>&#12288;&#12288;批&#12288;号: </span><Input placeholder="无" :disabled="isLeafMba" style="width: 60%" v-model="headData.transitBatch" ></Input>
        </Col>
        <Col span="4">
          <span>调拨令号&#12288;: </span><Input placeholder="无" disabled style="width: 60%" v-model="headData.tranNo"></Input>
        </Col>
        <Col span="4">
          <span>原始凭证&#12288;: </span><Input placeholder="无" style="width: 60%" v-model="headData.certificate" :disabled="isLeafMba"></Input>
        </Col>
        <Col span="4">
          <span>&#12288;密&#12288;&#12288;级: </span><Select  style="width:60%" v-model="headData.secret" :disabled="isLeafMba">
          <Option v-for="items in headData.secretList" :value="items.value" :key="items.value">{{ items.label }}</Option>
        </Select>
        </Col>
        <!--国内接受只显示表单编号，不显示收方表单编号-->
        <Col span="4" v-if="!((headData.hclType && headData.hclType =='SD')  || (headData.hclType && headData.hclType =='WY'))">
        <span>收方表单号: </span><Input placeholder="无" disabled style="width: 60%" v-model="headData.toNumber"></Input>
        </Col>
        <Col span="4" v-if="!(headData.hclType && headData.hclType =='WY')">
        <span>收方平衡区: </span>
        <Input placeholder="无" disabled style="width: 60%" v-model="headData.toMba.hclCode"></Input>
        </Col>
        <Col span="4" v-if="(headData.hclType && headData.hclType =='RD')">
          <span>接收日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="headData.fromTimeData" @on-change="beginChange"></DatePicker>
        </Col>
        <Col span="4" v-else>
          <span>发生日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="headData.fromTimeData" @on-change="beginChange"></DatePicker>
        </Col>
        <Col span="4">
        <span>验&#12288;收&#12288;人: </span>
        <Input placeholder="无" style="width: 60%" v-model="headData.appman" :disabled="isLeafMba"></Input>
        </Col>
        <Col span="4">
        <span>经&#12288;手&#12288;人: </span>
        <Input placeholder="无" disabled style="width:60%" v-model="headData.sende"></Input>
        </Col>
        <Col span="4">
        <span>审&#12288;核&#12288;人: </span>
        <Input placeholder="无" disabled style="width: 60%" v-model="headData.auditorValue"></Input>
        </Col>
        <Col span="4">
          <span>&#12288;备&#12288;&#12288;注: </span><Input placeholder="无" clearable style="width:60%" v-model="headData.putRemark" :disabled="isLeafMba"></Input>
        </Col>
      </Row>
    </div>
  </div>

</template>

<script>
  import Store from '../../js/store.js'
  export default {
    data:function(){
      return {
        //表头信息
        transitBatch:'',//运输批次
        fromMbaList:[],//发方平衡区
        fromMba:'',//发方平衡区选中值
        toMbaList:[],//收方平衡区
        toMba:'',//收方平衡区选中值
        tranNo:'',//调拨令号
        fromNumber:'',//发方表单号
        toNumber:'',//收方表单号
        fromTimeData:new Date(),//发生日期
        // toTimeData:'',//收方日期
        sendDate:new Date(),
        secret:'',//密级默认
        secretList:[],//密级
        sende:'',//经手人
        sendeList:[],//经手人List
        auditor:[],//审核人
        auditorValue:'',//审核人选中值
        appman:'',//验收人默认
        putRemark:'',//备注
        clearable:true,
        disabled:false,
        isDetail:false,//是否是详情页面
        hclType:'',
        certificate:'',//原始凭证
        isLeafMba:false,
      }
    },
    props:[
      'headData'
    ],
    watch:{

    },
    mounted:function(){
      this.isLeafMba = Store.fetch('isLeafMba')?false:true;

    },
    methods:{
      beginChange: function (val) {
        this.headData.fromTimeData = val;
      },
      endChange:function(val){
        this.headData.sendDate = val;
      }
    }
  }

</script>
