import Axios, { AxiosRequestConfig } from 'axios'
import { initGlobalState } from "qiankun"; 

const axios = Axios.create({
	timeout: 10000,
	baseURL: process.env.REACT_APP_API_URL as string
})


axios.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers = {
		"Content-Type": "application/json"
	}
	return config
}, (error: any) => {
	return Promise.reject(error)
})

const initialState = {
  $fetch: axios
};

const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {//监听公共状态的变化
  console.log("主应用: 变更前");
  console.log(prev);
  console.log("主应用: 变更后");
  console.log(state);
})

export default axios
