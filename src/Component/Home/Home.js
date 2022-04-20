import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import spinner from '../../product-images/ArtisticShoddyKudu-size_restricted.gif';
import './Home.css'

const Home = () => {
  const [books, setBooks] = useState([]);
  console.log(books.length);
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
  return (
    <div className='home'>

      <div className="shop">
        {
          books ? books.map(book => <Shop book={book}></Shop>) : <img src={spinner} alt="" />
        }
      </div>
    </div>
  );
};

export default Home; <h3>this is home</h3>