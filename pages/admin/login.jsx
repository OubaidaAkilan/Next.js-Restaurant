import axiosInstance from '@/config/AxiosInstance';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState(null);

  const [password, setPassword] = useState(null);

  const [error, setError] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await axios.post(`/api/login`, {
        username,
        password,
      });
      router.push('/admin');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <p>
          Username : admin
          <br />
          Password : 123456
        </p>
        <input
          placeholder='username'
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
