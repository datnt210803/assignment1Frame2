import { createProduct, editProduct, getAllProduct, getProductById, removeProduct } from "../api/products"

export const getProduct = () => async (dispatch: any) => {
    try {
        const { data } = await getAllProduct()
        dispatch({ type: "admin/fetch_product", payload: data })
    } catch (error) {
    }
}
export const getProductByID = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await getProductById(id)
        dispatch({type: "admin/fetch_productByid" , payload : data})        
    } catch (error) { }
}

export const removeProductAction = (id: any) => async (dispatch: any) => {
    try {
        await removeProduct(id)
        dispatch({ type: "admin/delete_product", payload: id })
    } catch (error) {

    }
}
export const addProductApi = (d: any) => async (dispatch: any) => {
    try {
        const product = await createProduct(d)
        dispatch({ type: "admin/add_product", payload: product })
    } catch (error) { }
}

export const editProductApi = (id: any, d: any) => async (dispatch: any) => {
    try {
        const { data } = await editProduct(id, d);
        dispatch({ type: "admin/update_product", payload: data })
    } catch (error) { }
}