// 提供一个配置好的axios，然后导出，在main.js来使用。
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 1. 默认配置
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 2. 请求拦截器
axios.interceptors.request.use(config => {
  // 每次请求后台的时候，如果有token，需要请求头携带token。
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, err => Promise.reject(err))

// 3. 响应拦截器
axios.interceptors.response.use(res => res, err => {
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})

export default axios
