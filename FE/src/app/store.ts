import { categoryReducer } from '../reducers/categoryReducer';
import { productReducer } from '../reducers/productsReducer';

import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { userReducer } from '../reducers/usersReducers';

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any 
);
const rootReducer = combineReducers({
   
    products: productReducer,
    categories:categoryReducer,
    users:userReducer
})
const store = createStore(rootReducer, enhancer);
export default store 