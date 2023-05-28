import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Pop Show 3',
    desc: 'VIP',
    price: '30 000 fcfa',
  },
  
  
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review({
  billet,
  whatsapp_acheteur,
  email_acheteur,
  prenom_acheteur,
  nom_acheteur,
  value,
  categoriebillet,
  prixcategoriebillet,
  evenement
}) {


  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vérification de la commande
      </Typography>
      <List disablePadding>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary={evenement} secondary={categoriebillet} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{prixcategoriebillet} fcfa</Typography>
          </ListItem>

        
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Acheteur
          </Typography>
          <Typography gutterBottom>{nom_acheteur}</Typography>
          <Typography gutterBottom>{prenom_acheteur}</Typography>
        </Grid>
        <br/><br/>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Canaux de réception
          </Typography>
          <Typography gutterBottom>{email_acheteur}</Typography>
          <Typography gutterBottom>{whatsapp_acheteur}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
