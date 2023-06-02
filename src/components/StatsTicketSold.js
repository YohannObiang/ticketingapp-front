import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function preventDefault(event) {
  event.preventDefault();
}

export default function StatsTicketSold({item, events, Ctitket, URL}) {
  const[Ctitketsold, setCticketsold] = useState([])
  useEffect(() => {
    getCategoriesbillet();
  }, []);

  const getCategoriesbillet = async () => {
    var response = await axios.get(`${URL}/billetsvendus/categoriebillet/${item.id_categoriesbillet}`);
    setCticketsold(response.data);

    
  };


  return (
    <div>
    <React.Fragment>
    <Title>{item.categoriebillet}</Title>
      <Typography component="p" variant="h4">
      {Ctitketsold.length*item.prix} fcfa
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {Ctitketsold.length} billets vendus
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>

   </div>
  );
}
