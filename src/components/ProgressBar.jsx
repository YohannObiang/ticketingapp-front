import React, { useState, useEffect } from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

export default function ProgressBar({ status, progress, setProgress, setFinalite }) {
  const duration = 90000; // 125 secondes en millisecondes
  const intervalTime = 1000; // 1.25 secondes par tick (1% du total)
  const maxAttempts = duration / intervalTime; // Nombre max d'itérations (100)
 
  useEffect(() => {
    if (status?.status === "SUCCESS") {
      setProgress(100); // Arrêt immédiat si succès
      return;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      setProgress((prev) => (prev > 0 ? prev - 1 : 100));

      if (attempts >= maxAttempts || status?.status === "SUCCESS") {
        clearInterval(interval);
      } else{
        setFinalite(true)
      }

    }, intervalTime);

    return () => clearInterval(interval); // Nettoyage à la fin
  }, [status]); // Redémarre si `status` change

  return (
    <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
      <Typography variant="body2">Entrez votre mot de passe et attendez pour recevoir votre billet.</Typography>
      <Typography variant="body2">{progress}s</Typography>
      <LinearProgress variant="determinate" value={progress} />


    </Box>
  );
}
