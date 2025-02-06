// DemanderOTP.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VerifierOTP from './VerifierOTP';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './DemanderOTP.module.css';

function DemanderOTP({array, categoriesbillet,setChoosenEvent, choosenEvent, URL, evenements}) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('https://ebillet.onrender.com/demander-otp', { email });
      const expirationTime = new Date().getTime() + 60 * 1000; // 60 secondes
      localStorage.setItem('isSent', JSON.stringify({ value: true, expiration: expirationTime }));
      setTimeout(() => {
        setIsSent(true);
        setIsLoading(false);
      }, 2000); // Délai de 2 secondes
    } catch (error) {
      setIsLoading(false);
      alert(error.response?.data?.message || 'Erreur lors de la demande d\'OTP');
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('isSent');
    if (storedData) {
        
        setIsSent(true);

    }
  }, []);

//   useEffect(() => {
//     if (isSent) {
//       const timer = setTimeout(() => {
//         localStorage.removeItem('isSent');
//         setIsSent(false);
//       }, 60 * 1000); // 60 secondes

//       return () => clearTimeout(timer);
//     }
//   }, [isSent]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : isSent ? (
        <VerifierOTP
         email={email} setIsSent={setIsSent}
         categoriesbillet={categoriesbillet}
        setChoosenEvent={setChoosenEvent}
        URL={URL}
        evenements={evenements}
        choosenEvent={choosenEvent}
         />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Demander OTP</h2>
            <p>Pour accéder à vos billets achetés et livrés sur votre adresse e-mail, veuillez saisir celle-ci. Vous recevrez ensuite un code OTP unique pour vous connecter.</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Demander OTP
            </button>
          </form>
      )}
    </div>
  );
}

export default DemanderOTP;
