import { produce } from 'immer';
const initialState = {
    products: [] as any[],
    product: {}
}

export const productReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "admin/fetch_product":
                drafState.products = action.payload;
                return;
            case "admin/fetch_productByid":
                console.log(state); //arr
                drafState.product = action.payload; //arr=>obj
                console.log(state); //obj
                return;
            case "admin/add_product":
                drafState.products.push(action.payload)
                return;
            case "admin/update_product":
                const product = action.payload;
                const { products } = state;

                drafState.products = products.map(item => item.id == product.id ? product : item)
                // state.products = drafState.products;
                return;
            case "admin/delete_product":
                const id = action.payload
                drafState.products = state.products.filter((item: any) => item.id !== id)
                return;

            default:
                return state

        }
    })
}