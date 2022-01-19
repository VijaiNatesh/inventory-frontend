import React, {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updatePurchase, fetchPurchaseDetail} from '../../redux/actions/purchase/purchaseAction'
import { Form, Button} from 'react-bootstrap'


function EditPurchase() {
    const {id} = useParams();

    // Getting the purchase details from the store
    const purchaseList = useSelector(state => state.purchase)
    const {purchaseInfo} = purchaseList;
    console.log(purchaseInfo && purchaseInfo.itemName)       
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPurchaseDetail(id))
    },[dispatch, id])     

    const [itemName, setItemName] = useState(purchaseInfo && purchaseInfo.itemName)
    const [productKey, setProductKey] = useState(purchaseInfo && purchaseInfo.productKey)
    const [quantity, setQuantity] = useState(purchaseInfo && purchaseInfo.quantity)
    const [unitCost, setUnitCost] = useState(purchaseInfo && purchaseInfo.unitCost)
    const [unitPrice, setUnitPrice] = useState(purchaseInfo && purchaseInfo.unitPrice)
    console.log(itemName)

    const formSubmitHandler = (e) => {
        const purchaseData = {
            itemName,
            productKey,
            quantity,
            unitCost,
            unitPrice
        }
        e.preventDefault();
        dispatch(updatePurchase(id, purchaseData));
    }

    return (
        <div>
        <Form className = "w-50 mx-auto" onSubmit = {formSubmitHandler}>
            <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control                    
                type="text" 
                size = "sm"        
                value = {itemName}
                onChange = {(e) => setItemName(e.target.value)} />                    
            </Form.Group>

             
            <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Product Key</Form.Label>
                <Form.Control                    
                type="text" 
                size = "sm"                
                value = {productKey}
                onChange = {(e) => setProductKey(e.target.value)} />                    
            </Form.Group>

            <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control                   
                type="number" 
                size = "sm"             
                value = {quantity}
                onChange = {(e) => setQuantity(e.target.value)} />                    
            </Form.Group>

              <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Unit Cost</Form.Label>
                <Form.Control                   
                type="number" 
                size = "sm"             
                value = {unitCost}
                onChange = {(e) => setUnitCost(e.target.value)} />                    
            </Form.Group>

             <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Unit Price</Form.Label>
                <Form.Control                   
                type="number" 
                size = "sm"               
                value = {unitPrice}
                onChange = {(e) => setUnitPrice(e.target.value)} />                    
            </Form.Group>             

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default EditPurchase
