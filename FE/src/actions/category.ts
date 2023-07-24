import { createCategory, editCategory, getAllCategory, getCategoryById, removeCategory } from "../api/category"

export const getCategory = () => async (dispatch: any) => {
    try {
        const { data } = await getAllCategory()
        dispatch({ type: "admin/fetch_category", payload: data })
    } catch (error) {
    }
}
export const getCategoryByID = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await getCategoryById(id)
        dispatch({type: "admin/fetch_categoryByid" , payload : data})        
    } catch (error) { }
}

export const removeCategoryAction = (id: any) => async (dispatch: any) => {
    try {
        await removeCategory(id)
        dispatch({ type: "admin/delete_category", payload: id })
    } catch (error) {

    }
}
export const addCategoryApi = (d: any) => async (dispatch: any) => {
    try {
        const product = await createCategory(d)
        dispatch({ type: "admin/add_category", payload: product })
    } catch (error) { }
}

export const editCategoryApi = (id: any, d: any) => async (dispatch: any) => {
    try {
        const { data } = await editCategory(id, d);
        dispatch({ type: "admin/update_category", payload: data })
    } catch (error) { }
}