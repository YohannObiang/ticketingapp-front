import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"

export default function Popupamount({URL, Userlogged}) {
  const [open, setOpen] = React.useState(false);
  const [Montant, setMontant] = React.useState(0);


  const handleChangeMontant = (event) => {
    const numericValue = event.target.value.replace(/\D/g, ''); // Keep only numeric characters
    setMontant(numericValue);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const somme = Montant;
 const nouveau_solde = parseInt(Userlogged.solde)-somme

  const retrait = {
    id: 1, 
    somme: somme, 
    solde: Userlogged.solde, 
    nouveau_solde: nouveau_solde
  }
console.log(Userlogged);
  const post = () => {
    axios.post(`http://localhost:3001/ajout/retrait`, retrait).then(res => {
        console.log(res.data)
    })
    axios.put(`http://localhost:3001/update/solde/${Userlogged.id}`, {solde: nouveau_solde}).then(res => {

    })
    setOpen(false)
};



  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
      Retrait
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Retrait</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Veuillez saisir le montant du retrait que vous souhaitez effectuer.
          </DialogContentText>
          <br />
          <TextField
            required
            type="tel" // Use type="tel" for phone number input
            label="Whatsapp"
            helperText=""
            fullWidth
            autoComplete="phone"
            value={Montant}
            onChange={handleChangeMontant}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Use inputMode and pattern to enforce numeric input
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button variant="contained" onClick={post}>Valider</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
