import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { purchaseReducer } from "../reducer/purchase/purchaseReducer";
import { billReducer } from "../reducer/bill/billReducer";
import { userReducer } from "../reducer/user/userReducer";

const middleware = [thunk]



const reducer = combineReducers({
    purchase: purchaseReducer,
    bill: billReducer,
    user: userReducer  
})

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  user: { usersInfo: userAuthFromStorage },
};


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store