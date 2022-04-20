import axios from 'axios';
import React, { useState } from 'react';
import './AddBook.css';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [isChange, setIsChange] = useState(false);
    const onSubmit = data => {
        console.log(data)
        const bookData = {
            name: data.name,
            author: data.AuthorName,
            price: data.price,
            imageURL: imageURL
        }
        axios.post('https://stark-citadel-94918.herokuapp.com/addBook', bookData)
            .then(res => console.log('sarver response', res))
            .catch(err => console.log(err))
        console.log(bookData);
        reset();

    };

    const handleImageUpload = event => {
        setImageURL(null)
        setIsChange(true)
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2b679e137adcad8c8189f6376e7828ca');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res.data.data.display_url);
                setImageURL(res.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='add-book'>
            <h3>add book</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter name' {...register("name")} />
                <input placeholder='Author' {...register("AuthorName")} />
                <br />
                <input placeholder='Price' {...register("price")} />
                <input {...register("exampleRequired")} type="file" onChange={handleImageUpload} />
                {!imageURL && isChange && <p className='loading'>Image uploading...</p>}
                <br />
                <input type="submit" />




            </form>
        </div>
    );
};

export default AddBook;