import axios from 'axios'
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
    FETCH_USERBILL_FAIL
} from '../actionTypes';
import {url} from "../../../../src/api/index"


// Register User
export const userRegister = (name, email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            })
            const config = {
                headers: { 'content-Type': 'application/json' }
            }
            const { data } = await axios.post("url/api/user/userregister",
                { name, email, password }, config)
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            })
            localStorage.setItem('userAuthData', JSON.stringify(data));
        }
        catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

export const loginUser = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })
            const config = {
                headers: { content_Type: "application/json" }
            }
            const { data } = await axios.post("url/api/user/login",
                { email, password }, config)
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
            localStorage.setItem('userAuthData', JSON.stringify(data));
        }
        catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        localStorage.removeItem('userAuthData');
        try {
            dispatch({
                type: USER_LOGOUT,
            });
        } catch (error) { }
    };
};


export const fetchProfile = () => {
    return async (dispatch, getState) => {
        const { usersInfo } = getState().user
        const id = usersInfo._id
        try {
            dispatch({
                type: FETCH_USERS_REQUEST,
                loading: true,
            });
            const config = {
                headers: {
                    content_Type: 'application/json'
                }
            };
            const { data } = await axios.get(`${url}/api/user/profile/${id}`, config);
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_USERS_FAIL,
                error: error.response && error.response.data.message,
            });
        }
    };
};

export const fetchUserBill = () => {
    return async (dispatch, getState) => {
        const { usersInfo } = getState().user
        const id = usersInfo._id
        try {
            dispatch({
                type: FETCH_USERBILL_REQUEST,
                loading: true,
            });
            const config = {
                headers: {
                    content_Type: 'application/json'
                }
            };
            const { data } = await axios.get(`${url}/api/user/bill/${id}`, config);
            dispatch({
                type: FETCH_USERBILL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_USERBILL_FAIL,
                error: error.response && error.response.data.message,
            });
        }
    };
};

