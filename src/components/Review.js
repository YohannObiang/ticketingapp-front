import * as React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Grid, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonIcon from "@mui/icons-material/Person";

export default function Review({
  evenement,
  categoriebillet,
  prixcategoriebillet,
  nom_acheteur,
  prenom_acheteur,
  email_acheteur,
  whatsapp_acheteur,
}) {
  return (
      <CardContent>
        {/* Titre */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Vérification de la commande
        </Typography>
        
        <Divider sx={{ my: 2 }} />

        {/* Détails de l'événement */}
        <List disablePadding>
          <ListItem>
            <EventIcon color="primary" sx={{ mr: 1 }} />
            <ListItemText primary="Événement" secondary={evenement} />
          </ListItem>
          <ListItem>
            <LocalOfferIcon color="primary" sx={{ mr: 1 }} />
            <ListItemText primary="Catégorie" secondary={categoriebillet} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {prixcategoriebillet} FCFA
            </Typography>
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Informations de l'acheteur */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Canal de reception
        </Typography>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <EmailIcon color="primary" sx={{ mr: 1 }} />
            <Typography display="inline" style={{color:'black'}}>{email_acheteur}</Typography>
          </Grid>

        </Grid>
      </CardContent>
  );
}
