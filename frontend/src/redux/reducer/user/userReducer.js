import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL,
    FETCH_USERBILL_REQUEST,
    FETCH_USERBILL_SUCCESS,
    FETCH_USERBILL_FAIL} from "../../actions/actionTypes";




export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                usersInfo: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                usersInfo: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {}
        case FETCH_USERS_REQUEST:
            return {
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload
            }
        case FETCH_USERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            case FETCH_USERBILL_REQUEST:
            return{
                loading: true
            }
            case FETCH_USERBILL_SUCCESS:
            return{
                userbill: action.payload
            }   
            case FETCH_USERBILL_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}