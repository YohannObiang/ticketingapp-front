import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({events, Ctitket, URL}) {
  const[Ctitketsold, setCticketsold] = useState([])
  const[total, settotal] = useState([])
  useEffect(() => {
    getCategoriesbillet();
  }, []);
console.log(events)   
const getCategoriesbillet = async () => {
    var response = await axios.get(`${URL}/billetsvendus/evenement/${events[0].id_evenement}`);
    setCticketsold(response.data);
  };
    var arr = 0

for (let index = 0; index < Ctitketsold.length; index++) {
  const element = Ctitketsold[index];

  arr += element.prix
}
const filteredstuffs=Ctitketsold.filter((element,index)=>{
  return element.validity == 1 });




  return (
    <div>
    <React.Fragment>
      <Title>Vente totale</Title>
      <Typography component="p" variant="h4">
      <h2 style={{fontWeight: 600, color: "#6d1493"}}>{arr} fcfa</h2>
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
