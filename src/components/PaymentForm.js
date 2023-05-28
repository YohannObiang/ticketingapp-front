import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';


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

  console.log(billet);

  const handleChangewhatsapp_acheteur = (event) => {
    setwhatsapp_acheteur(event.target.value);
  }
  const handleChangeprenom_acheteur = (event) => {
    setprenom_acheteur(event.target.value);
  }
  const handleChangenom_acheteur = (event) => {
    setnom_acheteur(event.target.value);
  }
  const handleChangeemail_acheteur = (event) => {
    setemail_acheteur(event.target.value);
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Détails acheteur
      </Typography>
      <FormLabel id="demo-controlled-radio-buttons-group">veuillez remplir chacun des champs ci dessous.</FormLabel>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            id="lastName"
            label="Nom"
            name="lastName"
            autoComplete="family-name"
            value={nom_acheteur}
            onChange={handleChangenom_acheteur}
          />
        
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            autoComplete="given-name"
            name="firstName"
            fullWidth
            id="firstName"
            label="Prénom"
            autoFocus
            value={prenom_acheteur}
            onChange={handleChangeprenom_acheteur}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            required
            fullWidth
            id="email"
            label="Adresse email"
            name="email"
            autoComplete="email"
            value={email_acheteur}
            onChange={handleChangeemail_acheteur}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="phone"
            label="Whatsapp"
            helperText=""
            fullWidth
            autoComplete="phone"
            value={whatsapp_acheteur}
            onChange={handleChangewhatsapp_acheteur}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
