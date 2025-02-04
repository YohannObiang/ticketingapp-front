import React, { useState, useEffect } from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

export default function ProgressBar({ status }) {
  const [progress, setProgress] = useState(0);
  const duration = 125000; // 125 secondes en millisecondes
  const intervalTime = 1250; // 1.25 secondes par tick (1% du total)
  const maxAttempts = duration / intervalTime; // Nombre max d'itérations (100)

  useEffect(() => {
    if (status?.status === "SUCCESS") {
      setProgress(100); // Arrêt immédiat si succès
      return;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));

      if (attempts >= maxAttempts || status?.status === "SUCCESS") {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval); // Nettoyage à la fin
  }, [status]); // Redémarre si `status` change

  return (
    <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
      <Typography variant="body2">{progress}%</Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
