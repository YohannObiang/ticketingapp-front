import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function preventDefault(event) {
  event.preventDefault();
}

export default function StatsTicketSold({item, events, Ctitket, URL, Ctitketsold, setCticketsold}) {
  useEffect(() => {
    getCategoriesbillet();
  }, []);

  const getCategoriesbillet = async () => {
    var response = await axios.get(`${URL}/billetsvendus/categoriebillet/${item.id_categoriesbillet}`);
    setCticketsold(response.data);

    
  };
  const filteredstuffs=Ctitketsold.filter((element,index)=>{
    return element.validity == 1 });
  

  return (
    <div>
    <React.Fragment>
    <Title>{item.categoriebillet}</Title>
      <Typography component="p" variant="h4">
      <h2 style={{fontWeight: 600, color: "#6d1493"}}>{Ctitketsold.length*item.prix} fcfa</h2>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        <span style={{color: "#000"}}>{Ctitketsold.length} billets vendus</span>
      </Typography>
      <div>
        <Typography color="text.secondary">
        {filteredstuffs.length}/{Ctitketsold.length} scannés
        </Typography>
      </div>
    </React.Fragment>

   </div>
  );
}
