import service from '@/utils/request.js'
import qs from 'qs'

// 登录 get
export const loginGet = (params) => {
    return service({
        url: '/a/login',
        method: 'GET', 
        params
    })
}

// 账号密码登录 
export const loginIn = (data) => {
    data = qs.stringify(data)
    return service({
        url: '/a/login',
        method: 'POST', 
        data: data
    })
}

// 退出登录
export const loginOut = (params) => {
    return service({
        url: '/a/logout',
        method: 'GET', 
        params
    })
}

export const changeLogin = (data) => {
    data = qs.stringify(data)
    return service({
        url: '/a/changeLogin',
        method: 'POST', 
        data
    })
}

// 获取该用户的所有权限标识
export const getPermissions = (params) => {
    return service({
        url: '/a/getPermissions',
        method: 'GET', 
        params
    })
}

//  判断是叶子、中间、总平衡区
export const checkIsRootOrLeafMba = (params) => {
    return service({
        url: '/a/entity/mba/checkIsRootOrLeafMba',
        method: 'GET', 
        params
    })
}

// 初始化菜单
export const menuAsyInitial = (data) => {
    return service({
        url: '/a/sys/menu/asyInitial',
        method: 'POST', 
        data
    })
}

// 获取用户信息-get
export const getUserInfo = (params) => {
    return service({
        url: '/a/sys/user/info',
        method: 'GET', 
        params
    })
}
// 获取用户信息-post
export const getUserInfoPost = (data) => {
    return service({
        url: '/a/sys/user/info',
        method: 'POST', 
        data
    })
}

// 修改密码
export const modifyPassword = (data) => {
    return service({
        url: '/a/sys/user/modifyPwd',
        method: 'POST', 
        data
    })
}

// loginUser
export const getLoginUser = (params) => {
    return service({
        url: '/a/loginUser',
        method: 'GET', 
        params
    })
}

// loginUserByMba
export const getLoginUserByMba = (data) => {
    data = qs.stringify(data)
    return service({
        url: '/a/loginUserByMba',
        method: 'POST', 
        data
    })
}

// isAdmin
export const queryIsAdmin = (params) => {
    return service({
        url: '/a/isAdmin',
        method: 'GET', 
        params
    })
}


export const queryTodoTaskSize = (data) => {
    return service({
        url: '/a/act/task/todoTaskSize',
        method: 'POST', 
        data
    })
}

 
