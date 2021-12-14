import axios from "axios";
import {
    PURCHASE_ADDITEM_REQUEST,
    PURCHASE_ADDITEM_SUCCESS,
    PURCHASE_ADDITEM_FAIL,   
    PURCHASE_UPDATE_REQUEST,
    PURCHASE_UPDATE_SUCCESS,
    PURCHASE_UPDATE_FAIL,
    PURCHASE_DETAIL_REQUEST,
    PURCHASE_DETAIL_SUCCESS,
    PURCHASE_DETAIL_FAIL,
    PURCHASE_DELETE_REQUEST,
    PURCHASE_DELETE_SUCCESS,
    PURCHASE_DELETE_FAIL
} from "../actionTypes";

// Create Item
export const createItem = (purchaseData) => {
    return async dispatch => {
        try {
            dispatch({
                type: PURCHASE_ADDITEM_REQUEST,
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post('http://localhost:5000/api/purchase/additem',
                (purchaseData),
                config)
            dispatch({
                type: PURCHASE_ADDITEM_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: PURCHASE_ADDITEM_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}



export const fetchPurchaseDetail = (id, purchaseData) => {
    return async dispatch => {
        try {
            dispatch({
                type: PURCHASE_DETAIL_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get(`http://localhost:5000/api/purchase/${id}`,
                purchaseData, config)
            dispatch({
                type: PURCHASE_DETAIL_SUCCESS,
                payload: data
            })

        }
        catch (error) {
            dispatch({
                type: PURCHASE_DETAIL_FAIL,
                loading: false,
                error: error.response && error.response.data.messag
            })
        }
    }
}

export const updatePurchase = (id, purchaseData) => {
    return async dispatch => {
        try {
            dispatch({
                type: PURCHASE_UPDATE_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.put(`http://localhost:5000/api/purchase/${id}`,
                purchaseData, config)
            dispatch({
                type: PURCHASE_UPDATE_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: PURCHASE_UPDATE_FAIL,
                loading: false,
                error: error.response && error.response.data.messag
            })
        }
    }
}

export const deletePurchase = (id) => {
    return async dispatch => {
        try {
            dispatch({
                type: PURCHASE_DELETE_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.delete(`http://localhost:5000/api/purchase/${id}`,
                config)
            dispatch({
                type: PURCHASE_DELETE_SUCCESS,
                payload: data
            })

        }
        catch (error) {
            dispatch({
                type: PURCHASE_DELETE_FAIL,
                loading: false,
                error: error.response && error.response.data.messag
            })
        }
    }
}