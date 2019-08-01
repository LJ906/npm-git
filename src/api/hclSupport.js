import service from '../utils/request.js'
// import qs from 'qs'
/**支持性文件 */
/**物项转移 */
/**国内接收 */
//国内接收(国内发出、内部发出、初始录入、物项投入)首页表头初始化
export const getPutHeadList = (params) => {
  return service({
    url: '/a/storage/supportHead/asyInitial',
    method: 'GET',
    params
  })
}
//国内接收(国内发出、内部发出、物项投入)首页表头审核方法
export const getAsySubmit = (data) => {
  return service({
    url: '/a/storage/supportHead/asySubmit',
    method: 'POST',
    data
  })
}
//国内接收(初始录入)首页导入PDA
export const getPc2pdaRuKu = (params) => {
  return service({
    url: '/a/storage/pda/pc2pdaRuKu',
    method: 'GET',
    params
  })
}
//国内接收（国内发出、内部发出）首页编辑功能
export const getEditPlan = (data) => {
  return service({
    url: '/a/storage/supportHead/invokeSpecifiedMehtod/editPlan',
    method: 'POST',
    data
  })
}
//国内接收(国内发出、内部发出)首页删除提示功能
export const getAsyDeletePlanTips = (data) => {
  return service({
    url: '/a/storage/supportHead/asyDeletePlanTips',
    method: 'POST',
    data
  })
}
//国内接收（国内发出、内部发出）首页删除功能
export const getAsyDeletePlan = (data) => {
  return service({
    url: '/a/storage/supportHead/asyDeletePlan',
    method: 'POST',
    data
  })
}
//国内接收（内部发出、初始录入、物项投入）首页查询功能
export const getAsyQueryPlan = (data) => {
  return service({
    url: '/a/storage/supportHead/asyQueryPlan',
    method: 'POST',
    data
  })
}
//国内接收(初始录入)首页导入功能
export const getimportStates = (params) => {
  return service({
    url: '/a/storage/loadProcess/importStates',
    method: 'GET',
    params
  })
}
//国内接收（国内发出、内部发出、物项投入）首页新建表头
export const getrdSupportHeadFillIn = (data) => {
  return service({
    url: '/a/storage/supportHead/invokeSpecifiedMehtod/rdSupportHeadFillIn',
    method: 'POST',
    data
  })
}
//国内接收(国内发出、内部发出、物项投入)首页新建表头保存（明细表头保存）
export const getasySavePlan = (data) => {
  return service({
    url: '/a/storage/supportHead/asySavePlan',
    method: 'POST',
    data
  })
}


//国内接收(国内发出)编辑页面初始化（国内发出明细页面初始化）
export const getbodyeditPlan = (data) => {
  return service({
    url: '/a/storage/supportHead/invokeSpecifiedMehtod/editPlan',
    method: 'POST',
    data
  })
}
//国内接收（国内发出）编辑页面保存表头
export const getAsySavePlan = (data) => {
  return service({
    url: '/a/storage/supportHead/asySavePlan',
    method: 'POST',
    data
  })
}
/*//国内接收编辑页面删除提示
export const getBodyasyDeleteDetail = (data) => {
  return service({
    url: '/a/storage/supportBody/asyDeleteDetail',
    method: 'POST',
    data
  })
}*/
//国内发出编辑页面删除提示
export const getBodyasyDeleteDetailTips = (data) => {
  return service({
    url: '/a/storage/supportBody/asyDeleteDetailTips',
    method: 'POST',
    data
  })
}
//国内接收(国内发出、内部接受、物项投入)编辑页面删除
export const getBodyasyDeleteDetail = (data) => {
  return service({
    url: '/a/storage/supportBody/asyDeleteDetail',
    method: 'POST',
    data
  })
}
//国内接收编辑页面添加明细
export const getBodyaddBodyManully = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/addBodyManully',
    method: 'POST',
    data
  })
}
//国内接收编辑页面保存body
export const getBodysaveManullyBody = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/saveManullyBody',
    method: 'POST',
    data
  })
}

//国内接收(国内发出、内部发出、初始录入、物项投入)明细页面初始化
export const getBodyasyQueryDetail = (data) => {
  return service({
    url: '/a/storage/supportBody/asyQueryDetail',
    method: 'POST',
    data
  })
}
//国内接收(内部发出)明细页面打印
export const getBodyprintJKCode = (data) => {
  return service({
    url: '/a/entity/systemSetting/printJKCode',
    method: 'POST',
    data
  })
}
//国内接收(内部发出)明细页面保存
export const getBodyasySaveDetail = (data) => {
  return service({
    url: '/a/storage/supportBody/asySaveDetail',
    method: 'POST',
    data
  })
}
//国内发出明细页面 样品选择
export const getBodygetSampleContainerBody = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/getSampleContainerBody',
    method: 'POST',
    data
  })
}

//内部发出初始化返回树形结构
export const getofficeTreeData = (data) => {
  return service({
    url: '/a/sys/office/officeTreeData',
    method: 'POST',
    data
  })
}
//内部发出初始化审核方法
export const gettodoTaskSize = (data) => {
  return service({
    url: '/a/act/task/todoTaskSize',
    method: 'POST',
    data
  })
}
//内部发出初始化审核组织机构选择用户
export const getchooseUserBymba = (data) => {
  return service({
    url: '/a/sys/role/chooseUserBymba',
    method: 'POST',
    data
  })
}
//内部发出初始化审核撤回
export const getrevoke = (data) => {
  return service({
    url: '/a/spec/flowVocation/revoke',
    method: 'POST',
    data
  })
}
//内部发出初始化审核撤回(其他增减保存body)
export const getupdateBody = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/updateBody',
    method: 'POST',
    data
  })
}
//物项转变明细
export const getexpXML = (data) => {
  return service({
    url: '/a/storage/supportHead/expXML',
    method: 'POST',
    data
  })
}

//批重组明细添加界面容器查询方法
export const getrprmContaienrQuery = (data) => {
  return service({
    url: '/a/entity/container/rprmContaienrQuery',
    method: 'POST',
    data
  })
}

//盘存初始化
export const getPivasyInitial = (params) => {
  return service({
    url: '/a/storage/pivHead/asyInitial',
    method: 'GET',
    params
  })
}
//盘存删除检查
export const getcheckPivIsDelete = (data) => {
  return service({
    url: '/a/storage/pivHead/checkPivIsDelete',
    method: 'POST',
    data
  })
}
//盘存删除
export const getPivasyDetele = (data) => {
  return service({
    url: '/a/storage/pivHead/asyDetele',
    method: 'POST',
    data
  })
}
//盘存保存前检查
export const getasyCheckSave = (data) => {
  return service({
    url: 'a/storage/pivHead/asyCheckSave',
    method: 'POST',
    data
  })
}
//盘存保存前提示
export const getasySaveTips = (data) => {
  return service({
    url: '/a/storage/pivHead/asySaveTips',
    method: 'POST',
    data
  })
}
//盘存获取当前系统内的所有用户
export const getPivgetUserList = (data) => {
  return service({
    url: '/a/storage/pivHead/getUserList',
    method: 'POST',
    data
  })
}
//盘存获取当前系统年月日
export const getYearAndSeason = (data) => {
  return service({
    url: '/a/storage/pivHead/getYearAndSeason',
    method: 'POST',
    data
  })
}
//新建新的账面盘存时，获取新的记录编号
export const getNewRecCode = (data) => {
  return service({
    url: '/a/storage/pivHead/getNewRecCode',
    method: 'POST',
    data
  })
}

/**二维图入库出库共用方法 */
//二维图页面初始化方法返回库区
export const getmanualStorageInitial = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/manualStorageInitial',
    method: 'POST',
    data
  })
}
//二维图按行按列打印
export const getprintJKByRoom = (data) => {
  return service({
    url: '/a/entity/systemSetting/printJKByRoom',
    method: 'POST',
    data
  })
}
//二维图切换平衡区
export const getswitchMba = (data) => {
  return service({
    url: '/a/entity/mba/switchMba',
    method: 'POST',
    data
  })
}
//二维图切换库区
export const getswitchRoom = (data) => {
  return service({
    url: '/a/entity/room/switchRoom',
    method: 'POST',
    data
  })
}
//二维图查询功能
export const getqueryByRoomAndBatch = (data) => {
  return service({
    url: '/a/entity/container/queryByRoomAndBatch',
    method: 'POST',
    data
  })
}
//二维图RFID
export const getsingleScanRFID = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/singleScanRFID',
    method: 'POST',
    data
  })
}
//二维图
export const getgetBodysInHead = (data) => {
  return service({
    url: '/a/storage/supportBody/invokeSpecifiedMehtod/getBodysInHead',
    method: 'POST',
    data
  })
}
//二维图
export const getswitchPosition = (data) => {
  return service({
    url: '/a/entity/position/switchPosition',
    method: 'POST',
    data
  })
}
export const getRoomListAboutBody = (data) => {
  return service({
    url: 'a/storage/supportBody/invokeSpecifiedMehtod/getRoomListAboutBody',
    method: 'POST',
    data
  })
}
