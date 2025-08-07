import axios from './axios';

export const getCart = () => axios.get('/cart');

export const addToCart = (productId: string, quantity: number) =>
  axios.post('/cart/add', { productId, quantity });

export const removeFromCart = (productId: string) =>
  axios.delete(`/cart/remove/${productId}`);

