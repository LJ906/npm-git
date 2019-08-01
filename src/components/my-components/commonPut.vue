<style>
  *{margin:0;padding:0}
  #tableERContain table{width:auto !important;background-color: #eeeeee;background-size:cover;}
  #tableERContain {width:auto !important;background-color: #f7fafd;background-size:cover;}
  .ivu-card-head p{height:35px;}
  .tableJK{border-collapse: collapse;margin-left:-1px;width:100%;margin-top: -14%;}
  .tableJK tr{border:1px solid #DDDEE1;color:#333;background: #FFFFFF}
  .tableJK td{color: #333333;}
  .tableJK th{background:#DDDEE1;color:#333;}
  .tableJK th div{width:100%;text-align:center;line-height:31px;}
  /* Padding and font style */
  #tableJK td, #tableJK th {  padding: 3px 10px;  font-size: 12px;  font-family: Verdana;  font-weight: bold;  text-align:center}
  .floorList li{list-style:none;width:100px;float:left;height:35px;text-align: center;line-height:50px;border:1px solid #DDDEE1;border-radius:3px;border-left:none;border-bottom:none}
  .bgColor{background:#ccc !important;color:#C6C8CD !important;}
  .closeX{display:inline-block;height:15px;width:15px;position:absolute;right:5px;top:-23px;cursor:pointer;background-image: url("../../img/closeRed.png");background-repeat:no-repeat;background-size:100% 100%;}
  .chartPutData1{width:100%;position:relative;margin-top:-0.2%;overflow: hidden;background:#FFFFFF;}
  .coord{border-collapse: collapse;}
  .coordX{position:absolute;left:40px;top:0;z-index:88;background:#DDDEE1;}
  .coord tr td{border:1px solid #ccc;}
  .coordX tr td div{height:34px;width:134px;text-align: center;line-height:40px;color:#333;background:#DDDEE1;font-weight: bold}
  .coordY{position:absolute;left:3px;top:34px;z-index:88;overflow: scroll;width:30px;}
  .coordY tr td div{height:104px;width:34px;background:#DDDEE1;text-align: center;line-height:80px;color:#333;font-weight: bold}
  .crdTableContainer{width:100%;overflow:auto;position:absolute;left:-1px;top:-6px;}
  .tableContainer{width:5%;height:11.5%;background: #DDDEE1;margin-top: -1.5%;margin-left: 0.1%;}
  .jkcoordinateContain{position:absolute;left:40px;top:40px}
  .jkcoordinateContain tr td div{height:94px; width:124px;text-align:center;padding-top:10px;cursor:pointer;}
  .handStyle{width: 100%;text-align: center;line-height: 44px;}
  .demo-spin-icon-load{  animation: ani-demo-spin 1s linear infinite;}
  .tagStyleJK{display:inline-block;height:27px;width:165px;color:#fff;text-align:center;border-radius: 5px;margin-right:10px;cursor:pointer;margin-top:4px;font-size:14px;line-height:27px;}
  .containerStyle{position:relative;font-size:12px;top:20px;color:#333;}
  .batchTable{overflow-y: auto;}
  .disable{background-color: #bec0c7;}
  .handStyle{width: 100%;text-align: center;line-height: 44px;}
  .iconSty{position: absolute;  display: inline-block;}
  .sizeMegStyle{font-size: 30px;  color: #ccc;  font-weight: bolder;margin-top: 12px;}
  .titletagStyle{width:255px;height:35px;line-height: 35px;text-align:center;font-size:22px;margin-top:1px;color:#333;margin-left:3%;background: #DDDEE1;}
  .titletagStyleOutManual{width:226px;height:35px;line-height: 38px;font-size:22px;top:10px;color:#333;text-align: center;background-color:#DDDEE1;margin-left: 1%}

  .titleTip img{margin-top:0px;margin-right:-7px;}
  .posun{right:99px;top:-23px;}
  .bianxing{right:68px;top:-23px;}
  .wuchada{right:35px;top:-23px;}
  .tagListStylesd{width:509px;position:absolute;right:0px;top:-5px;z-index: 99;}
  .badagStyles{position:relative;left:24px;top:10px;height:10px;width:10px;margin-top: 5px;margin-left: 30%;}
  .tagBordStyles{height:34px;width:520px;border:1px solid #ccc;position:absolute;left:25%;top:5px;border-radius:3px;border-left:none}
  .tagStylesd{position:absolute;left:34px;top:-2px;width:455px;height:36px;overflow: hidden}
  .tagStylesd p{float:left;height:40px;width:165px;color:#333;text-align:center;margin-right:15px;cursor:pointer;margin-top:4px;font-size:14px;line-height:24px;position:relative;}
  .tagStylesd p:after {content:"";background-color:#2D8CF0;display:inline-block;border-radius:50%;height:5px;width:5px;position:absolute;left:50%;top:58%;}
  .someStyles{width:600px;position:absolute;left:0;top:0px;}
  .leftStyles{position:absolute;left:12px;top:13px;cursor:pointer}
  .rightStyles{position:absolute;right:12px;top:13px;cursor:pointer}
  .JKnumberStyle{position:absolute;left:0;top:-10px;display: inline-block;height:20px;width:20px;background:#ed3f14;border-radius:50%;color:#fff;text-align: center}
  .highlight{background:yellow !important;}
  .chartPutData{height:700px;width:100%;position:relative;padding-top:40px;padding-left:40px;overflow:auto;}
  .taBackgroundStyle{padding:5px}
  .taBackgroundStyle div{background:#fff}
  .fontColor{color:#ff9932}
  .ivu-switch-large.ivu-switch-checked:after{display: inline-block;left:75%;}
</style>
<template>
  <div style="height:100%;padding:10px 7px 0px 10px;" id="tableERContain">

     <div style="background-color: #ffffff;height:48px;" >
       <p style="margin-top:15px;">
         <span style="font-size:14px;color:#333;margin-left:10px;position:relative;top:5px">所在厂房:</span>  <Select
         style="width:160px;position:relative;top:5px" v-model="defaultFactory" @on-change="factoryChange(defaultFactory)" size="large">
         <Option v-for="(items,index) in factoryData" :value="items.id" :key="items.index">{{ items.hclCode }}</Option></Select>
         <span style="font-size:14px;color:#333;margin-left:30px;position:relative;top:5px">所在区域:</span> <Select  style="width:160px;position:relative;top:5px" v-model="selectAreaId"  @on-change="areaChange(selectAreaId)" size="large">
         <Option v-for="items in areaData" :value="items.id" :key="items.id">{{ items.name }}</Option></Select>
         <Button type="primary" @click="buildManual" style="margin-left:30px;position:relative;top:5px" icon="ios-list-outline">生成支持性文件</Button>
         <span style="font-size:14px;color:#333;margin-left:30px;position:relative;top:5px">批次:</span>
         <Input placeholder="请输入批次" clearable style="width: 160px;position:relative;top:5px" v-model="batch"></Input>
         <span style="font-size:14px;color:#333;margin-left:30px;position:relative;top:5px">容器编号:</span>
         <Input placeholder="请输入容器编号" clearable style="width: 160px;position:relative;top:5px" v-model="containerCode"></Input>
         <Button type="primary" @click="search"  style="margin-left:2%;position:relative;top:5px" icon="ios-search">查询</Button>
         <Button type="primary" icon="arrow-right-b" @click="rfid"  v-show="isRfid" style="margin-left:92%;margin-top:-2.5%;margin-right:10px;z-index:99">开始扫描</Button>
      <!--   <i-switch v-show="isRfid" size="large" style="margin-left: 10%;margin-top: 0.5%">
           <span slot="open">单扫</span>
           <span slot="close">多扫</span>
         </i-switch>-->
         <i-switch v-show="isRfid" @on-change="switchRfid" :value="true" size="large" style="margin-left: 84%;margin-top: -4.5%;display:inline-block;width:4.5%;z-index: 99">
           <span slot="open" >RFID入库</span>
           <span slot="close"  >手动入库</span>
         </i-switch>

       </p>
     </div>

<div>
      <p style="margin-top:9px;margin-bottom:-4px;">
        <Row>
            <Row  style="margin-top: -0.3%;background: #ffffff;width:83.4%;height:15%;">
              <Col span="2">
                    <div class="titletagStyle" >
                      <img src="../../img/home2.png"  style="margin-left: -86%;margin-top: 1%;"/>
                       <p style="margin-top: -15%;margin-left: -12%;"> {{defaultFactoryName}}-{{selectAreaName}}</p>
                     </div>
                 <!--   <div style="border:1px solid #DDDEE1; width: 1507px;z-index:99;margin-top:1px;"></div>-->
              </Col>
              <Col span="15" style="position:relative;padding-right:0px;">&nbsp;
                <div class="tagListStylesd">
                  <p class="badagStyles" :style="BadaStyle">
                    <img src="../../img/tagTargetEdit.png" @click="clicktagLists" />
                    <span class="JKnumberStyle">{{tagCount}}</span>
                  </p>
                  <div class="tagBordStyles"  v-show="tagLists">
                    <img src="../../img/toLeft.png" class="leftStyles" @click="toPositClick(true)"/>
                    <div class="tagStylesd">
                      <div :style="tagLeft" class="someStyles">
                        <template v-for="tag in tagDatas">
                          <p :id="tag.id" @click="tagChange(tag.id)" class="tagStyleJK">{{tag.pidName}}库区{{tag.name}}</p>
                        </template>
                      </div>
                    </div>
                    <img src="../../img/toRight.png" class='rightStyles' @click="toPositClick(false)"/>
                  </div>
                </div>
              </Col>
              <Col span="3"  style="padding-right:10px;margin-top: 2px;margin-left: 16.6%;">
                <span @mouseenter="showActive(1,0)" @mouseleave="showActive(0,0)">
                  <img src="../../img/spanEdit.png" v-show="active !== 1 && tooActive != 1" @click="confirmChange('rows',1)" alt="按行"
                       style="top：5px;z-index:99;margin-left: -29%;">
                  <img v-show="active == 1 || tooActive == 1" src="../../img/spanEdit1.png" @click="confirmChange('rows',1)" alt="按行"
                       style="margin-left: -29%;top:0px;z-index:99;">
                </span>
                <span @mouseenter="showActive(2,1)" @mouseleave="showActive(0,1)">
                  <img src="../../img/rowEdit.png" v-show="active != 2 && tooActive != 2" @click="confirmChange('col',2)"  alt="按列"
                       style="left: -45px;z-index:99;">
                  <img v-show="active == 2 || tooActive == 2" src="../../img/rowEdit1.png" @click="confirmChange('col',2)"  alt="按列"
                       style="left: -45px;z-index:99;">
                </span>
                <span @mouseenter="showActive(3,2)" @mouseleave="showActive(0,2)">
                  <img src="../../img/leftBottomEdit.png" v-show="active != 3 && tooActive != 3" @click="clickDirection(4,3)" alt="左下"
                       style="left: -45px;z-index:99;">
                  <img v-show="active == 3 || tooActive == 3" src="../../img/leftBottomEdit1.png" @click="clickDirection(4,3)" alt="左下"
                       style="left: -45px;z-index:99;">
                </span>
                <span  @mouseenter="showActive(4,3)" @mouseleave="showActive(0,3)">
                  <img src="../../img/leftTopEdit.png" v-show="active != 4 && tooActive != 4" @click="clickDirection(1,4)"
                       alt="左上" style="left: -45px;z-index:99;top:-38px;">
                  <img v-show="active == 4 || tooActive == 4" src="../../img/leftTopEdit1.png" @click="clickDirection(1,4)"
                       alt="左上" style="left: -45px;z-index:99;top:-38px;">
                </span>
                <span  @mouseenter="showActive(5,4)" @mouseleave="showActive(0,4)">
                  <img src="../../img/rightTopEdit.png" v-show="active != 5 && tooActive != 5" @click="clickDirection(2,5)" alt="右上"
                       style="left: 20px;z-index:99;top:-38px;">
                  <img v-show="active == 5 || tooActive == 5" src="../../img/rightTopEdit1.png" @click="clickDirection(2,5)" alt="右上"
                       style="left: 20px;z-index:99;top:-38px;">
                </span>
                <span  @mouseenter="showActive(6,5)" @mouseleave="showActive(0,5)">
                  <img src="../../img/rightBottomEdit.png" v-show="active != 6 && tooActive != 6" @click="clickDirection(3,6)"
                       alt="右下"style="left: 20px;top:-38px;z-index:99;">
                  <img v-show="active == 6 || tooActive == 6"  src="../../img/rightBottomEdit1.png" @click="clickDirection(3,6)" alt="右下"
                       style="left: 20px;top:-38px;z-index:99;">
                </span>
              </Col>
              </Row>
  </Col>
  </Row>
  </p>
</div>
  <p>
    <Row style="margin-top: 0.5%;">
      <Col span="20">
        <loading-component v-show="tableDatashow"></loading-component>
        <h1 style="text-align: center;width:100%;">{{showTet}}</h1>
        <div class="chartPutData1" ref="chartPutData1" :id="'chartPutData1'" v-show="this.showTet == ''? true:false">
          <template v-if="direction==1">
            <table class="coord coordX" ref="tableX"><tr><td v-for="eleX in positionX"><div>{{eleX}}</div></td></tr></table>
            <table class="coord coordY" ref="tableY"><tr v-for="(eleY,index) in positionY"><td><div>{{Arr[index]}}</div></td></tr></table>
            <div class="crdTableContainer" ref="crdTableContainer">
              <div class="tableContainer"></div>
              <table class="coord jkcoordinateContain">
                <tr v-for="(eleY,indY) in positionArr">
                  <td v-for="(eleX,indX) in eleY" @click="getData(indX,indY)" :style="{background:positionArr[indY][indX].container?positionArr[indY][indX].container.batchColour:'#fff'}" class="taBackgroundStyle">
                    <div :id="positionArr[indY][indX].id" style="background:#fff">
                        <p v-if="!positionArr[indY][indX].container && !positionArr[indY][indX].canNotSelect" class="sizeMegStyle">{{Arr[indY]}}{{(indX+1)<10?'0'+(indX+1):(indX+1)}}</p>
                        <p v-if="positionArr[indY][indX].canNotSelect" class="sizeMegStyle fontColor">已占用</p>
                        <p v-if="positionArr[indY][indX].container" class="containerStyle" :id='positionArr[indY][indX].container.id'>
                          {{positionArr[indY][indX].container.batch}}<br/>&nbsp;{{positionArr[indY][indX].container?positionArr[indY][indX].container.code:''}}
                          <br/>{{positionArr[indY][indX].container.material?positionArr[indY][indX].container.material.genericName:''}}
                          <span class="closeX" @click.stop.prevent="closeNumber(indY,indX)" v-if="positionArr[indY][indX].state"></span>
                          <img src="../../img/unbreak.png" class="iconSty posun" v-if="positionArr[indY][indX].container && positionArr[indY][indX].state"/><!--破损-->
                          <img src="../../img/broken.png" class="iconSty posun" v-if="positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('1') != -1"/><!--破损-->

                          <img src="../../img/errorFree.png" class="iconSty bianxing" v-if="positionArr[indY][indX].container && positionArr[indY][indX].state"/><!--变形-->
                          <img src="../../img/error.png" class="iconSty bianxing" v-if="positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('2') != -1"/><!--变形-->

                          <img src="../../img/normal.png"  class="iconSty wuchada" v-if="positionArr[indY][indX].container && positionArr[indY][indX].state"/><!--误差大-->
                          <img src="../../img/tranform.png"  class="iconSty wuchada" v-if="positionArr[indY][indX].container && positionArr[indY][indX].container.conReceiveState && positionArr[indY][indX].container.conReceiveState.indexOf('3') != -1"/><!--误差大-->
                        </p>
                        </div>

                        </td>
                        </tr>
                        </table>
                        </div>
                      </template>
                      <template v-if="direction==2">
                        <table class="coord coordX" ref="tableX"><tr><td v-for="eleX in positionX"><div>{{positionX-eleX+1}}</div></td></tr></table>
                        <table class="coord coordY" ref="tableY"><tr v-for="(eleY,index) in positionY"><td><div>{{Arr[index]}}</div></td></tr></table>
                        <div class="crdTableContainer" ref="crdTableContainer">
                          <table class="coord jkcoordinateContain">
                            <tr v-for="(eleY,indY) in positionArr">
                              <td v-for="(eleX,indX) in eleY" @click="getData(positionX-indX-1,indY)"  :style="{background:positionArr[indY][positionX-indX-1].container?positionArr[indY][positionX-indX-1].container.batchColour:'#fff'}" class="taBackgroundStyle">
                                <div :id="positionArr[indY][positionX-indX-1].id" style="background:#fff">
                                  <p v-if="!positionArr[indY][positionX-indX-1].container && !positionArr[indY][positionX-indX-1].canNotSelect" class="sizeMegStyle">{{Arr[indY]}}{{(positionX-indX)<10?'0'+(positionX-indX):(positionX-indX)}}</p>
                                  <p v-if="positionArr[indY][positionX-indX-1].canNotSelect" class="sizeMegStyle fontColor">已占用</p>
                                  <p v-if="positionArr[indY][positionX-indX-1].container" class="containerStyle">
                                    {{positionArr[indY][positionX-indX-1].container.batch}}<br/>{{positionArr[indY][positionX-indX-1].container?positionArr[indY][positionX-indX-1].container.code:''}}
                                    <br/>{{positionArr[indY][positionX-indX-1].container.material?positionArr[indY][positionX-indX-1].container.material.genericName:''}}
                                    <span class="closeX" @click.stop.prevent="closeNumber(indY,positionX-indX-1)" v-if="positionArr[indY][positionX-indX-1].state"></span>
                                    <img src="../../img/unbreak.png" class="iconSty posun" v-if="positionArr[indY][positionX-indX-1].container && positionArr[indY][positionX-indX-1].state"/><!--破损-->
                                    <img src="../../img/broken.png" class="iconSty posun" v-if="positionArr[indY][positionX-indX-1].container && positionArr[indY][positionX-indX-1].container.conReceiveState && positionArr[indY][positionX-indX-1].container.conReceiveState.indexOf('1') != -1"/><!--破损-->

                                    <img src="../../img/errorFree.png" class="iconSty bianxing" v-if="positionArr[indY][positionX-indX-1].container && positionArr[indY][positionX-indX-1].state"/><!--变形-->
                                    <img src="../../img/error.png" class="iconSty bianxing" v-if="positionArr[indY][positionX-indX-1].container && positionArr[indY][positionX-indX-1].container.conReceiveState && positionArr[indY][positionX-indX-1].container.conReceiveState.indexOf('2') != -1"/><!--变形-->

                                    <img src="../../img/normal.png"  class="iconSty wuchada" v-if="positionArr[indY][positionX-indX-1].container && positionArr[indY][positionX-indX-1].state"/><!--误差大-->
                                    <img src="../../img/tranform.png"  class="iconSty wuchada" v-if="positionArr[indY][positionX-indX-1].container && positionArr[indY][positionX-indX-1].container.conReceiveState && positionArr[indY][positionX-indX-1].container.conReceiveState.indexOf('3') != -1"/><!--误差大-->
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </template>
                      <template v-if="direction==3">
                        <table class="coord coordX" ref="tableX"><tr><td v-for="eleX in positionX"><div>{{positionX-eleX+1}}</div></td></tr></table>
                        <table class="coord coordY" ref="tableY"><tr v-for="(eleY,index) in positionY"><td><div>{{Arr[positionY-index-1]}}</div></td></tr></table>
                        <div class="crdTableContainer" ref="crdTableContainer">
                          <table class="coord jkcoordinateContain">
                            <tr v-for="(eleY,indY) in positionArr">
                              <td v-for="(eleX,indX) in eleY" @click="getData(positionX-indX-1,positionY-indY-1)"  :style="{background:positionArr[positionY-indY-1][positionX-indX-1].container?positionArr[positionY-indY-1][positionX-indX-1].container.batchColour:'#fff'}" class="taBackgroundStyle">
                                <div :id="positionArr[positionY-indY-1][positionX-indX-1].id" style="background:#fff">
                                  <p v-if="!positionArr[positionY-indY-1][positionX-indX-1].container && !positionArr[positionY-indY-1][positionX-indX-1].canNotSelect" class="sizeMegStyle">{{Arr[positionY-indY-1]}}{{(positionX-indX)<10?'0'+(positionX-indX):(positionX-indX)}}</p>
                                  <p v-if="positionArr[positionY-indY-1][positionX-indX-1].canNotSelect" class="sizeMegStyle fontColor">已占用</p>
                                  <p v-if="positionArr[positionY-indY-1][positionX-indX-1].container" class="containerStyle">
                                    {{positionArr[positionY-indY-1][positionX-indX-1].container.batch}}<br/>{{positionArr[positionY-indY-1][positionX-indX-1].container?positionArr[positionY-indY-1][positionX-indX-1].container.code:''}}
                                    <br/>{{positionArr[positionY-indY-1][positionX-indX-1].container.material?positionArr[positionY-indY-1][positionX-indX-1].container.material.genericName:''}}
                                    <span class="closeX" @click.stop.prevent="closeNumber(positionY-indY-1,positionX-indX-1)" v-if="positionArr[positionY-indY-1][positionX-indX-1].state"></span>
                                    <img src="../../img/unbreak.png" class="iconSty posun" v-if="positionArr[positionY-indY-1][positionX-indX-1].container && positionArr[positionY-indY-1][positionX-indX-1].state"/><!--破损-->
                                    <img src="../../img/broken.png" class="iconSty posun" v-if="positionArr[positionY-indY-1][positionX-indX-1].container && positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState && positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState.indexOf('1') != -1"/><!--破损-->

                                    <img src="../../img/errorFree.png" class="iconSty bianxing" v-if="positionArr[positionY-indY-1][positionX-indX-1].container && positionArr[positionY-indY-1][positionX-indX-1].state"/><!--变形-->
                                    <img src="../../img/error.png" class="iconSty bianxing" v-if="positionArr[positionY-indY-1][positionX-indX-1].container && positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState && positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState.indexOf('2') != -1"/><!--变形-->

                                    <img src="../../img/normal.png"  class="iconSty wuchada" v-if="positionArr[positionY-indY-1][positionX-indX-1].container && positionArr[indY][indX].state"/><!--误差大-->
                                    <img src="../../img/tranform.png"  class="iconSty wuchada" v-if="positionArr[positionY-indY-1][positionX-indX-1].container && positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState && positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState.indexOf('3') != -1"/><!--误差大-->
                                  <!--  <template v-if="positionArr[positionY-indY-1][positionX-indX-1].container.conReceiveState==1">
                                      <Icon type="alert-circled" style="color:red"></Icon>
                                    </template>-->

                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </template>
                      <template v-if="direction==4">
                        <table class="coord coordX" ref="tableX"><tr><td v-for="eleX in positionX"><div>{{eleX}}</div></td></tr></table>
                        <table class="coord coordY" ref="tableY"><tr v-for="(eleY,index) in positionY"><td><div>{{Arr[positionY-index-1]}}</div></td></tr></table>
                        <div class="crdTableContainer" ref="crdTableContainer">
                          <table class="coord jkcoordinateContain">
                            <tr v-for="(eleY,indY) in positionArr">
                              <td v-for="(eleX,indX) in eleY" @click="getData(indX,positionY-indY-1)"  :style="{background:positionArr[positionY-indY-1][indX].container?positionArr[positionY-indY-1][indX].container.batchColour:'#fff'}" class="taBackgroundStyle">
                                <div :id="positionArr[positionY-indY-1][indX].id" v-bind:class="{disable:positionArr[positionY-indY-1][indX].canNotSelect}" style="background:#fff">
                                  <p v-if="!positionArr[positionY-indY-1][indX].container && !positionArr[positionY-indY-1][indX].canNotSelect" class="sizeMegStyle">{{Arr[positionY-indY-1]}}{{(indX+1)<10?'0'+(indX+1):(indX+1)}}</p>
                                  <p v-if="positionArr[positionY-indY-1][indX].canNotSelect" class="sizeMegStyle fontColor">已占用</p>
                                  <p v-if="positionArr[positionY-indY-1][indX].container" class="containerStyle">
                                    {{positionArr[positionY-indY-1][indX].container.batch}}<br/>{{positionArr[positionY-indY-1][indX].container?positionArr[positionY-indY-1][indX].container.code:''}}
                                    <br/>{{positionArr[positionY-indY-1][indX].container.material?positionArr[positionY-indY-1][indX].container.material.genericName:''}}
                                    <span class="closeX" @click.stop.prevent="closeNumber(positionY-indY-1,indX)" v-if="positionArr[positionY-indY-1][indX].state"></span>
                                    <img src="../../img/unbreak.png" class="iconSty posun" v-if="positionArr[positionY-indY-1][indX].container && positionArr[positionY-indY-1][indX].state"/><!--破损-->
                                    <img src="../../img/broken.png" class="iconSty posun" v-if="positionArr[positionY-indY-1][indX].container && positionArr[positionY-indY-1][indX].container.conReceiveState && positionArr[positionY-indY-1][indX].container.conReceiveState.indexOf('1') != -1"/><!--破损-->

                                    <img src="../../img/errorFree.png" class="iconSty bianxing" v-if="positionArr[positionY-indY-1][indX].container && positionArr[positionY-indY-1][indX].state"/><!--变形-->
                                    <img src="../../img/error.png" class="iconSty bianxing" v-if="positionArr[positionY-indY-1][indX].container && positionArr[positionY-indY-1][indX].container.conReceiveState && positionArr[positionY-indY-1][indX].container.conReceiveState.indexOf('2') != -1"/><!--变形-->

                                    <img src="../../img/normal.png"  class="iconSty wuchada" v-if="positionArr[positionY-indY-1][indX].container && positionArr[positionY-indY-1][indX].state"/><!--误差大-->
                                    <img src="../../img/tranform.png"  class="iconSty wuchada" v-if="positionArr[positionY-indY-1][indX].container && positionArr[positionY-indY-1][indX].container.conReceiveState && positionArr[positionY-indY-1][indX].container.conReceiveState.indexOf('3') != -1"/><!--误差大-->
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </template>

</div>
</Col>
<div style="background: #FFFFFF;height:790px;margin-left:84%;width:16%;z-index:88;margin-top: 1px;">


  <div class="batchTable" ref="batchsTable" style="padding-left:1px;padding-bottom:50px;margin-top:-15.5%;width:100%;height:870px;background: #FFFFFF;z-index:-99">
    <div style="background: #FFFFFF;height:10%;width:107%;margin-left:5%;">
    <p style="padding-left:45px;margin-bottom:4px;margin-left: -1.5%;width:100%;height:5%;" v-if="!isExcludeBatch">
      <Row>
      <img src="../../img/bigBatch.png" style="margin-left: -21%;margin-top:1%;"/>
      <Select  style="width:95%;margin-left: -1%;margin-top: -11%;" v-model="JKBatch" @on-change="JKBatchChange">
        <Option v-for="items in JKbatchList" :value="items.batch" :key="items.batch">{{ items.batch }}</Option>
      </Select>
      </Row>
    </p>
    </div>
    <table class="tableJK" id="tableJK" style="width: 100% !important;">
      <tr>
        <th><div>容器编码</div></th>
        <th><div>批&nbsp;&nbsp;&nbsp;&nbsp;次</div></th>
      </tr>
      <tr v-for="(element,index) in cookieData" @click.prevent="tableClick(index)">
        <td><div>{{element.container?element.container.code:''}}</div></td>
        <td><div>{{element.batch}}</div></td>
      </tr>
    </table>
  </div>

</div>
</Row>
</p>

<Modal v-model="ContainerStateModal"  title="选择容器状态" width="300px" @on-ok="choseContainerState" >
  <div class="handStyle">
    容器状态 :
    <CheckboxGroup v-model="defaultContainerState">

      <Checkbox v-for="(items,index) in containerState" :key="items.value" :label="items.value">
        {{items.label}}
      </Checkbox>
    </CheckboxGroup>
  </div>
</Modal>
<Modal v-model="confirmChangeModal"  title="确认逆序" width="300px" @on-ok="changeContainerPosition">
  <p style="color:#000">确定要进行逆序么？</p>
</Modal>
<Modal v-model="printModal"  title="系统提示" width="300px" @on-ok="printModalSure">
  <p style="color:#000">{{printTet}}</p>
</Modal>
</div>
</template>
<script>
  import Store from '../../js/store.js';
  import headInfo from './headInfo.vue';
  import loadingcomponent from './loading.vue';
  import {getmanualStorageInitial,getprintJKByRoom,getswitchMba,getswitchRoom,getBodyasyQueryDetail,getBodyasySaveDetail,getqueryByRoomAndBatch,getsingleScanRFID} from '../../api/hclSupport.js'
  export default {
    name: 'putManual',
    components:{
      headInfo:headInfo,
      loadingComponent:loadingcomponent
    },
    data() {
      return {

        ContainerStateModal: false,//特殊状态容器
        cookieData: [],//未入库的body列表
        saveMoveCookieDataMap: {},//已入库的body列表
        bodyStatesOperByUser: {},//用户操作的body的状态map，键为body.container对象，值内容为{isMovedToCookieData:是否被移动到了cookieData,belongRoomId:目前所属区域ID,belongBody:container所属body}
        factoryData: '',//所有厂房
        isRfid:false,
        defaultFactory: '',//默认厂房
        defaultFactoryName: '',//默认厂房名字
        selectAreaId: '',//默认区域
        selectAreaName: '',//默认区域name
        areaData: [],//所选平衡区下的所有区域
        allseleAreaMap: {},//所有选择过的区域map，内容为id:room
        currentRoom: {}, //当前区域Room
        Arr: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        positionX: 0,//横坐标数量
        positionY: 0,//纵坐标数量
        positionArr: [],//表格数组
        idListArr: [],//容器id
        container: [],//容器数据
        moveDataIndex: 0,//移动数据的索引
        title: '国内接收表头信息',//生成入库计划单标题
        batch:'',//大批次
        containerCode:'',//小批次
        headSupport: {},//表头信息
        tableDatashow: true,//表格信息显示
        showTet: '',//无库区是显示的文本
        CAN_EDITE: true, //当前位置上有容器且可以编辑该位置
        CAN_NOT_EDITE: false, //当前位置上有容器但不属于该计划单的容器，不可编辑
        tagDatas: [],//标签集合
        currentBatch: '',//民库当前选中的批次
        defaultContainerState: [],//默认特殊状态容器
        containerState: [],//特殊状态容器值
        rowX: 0,//点击X索引
        columnY: 0,//点击Y索引
        direction: 1,//二维图显示方向
        //  editSupportHead:'',//当前编辑的head。新建则为空。
        sumPage: 0,//cookie总条数
        pageSize: 1000,//cookie分页条数
        page: 1,//cookie当前页数
        putDatas: {},//总数据
        unSelectData: [],//入库时未选中的的body
        //unSelectDataMap:new Map(),//将未选中的body放入该map。键为toPostionId,值为body。
        isEdit: '',//是否是编辑状态
        headData:{},//传入表头组件的数据
        JKbatchList:[],//军库批次list
        JKBatch:'',//军库批次
        JKBatchTemp:'',//军库批次temp
        supportBodyLists:[],//后台返回的supportBodyList,前台进行缓存
        currentBatch:'',//保存当前的batch
        isRelation: true,//标记位，控制区域和批次切换的顺序
        isInitRoom:true,//标记位，表示是否是初始化，切换区域用
        isInitBatch:true,//标记位，表示是否是初始化，切换批次用
        operatedDataMap: new Map(),//页面操作过的数据Map，提交后台用,key是containerId,value是body
        clickRowCount:0,//点击按行逆序按钮的次数
        clickColumnCount:0,//点击按列逆序按钮的次数
        confirmChangeModal: false,//确认要逆序吗？模态框
        confirmChangeStr:'',//存点击的是按列逆序，还是按行逆序
        active:4,
        tooActive:4,
        colorImg:[true,true,true,false,true,true,true,true],
        printModal:false,
        printTet:'',
        type:0,
        tagCount:0,
        BadaStyle:{left:'100%'},
        tagLists:false,
        tagLeft:{},
        leftNum:0,
        isExcludeBatch:false,
        JKbatchList1:[],//用来暂时存放小批次
      }
    },
    props:[
      'data',
    ],
    mounted: function () {
      let that = this;
      this.isRfid =this.$route.query.isRfid ? this.$route.query.isRfid:'';
      let chart_height = $(document).height() - 170;
      let chart_height1 =$(document).height() -110;
      $(".chartPutData1").css("height", chart_height);
      $(".crdTableContainer").css("height", chart_height);
      $(".batchTable").css("height", chart_height1);
      this.isExcludeBatch = this.data.isExcludeBatch;
      /**
       * @author 'zxq'
       */
      this.isEdit = this.data.id ? true: false;
      this.tagDatas = [];
      getmanualStorageInitial( {
        "t": {
          "batch": "",
          "supportHead": this.data.id ?{"id":  this.data.id} : undefined,
          "hclType":this.data.hclType
        },
        "paraValues": {"hclType":this.data.hclTypeValue},
      })
        .then((res) => {
          this.tableDatashow = true;
          this.factoryData = res.result.mbaList;//所有厂房
          this.defaultFactory = res.result.defaultMba.id;//默认厂房
          this.containerState = res.result.conReceiveStateList;
          if(!this.isExcludeBatch){
            //从RFID页面跳转过来需要禁用小批次切换组件
            if(this.isRfid == false || this.isRfid == ''){
              this.JKbatchList = res.result.bodyBatchList ? res.result.bodyBatchList : [];//军库batch

            }else{
              this.JKbatchList = [];
              this.JKbatchList1 = res.result.bodyBatchList ? res.result.bodyBatchList : [];//军库batch
            }

            //初始化为了解决异步问题，先将小批次保存到临时变量里，switchRoom后在进行批次初始化
            this.JKBatchTemp = res.result.bodyBatchList[0].batch;
          }
         //初始化tag
          this.tagList = res.result.roomTagList;
          for(let i=0;i<this.tagList.length;i++){
            let obj = {
              'id':this.tagList[i].id,
              'pid':this.tagList[i].mba.id,
              'name':this.tagList[i].name,
              'pidName':this.getPidName(this.tagList[i].mba.id)
            };
            this.tagDatas.push(obj);
          }
          this.tagCount = this.tagDatas.length;
        });
      this.$refs.crdTableContainer.onscroll = function () {

        that.$refs.tableX.style.left = -this.scrollLeft + 40 + 'px';
        that.$refs.tableX.style.top = '0px';
        that.$refs.tableY.style.left = '3px';
        that.$refs.tableY.style.top = -this.scrollTop + 35 + 'px';

      }
    },
    methods: {
      clicktagLists:function(){
        this.tagLists = !this.tagLists;
       /* this.tagLists?this.BadaStyle = {left:'-11px'}:this.BadaStyle = {left:'100%'};*/
      },
      toPositClick:function(val){
        let maxTime = this.tagCount-4;
        let leftVal = val?this.leftNum+1:this.leftNum-1;
        if(leftVal>=0 && leftVal<=maxTime) {
          this.leftNum = leftVal;
          let leftValue = this.leftNum * (-114) + 'px';
          this.tagLeft = {left: leftValue};
        }

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
        let starIndex = Number((page - 1) * that.pageSize);
        let endIndex = Number(starIndex + that.pageSize);
        this.sumPage = Math.ceil(that.supportBodyLists.length / that.pageSize);
        //判断下一页的数据个数，如果小于pageSize，则不清空cookieData
        let count = 0;
        for (let i = starIndex; i < endIndex; i++) {
          if (that.supportBodyLists[i]) {
            count++;
          }
        }

        if (count >= that.pageSize) {
          that.cookieData = [];
        }
        for (var i = starIndex; i < endIndex; i++) {
          if (that.supportBodyLists[i]) {
            that.cookieData.push(that.supportBodyLists[i]);
          }
        }
        that.$refs.batchsTable.scrollTop = 5;
      },
      tagChange:function(item){
        //点击标签事件
        this.selectAreaId = item;
      },
      clickDirection: function (num,idx) {
        //设置二维图显示方向
        this.direction = num;
        this.active = idx;
        this.tooActive = idx;
        for(let i=0;i<this.colorImg.length;i++){
          this.colorImg[i] = true;
        }
        this.colorImg[idx-1] = false;
        this.$refs.crdTableContainer.scrollLeft = 0 + 'px';
        this.$refs.crdTableContainer.scrollTop = 0 + 'px';

      },
      clickPrint:function(num,idx,type){
        if(num==0){
          this.printTet = '确认按行打印？';
        }else{
          this.printTet = '确认按列打印？';
        }
        this.active = idx;
        this.tooActive = idx;
        this.printModal = true;
        this.type = type;

      },
      printModalSure:function(){
        let data = {toRoom:{id:this.selectAreaId},supportHead:{id:this.data.id},remark:this.type},
          that = this;
        getprintJKByRoom(data)
          .then((res)=>{

          }).catch(function(){
          that.$Message.error('数据连接失败！')
        })
      },

      /**
       * 容器位置逆序
       */
      confirmChange: function(sd){
        this.confirmChangeModal = true;
        this.confirmChangeStr = sd;
      },
      changeContainerPosition:function(){
        let sd = this.confirmChangeStr;

        if(sd == 'rows'){
          //按行逆序按钮点击次数加一
          this.clickRowCount += 1;
        }else if(sd == "col"){
          //按行逆序按钮点击次数加一
          this.clickColumnCount += 1;
        }

        let that = this;
        var positionArrNew = [];
        //新数组，用于逆序重新渲染页面
        for(let m=0;m<this.positionArr.length;m++){
          let [...arr1]=this.positionArr[m];
          positionArrNew.push(arr1);
        }

        //添加属性：该位置是否进行过了逆序操作 true：已经逆序
        for(let k = 1;k<=this.positionY;k++) {
          for (let n = 1; n <= this.positionX; n++) {
            positionArrNew[k-1][n-1].isChange = false;
          }
        }

        for(let i = 1;i<=this.positionY;i++){
          for(let j = 1;j<=this.positionX;j++){

            //该位置若已经进行过逆序操作，跳过。
            if(positionArrNew[i-1][j-1].isChange){
              continue;
            }

            /*//当前位置有其他计划单计划放入的容器（未审核完成），则其目标位置不再进行逆序操作。
            if(this.positionArr[i-1][j-1].canNotSelect){
              positionArrNew[this.positionY-i][j-1].isChange = true;
              positionArrNew[i-1][this.positionX-j].isChange = true;
              continue;
            }
*/
            //当前位置是可编辑状态且有容器，才能进行逆序操作
            if(this.positionArr[i-1][j-1].state && this.positionArr[i-1][j-1].container){

              let changeContainerId = this.positionArr[i-1][j-1].container.id;
              let tempContainerOne = this.positionArr[i-1][j-1].container;

              //按行逆序
              if(sd == "rows"){

                //逆序目标位置的逆序状态修改为已经逆序。循环到该位置时不再进行逆序操作
                positionArrNew[this.positionY-i][j-1].isChange = true;

                //根据目标位置状态进行判断：
                // 1，目标位置不可编辑，跳过进行下一个位置逆序操作。
                // 2，目标位置可编辑且有容器，则与当前位置进行容器交换。
                // 3，目标位置可编辑无容器，将当前位置容器放入目标位置，然后当前位置容器置空。
                if(!this.positionArr[this.positionY-i][j-1].state || this.positionArr[this.positionY-i][j-1].canNotSelect){
                  continue;
                }else if(this.positionArr[this.positionY-i][j-1].container){
                  let destContainerId = this.positionArr[this.positionY-i][j-1].container.id;
                  var tempContainerTwo = this.positionArr[this.positionY-i][j-1].container;

                  that.bodyStatesOperByUser[changeContainerId].belongPosition = this.positionArr[this.positionY-i][j-1];
                  that.bodyStatesOperByUser[changeContainerId].belongBody.toPosition = this.positionArr[this.positionY-i][j-1];

                  that.bodyStatesOperByUser[destContainerId].belongPosition = this.positionArr[i-1][j-1];
                  that.bodyStatesOperByUser[destContainerId].belongBody.toPosition = this.positionArr[i-1][j-1];

                  positionArrNew[i-1][j-1].container = tempContainerTwo;
                  positionArrNew[this.positionY-i][j-1].container = tempContainerOne;
                }else{
                  positionArrNew[this.positionY-i][j-1] = {
                    code: this.positionArr[this.positionY-i][j-1].code,
                    id: this.positionArr[this.positionY-i][j-1].id,
                    container: tempContainerOne,
                    state: this.positionArr[this.positionY-i][j-1].state,
                    realX: this.positionArr[this.positionY-i][j-1].realX,
                    realY: this.positionArr[this.positionY-i][j-1].realY,
                    room: this.positionArr[this.positionY-i][j-1].room,
                    canNotSelect:this.positionArr[this.positionY-i][j-1].canNotSelect
                  };
                  positionArrNew[i-1][j-1].container = undefined;
                  //逆序操作后须更改容器目标位置属性
                  if (that.bodyStatesOperByUser[changeContainerId]
                    && !that.bodyStatesOperByUser[changeContainerId].isMovedToCookieData) {
                    that.bodyStatesOperByUser[changeContainerId].belongPosition = this.positionArr[this.positionY-i][j-1];
                    //设置body的toposition和toRoom
                    that.bodyStatesOperByUser[changeContainerId].belongBody.toPosition = this.positionArr[this.positionY-i][j-1];
                    that.bodyStatesOperByUser[changeContainerId].belongBody.toRoom = this.positionArr[this.positionY-i][j-1].room;
                  }
                }



              }else if(sd == "col"){//按列逆序，逻辑同按行逆序，仅目标角标不同。

                positionArrNew[i-1][this.positionX-j].isChange = true;

                if(!this.positionArr[i-1][this.positionX-j].state || this.positionArr[i-1][this.positionX-j].canNotSelect){
                  continue;
                }else if(this.positionArr[i-1][this.positionX-j].container){
                  let destContainerIdCol = this.positionArr[i-1][this.positionX-j].container.id;
                  var tempContainerTwo = this.positionArr[i-1][this.positionX-j].container;

                  that.bodyStatesOperByUser[changeContainerId].belongPosition = this.positionArr[i-1][this.positionX-j];
                  that.bodyStatesOperByUser[changeContainerId].belongBody.toPosition = this.positionArr[i-1][this.positionX-j];

                  that.bodyStatesOperByUser[destContainerIdCol].belongPosition = this.positionArr[i-1][j-1];
                  that.bodyStatesOperByUser[destContainerIdCol].belongBody.toPosition = this.positionArr[i-1][j-1];

                  positionArrNew[i-1][j-1].container = tempContainerTwo;
                  positionArrNew[i-1][this.positionX-j].container = tempContainerOne;
                }else{
                  positionArrNew[i-1][this.positionX-j] = {
                    code: this.positionArr[i-1][this.positionX-j].code,
                    id: this.positionArr[i-1][this.positionX-j].id,
                    container: tempContainerOne,
                    state: this.positionArr[i-1][this.positionX-j].state,
                    realX: this.positionArr[i-1][this.positionX-j].realX,
                    realY: this.positionArr[i-1][this.positionX-j].realY,
                    room: this.positionArr[i-1][this.positionX-j].room,
                    canNotSelect:this.positionArr[i-1][this.positionX-j].canNotSelect
                  };
                  positionArrNew[i-1][j-1].container = undefined;
                  if (that.bodyStatesOperByUser[changeContainerId]
                    && !that.bodyStatesOperByUser[changeContainerId].isMovedToCookieData) {
                    that.bodyStatesOperByUser[changeContainerId].belongPosition = this.positionArr[i-1][this.positionX-j];
                    //设置body的toposition和toRoom
                    that.bodyStatesOperByUser[changeContainerId].belongBody.toPosition = this.positionArr[i-1][this.positionX-j];
                    that.bodyStatesOperByUser[changeContainerId].belongBody.toRoom = this.positionArr[i-1][this.positionX-j].room;
                  }
                }


              }
            }
          }
        }

        //用新数组渲染页面
        this.positionArr = positionArrNew;
      },

      /**
       * 国内接收 容器操作状态初始化
       */
      initalBSOU: function (bodyList, flag) {
        //该明细有目的位置且区域ID等于当前位置区域
        let that = this;

        if(flag == '1'){
          //表示切区域，则push进去
          for(let i=0;i<bodyList.length;i++){
            that.cookieData.push(bodyList[i]);
          }
        }else{
          //表示切批次，则直接替换,还是得用数组的深复制，否则supportBodyLists和cookieData是同时变化的
          that.cookieData = [];
          for(let i=0;i<bodyList.length;i++){
            that.cookieData.push(bodyList[i]);
          }
        }

        for (let index = 0; index < that.cookieData.length; index++) {
          let tempBody = that.cookieData[index];
          let tempContanerId = tempBody.container.id;

          //缓存中存在这条明细body并且其已经入库，则不进行后续设置。
          if(that.bodyStatesOperByUser[tempContanerId] && that.bodyStatesOperByUser[tempContanerId].belongBody
            && that.bodyStatesOperByUser[tempContanerId].belongBody.toRoom){
            that.cookieData.splice(index--, 1);
            continue;
          }

          //新建初始化不存在，则新建
          if (!that.bodyStatesOperByUser[tempContanerId]) {
            that.bodyStatesOperByUser[tempContanerId] = {};
          }

          //更新bodyStatesOperByUser状态
          if(!that.bodyStatesOperByUser[tempContanerId].belongBody){
            that.bodyStatesOperByUser[tempContanerId].belongBody = tempBody;
          }

          if (tempBody.toRoom ) {
            that.bodyStatesOperByUser[tempContanerId].isMovedToCookieData = false;
            that.bodyStatesOperByUser[tempContanerId].belongRoomId = tempBody.toRoom.id;
            that.bodyStatesOperByUser[tempContanerId].belongPosition = tempBody.toPosition;
            let cookieIndex = index + (that.pageSize * (that.page - 1));
            that.supportBodyLists.splice(cookieIndex, 1);
            that.sumPage = Math.ceil(that.supportBodyLists.length / that.pageSize);
            that.cookieData.splice(index--, 1);
            //入库一条数据，则再进入一条数据
            if(that.supportBodyLists[that.pageSize*that.page-1]){
              that.cookieData.push(that.supportBodyLists[that.pageSize*that.page-1]);
            }
          } else {
            that.bodyStatesOperByUser[tempContanerId].isMovedToCookieData = true;
            that.bodyStatesOperByUser[tempContanerId].belongRoomId = '';
            that.bodyStatesOperByUser[tempContanerId].belongPosition = undefined;
          }

        }

      },

      /**
       * 国内接收,绘制左表格
       * @param rowX
       * @param columnY
       */
      buildTable: function (positionList) {
        let that = this;

        this.positionArr.length = this.positionY;
        let emptyArr = [];
        emptyArr.length = this.positionX;
        emptyArr.fill('');
        for (var i = 0; i < this.positionY; i++) {
          this.positionArr[i] = [...emptyArr];
        }

        let currentHeadId = this.$route.query.id;

        /*//已移动到位置上的所有明细目的位置ID，用于后续设置计划状态位置的灰化效果
        let tempPosition = [];
        for (var key in that.bodyStatesOperByUser) {
          let bodyStateTemp = that.bodyStatesOperByUser[key];
          if(bodyStateTemp.belongPosition){
            tempPosition.push(bodyStateTemp.belongPosition.id)
          }
        }*/

        //生成二维数组表格
        positionList.forEach(perPosition => {

          //1，对于接收类模块（空容器接收，空容器内部接收，国内接收，内部接收）：
          // 位置状态为计划（PLAN）时，如果计划要放的容器属于当前计划单，渲染容器信息且可编辑，
          // 不属于当前计划单，置灰（对于置灰的位置都是不可编辑的）。
          // 位置状态为已使用（USED）时，如果该位置上容器属于该计划单，
          // 渲染容器信息可编辑，如果不属于，渲染容器信息不可编辑。

          that.positionArr[perPosition.realY - 1][perPosition.realX - 1] = {
            code: perPosition.code,
            id: perPosition.id,
            container: perPosition.container,
            state: true,
            realX: perPosition.realX,
            realY: perPosition.realY,
            room: perPosition.room,
            canNotSelect:false,
          };

          //判断是否有容器被移动到该位置上
          for (var key in that.bodyStatesOperByUser) {
            let bodyStateTemp = that.bodyStatesOperByUser[key];
            if (bodyStateTemp.belongPosition && bodyStateTemp.belongPosition.id == perPosition.id) {
              that.positionArr[perPosition.realY - 1][perPosition.realX - 1].state = bodyStateTemp.belongBody.supportHead.id == currentHeadId ? true: false;
              that.positionArr[perPosition.realY - 1][perPosition.realX - 1].container = bodyStateTemp.belongBody.container;
              break;
            }
          }

          if(perPosition.remarks && perPosition.remarks == "PLAN"
            && !that.positionArr[perPosition.realY - 1][perPosition.realX - 1].state){
            that.positionArr[perPosition.realY - 1][perPosition.realX - 1].container = undefined;
            that.positionArr[perPosition.realY - 1][perPosition.realX - 1].canNotSelect = true;
          }
        });

        this.tableDatashow = false;
      },

      tableClick: function (idx) {
        ///单击右表格
        this.moveDataIndex = idx;
        $("#tableJK").find('tr').attr("class", "");
        $("#tableJK").find('tr').eq(idx + 1).addClass('bgColor');
      },

      choseContainerState: function () {
        //设置容器状态
        let that = this;
        let stateStr = that.defaultContainerState.join(',');
        for (let key in that.bodyStatesOperByUser) {
          let tempBody = that.bodyStatesOperByUser[key].belongBody;
          if (tempBody.toPosition && tempBody.toPosition.id == that.positionArr[that.columnY][that.rowX].id) {
            tempBody.container.conReceiveState = stateStr;
            //放入operatedDataMap中，往后台提交的数据，
            this.operatedDataMap.set(key,tempBody);
            break;
          }

        }

        this.positionArr[this.columnY][this.rowX].container.conReceiveState = stateStr;

      },

      /**
       * 国内接收，入库。点击左表格事件。
       * @param rowX
       * @param columnY
       */
      getData: function (rowX, columnY) {
        if(this.positionArr[columnY][rowX].canNotSelect){
          this.$Message.error("此位置已有其他计划单尚未审核的容器，请选择其他位置");
          return;
        }
        let that = this, bgColorLen = $("#tableJK").find(".bgColor").length;
        let currentPosition = this.positionArr[columnY][rowX];
        let hasContainer = currentPosition.container;
        let bodyBeforeMove = this.cookieData[this.moveDataIndex];

        if (bgColorLen && !hasContainer) {
          that.tableDatashow = true;

          if (!that.bodyStatesOperByUser[bodyBeforeMove.container.id]) {
            that.bodyStatesOperByUser[bodyBeforeMove.container.id] = {};
          }
          //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（已入库）
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].isMovedToCookieData = false;
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongRoomId = that.selectAreaId;
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongPosition = currentPosition;

          //设置body的toposition和toRoom
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongBody.toPosition = currentPosition;
          that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongBody.toRoom = currentPosition.room;

          currentPosition.container = bodyBeforeMove.container;//设置该位置的容器
          //this.positionArr[columnY][rowX] = {code:currentPosition.code,id:currentPosition.id,container:bodyBeforeMove.container,state:this.CAN_EDITE,realX:bodyBeforeMove.toPosition.realX,realY:bodyBeforeMove.toPosition.realY,room:currentPosition.room};
          let cookieIndex = that.moveDataIndex + (that.pageSize * (that.page - 1));
          that.supportBodyLists.splice(cookieIndex, 1);
          //that.sumPage = Math.ceil(that.supportBodyLists.length / that.pageSize);
          that.cookieData.splice(that.moveDataIndex, 1);
          //入库一条数据，则再进入一条数据
          if(that.supportBodyLists[that.pageSize*that.page-1]){
            that.cookieData.push(that.supportBodyLists[that.pageSize*that.page-1]);
          }
          //bodyStatesOperByUser
          this.areaTagBuild();
          that.tableDatashow = false;

          //放入operatedDataMap中，往后台提交的数据，
          this.operatedDataMap.set(bodyBeforeMove.container.id,that.bodyStatesOperByUser[bodyBeforeMove.container.id].belongBody);

        } else if (hasContainer && currentPosition.state) {
          if(that.bodyStatesOperByUser[hasContainer.id]
            && that.bodyStatesOperByUser[hasContainer.id].belongBody.container.conReceiveState != undefined){
            that.defaultContainerState = that.bodyStatesOperByUser[hasContainer.id].belongBody.container.conReceiveState.split(',');
          }else{
            that.defaultContainerState =[];
          }

          that.ContainerStateModal = true;
          this.rowX = rowX;
          this.columnY = columnY;
        } else if (!bgColorLen) {
          that.$Message.error("请选择入库容器");
        }

      },

      /**
       * 国内接收，对已入库的容器作移除操作
       * @param rowX
       * @param columnY
       */
      closeNumber: function (columnY, rowX) {
        let that = this;
        that.tableDatashow = true;
        let currentPosition = this.positionArr[columnY][rowX];
        let containerId = currentPosition.container.id;
        //选择性的清除掉tagData中的数据，只删除掉在bodyStatesOperByUser中存在而数据,否则全清空后标签会丢失
        for(let i=0;i<this.tagDatas.length;i++){
          for(var key in that.bodyStatesOperByUser){
            let bodyStateTemp = that.bodyStatesOperByUser[key];
            if(bodyStateTemp.belongRoomId &&  bodyStateTemp.belongRoomId == this.tagDatas[i].id ){
              this.tagDatas.splice(i,1);
              break;
            }
          }

        }
        this.areaTagBuild();
        this.tagCount = this.tagDatas.length;
        //更新bodyStatesOperByUser状态，将isMovedToCookieData置为true（未入库）
        that.bodyStatesOperByUser[containerId].isMovedToCookieData = true;
        that.bodyStatesOperByUser[containerId].belongRoomId = '';
        that.bodyStatesOperByUser[containerId].belongPosition = undefined;
        that.bodyStatesOperByUser[containerId].belongBody.toRoom = undefined;
        that.bodyStatesOperByUser[containerId].belongBody.toPosition = undefined;
        that.bodyStatesOperByUser[containerId].belongBody.container.conReceiveState = undefined;
        //军库：点击移除操作时需要判断是否是当前小批次的容器
        if(!that.currentBatch || that.currentBatch && (that.bodyStatesOperByUser[containerId].belongBody.batch == that.currentBatch)){
          that.supportBodyLists.push(that.bodyStatesOperByUser[containerId].belongBody);
          //对supportBodyLists排序
          that.supportBodyLists.sort(function(a,b){
            if(parseInt(a.container.code)<parseInt(b.container.code)){
              return -1;
            }else if(parseInt(a.container.code)>parseInt(b.container.code)){
              return 1;
            }
            return 0;
          });
          that.cookieData.push(that.bodyStatesOperByUser[containerId].belongBody);
          //对cookieData排序
          that.cookieData.sort(function(a,b){
            if(parseInt(a.container.code)<parseInt(b.container.code)){
              return -1;
            }else if(parseInt(a.container.code)>parseInt(b.container.code)){
              return 1;
            }
            return 0;
          });
        }

        this.positionArr[columnY][rowX].container.ContainerState = undefined;
        this.positionArr[columnY][rowX].container = undefined;

        that.tableDatashow = false;

        //往operatedDataMap添加相应的元素，
        this.operatedDataMap.set(containerId,that.bodyStatesOperByUser[containerId].belongBody);

      },

      buildManual: function () {
        //生成支持文件
        let that = this;
        this.tableDatashow = true;
        if (this.data.id) {
          //点击生成支持性文件提交全部数据
          let submitData = [];
          for(var key in that.bodyStatesOperByUser){
            let bodyStateTemp = that.bodyStatesOperByUser[key];
            if(bodyStateTemp.belongBody.supportHead.id != this.data.id){
              continue;
            }else{
              //bodyStateTemp.belongBody.supportHead = this.headSupport;
              submitData.push(bodyStateTemp.belongBody);
            }
          }
          this.$emit('saveData', submitData);
          setTimeout(() => {this.tableDatashow = false;},0);
        }
      },
      generateData:function(){
        //封装好要提交到后台的数据并且返回
        let that = this;
        this.headData = this.data.headData;

        this.headSupport = {
          'hclType': this.data.hclType,
          id:this.data.id,
          'batch':this.headData.transitBatch,//运输批次
          'fromMba':this.headData.isDetail && this.headData.isDetail == true ? {'id':this.headData.fromMba.id} : {'id':this.headData.fromMba},
          'toMba':this.headData.isDetail && this.headData.isDetail == true ? {'id':this.headData.toMba.id} : {'id':this.headData.toMba},
          'tranNo':this.headData.tranNo,//调拨令号
          'otherRecNo':this.headData.fromNumber,
          'recNo':this.headData.toNumber,
          'occurDate':this.headData.fromTimeData,//发生日期
          'secret':this.headData.secret,
          'tranPerson':this.headData.sende,
          'checkPerson':this.headData.auditorValue,
          'appPerson':this.headData.surveyor,
          'remark':this.headData.putRemark,
          'certificate': this.headData.certificate,
          'state': this.$route.query.state?this.$route.query.state:undefined,
        };
        let submitData = [];
        if(this.clickColumnCount > 0 || this.clickRowCount > 0){
          //按列或按行逆序被点击过，则提交全部的数据
          for(var key in that.bodyStatesOperByUser){
            let bodyStateTemp = that.bodyStatesOperByUser[key];
            if(bodyStateTemp.belongBody.supportHead.id != this.data.id){
              continue;
            }else{
              bodyStateTemp.belongBody.supportHead = this.headSupport;
              submitData.push(bodyStateTemp.belongBody);
            }
          }
        }else {
          //按列，按行逆序按钮都没有被点击过，则只提交操作过的数据
          for (var [key, value] of this.operatedDataMap) {
            let body = that.operatedDataMap.get(key);
            if (body.supportHead.id != this.data.id) {
              continue;
            } else {
              body.supportHead = this.headSupport;
              submitData.push(body);
            }
          }

          return submitData;
        }
      },
      //平衡区改变事件方法
      factoryChange: function (item) {
        let that = this;
        this.tableDatashow = true;
        getswitchMba( {'id': item})
          .then((res) => {
            if(res.state && res.state == "1"
            )
            {
              that.$Message.error(res.msg);
              this.tableDatashow = false;
              this.showTet = res.msg;
              this.areaData = {};
              this.selectAreaId = '';
              this.positionX = 0;
              this.positionY = 0;
              this.positionList = [];
              that.defaultFactoryName = that.getPidName(that.defaultFactory);
              this.buildTable(this.positionList);
            }else{
              this.showTet ="";
              that.currentRoom = res.result.defaultRoom;
              that.areaData = res.result.roomList;//所有区域
              that.selectAreaId = res.result.defaultRoom.id;//默认区域
              that.defaultFactoryName = that.getPidName(that.defaultFactory);

              this.tableDatashow = false;
            }

          }).catch(function (error) {
          that.$Message.error('数据连接失败');
        });
      },

      //区域改变事件方法
      areaChange: function (item) {
        //如果不是初始化进入的，切区域时要先保存,把数据存到后台
        if(this.isInitRoom){
          //第一次只做查询
          this.areaChangeQuery(item);
          this.isInitRoom = false;
        }else{
          //非初始化进入，则需要先将操作过的数据进行保存后再进行查询
          this.areaChangeSaveThenQuery(item);
        }
      },
      areaChangeQuery: function(item){
        //页面初始化，第一次onchange时只调用查询方法
        if (!item) {
          return;
        }
        let that = this;
        this.tableDatashow = true;
        that.currentRoom.id = item;
        if (!that.allseleAreaMap[item]) {
          that.allseleAreaMap[item] = {"id": item};
        }
        let data = {
          "t": {'id': item, 'mba': {'id': this.defaultFactory}},
          "paraValues": {"hclType": this.data.hclTypeValue, "currentHeadId": this.data.id ? this.data.id : undefined}
        };
        getswitchRoom( data)
          .then((res) => {

            if(res.state && res.state == "1"){
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
              this.positionX = res.result.positionSumX;//X轴数量
              this.positionY = res.result.positionSumY;//Y轴数量
              this.positionList = res.result.positionList;
              //初始化对返回的所有body进行初始化
              this.bodyList = res.result.bodyList ? res.result.bodyList:[];

              //对所有返回的body进行初始化
              if(this.bodyList.length > 0){
                that.initalBSOU(this.bodyList,'1');
              }

              //初始化完成后显示二维图
              this.buildTable(this.positionList);
            }
            for (var key in that.areaData) {
              if (that.areaData[key].id == that.selectAreaId) {
                that.selectAreaName = that.areaData[key].name;
              }
            }
            //如果是初始化进入页面的话，则区域切换完成后，进行小批次的切换，以后再切区域，则小批次不再切换
            /*if(this.isRelation && !this.isExcludeBatch){

            }else{

            }*/
            if(this.isRelation){
              if(!this.isExcludeBatch){
                this.JKBatch = this.JKBatchTemp;
              }else{
                //查询全部的的body
                this.searchAllBody();
              }
            }

          }).catch(function (error) {
          that.$Message.error('数据连接失败');
        });
      },
      searchAllBody: function(){
        //查询全部的的body
        let that = this;
        getBodyasyQueryDetail({"supportHead":{"id":this.data.id,"hclType":"RE"}})
          .then((res) => {
            that.supportBodyLists = res.result ? res.result :[];

            //需要把所有的cookieData清空，再进行分页显示
            //that.cookieData = [];
            //对that.supportBodyLists按照容器code进行排序
            that.supportBodyLists.sort(function(a,b){
              if(parseInt(a.container.code)<parseInt(b.container.code)){
                return -1;
              }else if(parseInt(a.container.code)>parseInt(b.container.code)){
                return 1;
              }
              return 0;
            });
            that.initalBSOU(that.supportBodyLists,'0');
            that.buildTable(that.positionList);
          }).catch(function(error){
          console.log(error);
          that.$Message.error('数据请求失败！')
        });
      },
      areaChangeSaveThenQuery: function(){
        //切换库区时，先保存后查询
        let that = this;
        let submitData = this.generateData();
        if(submitData.length ==0){
          this.areaChangeQuery(this.selectAreaId);
        }else{
          getBodyasySaveDetail( submitData)
            .then((res) => {
              this.areaChangeQuery(this.selectAreaId);
            }).catch(function (error) {
            that.$Message.error('数据连接失败');
          });
        }

      },
      setAreaChange: function (areaId, FactoryPid) {
        if (areaId == this.selectAreaId) {
          return;
        } else {
          this.tableDatashow = true;
          this.defaultFactory = FactoryPid;//厂房设置
          this.selectAreaId = areaId;//区域设置
        }
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
      areaTagBuild: function () {
        //生成厂房标签
        let that = this;
        for (var key in that.bodyStatesOperByUser) {
          let bodyStateTemp = that.bodyStatesOperByUser[key];
          if (!bodyStateTemp.isMovedToCookieData && bodyStateTemp.belongBody.supportHead.id == that.data.id) {
            let saveObj = {};
            saveObj.id = bodyStateTemp.belongRoomId;
            saveObj.name = bodyStateTemp.belongBody.toRoom ? bodyStateTemp.belongBody.toRoom.name:'';
            saveObj.pid = that.defaultFactory;
            saveObj.pidName = that.getPidName(that.defaultFactory);
            let flag = true;
            for (let i = 0; i < this.tagDatas.length; i++) {
              if (saveObj.id == this.tagDatas[i].id) {
                flag = false;
                break;
              }
            }
            if (flag) {
              that.tagDatas.push(saveObj);
            }
          }
        }
        this.tagCount = this.tagDatas.length;
      },

      /**
       * 军库切换批次方法
       * @constructor
       */
      JKBatchChange:function(){
        //初始化进入，只做查询
        if(this.isInitBatch){
          this.JKBatchChangeQuery();
          //将标记位置为false，以后会走先保存，后查询的方法
          this.isInitBatch = false;
          //将标记位置为false，以后切换库区，批次将不会自动切换
          this.isRelation = false;
        }else{
          //非初始化进入，则需要先将操作过的数据进行保存后再进行查询
          this.JKBatchChangeSaveThenQuery();
        }
      },
      JKBatchChangeQuery:function(){
        //切小批次的查询方法，初始化页面时用
        let that = this;
        getBodyasyQueryDetail({"batch":this.JKBatch,"supportHead":{"id":this.data.id,"hclType":"RD"},"remarks":"exactQuery"})
          .then((res) => {

            //切换小批次时，显示第一页的数据，把page置为1，
            that.page = 1;

            $("#tableJK").find('tr').attr("class","");
            //返回的数据是所有未入库的body.
            that.supportBodyLists = res.result;
            //把当前所在批次存起来，点X的时候需要按照批次进行绑定
            that.currentBatch = this.JKBatch;
            //需要对所有的数据做初始化，初始化到BSOU里，
            that.initalBSOU(that.supportBodyLists,'0');
            //需要把所有的cookieData清空，再进行分页显示
            that.cookieData = [];
            //console.log(that.supportBodyLists);

            //对that.supportBodyLists按照容器code进行排序
            that.supportBodyLists.sort(function(a,b){
              if(parseInt(a.container.code)<parseInt(b.container.code)){
                return -1;
              }else if(parseInt(a.container.code)>parseInt(b.container.code)){
                return 1;
              }
              return 0;
            });

            //如果返回的结果集小于等于每页显示的条数，则全部显示
            if(that.supportBodyLists.length <= that.pageSize){
              that.supportBodyLists.forEach(tempBody=>{
                if(that.bodyStatesOperByUser[tempBody.container.id] &&  that.bodyStatesOperByUser[tempBody.container.id].isMovedToCookieData){
                  if (tempBody) {
                    that.cookieData.push(tempBody);
                  }
                }
              });
            }else{
              //如果返回的结果集多余每页显示的条数，则使用滚动加载
              let starIndex = Number((that.page - 1) * that.pageSize);
              let endIndex = Number(starIndex + that.pageSize);
              that.sumPage = Math.ceil(that.supportBodyLists.length / that.pageSize);

              for (var i = starIndex; i < endIndex; i++) {
                if(that.bodyStatesOperByUser[that.supportBodyLists[i].container.id] && that.bodyStatesOperByUser[that.supportBodyLists[i].container.id].isMovedToCookieData){
                  if (that.supportBodyLists[i]) {
                    that.cookieData.push(that.supportBodyLists[i]);
                  }
                }
                this.scroll();
              }

            }
            this.buildTable(this.positionList);
          }).catch(function(error){

          that.$Message.error('数据请求失败！')
        });
      },
      JKBatchChangeSaveThenQuery: function(){
        //切换批次时，先保存成功后再进行查询，非初始化用
        let that = this;
        let submitData = this.generateData();
        if(submitData.length ==0){
          this.JKBatchChangeQuery(this.JKBatch);
        }else{
          getBodyasySaveDetail( submitData)
            .then((res) => {
              this.JKBatchChangeQuery(this.JKBatch);
            }).catch(function (error) {
            that.$Message.error('数据连接失败');
          });
        }

      },
      //查询时高亮显示
      search:function(){
        //增加搜索功能，可按大批次和小批次搜索，搜索到的容器在区域二维图中高亮显示
        if(!this.batch.trim() && !this.containerCode.trim()){
          this.$Message.error('请输入查询条件！');
          $('.highlight').removeClass('highlight');
        }else{
          let data = {
            batch : this.batch.trim(),
            code: this.containerCode.trim(),
            room:{'id':this.selectAreaId}
          };
          $('.highlight').removeClass('highlight');
          let that = this;

          getqueryByRoomAndBatch(data)
            .then((res) => {
              if(res.state && res.state=='1'){
                that.$Message.error(res.msg);
              }else{
                this.containerList = res.result.containerList?res.result.containerList:[];
                this.containerList.forEach(items => {
                  $('#chartPutData1').find('#'+items.id).parent().addClass('highlight');
                });
              }
            })
            .catch(function (error) {
              that.$Message.error('数据连接失败！');
              that.loading = false;
            });
        }
      },
      showActive:function(num,idx){
        if(this.colorImg[idx]){
          this.active = num;
        }
      },
      switchRfid:function(){
          let that =this;
        this.isRfid=false;
        this.JKbatchList = this.JKbatchList1;//军库batch
        that.initalBSOU(that.supportBodyLists,'0');
      },
      rfid:function(){
        let that = this;
        getsingleScanRFID({
       "t": {
            "supportHead": this.data.id ?{"id":  this.data.id} : undefined,
            "hclType":this.data.hclType
        },
        "paraValues": {"hclType":this.data.hclTypeValue} })
          .then((res) => {
          if(res.state == 1){
            that.$Message.error(res.msg)
          }else{

            that.supportBodyLists = res.result;

            //如果返回的结果集小于等于每页显示的条数，则全部显示
            if(that.supportBodyLists.length <= that.pageSize){
              that.supportBodyLists.forEach(tempBody=>{

                    that.cookieData.push(tempBody);
              });
            }else{
              //如果返回的结果集多余每页显示的条数，则使用滚动加载
              let starIndex = Number((that.page - 1) * that.pageSize);
              let endIndex = Number(starIndex + that.pageSize);
              that.sumPage = Math.ceil(that.supportBodyLists.length / that.pageSize);

              for (var i = starIndex; i < endIndex; i++) {
                if(that.bodyStatesOperByUser[that.supportBodyLists[i].container.id] && that.bodyStatesOperByUser[that.supportBodyLists[i].container.id].isMovedToCookieData){
                  if (that.supportBodyLists[i]) {
                    that.cookieData.push(that.supportBodyLists[i]);
                  }
                }
                this.scroll();
              }

            }
            console.log(this.positionList);
            this.buildTable(this.positionList);
          }
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

