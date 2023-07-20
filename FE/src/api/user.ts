import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/user",
})
export const getAll=()=>{
    return instance.get("")
}
export const getById=(id:any)=>{
    return instance.get(`/${id}`)
}
export const create=(data:any)=>{
    return instance.post("",data)
}
export const remove=(id:any)=>{ 
    return instance.delete(`/${id}`)
}
export const edit=(id:any,data:any)=>{
    return instance.put(`/${id}`,data)
}

export default instance