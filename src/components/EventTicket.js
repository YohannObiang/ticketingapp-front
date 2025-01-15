import React from 'react';
import { Typography } from '@mui/material';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';



const EventTicket = ({ URL, email_acheteur, choosenEvent, IdBillet, value }) => {
  const divRef = React.useRef(null);

  const handleSendEmail = async () => {
    const divElement = divRef.current;
    console.log(divElement)

    try {
      const canvas = await html2canvas(divElement);
      const imageData = canvas.toDataURL('image/png');
      fetch(`${URL}/send-email/${email_acheteur}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Email sent successfully!');
          // Faites quelque chose avec la réponse du serveur si nécessaire
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    } catch (error) {
      console.error('Error capturing div as image:', error);
    }
  };

      React.useEffect(() => {
    if (IdBillet !== null) {
      handleSendEmail()
      // handleDownloadClick() 
    }
  }, [IdBillet]
  );

  return (
    <div 
                ref={divRef}
                id="section-to-download"
                style={{
                  padding:'10px'
                }}
                >
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
      <React.Fragment>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#1a202c',
            marginBottom: '15px',
            textTransform: 'capitalize',
          }}
        >
          {choosenEvent.evenement}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontSize: '15px',
            color: '#718096',
            marginTop: '15px',
            lineHeight: '1.5',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>{choosenEvent.date}</span> <br />
          {choosenEvent.lieu}, {choosenEvent.ville}
        </Typography>

        <div
          style={{
            margin: '20px auto',
            border: '1px dashed #ccc',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            display: 'inline-block',
          }}
        >
          <QRCode value={String(IdBillet)} style={{ height: '180px', width: '180px' }} />
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
        <Typography
          variant="subtitle1"
          style={{
            fontSize: '14px',
            color: '#4a5568',
            marginBottom: '15px',
          }}
        >
          <br />
          <strong>
            {choosenEvent.id_evenement}-{value}-{IdBillet}
          </strong>
        </Typography>
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
      </React.Fragment>
    </div>
    </div>
  );
};

export default EventTicket;
