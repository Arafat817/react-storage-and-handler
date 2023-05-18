import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const{name,price,id}= props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    // const addToCartParameter = () => addToCart(id);
    const removeFromCart = (id)=> {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for : ${price} </p>
            <p>It has id : {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart </button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
            {/* <button onClick={() => addToCart(id)}>Purchase </button> */}
        </div>
    );
};

export default Cosmetic;