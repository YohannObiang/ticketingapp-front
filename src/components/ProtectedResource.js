import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard'

const ProtectedResource = ({logoff,URL, UserTickets, Ctitket, IdUserLoggedIn}) => {
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

        const Id  = response.data.message;
        console.log(response.data.message);
        
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
    URL={URL}
    UserTickets={UserTickets}
    Ctitket={Ctitket}
    IdUserLoggedIn={IdUserLoggedIn}

    />
    </div>
  );
};

export default ProtectedResource;
