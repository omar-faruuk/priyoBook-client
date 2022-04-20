import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'
import { userContex } from './../../App';
import moment from 'moment';

const Checkout = () => {
    const _id = useParams()
    const [book, setBook] = useState({});
    const { name, price } = book;
    const [logedInUser, setLogedInUser] = useContext(userContex);
    const orderDetails = { ...logedInUser, orderDetail: book, orderTime: moment(new Date()).format("MMMM Do YYYY") };
    console.log(orderDetails);

    useEffect(() => {
        axios.get(`https://stark-citadel-94918.herokuapp.com/book/${_id._id}`)
            .then(res => {
                console.log(res.data);
                setBook(res.data)
            })
            .catch(err => console.log(err))
    }, [_id])

    const handleCheckOut = () => {
        axios.post('https://stark-citadel-94918.herokuapp.com/addOrder', orderDetails)
            .then(res => {
                console.log(res);
                alert('Order submited! please check your order')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <table id="customers">
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>1</td>
                    <td>TK.{price}</td>
                </tr>
                <tr></tr>
            </table>
            <div className="checkout-btn">
                <button onClick={() => handleCheckOut()} >Checkout</button>
            </div>

        </div>
    );
};

export default Checkout;