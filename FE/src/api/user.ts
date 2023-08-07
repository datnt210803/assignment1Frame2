import axios from "axios";
import { IProduct } from "../interface/product";
import { IUser } from "../interface/user";

const instance = axios.create({
    baseURL: "http://localhost:8080/users",
})
export const getAllUsers=()=>{
    return instance.get("")
}
export const getUserById=(id:string)=>{
    return instance.get(`/${id}`)
}
export const signUp=(data:IUser)=>{
    return instance.post("",data)
}
export const signIn=(data:IUser)=>{
    return instance.post("",data)
}
export const removeUser=(id:string)=>{
    return instance.delete(`/${id}`)
}
export const editUser=(id:string,data:IUser)=>{
    return instance.put(`/${id}`,data)
}

export default instance