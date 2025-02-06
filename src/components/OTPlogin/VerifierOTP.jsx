import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableauDeBord from './TableauDeBord';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './VerifierOTP.module.css';
import { Button } from '@mui/material';


function VerifierOTP({ email, setIsSent, evenements, categoriesbillet,setChoosenEvent, choosenEvent, URL }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(55);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const getToken = () => {
      const tokenData = localStorage.getItem('authToken');
      if (!tokenData) {
        return null;
      }
      const { token, expiry } = JSON.parse(tokenData);
      const now = new Date();
      if (now.getTime() > expiry) {
        localStorage.removeItem('authToken');
        return null;
      }
      return token;
    };

    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://ebillet.onrender.com/verifier-otp', { email, otp });
      const setToken = (token, expiresInMinutes) => {
        const now = new Date();
        const expiry = now.getTime() + expiresInMinutes * 60 * 1000;
        const tokenData = { token, expiry };
        localStorage.setItem('authToken', JSON.stringify(tokenData));
        localStorage.setItem('email', email);
      };
      setToken(response.data.token, 30);
      setIsLoggedIn(true);
    } catch (error) {
      alert(error.response?.data?.message || 'Erreur lors de la vérification de l\'OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
     
      setCountdown(55);
      setCanResend(false);
      setIsSent(false);
    } catch (error) {
      alert(error.response?.data?.message || 'Erreur lors de la demande d\'un nouvel OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <ClipLoader color="#6F3193" size={50} />
        </div>
      ) : isLoggedIn ? (
        <TableauDeBord
        categoriesbillet={categoriesbillet}
        evenements={evenements}
        setChoosenEvent={setChoosenEvent}
        URL={URL}
        choosenEvent={choosenEvent}
        setIsLoggedIn={setIsLoggedIn} setIsSent={setIsSent} email={email} />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Vérifier OTP</h2>
          <p>Veuillez entrer le code OTP que vous avez reçu par e-mail pour accéder à vos billets achetés.</p>
          <input
            type="text"
            placeholder="Code OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Vérifier OTP
          </button>
          <br /><br />
          <div className={styles.resendSection}>
            {/* {canResend ? (
              <button  onClick={handleResend} className={styles.resendButton}>
                Renvoyer le code OTP
              </button>
            ) : (
              <p>Vous pouvez demander un nouveau code OTP dans {countdown} secondes.</p>
            )} */}
            <Button  onClick={handleResend} className={styles.resendButton}>
                Renvoyer le code OTP
              </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default VerifierOTP;
