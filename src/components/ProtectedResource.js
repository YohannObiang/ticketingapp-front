import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedResource = ({logoff}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/protected', {
          headers: {
            Authorization: token
          }
        });

        const { message } = response.data;
        console.log(message);
        setMessage(message);
      } catch (error) {
        // Gérez les erreurs d'accès à la ressource protégée ici
        console.error(error.response.data.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
      <p>{message}</p>
      <button onClick={logoff}> 
        Logoff
      </button>
    </div>
  );
};

export default ProtectedResource;
