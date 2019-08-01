import service from '@/utils/request.js'
import qs from 'qs'

/** 流程管理菜单 */

// 流程设计 - 流程管理列表
export const actProcessList = (data) => {
    return service({
        url: '/a/act/process',
        method: 'POST', 
        data
    })
}