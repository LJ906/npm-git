import axios from 'axios';
import router from '../router'
import Store from './store.js'
let default_xhr = Store.requesrXhr();
axios.defaults.timeout = 1000000000;
axios.defaults.withCredentials=true;//用axios发送post请求自动set cookie
axios.defaults.baseURL = default_xhr;
//axios.defaults.baseURL ='http://localhost:8080/BULKHCL';


/*const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}*/
// 下载文件
const downloadUrl = (res) => {
  const data = res.data;
  const form = document.createElement('form');
  form.action = res.config.url;
  form.method = 'post';
  form.style.display = 'none';
  //根据后台的参数设置form 的input键值对
  Object.keys(data).forEach(key =>{
    const inputElement = document.createElement('input');
    inputElement.type = 'hidden';
    inputElement.setAttribute('name',key);
    inputElement.setAttribute('value',data[key]);
    form.appendChild(inputElement)
  });
  const button = document.createElement('input');
  button.type = 'submit';

  form.appendChild(button);
  document.body.appendChild(form);
  form.submit();

  document.body.removeChild(form)
};


//http request 拦截器
axios.interceptors.request.use(
    config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    if(config.url == '/a/login'
      || config.url == '/a/storage/supportBody/exportExcel'
      || config.url == '/a/storage/supportBody/exportExcelModel'
      || config.url == '/a/storage/supportBody/exportErrExcel'
      || config.url == '/a/storage/pivBody/expSearchResult'
      || config.url == '/a/report/commHead/expExcel'
      || config.url == '/a/report/commHead/exportWord'
      || config.url == '/a/report/commHead/exportWordForPDF'
      || config.url == '/a/report/hclGaAccountBody/generateWord'
      || config.url == '/a/report/hclGaAccountHead/exp'
      || config.url == '/a/entity/room/exportExcelRoom'
      || config.url == '/a/changeLogin'
      || config.url == '/a/storage/supportHead/expXML'
      || config.url == '/RFIDConnectReader'
      || config.url == '/RFIDReadTag'
      || config.url == '/RFIDWriteTagData'
      || config.url == '/a/sys/dict/asyRepeat'
      || config.url == '/a/loginUserByMba'
      ){
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
      }

    }else{
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type':'application/json'
      }
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(res => {
  //console.log(res)
  if (res.headers && (res.headers['content-type'] === 'application/octet-stream;charset=utf-8'
    || res.headers['content-type'] === 'application/octet-stream;charset=UTF-8'
    || res.headers['content-type'] === 'application/vnd.ms-word;charset=UTF-8'
    || res.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
    downloadUrl(res)
    return
  }
  if(res.data.state ==2){
      router.push({
        path:"/login",
        query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    if(res.data.state ==3){
      router.push({
        path:"/error500",
     //用户ID
      })
      Store.save('detail',res.data.detail);
    }
    return res;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        response?resolve(response.data):resolve();
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
