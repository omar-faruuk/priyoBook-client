import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../product-images/Group 33150.png';
import './ManageBook.css';

const ManageBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://stark-citadel-94918.herokuapp.com/books')
      .then(res => {
        console.log(res.data);
        setBooks(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const deleteItem = (id, e) => {
    console.log('this is', e.target.parentElement);
    console.log(id);
    axios.delete(`https://stark-citadel-94918.herokuapp.com/deleteItem/${id}`)
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
    <div className='manage-book'>
      <h3>manage Book</h3>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {
          books.map(book => <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>TK.{book.price}</td>
            <img onClick={(e) => deleteItem(book._id, e)} src={deleteIcon} alt="" />

          </tr>)
        }
      </table>
    </div>
  );
};

export default ManageBook;