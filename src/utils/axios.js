import axios from 'axios'

// export 将 service 传出去
export const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, //变量地址
    baseURL:'http://localhost:3000/', //重点，此处与代理保持一致！！！！
    timeout: 5000,
    withCredentials: true, // 异步请求携带cookie
    // headers: {
    //     // 设置后端需要的传参类型
    //     'Content-Type': 'application/json',
    //     'token': 'your token',
    //     'X-Requested-With': 'XMLHttpRequest',
    // },
})

// request interceptor
// service.interceptors.request.use(
//     function (config) {
//         // 在发送请求之前做些什么
//         return config
//     },
//     function (error) {
//         // 对请求错误做些什么
//         console.log(error)
//         return Promise.reject(error)
//     }
// )
//
// // 拦截器
// service.interceptors.response.use(
//     function (response) {
//         console.log(response)
//         // 2xx 范围内的状态码都会触发该函数。
//         // 对响应数据做点什么
//         // dataAxios 是 axios 返回数据中的 data
//         const dataAxios = response.data
//         // 这个状态码是和后端约定的
//         const code = dataAxios.reset
//         return dataAxios
//     },
//     function (error) {
//         // 超出 2xx 范围的状态码都会触发该函数。
//         // 对响应错误做点什么
//         console.log(error)
//         return Promise.reject(error)
//     }
// )
