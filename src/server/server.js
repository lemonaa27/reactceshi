import axios from 'axios'
const url = 'http://localhost:8887/'
    // https://www.easy-mock.com/mock/59ba12e6e0dc663341a97644/example/cityList
axios.defaults.timeout = 3001

//请求拦截器
axios.interceptors.request.use(function(config) {
    return config
}, function(err) {
    console.log(err.code)
    return Promise.reject(err)
})

//响应拦截器
axios.interceptors.response.use(response => {
    return response
}, err => {
    console.log(err)
    if (err.code === 'ECONNABORTED') {
        alert('响应超时')
    } else {
        alert(err)
    }
    return Promise.reject(err)
})
export const bannerLists = () => {
    return axios.get(`${url}bannerList`).then(res => res.data)
}
export const foodLists = () => {
    return axios.get(`${url}foodList`).then(res => res.data)
}
export const detailLists = (params) => {
    return axios.get(`${url}foodDetail`,{params}).then(res => res.data)
}