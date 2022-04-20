import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Shop.css'

const Shop = (props) => {
    const { name, author, price, imageURL, _id } = props.book;
    const navigate = useNavigate()
    return (
        <div className='shop'>
            <div className="card">
                <img src={imageURL} alt="Book" />
                <h3>{name}</h3>
                <h4><span>by</span> <a href='https://www.rokomari.com/book/author/47902/arif-azad'>{author}</a></h4>
                <div className="btn">
                    <p>tk. {price}</p>
                    <button onClick={() => navigate(`/checkout/${_id}`)}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;