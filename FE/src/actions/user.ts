import { editUser, getAllUsers, getUserById, removeUser, signIn, signUp } from "../api/user"
import { IUser } from "../interface/user"

export const getUser = () => async (dispatch: any) => {
    try {
        const { data } = await getAllUsers()
        console.log(data);
        
        dispatch({ type: "admin/fetch_user", payload: data })
    } catch (error) {
    }
}
export const getUserByID = (id: string) => async (dispatch: any) => {
    try {
        const { data } = await getUserById(id)
        dispatch({type: "admin/fetch_userByid" , payload : data})        
    } catch (error) { }
}

export const removeUserAction = (id: string) => async (dispatch: any) => {
    try {
        await removeUser(id)
        dispatch({ type: "admin/delete_user", payload: id })
    } catch (error) {

    }
}
export const signUpAction = (d: IUser) => async (dispatch: any) => {
    try {
        const user = await signUp(d)
        dispatch({ type: "signUp", payload: user })
    } catch (error) { }
}
export const signInAction = (d: IUser) => async (dispatch: any) => {
    try {
        const user = await signIn(d)
        dispatch({ type: "signIn", payload: user })
    } catch (error) { }
}


export const editUserApi = (id: string, d: IUser) => async (dispatch: any) => {
    try {
        const { data } = await editUser(id, d);
        dispatch({ type: "update_user", payload: data })
    } catch (error) { }
}