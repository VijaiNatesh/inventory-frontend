import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/user/userAction';


function Navigation() {
    const dispatch = useDispatch();

   const usersInfo = localStorage.getItem('userAuthData')

    const logoutUserHandler = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Inventory</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        { usersInfo ?
                            <>
                                <Nav.Link href="/additem">Add Purchase </Nav.Link>
                                <Nav.Link href="/purchase">Purchase</Nav.Link>
                                <Nav.Link href="/billing">Bill Items</Nav.Link>
                                <Nav.Link href="/bill">Bill</Nav.Link>
                                <Nav.Link href="/:id">Edit Purchase</Nav.Link>                               
                                <Nav.Link href="/login" onClick={() => logoutUserHandler()}>
                                    Logout</Nav.Link>
                            </>
                        
                        :
                            <>
                                <Nav.Link href="/userregister">Register</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                        }


                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
