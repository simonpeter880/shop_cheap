import { useState } from 'react';
import axios from '../api/axios';
import { loginUser } from '../api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('/auth/login', { email, password });
      alert('Login successful!');
      console.log(res.data);
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
