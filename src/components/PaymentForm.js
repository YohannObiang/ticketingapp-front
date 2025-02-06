import * as React from 'react';
import { Typography, Grid, TextField, FormLabel, Paper, Box } from '@mui/material';

export default function PaymentForm({
  billet, 
  whatsapp_acheteur, 
  setwhatsapp_acheteur,
  email_acheteur,
  setemail_acheteur,
  prenom_acheteur,
  setprenom_acheteur,
  nom_acheteur,
  setnom_acheteur
}) {

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };



  return (
    <div >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}> 
      Entrez votre adresse e-mail
      </Typography>
      <FormLabel sx={{ color: 'text.secondary', marginBottom: 2, display: 'block' }}>
      Indiquez votre adresse e-mail afin de recevoir immédiatement votre billet électronique ainsi qu’un reçu de votre achat. 
      Assurez-vous de saisir une adresse valide pour éviter toute perte d’informations importantes liées à votre commande.
      </FormLabel>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            fullWidth
            label="Adresse email"
            autoComplete="email"
            value={email_acheteur}
            onChange={handleChange(setemail_acheteur)}
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            label="Numéro WhatsApp"
            autoComplete="tel"
            value={whatsapp_acheteur}
            onChange={handleChangeWhatsapp}
            variant="outlined"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </Grid> */}
      </Grid>
    </div>
  );
}
