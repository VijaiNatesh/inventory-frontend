import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import {  deletePurchase } from '../../redux/actions/purchase/purchaseAction';
import { fetchProfile } from '../../redux/actions/user/userAction';



function PurchaseDetails() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfile())       
    }, [dispatch]) 
    
        
    
    const userProfile = useSelector(state => state.user)
    const {users} = userProfile
    console.log(users)      
   
    const handlerPurchaseDelete = (id) => {
        dispatch(deletePurchase(id))
    }
    
    return (
        <div>
            {users ? (
                <Table className = "w-75 mx-auto pt-2"  striped bordered hover>
                <thead>
                    <tr>                                          
                        <th>Item Name</th>
                        <th>Product Key</th>
                        <th>Quantity Purchased</th>                                            
                        <th>Unit Cost </th>   
                        <th>Unit Price</th>                                           
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {users.map((item) => {
                       return(                       
                           <tr>
                               <td>{item.purchaseItemName}</td>
                               <td>{item.purchaseProductKey}</td>
                               <td>{item.purchaseQuantity}</td>                                                                                   
                               <td>{item.purchaseUnitCost}</td>
                               <td>{item.purchaseUnitPrice}</td>
                               <td><Link to={"/" + item.productId} className="btn btn-primary">Edit</Link>                           
                            </td>
                            <td><button onClick = {() => handlerPurchaseDelete(item.productId)}  style={{ color: 'red', cursor: 'progress' }}>Delete</button></td>                               
                            </tr>
                       )})}        
            </tbody>
            </Table>
            ) : (
                "No Items Purchased"
            ) }                            

        </div>  
        
   
    )
}

export default withRouter(PurchaseDetails)
