import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress, Typography } from '@mui/material';

export default function AirtelMoneyPopup({ idbillet, prix }) {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [status, setStatus] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

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

  /**
   * Récupère la clé secrète depuis l'API et la retourne.
   */
  const fetchSecretKey = async () => {
    try {
      const response = await axios.post('https://ebillet.onrender.com/api/renew-secret');
      // console.log('✅ Clé secrète récupérée:', response.data.message);
      return response.data.message; // Retourne la clé au lieu d'attendre que `useState` la mette à jour.
    } catch (err) {
      console.error('❌ Erreur lors du renouvellement de la clé:', err);
      throw new Error("Impossible de récupérer la clé secrète.");
    }
  };

  /**
   * Envoie une transaction à l'API.
   */
  const transaction = async (secretKey) => {
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
        secretKey: secretKey // Utilisation directe de la clé récupérée.
      });

      // console.log("✅ Transaction envoyée:", response.data);
      setTransactionStatus(response.data);

      // Attendre quelques secondes avant de récupérer le statut
      setTimeout(() => {
        fetchTransactionStatus(response.data.merchant_reference_id, response.data.merchant_operation_account_code, secretKey);
      }, 5000);

    } catch (error) {
      console.error("❌ Erreur lors de la transaction:", error);
      setError("Une erreur est survenue lors de la transaction");
    }
  };

  /**
   * Vérifie le statut d'une transaction donnée.
   */
  const fetchTransactionStatus = async (transactionId, accountOperationCode, secretKey, attempts = 0) => {
    setErrorStatus(null);

    try {
        const response = await axios.get(`https://ebillet.onrender.com/api/status`, {
            params: {
                transactionId,
                accountOperationCode,
                transactionOperation: 'PAYMENT',
                secretKey
            }
        });

        const transactionStatus = response.data.status;
        console.log(`🔄 Vérification du statut... Tentative ${attempts + 1} - Statut : ${transactionStatus}`);

        // Si la transaction est toujours "PENDING", refaire une tentative après 5s (jusqu'à 125s)
        if (transactionStatus === "PENDING" && attempts < 25) {
            setTimeout(() => {
                fetchTransactionStatus(transactionId, accountOperationCode, secretKey, attempts + 1);
            }, 5000);
        } else {
            // Afficher le statut final si ce n'est plus PENDING ou si le temps est écoulé
            console.log(`✅ Statut final de la transaction : ${transactionStatus}`);
            setStatus(response.data);
        }

    } catch (err) {
        console.error("❌ Erreur lors de la récupération du statut:", err);
        setErrorStatus(err.response?.data?.error || "Erreur lors de la requête");
    } finally {
        setLoading(false);
    }
};


  /**
   * Gère l'initialisation de la transaction.
   */
  const initiateTransaction = async () => {
    setLoading(true);

    try {
      const secretKey = await fetchSecretKey(); // Récupère la clé
      await transaction(secretKey); // Envoie la transaction avec la clé récupérée
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  /**
   * Vérifie si le numéro est valide et lance la transaction.
   */
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
              Transaction en cours...
            </Typography>
          )}

          {status && (
            <Typography variant="body1" color={status.status === "SUCCESS" ? "success.main" : "error.main"} textAlign="center">
              Statut: {status.status}
            </Typography>
          )}

          {errorStatus && (
            <Typography variant="body1" color="error.main" textAlign="center">
              {errorStatus}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#6F3193' }}>Annuler</Button>
          <Button onClick={handleValidate} sx={{ backgroundColor: '#6F3193', color: 'white' }}>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
