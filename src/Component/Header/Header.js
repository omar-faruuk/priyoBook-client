import React, { useContext } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { userContex } from './../../App';

const Header = () => {
    const [logedInUser, setLogedInUser] = useContext(userContex);
    return (
        <div className='header'>
            <div className="logo">
                <h4>PriyoBook</h4>
            </div>
            <nav>
             <ul>
                <li><NavLink className='navlink' to="/Home">Home</NavLink> </li>
                <li><NavLink className='navlink' to="/order">Order</NavLink></li>
                <li><NavLink className='navlink' to="/admin">Admin</NavLink></li>
                <li><NavLink className='navlink' to="/login">Login</NavLink></li>
                <li><NavLink className='navlink' to="">{logedInUser.name}</NavLink></li>
             </ul>
            </nav>
        </div>
    );
};

export default Header;