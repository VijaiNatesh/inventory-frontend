import React, {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPurchaseDetail, updatePurchase} from '../../redux/actions/purchase/purchaseAction'
import { Form, Button} from 'react-bootstrap'

function EditPurchase() {
    const {id} = useParams();

    // Getting the purchase details from the store
    const purchaseList = useSelector(state => state.purchase)
    const {purchases} = purchaseList;
    console.log(purchases)   

    const [itemName, setItemName] = useState(purchases && purchases.itemName)
    const [productKey, setProductKey] = useState(purchases && purchases.productKey)
    const [quantity, setQuantity] = useState(purchases && purchases.quantity)
    const [unitCost, setUnitCost] = useState(purchases && purchases.unitCost)
    const [unitPrice, setUnitPrice] = useState(purchases && purchases.unitPrice)

   
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPurchaseDetail(id))
    },[dispatch, id])     

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
                placeholder="Enter the Item Name"
                value = {itemName}
                onChange = {(e) => setItemName(e.target.value)} />                    
            </Form.Group>

             
            <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Product Key</Form.Label>
                <Form.Control                    
                type="text" 
                size = "sm" 
                placeholder="Enter the Product Key"
                value = {productKey}
                onChange = {(e) => setProductKey(e.target.value)} />                    
            </Form.Group>

            <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control                   
                type="number" 
                size = "sm" 
                placeholder="Quantity"
                value = {quantity}
                onChange = {(e) => setQuantity(e.target.value)} />                    
            </Form.Group>

              <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Unit Cost</Form.Label>
                <Form.Control                   
                type="number" 
                size = "sm" 
                placeholder="Unit Cost"
                value = {unitCost}
                onChange = {(e) => setUnitCost(e.target.value)} />                    
            </Form.Group>

             <Form.Group className="mb-2 " controlId="formBasicEmail">
                <Form.Label>Unit Price</Form.Label>
                <Form.Control                   
                type="number" 
                size = "sm" 
                placeholder="Unit Price"
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
