import React, { useState, useEffect } from 'react';
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
import './ResultsByCategories.css';
import Trending from '../../components/SoonestEvents/Trending';



export default function ResultsByCategories({evenements, setChoosenEvent, IdCategorie, categoriesbillet,ChoosenCategorie,URL}) {
  var table = evenements
  var id = IdCategorie

  // Tri des evenements en fonction de la categorie choisie
  const filteredstuffs=table.filter((element,index)=>{
    return element.id_categorieevenement === id });

  // Recuperer l'id d'un evenement choisi
    const Choose=(id_evenement)=>{
      
      const choosenOne=filteredstuffs.filter((element,index)=>{
        return element.id_evenement === id_evenement});
        setChoosenEvent(choosenOne[0]);
          };

          const [displaystate, setdisplaystate] = React.useState('none')

          function setstatement() {
            if(categoriesbillet.length == 0){
              setdisplaystate('flex')
            }
          }
        
          useEffect(() => {
            setstatement();
          }, []);
        
    
  return (
    <div>
      <div className="navbarBackground"></div>
      <legend className='Title'>{ChoosenCategorie} </legend>
      <div className='soonestEventBox'>
      {filteredstuffs.map((item) => {
// Recuperation des types de billet pour chaque element
const choosenOne=categoriesbillet.filter((element,index)=>{
  return element.id_evenement === item.id_evenement});
var price = choosenOne[0].prix;
return(
        <div className='soonestEventCard' key={item.id_categorieevenement}>
                    <Trending 
                    item ={item}
                    categoriesbillet={categoriesbillet}
                    Choose={Choose}
                    price={price}
                    />
        </div>
)})}      
      <div style={{display: displaystate, color:'#000', margin: '100px 0', justifyContent: 'center'}}>
        <h2 style={{color:'#000'}}  id="searchResultnull">Aucun Résultat</h2>

      </div>  
        
        
      </div>
    </div>
  );
}