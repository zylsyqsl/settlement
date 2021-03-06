import Vue from "vue";
import qs from "qs"; // 引入qs
import { Loading, Alert } from "element-ui";
import easyResponse from "./response";
var axios = require("axios");

let v = new Vue();
let globalLoading;

const $http = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: process.env.BASE_API,
  timeout: 2000
});

//请求拦截
$http.interceptors.request.use(
  function(config) {
    //张开遮罩
    globalLoading = Loading.service({
      fullscreen: true
    });
    // if (
    //   config.url.indexOf("login") > -1 ||
    //   config.url.indexOf("register") > -1
    // ) {
    //   //某些请求不要tocken
    return config;
    // } else {
    //   console.log(store.state);
    //   if (store.state.tocken) {
    //     config.headers.authorization = "Bearer " + store.state.tocken;
    //   }
    //   return config;
    // }
  },
  function(err) {
    //关闭遮罩
    globalLoading.close();
    return Promise.reject(err);
  }
);
//响应拦截
$http.interceptors.response.use(
  function(response) {
    //关闭遮罩
    globalLoading.close();
    return response;
  },
  function(err) {
    //关闭遮罩
    globalLoading.close();
    // if (err.response) {
    //   switch (err.response.data.message) {
    //     case "false":
    //       store.dispatch(types.LOGOUT); //删除tocken
    //   }
    // }

    if (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            err.message = "请求错误";
            break;
          case 401:
            err.message = "未授权，请登录";
            break;
          case 403:
            err.message = "拒绝访问";
            break;
          case 404:
            err.message = `请求地址异常`;
            break;
          case 408:
            err.message = "请求超时";
            break;
          case 500:
            err.message = "服务器内部错误";
            break;
          case 501:
            err.message = "服务未实现";
            break;
          case 502:
            err.message = "网关错误";
            break;
          case 503:
            err.message = "服务不可用";
            break;
          case 504:
            err.message = "网关超时";
            break;
          case 505:
            err.message = "HTTP版本不受支持";
            break;
          default:
        }
      } else {
        if (err.stack.match("timeout")) {
          err.message = "加载超时，请检查您的网络";
        } else {
          err.message = "网络错误，请检查您的网络";
        }
      }
    }
    v.$alert(err.message, "错误提示", {
      confirmButtonText: "确定",
      callback: action => {}
    });
    return Promise.reject(err.response);
  }
);

async function fetchPost(url, params, failCb) {
  // 这里主要是post方法的封装
  // let data = qs.stringify(params);
  return new Promise((resolve, reject) => {
    $http
      .post(url, params)
      .then(response => {
        let res = easyResponse.load(response.data);
        //  这里主要根据后来返回的数据作判断，请根据实际情况
        if (res.isSuccess()) {
          resolve(res);
        } else {
          if (failCb) {
            failCb(res);
          } else {
            var errorMsg = res.getMsg();
            switch (res.getCode()) {
              case -500:
                errorMsg = "服务器内部错误";
                break;
              default:
            }
            v.$alert(errorMsg, "错误提示", {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
          resolve(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
}

async function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    $http
      .get(url, params)
      .then(
        response => {
          let res = easyResponse.load(response.data);
          //  这里主要根据后来返回的数据作判断，请根据实际情况
          if (res.isSuccess()) {
            resolve(res);
          } else {
            var errorMsg = res.getMsg();
            switch (res.getCode()) {
              case -500:
                errorMsg = "服务器内部错误";
                break;
              default:
            }
            v.$alert(errorMsg, "错误提示", {
              confirmButtonText: "确定",
              callback: action => {}
            });
            resolve(false);
          }
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        console.log(error);
      });
  });
}

export { $http, fetchPost, fetchGet };

/**
 * axios 封装概述：
 * 页面直接调用fetchPost，fetchGet
 * 1、调用之后
 * 2、先进请求拦截
 * 3、再进响应拦截
 * 4、响应拦截调用 resolve 则进fetch的then；调用reject则进fetch的chatch
 * 5、fetch中的then碰到错误，一般是业务内部异常，则调用resolve(false)。进入页面上具体调用处的then方法，所以页面具体调用时，then先判断返回的response是否为真
 * 6、fetch中的catch一般是处理网络问题，直接打印出来，不要调用reject。呢么页面具体调用处，就不用再写catch了。
 * **/
