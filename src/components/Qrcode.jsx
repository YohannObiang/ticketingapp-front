import React, { useState, Component } from 'react'
import QrReader from 'react-qr-scanner'
import QrScanner from 'react-qr-scanner';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Button from '@mui/material/Button';



function isBackCameraAvailable() {
    if ('mediaDevices' in navigator && 'enumerateDevices' in navigator.mediaDevices) {
      return navigator.mediaDevices.enumerateDevices()
        .then(devices => devices.some(device => device.kind === 'videoinput' && device.label.toLowerCase().includes('back')));
    }
    return Promise.resolve(false);
  }
  
  isBackCameraAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        // L'appareil photo arrière est disponible
      } else {
        // L'appareil photo arrière n'est pas disponible
      }
    })
    .catch(error => {
      console.error('Erreur lors de la vérification de l\'appareil photo :', error);
    });
  


  
  function handleError(error) {
    console.error(error);
  }
  
  function Qrcode({URL, events}) {

    const [scannedData, setScannedData] = useState(false);   
    function getStepContent(step) {
      switch (step) {
        case 0:
          return  <div>
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
              Billet invalide!</Alert>
          </div>;
        case 1:
          return  <div>
            <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
              Billet déjà utilisé!</Alert>
          </div>;
        case 2:
          return <div>
          <Alert severity="success">
          <AlertTitle>Info</AlertTitle>
            Billet valide!</Alert></div>;
            case 4:
              return <div>
              </div>;
        default:
          throw new Error('Unknown step');
      }
    }
  
    const [ResponseTicket, setResponseTicket] = React.useState(4);
   
    function handleScan(result) {
      if (result) {
        console.log(result.text);
        setScannedData(true);
        const getCategoriesbillet = async () => {
          var response = await axios.get(`${URL}/billetvendu/${result.text}`);
          console.log(response.data);
          console.log(events);


          for (let index = 0; index < events.length+1; index++) {
            if (index < events.length+1 && response.data[0].id_evenement === events[index].id_evenement) {
              if (response.data[0].validity === 0){
                axios.put(`${URL}/update/billetvendu/${result.text}`).then(res => {

                              })
                setResponseTicket(2);
                const audio = new Audio('sons/used.mp3');
                audio.play();

              break;
              }
              else{
                setResponseTicket(1);
                
                const audio = new Audio('sons/yes.mp3');
                audio.play();
                break;
              }

             }
            else{
              setResponseTicket(0);
              const audio = new Audio('sons/not.mp3');
              audio.play();
              break;
            }
          }
          
        };
        getCategoriesbillet();
           }
    }
    const constraints = {
        video: { facingMode: 'environment' }
      };
    
    return (
      
      <div>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
                  <Title>Scanner de billet</Title>

        {scannedData ? (
  <div>
      {getStepContent(ResponseTicket)}
      {/* Affichez ici le contenu lié au code QR */}
      <Button 
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }} onClick={()=>{setScannedData(false); setResponseTicket(4)}}>
      Continuer
      </Button>
  </div>
  ) : (
  <div>


  <QrScanner
  constraints={constraints}
  delay={300}
  onError={handleError}
  onScan={handleScan}
  style={{ width: '90%' }}
  />
  </div>
  )}
          </Paper>
        </Grid>
     </div> 
    );
  }
export default Qrcode;