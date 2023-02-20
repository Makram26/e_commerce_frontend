import { legacy_createStore as createStore,combineReducers,applyMiddleware  } from "redux"

import {composeWithDevTools} from "redux-devtools-extension"


import thunk from "redux-thunk"
import { productDetailsReducer, productReducer } from "./reducers/productReducer";


const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
});

const initialState = {}

const middlewere =[thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlewere)));

export default store