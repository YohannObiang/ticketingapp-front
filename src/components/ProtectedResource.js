import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard'

const ProtectedResource = ({logoff,URL}) => {
  const [events, setevents] = useState([]);
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
        var response1 = await axios.get(`${URL}/evenements/organisateur/${Id}`);
        setevents(response1.data);
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
    events={events}
    />
    </div>
  );
};

export default ProtectedResource;
