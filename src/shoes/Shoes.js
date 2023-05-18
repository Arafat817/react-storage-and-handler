import React from 'react';
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 11;
    const second =12;
    const result = multiply(first, second);
    const sum = add(first,second);
    return (
        <div>
            <h1>This is shoes compo</h1>
            <p>Multiply result : {result} and Total sum : {sum}</p>
        </div>
    );
};

export default Shoes;