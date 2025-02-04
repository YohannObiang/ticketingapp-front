import * as React from 'react';
import { Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Box, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddressForm({ choosenEvent, URL, value, setValue, setcategoriebillet, setprixcategoriebillet }) {
  const [categories, setCategories] = useState([]);

  // Charger les catégories de billets au chargement du composant
  useEffect(() => {
    const getCategoriesbillet = async () => {
      try {
        const response = await axios.get(`${URL}/categoriesbillet/evenement/${choosenEvent.id_evenement}`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    getCategoriesbillet();
  }, [choosenEvent, URL]);

  // Gestion du changement du billet sélectionné
  const handleChange = async (event) => {
    setValue(event.target.value);

    const getCategoriesbillet = async () => {
      try {
        const response = await axios.get(`${URL}/categoriesbillet/${event.target.value}`);
        setcategoriebillet(response.data[0].categoriebillet);
        setprixcategoriebillet(response.data[0].prix);
      } catch (error) {
        console.error("Error fetching category details", error);
      }
    };
    getCategoriesbillet();
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Choisir votre type de billet
      </Typography>

      <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: 3 }}>
        Veuillez sélectionner le type de billet que vous souhaitez acheter pour l'événement <strong>{choosenEvent.evenement}</strong>.
      </Typography>

      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Types de billets disponibles :
        </FormLabel>

        <RadioGroup
          value={value}
          onChange={handleChange}
          aria-labelledby="ticket-type-group"
        >
          {/* Affichage des catégories de billets alignées verticalement */}
          {categories.map((item) => (
            <Paper key={item.id_categoriesbillet} elevation={3} sx={{ padding: 2, marginBottom: 2, display: 'flex', justifyContent:'space-between', alignItems: 'center', borderRadius: 2 }}>
            <FormControlLabel
              sx={{width:'100%'}}
              value={String(item.id_categoriesbillet)}
              control={<Radio sx={{ color: '#6d1493' }} />}
              label={
                <Box sx={{ textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  {/* Bloc pour le nom du billet */}
                  <div>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#6d1493' }}>
                      {item.categoriebillet}
                    </Typography>
                  </div>
                </Box>
              }
            />


            {/* Bloc pour le prix */}
            <div>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.prix} FCFA
              </Typography>
            </div>
          </Paper>
          
          ))}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
}
