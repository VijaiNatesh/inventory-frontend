import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBill } from '../../redux/actions/bill/billAction'
import { fetchUserBill } from '../../redux/actions/user/userAction';


function Bill() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserBill())
    }, [dispatch])

    const userProfile = useSelector(state => state.user)
    const { userbill } = userProfile
    console.log(userbill)



    var sum = userbill && userbill.map(item => item.total).reduce((a, b) => a + b, 0)

    const handlerBillDelete = (id) => {
        dispatch(deleteBill(id));
    }
    
    return (
        <div>
            {userbill ? (
                <Table className="w-75 mx-auto pt-2" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Product Key</th>
                            <th>Quantity Purchased</th>
                            <th>Unit Price</th>
                            <th>Total</th>                          
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userbill.map((item) => {
                            return (
                                <tr>
                                    <td>{item.billItemName}</td>
                                    <td>{item.billProductKey}</td>
                                    <td>{item.billQuantity}</td>
                                    <td>{item.billUnitPrice}</td>
                                    <td>{item.total}</td>                                    
                                    <td><button onClick={() => handlerBillDelete(item.billId)} style={{ color: 'red', cursor: 'progress' }}>Delete</button></td>
                                </tr>
                            )
                        })}
                        <tr >
                            <td colSpan = "3">Total</td>
                            <td colSpan = "3">{sum}</td>
                        </tr>
                    </tbody>
                </Table>
            ) : (
                    "No Items Purchased"
                )}

        </div>


    )
}


export default Bill
