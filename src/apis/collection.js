import {service} from "@/utils/axios";
export const getCollectionByTypeAPI = (type) => {
    return service.get("/collection").then(res => {
        for (const list in res.data) {
            if (list === type){
                console.log(res.data[type])
                return res.data[type];
            }else {
                return []
            }
        }
    })
}
export const getAllCollectionAPI = async() => {
    const res = await service.get("/collection");
    return new Map(Object.entries(res.data));
}
export const addWebsiteAPI = async (newWebsiteData) => {
    try {
        const { type, name, url, about } = newWebsiteData;
        const newWebsite = {
            name,
            url,
            about,
        }
        const res = await getCollectionByTypeAPI(type);
        if (res.length === 0) {
            console.log('创建新目录')
            try {
                // await service.post('/collection',{type: newWebsite});
            }catch (e) {
                console.log(e)
            }
        }else {
            console.log('加到现有目录')
            // await service.post(`/${type}`, newWebsite );
            // return {
            //     code: 200,
            //     msg: 'add website success',
            // }
        }

    }catch (e) {
        console.log(e)
        return {
            code: 500,
            msg: 'add error',
        }
    }
}
