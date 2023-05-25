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


export default function AddressForm() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Type de billet
      </Typography>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">veuillez choisir le type de billet que souhaitez acheter.</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Classique" control={<Radio />} label="Classique" />
        <FormControlLabel value="Premium" control={<Radio />} label="Premium" />
        <FormControlLabel value="VIP" control={<Radio />} label="VIP" />
      </RadioGroup>
    </FormControl>
    </React.Fragment>
  );
}
