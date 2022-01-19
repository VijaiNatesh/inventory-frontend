import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/user/userAction';
import {useHistory} from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch();  
   const history = useHistory();

    const userLoginDetails = useSelector(state => state.user);
    const { loading, usersInfo, error } = userLoginDetails;
    console.log(loading, usersInfo, error);   


    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password))
        setEmail(" ")
        setPassword(" ")    
       history.push("/purchase")

    }


    return (
        <div>
            
            <Form className="w-50 mx-auto pt-4" onSubmit={formSubmitHandler}>

                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="mail"
                        size="sm"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
