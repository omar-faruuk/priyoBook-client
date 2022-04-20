import React from 'react';
import './Admin.css';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDiagramPredecessor, faFileEdit, faPlus } from '@fortawesome/free-solid-svg-icons';



const Admin = () => {
    return (
        <div className='admin'>
            <div className="admin-nav">
                <ul>
                    <li><NavLink className='nav-link' to="manage-book"><FontAwesomeIcon className='icon' icon={faDiagramPredecessor} />
                        Manage Book</NavLink> </li>
                    <li><NavLink className='nav-link' to="add-book"><FontAwesomeIcon className='icon' icon={faPlus} /> Add Book</NavLink></li>
                    <li><NavLink className='nav-link' to="edit-book"><FontAwesomeIcon className='icon' icon={faFileEdit} /> Edit Book</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Admin;