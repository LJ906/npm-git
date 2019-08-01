<template id="tableInfo">
  <div>
        <Table :height="height" size="small" :columns="isDetail == false ? detailColumns : detailColumnsDetail" :row-class-name="rowClassName" :data="detailData" :loading="loading" @on-selection-change="handleRow"  @on-row-click="rowClickFun" @on-select-all="handleRow" @on-sort-change="sortChangeData"></Table>
  </div>

</template>

<script>
  export default {
    data:function(){
      return {
        detailColumns: [
          {
            type: 'selection',
            width: 60,
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
            width:120,
            sortable:true,
            key: 'container',
            render:(h,{row})=>{
              return row.container?h('span',{
                style: {
                  cursor:'pointer',
                  textDecoration:'underline',
                },
                on: {
                  click: () => {
                    this.$emit('goRoomDetail',row);
                  }
                }
              }, row.container.code):'';
            }
          },
          {
            title: '批号',
            align: 'center',
            width:120,
            sortable: true,
            key: 'batch'
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
          width:130,
          key: 'material',
          render:(h,{row})=>{
            return row.material?h('span', row.material.genericName):'';
          }
        },
        {
          title: '内部名称',
            align: 'center',
          width:130,
          key: 'material',
          render:(h,{row})=>{
            return row.material?h('span', row.material.internalName):'';
          }
        },
        {
          title: '位置',
            align: 'center',
          width:160,
          key: 'toPosition',
          render:(h,{row})=>{

            return row.toPosition?h('span',row.toPosition.code):'';
          }
        },
          {
            title: '毛重',
            align: 'center',
            width:160,
            key: 'vi_grossWeight',
            render:(h,{row})=>{
              let tet = row.vi_grossWeight?row.vi_grossWeight:0;
              return h('span',tet.toFixed(5));
            }

          },
          {
            title: '皮重',
            align: 'center',
            width:120,
            key: 'vi_tareWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.vi_tareWeight?row.vi_tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '净重',
            align: 'center',
            width:120,
            key: 'vi_elementWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.vi_elementWeight?row.vi_elementWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '元素代码',
            align: 'center',
            width:120,
            key: 'yuanSuCode'
          },
          {
            title: '元素百分含量(%)',
            align: 'center',
            width:160,
            key: 'elementPercent'
          },
          {
            title: '元素量',
            align: 'center',
            width:120,
            key: 'vi_u',
            render:(h,{row})=>{
              let tet = row.vi_u?row.vi_u:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '同位素代码',
            align: 'center',
            width:120,
            key: 'tongWeiSuCode'
          },
          {
            title: '同位素百分比(%)',
            align: 'center',
            width:200,
            key: 'isotopePercent'
          },
          {
            title: '同位素量',
            align: 'center',
            width:120,
            key: 'vi_u235',
            render:(h,{row})=>{
              let tet = row.vi_u235?row.vi_u235:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '元素单位',
            align: 'center',
            width:120,
            key: 'unit1'
          },

          {
            title: '重量单位',
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
        {
          title:'操作',
          key: 'action',
          width:100,
          align: 'center',
          fixed: 'right',
          render: (h, params) => {
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
        },


        ],
        detailColumnsDetail: [
         /* {
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
            width:120,
            sortable:true,
            key: 'container',
            render:(h,{row})=>{
              return row.container?h('span',{
                style: {
                  cursor:'pointer',
                  textDecoration:'underline',
                },
                on: {
                  click: () => {
                    this.$emit('goRoomDetail',row);
                  }
                }
              }, row.container.code):'';
            }
          },
          {
            title: '批号',
            align: 'center',
            width:120,
            sortable: true,
            key: 'batch'
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
            width:130,
            key: 'material',
            render:(h,{row})=>{
              return row.material?h('span', row.material.genericName):'';
            }
          },
          {
            title: '内部名称',
            align: 'center',
            width:130,
            key: 'material',
            render:(h,{row})=>{
              return row.material?h('span', row.material.internalName):'';
            }
          },
          {
            title: '位置',
            align: 'center',
            width:160,
            key: 'toPosition',
            render:(h,{row})=>{

              return row.toPosition?h('span',row.toPosition.code):'';
            }
          },
          {
            title: '毛重',
            align: 'center',
            width:160,
            key: 'vi_grossWeight',
            render:(h,{row})=>{
              let tet = row.vi_grossWeight?row.vi_grossWeight:0;
              return h('span',tet.toFixed(5));
            }

          },
          {
            title: '皮重',
            align: 'center',
            width:120,
            key: 'vi_tareWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.vi_tareWeight?row.vi_tareWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '净重',
            align: 'center',
            width:120,
            key: 'vi_elementWeight',
            sortable: true,
            render:(h,{row})=>{
              let tet = row.vi_elementWeight?row.vi_elementWeight:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '元素代码',
            align: 'center',
            width:120,
            key: 'yuanSuCode'
          },
          {
            title: '元素百分含量(%)',
            align: 'center',
            width:160,
            key: 'elementPercent',
            render:(h,{row})=>{
              let tet = row.elementPercent?row.elementPercent:0;
              return h('span',tet.toFixed(3));
            }
          },
          {
            title: '元素量',
            align: 'center',
            width:120,
            key: 'vi_u',
            render:(h,{row})=>{
              let tet = row.vi_u?row.vi_u:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '同位素代码',
            align: 'center',
            width:120,
            key: 'tongWeiSuCode'
          },
          {
            title: '同位素百分比(%)',
            align: 'center',
            width:200,
            key: 'isotopePercent',
            render:(h,{row})=>{
              let tet = row.isotopePercent?row.isotopePercent:0;
              return h('span',tet.toFixed(3));
            }
          },
          {
            title: '同位素量',
            align: 'center',
            width:120,
            key: 'vi_u235',
            render:(h,{row})=>{
              let tet = row.vi_u235?row.vi_u235:0;
              return h('span',tet.toFixed(5));
            }
          },
          {
            title: '元素单位',
            align: 'center',
            width:120,
            key: 'unit1',

          },
          {
            title: '重量单位',
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

        ],
        transferList:'',//选中数据
        countNumber:'',//选中数量
        height:0,
        //loading:true,
      }
    },
    props:[
      'detailData',
      'isDetail',
      'loading',
      'page',
      'pageSize',
      'rowClassName'
    ],
    watch:{

    },
    mounted:function(){
     // this.Scroll();
      this.height = $(window).height()-345;
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
    }
  }

</script>
