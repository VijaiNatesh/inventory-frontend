import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {  deletePurchase } from '../../redux/actions/purchase/purchaseAction';
import { fetchUserBill } from '../../redux/actions/user/userAction';



function PurchaseDetails() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserBill())
    }, [dispatch])    
    
    const userProfile = useSelector(state => state.user)
    const {userbill} = userProfile
    console.log(userbill)

      
   
    const handlerPurchaseDelete = (id) => {
        dispatch(deletePurchase(id))
    }
    
    return (
        <div>
            {userbill ? (
                <Table className = "w-75 mx-auto pt-2"  striped bordered hover>
                <thead>
                    <tr>                                          
                        <th>Item Name</th>
                        <th>Product Key</th>
                        <th>Quantity Purchased</th>
                        <th>Quantities Available</th>                        
                        <th>Unit Cost </th>   
                        <th>Unit Price</th>                                           
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {userbill.map((item) => {
                       return(                       
                           <tr>
                               <td>{item.purchaseItemName}</td>
                               <td>{item.purchaseProductKey}</td>
                               <td>{item.purchaseQuantity}</td> 
                               <td>{item.availableQty}</td>                                                      
                               <td>{item.purchaseUnitCost}</td>
                               <td>{item.purchaseUnitPrice}</td>
                               <td><Link to={"/" + item._id} className="btn btn-primary">Edit</Link>                           
                            </td>
                            <td><button onClick = {() => handlerPurchaseDelete(item._id)}  style={{ color: 'red', cursor: 'progress' }}>Delete</button></td>                               
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

export default PurchaseDetails
