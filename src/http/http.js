import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:9090',
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  }
})

service.interceptors.response.use((res) => {
  if (res.data.code === 0) {
    return res.data
  } else {
    return Promise.reject({ msg: res.msg })
  }
}, (error) => {
  if (error.response) {
    error.msg = '参数错误'
  } else {
    error.msg = '连接异常'
  }
  return Promise.reject(error);
})

export default {
  service,
  get(url, params) {
    return service({
      url: url,
      methods: 'get',
      params
    })
  }
}