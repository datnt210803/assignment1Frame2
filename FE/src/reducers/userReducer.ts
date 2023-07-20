import { produce } from 'immer';


const initialState = {
    user: [] as any[]
}

export const userReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "user/login":
                drafState.user = action.payload;
                break;
            default:
                return drafState
 
        }
    })
}