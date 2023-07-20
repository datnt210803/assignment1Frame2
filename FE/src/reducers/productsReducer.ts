import { produce } from 'immer';
const initialState = {
    products: [] as any[]
}

export const productReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "admin/fetch_product":
                drafState.products = action.payload;
                return;
            case "admin/fetch_productByid":
                drafState.products = action.payload;
                return; 
            case "admin/add_product":
                drafState.products.push(action.payload)
                return;
            case "admin/update_product":
                const { product } = action.payload;
                const { products } = state

                drafState.products = products.map(item => item.id == product.id ? product : item)
                return;
            case "admin/delete_product":
                const statusDelete = confirm("Confirm delete")
                if (statusDelete) {
                    const id = action.payload
                    drafState.products = state.products.filter((item: any) => item.id !== id)
                    alert("Delete successfully")
                }
                return;

            default:
                return state

        }
    })
}