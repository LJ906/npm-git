<style scoped>
  .ivu-col-span-6{height:55px}
</style>
<template>
  <Modal v-model="modal"  title="空容器表头" width="1020px" @on-ok="saveHead('formValidateModal')" :mask-closable="mask" @on-cancel="cancelSave">
    <Form ref="formValidateModal" :model="formValidateModal" :rules="ruleFormValidateModal">
      <div class="handStyle">
        <Row :gutter="16">
          <Col span="6">
            <span>表单编号&#12288;: </span><Input placeholder="无"  style="width:60%" v-model="toNumber" disabled></Input>
          </Col>
          <Col span="6" v-show="showType">
            <FormItem label="发方平衡区:" prop="fromMba" :label-width="76" :rules="ruleFromMba" >
              <Select style="width:88%;margin-left: -9px;" v-model="formValidateModal.fromMba" disabled>
                <Option v-for="(items,index) in formValidateModal.fromMbaList" :value="items.id" :key="index">{{ items.hclCode }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6" v-show="!showType">
            <FormItem label="平衡区:" prop="fromMba" :label-width="76" :rules="ruleFromMba" >
              <Select style="width:88%;margin-left: -9px;" v-model="formValidateModal.fromMba" disabled>
                <Option v-for="(items,index) in formValidateModal.fromMbaList" :value="items.id" :key="index">{{ items.hclCode }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6" v-show="showType">
            <FormItem label="收方平衡区:" prop="toMba" :label-width="76" :rules="ruleToMba">
              <Select  style="width:88%;margin-left: -9px;"  v-model="formValidateModal.toMba">
                <Option v-for="(items,index) in formValidateModal.toMbaList" :value="items.id" :key="index">{{ items.hclCode }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6" >
            <span>经&#12288;手&#12288;人: </span>
            <Select  style="width:60%" v-model="sende">
              <Option v-for="(items,index) in sendeList" :value="items.name" :key="index">{{ items.name }}</Option>
            </Select>
          </Col>
          <Col span="6">
            <span>审&#12288;核&#12288;人: </span>
            <Select  style="width:60%" v-model="auditorValue">
              <Option v-for="(items,index) in auditor" :value="items.name" :key="index">{{ items.name }}</Option>
            </Select>
          </Col>
          <Col span="6">
            <span>验&#12288;收&#12288;人: </span>
            <Select  style="width:60%" v-model="appPerson">
              <Option v-for="(items,index) in appPersonList" :value="items.name" :key="index">{{ items.name }}</Option>
            </Select>
          </Col>
          <Col span="6">
            <span>原始凭证&#12288;: </span><Input placeholder="无" clearable style="width: 60%" v-model="certificate"></Input>
          </Col>
          <Col span="6">
            <span>调拨令号&#12288;: </span><Input placeholder="无" clearable style="width: 60%" v-model="tranNo"></Input>
          </Col>
          <Col span="6">
            <span>发生日期&#12288;: </span><DatePicker type="datetime" placeholder="无" style="width:60%" format="yyyy-MM-dd HH:mm:ss" :value="fromTimeData" @on-change="beginChange"></DatePicker>
          </Col>
          <Col span="6">
            <FormItem label="密级:" prop="secret" :label-width="76">
              <Select  style="width:88%;margin-left: -9px;" v-model="formValidateModal.secret">
                <Option v-for="items in secretList" :value="items.value" :key="items.id">{{ items.label }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <span>备&#12288;&#12288;&#12288;注: </span><Input placeholder="无" clearable style="width:60%" v-model="remark"></Input>
          </Col>
        </Row>
      </div>
    </Form>
  </Modal>
</template>

<script>
  export default {
    data(){
      return {
        mask:false,
        formValidateModal:{
          toMbaList:[],//收方平衡区
          toMba:'',
          fromMbaList:[],
          fromMba:'',
          secret:'',
        },
        ruleFromMba:{},
        ruleToMba:{},
        ruleFormValidateModal: {
          secret:[
            {required:true, message:'密级不能为空',trigger:'blur'}
          ],
        },
        toNumber:'',//表单编号
        sende:'',//经手人
        sendeList:[],
        auditorValue:'',//审核人
        auditor:[],
        appPerson:'',
        appPersonList:[],
        certificate:'',//原始凭证
        tranNo:'',//调拨令号
        fromTimeData:'',//发出日期
        secret:'',//密级
        secretList:[],
        remark:'',
        modal:false,
        showType:true,
      }
    },
    mounted:function(){
      //此组件调用 必需：{hclType:''} + paraValues:{hclType:num};
    },
    methods:{
      saveHead:function(name){
        let that = this;
        setTimeout(() => {
          that.$refs[name].validate((valid) => {
            if(valid) {
              let data = {
                hclType:this.$route.query.hclType,
                recNo:this.toNumber,
                'fromMba':{'id':this.formValidateModal.fromMba},
                'toMba':{'id':this.formValidateModal.toMba},
                'mba':{'id':this.formValidateModal.fromMba},
                'tranNo':this.tranNo,//调拨令号
                'occurDate':this.fromTimeData,//发生日期
                'secret':this.formValidateModal.secret,
                'tranPerson':this.sende,
                'checkPerson':this.auditorValue,
                'certificate':this.certificate,
                'appPerson':this.appPerson,
                'remark':this.remark,
              };
              this.$emit('saveSure', [data]);
            }else {
              this.$Message.error('请填写必填项');
              this.modal = true;
            }
          })
        },1);
      },
      showHead:function(){
        let that = this;
        let validateFromMba = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请选择发方平衡区'));
          }else {
            callback();
          }
        };
        let validateToMba = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请选择收方平衡区'));
          }else {
            callback();
          }
        };
        let hclType = this.$route.query.hclType;
        if(hclType=='DE' || hclType=='WE' || hclType=='RE'){
          this.showType = false;
          this.ruleFromMba = {};
          this.ruleToMba = {};
        }else{
          this.showType = true;
          this.ruleFromMba = {validator: validateFromMba, trigger: 'blur'};
          this.ruleToMba = {validator: validateToMba, trigger: 'blur'};
        }
        this.$post('/a/storage/supportHead/invokeSpecifiedMehtod/rdSupportHeadFillIn',{t: {hclType: this.$route.query.hclType}, paraValues: {hclType:  this.$route.query.hclTypeValue}})
          .then((res) => {
            this.toNumber = res.result.recNo;
            this.fromTimeData = res.result.occurDate;
            this.formValidateModal.fromMbaList = res.result.fromMbaList;
            this.formValidateModal.toMbaList = res.result.toMbaList;
            this.sendeList= res.result.tranPersonList;
            this.auditor = res.result.checkPersonList;
            this.secretList = res.result.secretList;
            this.appPersonList = res.result.appPersonList;
            this.formValidateModal.fromMba =  res.result.fromMbaList[0].id;
            this.modal = true;
          }).catch(function(error){
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
