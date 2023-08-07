import { produce } from 'immer';
const initialState = {
    users: [] as any[],
    user: {},
    isLoggedIn:false
}

export const userReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "admin/fetch_user":
                drafState.users = action.payload;
                return;
            case "admin/fetch_userByid":
                console.log(state); //arr
                drafState.user = action.payload; //arr=>obj
                console.log(state); //obj
                return;
            case "signUp":
                drafState.users.push(action.payload)
                return;
            case "signIn":
                const { email, password } = action.payload;
                const userToSignIn = drafState.users.find(user => user.email === email && user.password === password);
                console.log(userToSignIn);
                console.log(drafState.users);
                
                if (userToSignIn) {
                    
                    drafState.isLoggedIn = true;
                }
                return;

            case "update_user":
                const category = action.payload;
                const { users } = state;
                drafState.users = users.map(item => item.id == category.id ? category : item)
                return;
            case "admin/delete_user":
                const id = action.payload
                drafState.users = state.users.filter((item: any) => item.id !== id)
                return;

            default:
                return state

        }
    })
}