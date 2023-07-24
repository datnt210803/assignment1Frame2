import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/products",
})
export const getAllProduct=()=>{
    return instance.get("")
}
export const getProductById=(id:any)=>{
    return instance.get(`/${id}`)
}
export const createProduct=(data:any)=>{
    return instance.post("",data)
}
export const removeProduct=(id:any)=>{
    return instance.delete(`/${id}`)
}
export const editProduct=(id:any,data:any)=>{
    return instance.put(`/${id}`,data)
}
export const getProductByCategory=(id:any)=>{
    return instance.get(`?category=${id}`)
}
export default instance