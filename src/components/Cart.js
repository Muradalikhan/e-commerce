

import React from 'react';
import AddCard from './addCard';
import './style/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  return (
    <div className='Cart py-4'>
      
      <FontAwesomeIcon icon={faShoppingCart} color='tomato' size='2x' />
      <AddCard />

    </div>
  );
}

export default Cart;
