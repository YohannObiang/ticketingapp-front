import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../../components/AddressForm';
import PaymentForm from '../../components/PaymentForm';
import Review from '../../components/Review';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import CircularProgress from '@mui/material/CircularProgress';
import html2canvas from 'html2canvas';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { saveAs } from 'file-saver';
import EventTicket from '../../components/EventTicket'
import AirtMoneyPopup from '../../components/AirtelMoneyPopup'


const steps = ['Type de billet', 'Détails acheteur', 'Paiement'];

const theme = createTheme({
  palette: {
    primary: {

      main: '#6d1493',

    },
    secondary: {

      main: '#8AE0AA',
      
    },
  },
});


const defaultTheme = createTheme();

export default function Checkout({choosenEvent, URL, IdUserLoggedIn}) {
  const [categoriebillet, setcategoriebillet] = useState([]);
  const [prixcategoriebillet, setprixcategoriebillet] = useState([]);
  const [value, setValue] = React.useState(0);
  const [nom_acheteur, setnom_acheteur] = React.useState('');
  const [prenom_acheteur, setprenom_acheteur] = React.useState('');
  const [email_acheteur, setemail_acheteur] = React.useState('');
  const [whatsapp_acheteur, setwhatsapp_acheteur] = React.useState('');
  const [IdBillet, setIdBillet] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  const lettre = alphabet[randomIndex]

  const billet ={
    id_evenement: choosenEvent.id_evenement,
    id_categoriebillet: parseInt(value),
    categoriebillet: categoriebillet,
    prix: parseInt(prixcategoriebillet),
    nom_acheteur:nom_acheteur,
    prenom_acheteur:prenom_acheteur,
    email_acheteur:email_acheteur,
    whatsapp_acheteur:parseInt(whatsapp_acheteur),
  }



  const updatesold = async () => {
    var response = await axios.get(`${URL}/organisateur/${choosenEvent.id_organisateur}`);
    var total = {solde: parseInt(prixcategoriebillet) + parseInt(response.data[0].solde)} 
    axios.put(`${URL}/update/solde/${choosenEvent.id_organisateur}`, total)
  };

  const post = async () =>{
  setIsLoading(true)
  try{
    axios.post(`${URL}/ajout/billetvendu`, billet).then(res => {
      setIdBillet(res.data.id_billetvendu)
      updatesold();
    })
    setActiveStep(activeStep + 1);
  }
  catch{

  }
  finally{
    setTimeout(() => {

        setIsLoading(false)

        // handleDownloadClick() 

    }, 1500); // Affiche "Hello, world!" après 2 secondes

    
  }

  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm 
        choosenEvent={choosenEvent}
        URL = {URL}
        value = {value}
        setValue = {setValue}
        setcategoriebillet = {setcategoriebillet}
        setprixcategoriebillet = {setprixcategoriebillet}
        />;
      case 1:
        return <PaymentForm
        billet={billet}
        whatsapp_acheteur = {whatsapp_acheteur}
        setwhatsapp_acheteur = {setwhatsapp_acheteur}
        email_acheteur = {email_acheteur}
        setemail_acheteur = {setemail_acheteur}
        prenom_acheteur = {prenom_acheteur}
        setprenom_acheteur = {setprenom_acheteur}
        nom_acheteur = {nom_acheteur}
        setnom_acheteur = {setnom_acheteur}

        />;
      case 2:
        return <Review 
        billet={billet}
        whatsapp_acheteur = {whatsapp_acheteur}
        email_acheteur = {email_acheteur}
        prenom_acheteur = {prenom_acheteur}
        nom_acheteur = {nom_acheteur}
        value = {value}
        categoriebillet = {categoriebillet}
        prixcategoriebillet = {prixcategoriebillet}
        evenement = {choosenEvent.evenement}
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const handleDownloadClick = () => {
    // Sélectionne la section spécifique à capturer
    const section = document.getElementById('section-to-download');

    // Capture la section et convertit-la en une image
    html2canvas(section).then(canvas => {
      // Convertit le canvas en un objet Blob
      canvas.toBlob(blob => {
        // Télécharge le fichier en utilisant FileSaver.js
        saveAs(blob, 'section.png');
      });
    });  
  };

//   function kkk(){
//   axios.post(`${URL}/ajout/billetvendu`, billet).then(res => {
//     setIdBillet(res.data.id_billetvendu)
//     setActiveStep(activeStep + 1)


// })
// axios.get()
//   }
  


const now = new Date()
 
  return (
    <ThemeProvider theme={theme}>
      <div className="navbarBackground"></div>

      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >

      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Validation
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                 <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div>
              {isLoading ? (
                <CircularProgress/>
              ) : (
                <div > 
                
                  
                <EventTicket URL={URL} email_acheteur={email_acheteur} choosenEvent={choosenEvent} IdBillet={IdBillet} value={value} />
                <Button
                    variant="contained"
                    onClick={handleDownloadClick}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Télécharger
                  </Button>

              </div>
              )}
            </div>


          
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, choosenEvent, URL)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Retour
                  </Button>
                )}

              {activeStep === steps.length - 1 ? 
                  <div
                  variant="contained"
                  style={{ marginTop:'24px' }}
                  color='secondary'
                >
                  
                  {/* <PayPalScriptProvider
                    options={{ "client-id": 'test' }}
                  >
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: String(Math.floor(prixcategoriebillet*0.0016)),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        const details = await actions.order.capture();
                        const name = details.payer.name.given_name;
                        post();
                        
                      }}
                    />
                  </PayPalScriptProvider> */}
                  <AirtMoneyPopup 
                    idbillet={choosenEvent.id_evenement+String(value)}
                    prix={parseInt(prixcategoriebillet)}
                  />

                  </div> : <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Payer' : 'Suivant'}
                </Button>}
              </Box>

            </React.Fragment>
          )}
        </Paper>
      </Container>



    </ThemeProvider>
  );
}
