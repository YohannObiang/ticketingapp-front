import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import QRCode from 'qrcode.react';
import axios from 'axios';
import "../App.css"

const EventTicket = ({ URL, email_acheteur, choosenEvent }) => {
  const idevent = choosenEvent?.id_evenement;
  const [evenement, setEvent] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/evenement/${idevent}`);
      setEvent(response.data[0]);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'événement :", error);
    }
  };

  useEffect(() => {
    if (idevent) {
      getData();
    }
  }, [idevent]);

  if (!evenement) {
    return <p>Chargement du billet...</p>;
  }

  return (
    <div id="section-to-download" style={{ padding: '10px' }}>
      <div
        style={{
          minWidth: '80%',
          maxWidth: '400px',
          margin: '10px auto',
          padding: '8px',
          border: '2px dashed #ccc',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#1a202c',
            // marginBottom: '10px',
            textTransform: 'capitalize',
          }}
        >
          {choosenEvent.categoriebillet}
        </Typography>



        <div
          style={{
            margin: '0px auto',
            border: '1px dashed #ccc',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            display: 'inline-block',
          }}
        >
          <QRCode value={String(choosenEvent.id_billetvendu)} className='qrsize' />
        </div>

        <Typography
          variant="body2"
          style={{
            fontSize: '13px',
            color: '#718096',
            marginTop: '15px',
            lineHeight: '1.5',
          }}
        >
          Veuillez présenter ce billet à l'événement pour entrer. <br />
          Merci d'avoir choisi notre service.
        </Typography>

        {/* Indicateur de validité avec couleurs dynamiques */}
        <div
          style={{
            marginTop: '15px',
            padding: '10px',
            fontSize: '14px',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '5px',
            backgroundColor: choosenEvent.validity === 0 ? 'green' : 'red',
          }}
        >
          {choosenEvent.validity === 0 ? 'Valide' : 'Invalide'}
        </div>

        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            fontSize: '12px',
            color: '#a0aec0',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          © {new Date().getFullYear()} Obisto. Tous droits réservés.
        </div>
      </div>
    </div>
  );
};

export default EventTicket;
