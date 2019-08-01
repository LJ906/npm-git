import service from '@/utils/request.js'
// import qs from 'qs'

/**
 * 基础信息 - 空容器
*/

// 空容器添加页面 - 获取表头数据
export const getSupportHeadList = (params) => {
    return service({
        url: '/a/storage/supportHead/asyInitial',
        method: 'GET', 
        params
    })
}

// 空容器添加页面 -  查询计划单
export const asyQueryPlan = (data) => {
    return service({
        url: '/a/storage/supportHead/asyQueryPlan',
        method: 'POST', 
        data
    })
}

// 空容器添加 - 提交计划单
export const supportHeadSubmit = (data) => {
    return service({
        url: '/a/storage/supportHead/asySubmit',
        method: 'POST', 
        data
    })
}

// 空容器添加 - 删除计划单tips
export const deletePlanTips = (data) => {
    return service({
        url: '/a/storage/supportHead/asyDeletePlanTips',
        method: 'POST', 
        data
    })
}

// 空容器添加 - 删除计划单
export const deletePlan = (data) => {
    return service({
        url: '/a/storage/supportHead/asyDeletePlan',
        method: 'POST', 
        data
    })
}

// 空容器添加 - 保存表头
export const savePlan = (data) => {
    return service({
        url: '/a/storage/supportHead/asySavePlan',
        method: 'POST', 
        data
    })
}

// 空容器编辑 - 编辑表头
export const editPlan = (data) => {
    return service({
        url: '/a/storage/supportHead/invokeSpecifiedMehtod/editPlan',
        method: 'POST', 
        data
    })
}

// 空容器添加编辑 - 空容器编辑界面初始化
export const initialsupportBody = (data) => {
    return service({
        url: '/a/storage/supportBody/asyInitial',
        method: 'POST', 
        data
    })
}
// 空容器添加编辑- 编辑界面明细查询
export const supportBodyQueryDetail = (data) => {
    return service({
        url: '/a/storage/supportBody/asyQueryDetail',
        method: 'POST', 
        data
    })
}


// 空容器添加编辑-  空容器编辑界面添加接口 
export const addBodyManully = (data) => {
    return service({
        url: '/a/storage/supportBody/invokeSpecifiedMehtod/addBodyManully',
        method: 'POST', 
        data
    })
}
// 空容器添加编辑 - 明细列表删除
export const supportBodyDeleteDetail = (data) => {
    return service({
        url: '/a/storage/supportBody/asyDeleteDetail',
        method: 'POST', 
        data
    })
}

// 空容器表单删除
export const supBodyDelDetailTips = (data) => {
    return service({
        url: '/a/storage/supportBody/asyDeleteDetailTips',
        method: 'POST', 
        data
    })
}

// 空容器添加编辑  - 手动入库
export const supportBodySaveDetail = (data) => {
    return service({
        url: '/a/storage/supportBody/asySaveDetail',
        method: 'POST', 
        data
    })
}


// 厂房初始化
export const manualStorageInitial = (data) => {
    return service({
        url: '/a/storage/supportBody/invokeSpecifiedMehtod/manualStorageInitial',
        method: 'POST', 
        data
    })
}

// 切换厂房
export const switchMba = (data) => {
    return service({
        url: '/a/entity/mba/switchMba',
        method: 'POST', 
        data
    })
}

// 切换区域
export const switchRoom = (data) => {
    return service({
        url: '/a/entity/room/switchRoom',
        method: 'POST', 
        data
    })
}

// 切换库位
export const switchPosition = (data) => {
    return service({
        url: '/a/entity/position/switchPosition',
        method: 'POST', 
        data
    })
}

// 根据批次查询容器 返回容器涉及的所有库区room的List
export const getRoomListBybatch = (data) => {
    return service({
        url: '/a/storage/supportBody/invokeSpecifiedMehtod/getRoomListAboutBody',
        method: 'POST', 
        data
    })
}

// 根据批次查询容器 返回容器涉及的所有库区room的List
export const rdSupportHeadFillIn = (data) => {
    return service({
        url: '/a/storage/supportHead/invokeSpecifiedMehtod/rdSupportHeadFillIn',
        method: 'POST', 
        data
    })
}

// 容器 - 初始化容器列表
export const getContainerList = (data) => {
    return service({
        url: '/a/entity/container/asyInitial',
        method: 'POST', 
        data
    })
}
// 容器 - 保存容器
export const saveContainer = (data) => {
    return service({
        url: '/a/entity/container/asySave1',
        method: 'POST', 
        data
    })
}

 