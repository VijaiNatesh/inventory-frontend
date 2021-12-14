import { PURCHASE_ADDITEM_REQUEST, PURCHASE_ADDITEM_SUCCESS, PURCHASE_ADDITEM_FAIL,  PURCHASE_UPDATE_REQUEST, PURCHASE_UPDATE_SUCCESS, PURCHASE_UPDATE_FAIL, PURCHASE_DETAIL_REQUEST, PURCHASE_DETAIL_SUCCESS, PURCHASE_DETAIL_FAIL } from "../../actions/actionTypes";


export const purchaseReducer = (state = {}, action) => {
    switch(action.type){
        case PURCHASE_ADDITEM_REQUEST:
        return {
            loading: true
        }
        case PURCHASE_ADDITEM_SUCCESS:
        return {
            purchases: action.payload
        }
        case PURCHASE_ADDITEM_FAIL:
        return{
            loading: false,
            error: action.payload
        }             
        case PURCHASE_DETAIL_REQUEST:
        return{
            loading: true
        }
        case PURCHASE_DETAIL_SUCCESS:
        return {
            purchases: action.payload
        }
        case PURCHASE_DETAIL_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        case PURCHASE_UPDATE_REQUEST:
        return{
            loading: true
        }
        case PURCHASE_UPDATE_SUCCESS:
        return{
            purchases: action.payload
        }
        case PURCHASE_UPDATE_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        default:
        return state
    }
}

