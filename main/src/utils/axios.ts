import Axios, { AxiosRequestConfig } from 'axios'


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

export default axios
