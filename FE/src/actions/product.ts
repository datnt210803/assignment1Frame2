import { createProduct, editProduct, getAllProduct, getProductById, removeProduct } from "../api/products"
import { IProduct } from "../interface/product"

export const getProduct = () => async (dispatch: any) => {
    try {
        const { data } = await getAllProduct()
        dispatch({ type: "admin/fetch_product", payload: data })
    } catch (error) {
    }
}
export const getProductByID = (id: string) => async (dispatch: any) => {
    try {
        const { data } = await getProductById(id)
        dispatch({type: "admin/fetch_productByid" , payload : data})        
    } catch (error) { }
}

export const removeProductAction = (id: string) => async (dispatch: any) => {
    try {
        await removeProduct(id)
        dispatch({ type: "admin/delete_product", payload: id })
    } catch (error) {

    }
}
export const addProductApi = (d: IProduct) => async (dispatch: any) => {
    try {
        const product = await createProduct(d)
        dispatch({ type: "admin/add_product", payload: product })
    } catch (error) { }
}

export const editProductApi = (id: string, d: IProduct) => async (dispatch: any) => {
    try {
        const { data } = await editProduct(id, d);
        dispatch({ type: "admin/update_product", payload: data })
    } catch (error) { }
}