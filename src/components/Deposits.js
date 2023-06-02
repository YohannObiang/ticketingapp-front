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

  return (
    <div>
    <React.Fragment>
      <Title>Vente totale</Title>
      <Typography component="p" variant="h4">
        {arr} fcfa
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
