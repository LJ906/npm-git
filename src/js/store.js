
export default{
  fetch (key) {
    //获取localStorage
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  },
  save (key,val) {
    //设置localStorage
   window.localStorage.setItem(key, JSON.stringify(val));
  },
  remove (key) {
    //删除localStorage
    window.localStorage.removeItem(key);
  },
  clear () {
    //清空localStorage
    window.localStorage.clear();
  },
  isJkorMkType(){
     //2;军库
     //1;民库
    return 2;
  },
  CALOGIN(){
    return '';//单点登陆跳转地址
  },
  requesrXhr(){
    return process.env.HOST;
  },
  exportUrl(){
    let url = process.env.ISEXPORTEXCEL?'/a/report/commHead/exportWordForPDF':'/a/report/commHead/exportWord';
    return url;
  },
  scroll (obj,sumPage,page, funct,that){
    //滚动加载
    obj.onscroll = function (e) {
      let t = this.scrollTop;
      let h = this.scrollTop + this.clientHeight;
      h = Math.ceil(h);
      if (h >= this.scrollHeight) {
        if(page<sumPage){
          page++;
          funct(page);
        }else{
          that.$Message.error('已是最后一页数据！')
        }
      }else if(t==0){
        if(page>1){
          page--;
          funct(page);
        }else{
          that.$Message.error('已是是第一页数据！')
        }
      }
    }
  },
  shemeScroll(obj,objX,objY,objContain){
     obj.onscroll = function(){
       objX.style.left = -this.scrollLeft+40+'px';
       objX.style.top = this.scrollTop+'px';
       objY.style.left = this.scrollLeft+'px';
       objY.style.top = -this.scrollTop+40+'px';
       objContain.style.left = -this.scrollLeft+40+'px';
       objContain.style.top = -this.scrollTop+40+'px';
      }

  },
  //Table所见即所得导出Excel  columnHead是表头，data是查询参数，url是后台地址
  expExcelFilter(columnHead,data,url) {
    let columnTitles = [];
    let columnKeys = [];
    columnHead.forEach(item => {
      if(item.title != '序号' && item.title != '操作') {
        columnTitles.push(item.title);
        columnKeys.push(item.key);
      }
    });
    data["colNames"] = columnTitles;
    data["cols"] = columnKeys;

    const form = document.createElement('form');
    form.action = this.requesrXhr() + url;
    form.method = 'post';
    form.style.display = 'none';
    //根据后台的参数设置form 的input键值对
    Object.keys(data).forEach(key =>{
      const inputElement = document.createElement('input');
      inputElement.type = 'hidden';
      inputElement.setAttribute('name',key);
      inputElement.setAttribute('value',data[key]);
      form.appendChild(inputElement);
    })

    const button = document.createElement('input');
    button.type = 'submit';
    form.appendChild(button);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  },
  enterDetails:function(that,id,hclType,state){
    switch (hclType)
    {
      case 'RD'://国内接收
        that.$router.push({path:'/putdetailMange',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'SD'://国内发出
        that.$router.push({path:'/outPlanDetail',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'CI'://投入
        that.$router.push({path:'/expendBodyListObject',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'PI'://产出
        break;
      case 'LN'://核消耗
        break;
      case 'NP'://核产出
        break;
      case 'RF'://国外接收
        break;
      case 'SF'://国外发出
        break;
      case 'SA'://取样
        break;
      case 'PIV'://实物盘存
        that.$router.push({path:'/bookPivBody',query:{id:id}});
        break;
      case 'AP'://帐目修改增 梁蕊增id
        that.$router.push({path:'/otherIncreaseOrDecBodyAdd',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'AM'://账目修改减 梁蕊增
        that.$router.push({path:'/otherIncreaseOrDecBodyMin',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'LA'://事故损失
        that.$router.push({path:'/otherIncreaseOrDecBodyLA',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'RI'://内部接收
        that.$router.push({path: '/putdetailMangeRI',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'SI'://内部发出
        that.$router.push({path: '/outPlanDetail', query: {id:id, hclType:hclType,state:state}});
        break;
      case 'GA'://意外收入
        that.$router.push({path: '/otherIncreaseOrDecBodyGA',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'AP1'://新增物料增
        that.$router.push({path:'/otherIncreaseOrDecBodyMore',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'AM1'://新增物料减
        that.$router.push({path:'/otherIncreaseOrDecBodyLess',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'IR'://初始录入
        that.$router.push({path: '/initialInputBody',query:{id:id,hclType:hclType,state:state}});
        break;
      case 'WY'://位置移动
        that.$router.push({path: '/movePlanDetail', query: {id:id, hclType:hclType,state:state}});
        break;
      case 'RP'://批重组增
        that.$router.push({path: '/rprmBodyList', query: {id:id, hclType:hclType,state:state}});
        break;
      case 'RM'://批重组减
        that.$router.push({path: '/rprmBodyList', query: {id:id, hclType:hclType,state:state}});
        break;
      case 'RN'://其他接收
        break;
      case 'SN'://其他发出
        break;
      case 'LS'://物素消耗
        that.$router.push({path: '/expendBodyList', query: {"id":id,state:state,hclType:hclType,disabled:'false'}});
        break;
      case 'SP'://物素产出
        that.$router.push({path: '/produceBodyList', query: {"id":id,state:state,hclType:hclType,disabled:'false'}})
        break;
      case 'IT'://测量点转移
        break;
      case 'TW'://转为保存废物
        that.$router.push({path: '/otherIncreaseOrDecBodyTW', query: {"id":id,state:state,hclType:hclType,disabled:'false'}})
        break;
      case 'LD'://有测量的损失或丢失
        that.$router.push({path: '/otherIncreaseOrDecBodyLD', query: {"id":id,state:state,hclType:hclType,disabled:'false'}})
        break;
      case 'FW'://保存废物转回账内明细
        that.$router.push({path: '/otherIncreaseOrDecBodyFW', query: {"id":id,state:state,hclType:hclType,disabled:'false'}})
        break;
      default:
        return;


    }

  },
  goRoomDetail:function(that,row){
    if(row.toPosition && row.toRoom){
      //pid代表平衡区id, id代表库区id, position代表库位
      that.$router.push({path:'/roomAreaDetail',query:{pid:row.supportHead.mba.id, id:row.toRoom.id, position: row.toPosition}});
    }else{
      this.$Message.error("该容器无库区库位，无法查看位置信息！");
    }
  },
}



