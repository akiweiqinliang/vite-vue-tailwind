import axios from 'axios'

// export 将 service 传出去
export const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, //变量地址
    // baseURL:'http://localhost:3004/', // 本地测试地址
    baseURL: 'https://aki-server.onrender.com', // 线上部署地址
    // baseURL:'https://g7w1vj5x-3000.asse.devtunnels.ms', // vscode forward port
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
// 拦截器
service.interceptors.response.use(
    function (response) {
        // const dataAxios = response.data;
        // const code = dataAxios.status;
        // if (response.config.method === "get"){
        //     if (dataAxios.length !== 0){
        //         return {
        //             code: 200,
        //             msg: 'login ok',
        //         }
        //     }else{
        //         return  {
        //             code: 400,
        //             msg: 'error login data',
        //         }
        //     }
        // }
        // console.log(response)
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        // const dataAxios = response.data
        // 这个状态码是和后端约定的
        // const code = dataAxios.status
        return response
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error)
        return Promise.reject(error)
    }
)
