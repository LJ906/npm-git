import service from '@/utils/request.js'
import qs from 'qs'
/**c产量统计 */
/**产品管理 */
/**衡算账目 */
/**报表 */
//产量统计
export const getasyQueryAll = (data) => {
  return service({
    url: '/a/productionStatics/asyQueryAll',
    method: 'POST',
    data
  })
}
//产量统计导出
export const getexportExcelForProduction = (data) => {
  return service({
    url: '/a/productionStatics/exportExcelForProduction',
    method: 'POST',
    data
  })
}
//总账
export const getaccountasyInitial = (params) => {
  return service({
    url: '/a/report/hclGaAccountHead/asyInitial',
    method: 'GET',
    params
  })
}
//总账获取当年年季

export const getgetFormContent = (data) => {
  return service({
    url: '/a/report/hclGaAccountHead/getFormContent',
    method: 'POST',
    data
  })
}
//总账添加
export const getcheckIsAdd = (params) => {
  return service({
    url: '/a/report/hclGaAccountHead/checkIsAdd',
    method: 'GET',
    params
  })
}
//总账添加
export const getasySave = (params) => {
  return service({
    url: '/a/report/hclGaAccountHead/asySave',
    method: 'GET',
    params
  })
}
//总账明细
export const getgetasyInitial = (data) => {
  return service({
    url: '/a/report/hclGaAccountBody/asyInitial',
    method: 'POST',
    data
  })
}
//总账删除
export const getasyDetele = (data) => {
  return service({
    url: '/a/report/hclGaAccountHead/asyDetele',
    method: 'POST',
    data
  })
}

//总账导出word
export const getgenerateWord = (data) => {
  return service({
    url: '/a/report/hclGaAccountBody/generateWord',
    method: 'POST',
    data
  })
}

//总账导出excel
export const getexp = (data) => {
  return service({
    url: '/a/report/hclGaAccountHead/exp',
    method: 'POST',
    data
  })
}


//产品管理初始化

export const getproductasyInitial = (data) => {
  return service({
    url: '/a/storage/productManage/product/asyInitial',
    method: 'POST',
    data
  })
}
//产品管理导出

export const getexportProductData = (data) => {
  return service({
    url: '/a/storage/productManage/product/exportProductData',
    method: 'POST',
    data
  })
}
//产品管理删除

export const getasyDeleteProduct = (data) => {
  return service({
    url: '/a/storage/productManage/product/asyDeleteProduct',
    method: 'POST',
    data
  })
}

//产品管理保存
export const getasySaveProduct = (data) => {
  return service({
    url: '/a/storage/productManage/product/asySaveProduct',
    method: 'POST',
    data
  })
}
//产品管理明细初始化
export const getasyQueryProduct = (data) => {
  return service({
    url: 'a/storage/productManage/product/asyQueryProduct',
    method: 'POST',
    data
  })
}

/**报表R01-R09*/

//R01初始化
export const getR01asyInitial = (data) => {
  return service({
    url: '/a/report/commHead/asyInitial',
    method: 'POST',
    data
  })
}

export const getR01asyForm = (data) => {
  return service({
    url: '/a/report/commHead/asyForm',
    method: 'POST',
    data
  })
}
//R01新建报表时获取新的记录编号
export const getR01asyNewReportCode = (data) => {
  return service({
    url: '/a/report/commHead/asyNewReportCode',
    method: 'POST',
    data
  })
}
//R01获取密级列表
export const getR01getSecretList = (data) => {
  return service({
    url: '/a/report/commHead/getSecretList',
    method: 'POST',
    data
  })
}
//R01判重
export const getR01checkNoRepeat = (data) => {
  return service({
    url: '/a/report/commHead/checkNoRepeat',
    method: 'POST',
    data
  })
}
//R01保存
export const getR01asySave = (data) => {
  return service({
    url: '/a/report/commHead/asySave',
    method: 'POST',
    data
  })
}
//R01明细
export const getR01BodyasyInitial = (data) => {
  return service({
    url: '/a/report/commBody/asyInitial',
    method: 'POST',
    data
  })
}
//R01删除
export const getR01asyDetele = (data) => {
  return service({
    url: '/a/report/commHead/asyDetele',
    method: 'POST',
    data
  })
}
//R01删导出
export const getR01expExcel = (data) => {
  return service({
    url: '/a/report/commHead/expExcel',
    method: 'POST',
    data
  })
}
//R02导出
export const getR02exp = (data) => {
  return service({
    url: '/a/report/hclRp02Head/exp',
    method: 'POST',
    data
  })
}


/**待办任务*/

export const gettask = (params) => {
  return service({
    url: '/a/act/task/',
    method: 'GET',
    params
  })
}
export const getgetLists = (data) => {
  return service({
    url: '/a/entity/materialCode/getLists',
    method: 'POST',
    data
  })
}
