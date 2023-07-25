import axios from "axios";
import { ICategory } from "../interface/category";

const instance = axios.create({
    baseURL: "http://localhost:8080/categories",
})
export const getAllCategory=()=>{
    return instance.get("")
}
export const getCategoryById=(id:string)=>{
    return instance.get(`/${id}`)
}
export const createCategory=(data:ICategory)=>{
    return instance.post("",data)
}
export const removeCategory=(id:string)=>{
    return instance.delete(`/${id}`)
}
export const editCategory=(id:string,data:ICategory)=>{
    return instance.put(`/${id}`,data)
}

export default instance