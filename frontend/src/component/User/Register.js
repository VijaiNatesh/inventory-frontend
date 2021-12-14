import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/actions/user/userAction';

function Register({history}) {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch()

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(userRegister(name, email, password))       
        setName(" ")
        setEmail(" ")
        setPassword(" ")
    }

    return (
        <div>
             <Form className = "w-50 mx-auto" onSubmit = {formSubmitHandler}>
                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control                    
                    type="text" 
                    size = "sm" 
                    placeholder="Enter your Name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)} />                    
                </Form.Group>

                 <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control                    
                    type="mail" 
                    size = "sm" 
                    placeholder="Enter your Email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)} />                    
                </Form.Group>

                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control                    
                    type="text" 
                    size = "sm" 
                    placeholder="Enter your password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} />                    
                </Form.Group>              
                        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Register
