import service ,{ getMethod }from '@/utils/request.js'
import qs from 'qs'

/**基础信息菜单请求 */

/**基础信息 - 平衡区管理*/
// 平衡区管理- 获取列表
export const getMbaList = (params) => {
    return service({
        url: '/a/entity/mba/mbaTableInitial',
        method: 'GET', 
        params
    })
    // return getMethod('/a/entity/mba/mbaTableInitial', params)
}

// 平衡区管理- 编辑保存
export const mbaSave = (data) => {
    return service({
        url: '/a/entity/mba/asySave',
        method: 'POST', 
        data
    })
}

// 平衡区管理- 编辑保存
export const mbaDelete = (data) => {
    return service({
        url: '/a/entity/mba/asyDelete',
        method: 'POST', 
        data
    })
}

/**基础信息 - 材料编码*/
// 材料编码 - 材料代码 - 获取列表
export const getMaterialCodeInitial = (params) => {
    return service({
        url: '/a/entity/materialCode/asyInitial',
        method: 'GET', 
        params
    })
}

// 材料编码-材料代码 -本方材料编码判重
export const materialCodeRepeat = (params) => {
    return service({
        url: '/a/entity/materialCode/asyRepeat',
        method: 'GET', 
        params
    })
}

// 材料编码-材料代码 -新建材料编码时获取产品代码列表、物素码列表、综合码列表
export const getMaterialCodeList = (data) => {
    return service({
        url: '/a/entity/materialCode/getLists',
        method: 'POST', 
        data
    })
}

// 材料编码- 材料代码 -保存
export const materialCodeSave = (data) => {
    return service({
        url: '/a/entity/materialCode/asySave',
        method: 'POST', 
        data
    })
}
// 材料编码- 材料代码 -删除
export const materialCodeDelete = (data) => {
    return service({
        url: '/a/entity/materialCode/asyDetele',
        method: 'POST', 
        data
    })
}

// 材料编码-材料代码 -验证 ?
export const queryMaterialCodeUsed = (data) => {
    return service({
        url: '/a/entity/materialCode/isMaterialCodeUsed',
        method: 'POST', 
        data
    })
}

/**材料编码-对照 */
// 材料编码-对照 -获取对照列表
export const getMCRelationList = (params) => {
    return service({
        url: '/a/entity/materialCode/initialRelation',
        method: 'GET', 
        params
    })
}

// 材料编码-对照 -获取本方材料编码列表
export const queryThisMaterialCodeList = (data) => {
    return service({
        url: '/a/entity/materialCode/getThisMaterialCodeList',
        method: 'POST', 
        data
    })
}

// 材料编码-对照 -删除
export const deteleRelation = (data) => {
    return service({
        url: '/a/entity/materialCode/deteleRelation',
        method: 'POST', 
        data
    })
}
// 材料编码-对照 -保存
export const saveRelation = (data) => {
    return service({
        url: '/a/entity/materialCode/saveRelation',
        method: 'POST', 
        data
    })
}


// 材料编码-对照 对方材料编码判重
export const repeatRelation = (params) => {
    return service({
        url: '/a/entity/materialCode/repeatRelation',
        method: 'GET', 
        params
    })
}

/**
 * 产品代码
 */
// 产品代码 - 验证此产品代码是否被现有材料编码使用
export const queryProCodeUsed = (params) => {
    return service({
        url: '/a/entity/materialCode/isProductCodeUsed',
        method: 'GET', 
        params
    })
}

/** 
 * 字典管理 
 */

// 字典管理 - 获取列表数据
export const initDictionary= (data) => {
    return service({
        url: '/a/sys/dict/asyInitial',
        method: 'POST', 
        data
    })
}

// 字典管理 - 查询功能
export const queryDictionary= (data) => {
    return service({
        url: '/a/sys/dict/asyQuery',
        method: 'POST', 
        data
    })
}
// 字典管理 - 删除
export const deleteDictionary= (data) => {
    return service({
        url: '/a/sys/dict/asyDetele',
        method: 'POST', 
        data
    })
}
 
// 字典管理 - 保存
export const saveDictionary= (data) => {
    return service({
        url: '/a/sys/dict/asySave',
        method: 'POST', 
        data
    })
}

// 字典管理 - 产品代码判重-post
export const queryDictRepeat= (data) => {
    data = qs.stringify(data)
    return service({
        url: '/a/sys/dict/asyRepeat',
        method: 'POST', 
        data
    })
}
// 字典管理 - 产品代码判重-get 
export const queryDictRepeatGet = (params) => {
    return service({
        url: '/a/sys/dict/asyRepeat',
        method: 'GET', 
        params
    })
}

 
