<template id="tableInfo">
  <div style="text-align: center">
    <Table :height="tabHeight" size="small" border :columns="isDetail == false ? detailColumns : detailColumnsDetail" :row-class-name="rowClassName" :data="detailData" :loading="loading" @on-selection-change="handleRow"  @on-row-click="rowClickFun" @on-select-all="handleRow" @on-sort-change="sortChangeData"></Table>
    <Page :total="sumPage" :page-size="pageSize" @on-change="putPlanPageChange" style="margin-top:10px;"></Page>
  </div>

</template>

<script>
  export default {
    data:function(){
      return {
        detailColumns: [
          {
            type: 'selection',
            width: 160,
            align: 'center'
          },
          {type: 'index2',title:'序号',width: 100,align: 'center',
            render: (h, params) => {
              return h('span', params.index+(this.page-1)* this.pageSize+1);
            }
          },
          {
            title: '容器编号',
            align: 'center',
            width:220,
            sortable:true,
            key: 'container',
            render:(h,{row})=>{
              return row.container?h('span',{
                /*style: {
                  cursor:'pointer',
                  textDecoration:'underline',
                },
                on: {
                  click: () => {
                    this.$emit('goRoomDetail',row);
                  }
                }*/
              }, row.container.code):'';
            }
          },
          {
            title: '位置',
            align: 'center',
            width:260,
            key: 'toPosition',
            render:(h,{row})=>{

              return row.toPosition?h('span',row.toPosition.code):'';
            }
          },
          {
            title: '皮重',
            align: 'center',
            width:220,
            key: 'tareWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.tareWeight?row.tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '重量单位',
            width:250,
            key: 'unit',
            align: 'center',
          },
          {
            title: '元素量单位',
            width:250,
            key: 'unit1',
            align: 'center',
          },
          {
            title: '备注',
            align: 'center',
            key: 'remark'
          },
          {
            title: this.isDetail?'打印':'操作',
            key: 'action',
            width:200,
            align: 'center',
            fixed: 'right',
            render: (h, params) => {
              if(this.isDetail || params.row.supportHead.hclType == 'RI'){
                return h('p', {
                  style: {
                    cursor: 'pointer',
                    fontSize:'17px'
                  },
                  on: {
                    click: () => {
                      this.$emit('printRecord',params.row);
                    }
                  }
                },[
                  h('Icon', {
                    props: {
                      type: 'printer'
                    },
                  })
                ]);
              }else {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.deleteId = params.row.id;
                        this.$emit('emitDel',this.deleteId);
                      }
                    }
                  }, '删除'),
                ]);
              }


            }
          },


        ],
        detailColumnsDetail: [
          {
            type: 'selection',
            width: 160,
            align: 'center'
          },
          {type: 'index2',title:'序号',width: 100,align: 'center',
            render: (h, params) => {
              return h('span', params.index+(this.page-1)* this.pageSize+1);
            }
          },
          {
            title: '容器编号',
            align: 'center',
            width:220,
            sortable:true,
            key: 'container',
            render:(h,{row})=>{
              return row.container?h('span',{}, row.container.code):'';
            }
          },
          {
            title: '位置',
            align: 'center',
            width:260,
            key: 'toPosition',
            render:(h,{row})=>{

              return row.toPosition?h('span',row.toPosition.code):'';
            }
          },
          {
            title: '皮重',
            align: 'center',
            width:220,
            key: 'tareWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.tareWeight?row.tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '重量单位',
            width:250,
            key: 'unit',
            align: 'center',
          },
          {
            title: '元素量单位',
            width:250,
            key: 'unit1',
            align: 'center',
          },
          {
            title: '备注',
            align: 'center',
            key: 'remark'
          },
        ],
        transferList:'',//选中数据
        countNumber:'',//选中数量
        tabHeight:'',
        //loading:true,
      }
    },
    props:[
      'detailData',
      'isDetail',
      'loading',
      'page',
      'pageSize',
      'rowClassName',
      'sumPage'
    ],
    watch:{

    },
    mounted:function(){
      this.tabHeight =  $(window).height()-283;
      if(this.$route.query.state=='Complete'){
           this.detailColumns.shift();
           this.detailColumnsDetail.shift();
      }
    },
    methods:{
      handleRow:function(data){
        //自定义选择
        this.transferList = data;
        this.countNumber = this.transferList.length;
        this.$emit('handleRowChange',this.countNumber,this.transferList );
      },
      sortChangeData:function(data){
        this.$emit('sortChange',data);
      },
      rowClickFun:function(row,index){

        this.$emit('rowClickFun',index);
      },
      putPlanPageChange:function(page){
        this.$emit('PageChange',page);
      }
    }
  }

</script>
