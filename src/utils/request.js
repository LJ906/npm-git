import axios from 'axios';
// import router from '../router'
// import Store from '@/js/store.js'

let configUrl = {
  '/a/login':true,
  '/a/storage/supportBody/exportExcel':true,
  '/a/storage/supportBody/exportExcelModel':true,
  '/a/storage/supportBody/exportErrExcel':true,
  '/a/storage/pivBody/expSearchResult': true, // jia
  '/a/report/commHead/expExcel':true,
  '/a/report/commHead/exportWord':true,
  '/a/report/commHead/exportWordForPDF': true, // jia
  '/a/report/hclGaAccountBody/generateWord':true,
  '/a/report/hclGaAccountHead/exp':true,
  '/a/entity/room/exportExcelRoom':true,
  '/a/changeLogin':true,
  '/a/storage/supportHead/expXML':true,
  '/RFIDConnectReader': true, //jia
  '/RFIDReadTag': true,
  '/RFIDWriteTagData': true, 
  '/a/sys/dict/asyRepeat': true, 
  '/a/loginUserByMba': true, 
};
let contentType = {
  'application/octet-stream;charset=utf-8':true,
  'application/octet-stream;charset=UTF-8':true,
  'application/vnd.ms-word;charset=UTF-8':true,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':true,

};

// create an axios instance
const service = axios.create({
    baseURL: process.env.HOST,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 1000000000 // request timeout
})

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
service.interceptors.request.use(
    config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    if (configUrl[config.url]) {
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
      }
    } else {
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type':'application/json'
      }
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
service.interceptors.response.use(res => {
  // if (res.headers && (contentType[res.headers['content-type']])) {
  //   downloadUrl(res);
  //   return;
  // }
  // if(res.data.state ==2){
  //     router.push({
  //       path:"/login",
  //       query:{redirect:router.currentRoute.fullPath}//登陆超时
  //     })
  //   }
  //   if(res.data.state ==3){
  //     router.push({
  //       path:"/error500",
  //     })
  //     Store.save('detail',res.data.detail);
  //   }


    // return res;
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

// 导出axios 实例
export default service

// post请求
export function postMethod(url, data = {}){
  return new Promise((resolve, reject) => {
    service({
      url, 
      data, 
      method: 'POST'
    }).then(response => {
        response?resolve(response) :resolve();
      },err => {
        reject(err)
      })
  })
}

// get请求
export function getMethod(url, params = {}){
  return new Promise((resolve, reject) => {
    service({
      url, 
      params, 
      method: 'GET'
    }).then(response => {
        response?resolve(response) :resolve();
      },err => {
        reject(err)
      })
  })
}

