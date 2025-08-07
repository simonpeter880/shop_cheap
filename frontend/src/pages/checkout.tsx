import axios from '../api/axios';

const Checkout = () => {
  const handleCheckout = async () => {
    try {
      const res = await axios.post('/checkout');
      alert('Checkout complete!');
      console.log(res.data);
    } catch (err) {
      alert('Checkout failed!');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
