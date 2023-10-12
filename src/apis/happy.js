import {service} from "@/utils/axios";
export const getBooksAPI = () => {
    return service.get("/books").then(res => {
        return res.data.filter(item => item.name !== 'some' )
    })
}
