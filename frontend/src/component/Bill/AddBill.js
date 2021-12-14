import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { createBill } from '../../redux/actions/bill/billAction'





function AddBill() {
    const [billNo, setBillNo] = useState("");
    const [productKey, setProductKey] = useState("")
    const [quantity, setQuantity] = useState(0)

    const dispatch = useDispatch();

    
    const userProfile = useSelector(state => state.user)
    const {usersInfo} = userProfile
    console.log(usersInfo._id)

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            billNo, 
            productKey, 
            quantity, 
            createdBy: usersInfo && usersInfo._id }       
        dispatch(createBill(data))        
        setQuantity(0)  
        setProductKey("")
    }
    

    return (
        <div>
            <Form className="w-50 mx-auto" onSubmit={formSubmitHandler} >

             <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Bill Number</Form.Label>
                    <Form.Control
                        type="number"
                        size="sm"
                        placeholder="Bill Number"
                        value={billNo}
                        onChange={(e) => setBillNo(e.target.value)} />
                </Form.Group>

            <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Product Key</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        placeholder="Product Key"
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>                
            </Form>
                     
        </div>
    )
}

export default AddBill
