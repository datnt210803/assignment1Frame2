import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/categories",
})
export const getAllCategory=()=>{
    return instance.get("")
}
export const getCategoryById=(id:any)=>{
    return instance.get(`/${id}`)
}
export const createCategory=(data:any)=>{
    return instance.post("",data)
}
export const removeCategory=(id:any)=>{
    return instance.delete(`/${id}`)
}
export const editCategory=(id:any,data:any)=>{
    return instance.put(`/${id}`,data)
}

export default instance