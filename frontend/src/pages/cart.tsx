import { useEffect, useState } from 'react';
import axios from '../api/axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('/cart').then((res) => setCartItems(res.data));
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item: any) => (
        <div key={item._id}>
          <p>{item.product.name}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
