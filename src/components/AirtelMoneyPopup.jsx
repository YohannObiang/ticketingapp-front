import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress, Typography } from '@mui/material';
import ProgressBar from './ProgressBar';

export default function AirtelMoneyPopup({ idbillet, prix, post }) {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [chargement, setChargement] = useState(false);
  const [finalite, setFinalite] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [status, setStatus] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false); // Désactiver le champ après validation
  const [hideButtons, setHideButtons] = useState(false); // Masquer les boutons après validation


  // Vérification du format du numéro
  const isValidNumber = (num) => /^(077|074|076)\d{6}$/.test(num);

  const handleOpen = () => {
    setOpen(true);
    setPhoneNumber('');
    setError('');
    setTransactionStatus(null);
    setIsDisabled(false);
    setHideButtons(false);
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
      return response.data.message;
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
        secretKey: secretKey
      });

      setTransactionStatus(response.data);
      setLoading(true)


      // Attendre quelques secondes avant de récupérer le statut
      fetchTransactionStatus(response.data.merchant_reference_id, response.data.merchant_operation_account_code, secretKey);

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

        if (transactionStatus === "PENDING" && attempts < 90) {
            setTimeout(() => {
                fetchTransactionStatus(transactionId, accountOperationCode, secretKey, attempts + 1);
            }, 500);
        } else {
            console.log(`✅ Statut final de la transaction : ${transactionStatus}`);
            setLoading(false);
            setStatus(response.data);

            // Réinitialiser l'interface si la transaction a échoué
            if (transactionStatus === "FAILED" || progress === 0 || finalite === true) {
              setIsDisabled(false); // Réactiver le champ téléphone
              setHideButtons(false); // Réafficher les boutons
            }
            if (transactionStatus === "SUCCESS") {
              console.log('Ok ok')
              post()
            }

        }

    } catch (err) {
        console.error("❌ Erreur lors de la récupération du statut:", err);
        setErrorStatus(err.response?.data?.error || "Erreur lors de la requête");
    }
  };

  /**
   * Gère l'initialisation de la transaction.
   */
  const initiateTransaction = async () => {
    try {
      const secretKey = await fetchSecretKey(); 
      await transaction(secretKey);
    } catch (error) {
      setError(error.message);
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

    setLoading(true);
    setIsDisabled(true); // Désactiver le champ téléphone
    setHideButtons(true); // Cacher les boutons après validation
    setChargement(true)
    initiateTransaction();
    setTimeout(() => {
      setChargement(false)
    }, 4000);
    
  };
  const [progress, setProgress] = useState(100);


  return (
    <div>
      <Button variant="contained" sx={{ backgroundColor: '#6F3193', color: 'white' }} onClick={handleOpen}>
        Payer
      </Button>
      <Dialog open={open}>
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
            disabled={isDisabled} // Désactiver après validation
            sx={{
              "& .MuiInputLabel-root": { textAlign: "left" }, // Aligner le label à gauche
              "& .MuiInputBase-root": { alignItems: "flex-start" }, // Aligner l’input en haut
            }}          />

          {loading && (
            <div>
              {chargement ?(
                <div>
                  <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
                  <Typography variant="body1" color="primary" textAlign="center">
                    Veuillez patienter...
                  </Typography>
                </div>
              ):(
                <ProgressBar 
                status={status}
                progress ={progress}
                setProgress ={setProgress}
                setFinalite={setFinalite}
                />
              )}
              
              
            </div>
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

        {!hideButtons && ( // Cacher les boutons après validation
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: '#6F3193' }}>Annuler</Button>
            <Button onClick={handleValidate} sx={{ backgroundColor: '#6F3193', color: 'white' }}>
              Valider
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
