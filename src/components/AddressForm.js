import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function AddressForm({choosenEvent, URL, value, setValue,setcategoriebillet,setprixcategoriebillet}) {
  console.log(choosenEvent);
  const handleChange = (event) => {
    setValue(event.target.value);

    const getCategoriesbillet = async () => {
      var response = await axios.get(`${URL}/categoriesbillet/${event.target.value}`);
      setcategoriebillet(response.data[0].categoriebillet);
      setprixcategoriebillet(response.data[0].prix);
      console.log(response.data);
    };
    getCategoriesbillet();
  
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesbillet();
  }, []);

  const getCategoriesbillet = async () => {
    var response = await axios.get(`${URL}/categoriesbillet/evenement/${choosenEvent.id_evenement}`);
    setCategories(response.data);
    console.log(response.data);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Type de billet
      </Typography>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">veuillez choisir le type de billet que souhaitez acheter pour {choosenEvent.evenement}.</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
       {categories.map((item) => { 
        return(
        <div key={item.id_categoriesbillet}>
          <FormControlLabel value={String(item.id_categoriesbillet)} control={<Radio />} label={String(item.categoriebillet)+" ("+ String(item.prix)+"fcfa)"} />
          
        </div>
       )})} 

      </RadioGroup>
    </FormControl>
    </React.Fragment>
  );
}
