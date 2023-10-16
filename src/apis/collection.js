import {service} from "@/utils/axios";
export const getCollectionByTypeAPI = async (type) => {
    try {
        const res = await service.get(`/collection2?type=${type}`);
        if (res.data.length !== 0){
            return res.data;
        }else {
            return [];
        }
    }catch (e) {
        console.log(e)
    }
}
export const selectWebsiteByNameAPI = async (name, strictFlag) => {
    try {
        let res;
        if (strictFlag){
            res = await service.get(`/collection2?name=${name}`);

        }else {
            res = await service.get(`/collection2?name_like=${name}`);
        }
        if (res.data.length !== 0){
            return res.data;
        }
        return [];
    }catch (e) {
        console.log(e);
    }
}
export const getAllCollectionAPI = async() => {
    const res = await service.get("/collection2");
    return res.data.reduce((acc, item) => {
        if (item.type !== "") {
            if (!acc.has(item.type)) {
                acc.set(item.type, [])
            }
            acc.get(item.type).push(item);
        }
        return acc;
    }, new Map())
}
export const addWebsiteAPI = async (newWebsiteData) => {
    try {
        const { type, name, url, about } = newWebsiteData;
        const websiteObj = await selectWebsiteByNameAPI(name, true);
        if (websiteObj.length !== 0){
            console.log('website already exist')
        }
        const newWebsite = {
            type,
            name,
            url,
            about,
        }
        await service.post('/collection2', newWebsite);
        return {
            code: 200,
            msg: 'add website success',
        }
    }catch (e) {
        console.log(e)
        return {
            code: 500,
            msg: 'add error',
        }
    }
}

export const getAllTypeAPI = async () => {
    try {
        const res = await service.get('/collection2');
        let typeList = []
        res.data.forEach(item => {
            if (!typeList.includes(item.type)){
                typeList.push(item.type)
            }
        })
        return typeList;
    }catch (e) {
        console.log(e)
    }
}
