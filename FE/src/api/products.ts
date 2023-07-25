import axios from "axios";
import { IProduct } from "../interface/product";

const instance = axios.create({
    baseURL: "http://localhost:8080/products",
})
export const getAllProduct=()=>{
    return instance.get("")
}
export const getProductById=(id:string)=>{
    return instance.get(`/${id}`)
}
export const createProduct=(data:IProduct)=>{
    return instance.post("",data)
}
export const removeProduct=(id:string)=>{
    return instance.delete(`/${id}`)
}
export const editProduct=(id:string,data:IProduct)=>{
    return instance.put(`/${id}`,data)
}

export default instance