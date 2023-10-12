import {service} from "@/utils/axios";
export const getCollectedWebsitesAPI = () => {
    return service.get("/websites").then(res => {
        return res.data.filter(item => item.name !== "some" )
    })
}
export const getComponentLibraryAPI = () => {
    return service.get("/componentLibrary").then(res => {
        return res.data.filter(item => item.name !== "some" )
    })
}
