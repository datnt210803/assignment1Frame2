import { produce } from 'immer';
const initialState = {
    categories: [] as any[],
    category: {}
}

export const categoryReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "admin/fetch_category":
                drafState.categories = action.payload;
                return;
            case "admin/fetch_categoryByid":
                console.log(state); //arr
                drafState.category = action.payload; //arr=>obj
                console.log(state); //obj
                return;
            case "admin/add_category":
                drafState.categories.push(action.payload)
                return;
            case "admin/update_category":
                const category = action.payload;
                const { categories } = state;
                drafState.categories = categories.map(item => item.id == category.id ? category : item)
                return;
            case "admin/delete_category":
                const id = action.payload
                drafState.categories = state.categories.filter((item: any) => item.id !== id)      
                return;

            default:
                return state

        }
    })
}