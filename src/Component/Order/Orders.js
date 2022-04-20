import axios from 'axios';
import './Orders.css'
import React, { useContext, useEffect, useState } from 'react';
import { userContex } from './../../App';
import deleteIcon from '../../../src/product-images/Group 33150.png'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [logedInUser, setLogedInUser] = useContext(userContex);
    useEffect(() => {
        axios.get('https://stark-citadel-94918.herokuapp.com/orders?email=' + logedInUser.email)
            .then(res => {
                setOrders(res.data)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [logedInUser.email])

    const deleteItem = (id, e) => {
        console.log('this is', e.target.parentElement);
        console.log(id);
        axios.delete(`https://stark-citadel-94918.herokuapp.com/deleteOrder/${id}`)
            .then(res => {
                if (res) {
                    e.target.parentElement.style.display = 'none'
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='tableDiv'>
            <h3>{logedInUser.name}'s orders</h3>
            <table id="customers">
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Order time</th>
                    <th>Action</th>
                </tr>
                {
                    orders.map(order => <tr>
                        <td>{order.orderDetail.name}</td>
                        <td>{1}</td>
                        <td>TK.{order.orderDetail.price}</td>
                        <td>{order.orderTime}</td>
                        <img onClick={(e) => deleteItem(order._id, e)} src={deleteIcon} alt="" />

                    </tr>)
                }
            </table>
        </div>
    );
};

export default Orders;