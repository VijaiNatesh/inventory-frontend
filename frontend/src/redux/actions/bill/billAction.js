import axios from 'axios'
import {
    ADD_SALESITEM_REQUEST,
    ADD_SALESITEM_SUCCESS,
    ADD_SALESITEM_FAIL,   
    BILL_DELETE_REQUEST,
    BILL_DELETE_SUCCESS,
    BILL_DELETE_FAIL
} from '../actionTypes';


// Adding bill item
export const createBill = (billData) => {
    return async dispatch => {
        try {
            dispatch({
                type: ADD_SALESITEM_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("http://localhost:5000/api/bill",
                (billData),
                config)
            dispatch({
                type: ADD_SALESITEM_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: ADD_SALESITEM_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }

}

export const deleteBill = (id) => {
    return async dispatch => {
        try {
            dispatch({
                type: BILL_DELETE_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.delete(`http://localhost:5000/api/bill/${id}`,
                config)
            dispatch({
                type: BILL_DELETE_SUCCESS,
                payload: data
            })

        }
        catch (error) {
            dispatch({
                type: BILL_DELETE_FAIL,
                loading: false,
                error: error.response && error.response.data.messag
            })
        }
    }
}