import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createItem } from '../../redux/actions/purchase/purchaseAction';
import { useDispatch, useSelector } from 'react-redux'



function AddPurchase() {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    const [unitCost, setUnitCost] = useState(0);
    const [productKey, setProductKey] = useState("");
    // const[createdBy, setCreatedBy] = useState(" ")
    const dispatch = useDispatch();

    //const purchasedItems = useSelector((state) => state.purchasedItems);
    const userDetails = useSelector(state => state.user)
    const { usersInfo } = userDetails
    console.log(usersInfo._id)
    

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const data = {itemName,
            productKey,
             quantity,
             unitPrice,
            unitCost,
            createdBy: usersInfo && usersInfo._id} 
        dispatch(createItem(data))
        setItemName("");
        setQuantity(0);
        setUnitPrice(0);
        setUnitCost(0);
        setProductKey("");        
    }
  
    return (
        <div>
            <Form className="w-50 mx-auto" onSubmit={formSubmitHandler}>
                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        placeholder="Enter the Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Product Key</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        placeholder="Enter the Product Key"
                        value={productKey}
                        onChange={(e) => setProductKey(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        size="sm"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Unit Cost</Form.Label>
                    <Form.Control
                        type="number"
                        size="sm"
                        placeholder="Unit Cost"
                        value={unitCost}
                        onChange={(e) => setUnitCost(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control
                        type="number"
                        size="sm"
                        placeholder="Unit Price"
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(e.target.value)} />
                </Form.Group>

                 {/* <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>createdBy</Form.Label>
                    <Form.Control
                        type="email"
                        size="sm"
                        placeholder="Mail"
                        value={createdBy}
                        onChange={(e) => setCreatedBy(usersInfo && usersInfo.email)} />
                </Form.Group> */}


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          

        </div >

    )
}

export default AddPurchase
