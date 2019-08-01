import service from '@/utils/request.js'
import qs from 'qs'

/** 查询菜单  */
// 收拨结存 - 初始化 
export const initialQuery = (data) => {
    return service({
        url: '/a/query/query/asyInitial',
        method: 'POST', 
        data
    })
}
// 收拨结存 - 查询
export const queryCollectBalance = (data) => {
    return service({
        url: '/a/query/query/asyCollectBalance',
        method: 'POST', 
        data
    })
}

// 金属平衡
export const asyMetalBalance = (data) => {
    return service({
        url: '/a/query/query/asyMetalBalance',
        method: 'POST', 
        data
    })
}


// 收拨结存 - 测试导出
export const expSearchResult = (data) => {
    data = qs.stringify(data)
    return service({
        url: '/a/storage/supportBody/expSearchResult',
        method: 'POST', 
        data
    })
}

// 材料跟踪查询 -
export const asyQueryMaterial = (data) => {
    return service({
        url: '/a/query/query/asyQueryMaterial',
        method: 'POST', 
        data
    })
}

// 实物盘点
export const asyPivQuery = (data) => {
    return service({
        url: '/a/query/query/asyPivQuery',
        method: 'POST', 
        data
    })
}

// 库存统计查询
export const queryStock = (data) => {
    return service({
        url: '/a/query/query/stockQuery',
        method: 'POST', 
        data
    })
} 
// 实物盘存查询
export const queryCurrent2 = (data) => {
    return service({
        url: '/a/query/query/asycurrentQuery2',
        method: 'POST', 
        data
    })
} 
// 调入日志
export const asytransferLog = (data) => {
    return service({
        url: '/a/query/query/asytransferLog',
        method: 'POST', 
        data
    })
} 
// 调出日志
export const transferOutLog = (data) => {
    return service({
        url: '/a/query/query/asytransferOutLog',
        method: 'POST', 
        data
    })
} 