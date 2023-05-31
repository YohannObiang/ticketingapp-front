import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard'

const ProtectedResource = ({logoff,URL}) => {
  const [Id, setId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('helloooooo');
        const token = localStorage.getItem('token');
        const response = await axios.get(`${URL}/api/protected`, {
          headers: {
            Authorization: token
          }
        });

        const { Id } = response.data;
        console.log(Id);
        setId(Id);
        var response1 = await axios.get(`${URL}/evenements/organisateur/${Id}`);
        console.log(response1.data);
      } catch (error) {
        // Gérez les erreurs d'accès à la ressource protégée ici
        // console.error(error.response.data.Id);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Dashboard
    logoff={logoff}
    />
    </div>
  );
};

export default ProtectedResource;
