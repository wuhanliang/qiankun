import Axios from "axios";

const axios = Axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    config.headers.Authorization = localStorage.getItem("authorization") || "";
    config.headers.userId = user.id;
    config.headers.userName = user.userName;

    switch (config.type) {
      case "file":
        config.headers["content-type"] = "application/multipart/form-data";
        break;
      case "form":
        config.headers["content-type"] = "application/x-www-form-urlencoded";
        break;
      default:
        config.headers["content-type"] =
          config.headers["Content-Type"] || "application/json";
        break;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
/**
 * // request拦截器
service.interceptors.request.use((config:any) => {
  // Do something before request is sentconfig.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = sessionStorage.getItem('authorization') || ''
  config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json'
  // config.headers['EmployeeCode'] = store.state.user.employeeCode // fixme: 铁前临时用
  // 8080
  if (config.type == 'file') {
      config.headers['content-type'] = 'application/multipart/form-data'
  } else if (config.type == 'form') {
      config.headers['Content-type'] = 'application/x-www-form-urlencoded'
  }
  if (config.method.toLowerCase() === 'get') {
    config.data = true
  }
  // 8080
  return config
}, (error:any) => {
  // Do something with request error
  Promise.reject(error)
})

let alertErr = true
// respone拦截器
service.interceptors.response.use(
  (response:any) => {
    if (response.data.success === false) {
      if (response.data.code === 401) { // token失效
        if (alertErr) {
          alertErr = false
          vm.$warning({
            title: '验证失效，请重新登录',
            content: response.data.msg,
            okText: '好的',
            onOk() {
              store.dispatch('Logout')
            }
          })
        }
      } else {
        alertErr = true
        vm.$notification.warning({
          message: response.data.msg,
          description: ''
        })
      }
    } else {
      alertErr = true
    }
    return response
  },
  (error:any) => {
    if (error.response && error.response.data && error.response.data.msg) {
      vm.$notification.warning({
        message: error.response.data.msg,
        description: ''
      });
    } else if (error) {
      error.message && vm.$notification.warning({
        message: error.message,
        description: ''
      });
    }
    error.data = error.data || {}
    return error
  }
)
 */
