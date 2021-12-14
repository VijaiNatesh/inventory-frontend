import { ADD_SALESITEM_REQUEST, ADD_SALESITEM_SUCCESS, ADD_SALESITEM_FAIL} from '../../actions/actionTypes';

export const billReducer = (state={}, action) => {
    switch(action.type){
        case ADD_SALESITEM_REQUEST:
        return{
            loading: true
        }
        case ADD_SALESITEM_SUCCESS:
        return{
            addSalesItem: action.payload
        }
        case ADD_SALESITEM_FAIL:
        return{
            loading: false,
            error: action.payload
        }
       
        default:
        return state
    }
}