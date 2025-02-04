import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress, Typography } from '@mui/material';

export default function AirtelMoneyPopup({ idbillet, prix }) {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [secretData, setSecretData] = useState(null);
  
  // Vérification du format du numéro
  const isValidNumber = (num) => /^(077|074|076)\d{6}$/.test(num);

  const handleOpen = () => {
    setOpen(true);
    setPhoneNumber('');
    setError('');
    setTransactionStatus(null);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
    setError('');
  };

  useEffect(() => {
    const fetchSecretKey = async () => {
      try {
        const response = await axios.post('https://ebillet.onrender.com/api/renew-secret');
        setSecretData(response.data.message);
      } catch (err) {
        console.error('❌ Erreur lors du renouvellement de la clé:', err);
      }
    };
    fetchSecretKey();
  }, []);

  const initiateTransaction = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://ebillet.onrender.com/api/transaction", {
        agent: "AGENT-1",
        amount: prix,
        reference: `${idbillet}${Date.now()}`,
        product: "PRODUIT-1",
        service: "RESTFUL",
        callback_url_code: "V019K",
        customer_account_number: phoneNumber,
        merchant_operation_account_code: "ACC_679A0D221A79F",
        transaction_type: "PAYMENT",
        owner_charge: "MERCHANT",
        operator_owner_charge: "MERCHANT",
        free_info: "Info libre",
        secretKey: secretData
      });
      setTransactionStatus(response.data);
    } catch (error) {
      setError("Une erreur est survenue lors de la transaction");
    } finally {
      setLoading(false);
    }
  };

  const handleValidate = () => {
    if (!isValidNumber(phoneNumber)) {
      setError('Numéro invalide. Format attendu : 077XXXXXX, 074XXXXXX ou 076XXXXXX');
      return;
    }
    initiateTransaction();
  };

  return (
    <div>
      <Button variant="contained" sx={{ backgroundColor: '#6F3193', color: 'white' }} onClick={handleOpen}>
        Payer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: '#6F3193' }}>Paiement Airtel Money</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Numéro de téléphone"
            type="tel"
            fullWidth
            value={phoneNumber}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            placeholder="077XXXXXX"
          />
          {loading && <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />}
          {transactionStatus && (
            <Typography variant="body1" color="success.main" textAlign="center">
              Transaction réussie !
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '##6F3193' }}>Annuler</Button>
          <Button onClick={handleValidate} sx={{ backgroundColor: '#6F3193', color: 'white' }}>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
