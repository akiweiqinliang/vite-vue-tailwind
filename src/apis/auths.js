import {service} from "@/utils/axios";
export const registerAPI = async (registerData) => {
    // 验证data username唯一
    if(!/^1[3456789]\d{9}$/.test(registerData.phoneNumber) || registerData.password !== registerData.passwordConf){
        return {
            code: 400,
            msg: 'error register data'
        }
    }
    const { userName, password, email, phoneNumber } = registerData;
    const newUser = { userName, password, email, phoneNumber };
    try {
        const sort = await service.get(`/users?userName=${userName}`);
        if (sort.data.length !== 0){
            return {
                code: 401,
                msg: 'already exist same username',
            }
        }
        const res = await service.post("/users", newUser);
        if (res.status !== 500){
            return {
               code: 200,
               msg: 'register ok',
            }
        }
        console.log('register ok')
    }catch(e) {
        console.log(e)
    }
}
export const loginAPI = async (loginData) => {
    // 验证data
    const { userName, password } = loginData;
    try {
        const res = await service.get(`/users?userName=${userName}&password=${password}`);
        // console.log(res, '444')
        // return res;
        if (res.data.length === 1){
            return {
                code: 200,
                msg: 'login ok',
            }
        }else{
            return  {
                code: 400,
                msg: 'error login data',
            }
        }
    }catch(e) {
        console.log(e)
    }
}
