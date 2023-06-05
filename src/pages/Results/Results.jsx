import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Photo from '../../assets/tour.png';
import Bann from '../../assets/bann.png';
import Bann1 from '../../assets/7335172.jpg';
import Bann2 from '../../assets/oral english (1).png';
import Bann3 from '../../assets/inscriptionenligne.png';
import Bann4 from '../../assets/Modern Hiring Recruitment Announcement Facebook Post.png';
import {Link } from "react-router-dom";
import './Results.css';
import { useState, useEffect } from 'react';
import axios from 'axios';





export default function Results({resultSearch, valueSearch, categoriesbillet,setChoosenEvent,URL}) {

// Recuperer l'id d'un evenement choisi
const Choose=(id_evenement)=>{
      
  const choosenOne=resultSearch.filter((element,index)=>{
    return element.id_evenement === id_evenement});
    setChoosenEvent(choosenOne[0]);
      };
      const [displaystate, setdisplaystate] = React.useState('none')

      function setstatement() {
        if(resultSearch.length == 0){
          setdisplaystate('flex')
        }
      }
    
      useEffect(() => {
        setstatement();
      }, []);
    

  return (
    <div>
      <div className="navbarBackground"></div>
      <legend className='Title'>Resultats pour: "{valueSearch}" </legend>
      <div className='soonestEventBox'>
      {resultSearch.map((item) => {


// Recuperation des types de billet pour chaque element
const choosenOne=categoriesbillet.filter((element,index)=>{
  return element.id_evenement === item.id_evenement});
var price = choosenOne[0].prix;
return(
        <div className='soonestEventCard' key={item.id_categorieevenement}>
          <Card sx={{ maxWidth: 345 }}>
        <Link to="/Details" onClick={()=>Choose(item.id_evenement)}>
        <CardMedia
          component="img"
          height="100%"
          image={URL+"/uploads/"+item.illustration}
          alt="Photo"

className="photoEventHeight"/>
</Link>
          <span className='soonestEventName'>
          {item.evenement}
              </span><br />


                        <span className='soonestEventFont'>
                          A partir de  {price} fcfa
                        </span>
                 
          <div>
            <IconButton aria-label="share" sx={{margin: 'auto'}}>
          <Link to="/validation" onClick={()=>Choose(item.id_evenement)}>
            <button className='buyingBtn'>
              Acheter
            </button>
            </Link>
          </IconButton>
          </div>        
        
          </Card>
        </div>
)})}   

        
        
        
      </div>
      <div style={{display: displaystate, color:'#000', margin: '100px 0', justifyContent: 'center'}}>
        <h2 style={{color:'#000'}}  id="searchResultnull">Aucun Résultat</h2>

      </div>


    </div>
  );
}