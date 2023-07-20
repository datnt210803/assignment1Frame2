import { getAll } from "../api/user";
import axios from "axios";

export const callUserApi = () =>  async(dispatch:any)=>{
    try {
        const users = await getAll();
        dispatch({ type: "user/login", payload: users })
    } catch (error) { }
} 