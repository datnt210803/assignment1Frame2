import { create, edit, getAll, getById, remove } from "../api/products"

export const getProduct = () => async (dispatch: any) => {
    try {
        const { data } = await getAll()
        dispatch({ type: "admin/fetch_product", payload: data })

    } catch (error) { 
    }
}
export const getProductByID = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await getById(id)
        dispatch({type: "admin/fetch_productByid" , payload : data})        
    } catch (error) { }
}

export const removeProduct = (id: any) => async (dispatch: any) => {
    try {
        await remove(id)
        dispatch({ type: "admin/delete_product", payload: id })
    } catch (error) {

    }
}
export const addProductApi = (d: any) => async (dispatch: any) => {
    try {
        const product = await create(d)
        dispatch({ type: "admin/add_product", payload: product })
    } catch (error) { }
}

export const editProductApi = (d: any, id: any) => async (dispatch: any) => {
    try {
        const { data } = await edit(id, d);
        dispatch({ type: "admin/update_product", payload: data })
    } catch (error) { }
}