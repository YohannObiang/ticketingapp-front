import * as React from 'react';
import './Results.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Trending from '../../SoonestEvents/Trending copy';




export default function Results({array, adressemail, categoriesbillet,setChoosenEvent,URL, evenements  }) {

// Recuperer l'id d'un evenement choisi
const Choose=(id_evenement)=>{
      
  const choosenOne=array.filter((element,index)=>{
    return element.id_evenement === id_evenement});
    setChoosenEvent(choosenOne[0]);
      };
      const [displaystate, setdisplaystate] = React.useState('none')

      function setstatement() {
        if(array.length == 0){
          setdisplaystate('flex')
        }
      }
    
      useEffect(() => {
        setstatement();
        console.log(array);
        
      }, []);
    

  return (
    <div>
      <div className="navbarBackground"></div>
      <legend className='Title'>Mes billets </legend>
      <div className='soonestEventBox'>
      {array.map((item) => {


// Recuperation des types de billet pour chaque element
const choosenOne=evenements.filter((element,index)=>{
  return element.id_evenement === item.id_evenement});
var price = choosenOne[0].prix;
return(
        <div className='soonestEventCard' key={item.id_categorieevenement}>
                    <Trending 
                    item ={item}
                    categoriesbillet={categoriesbillet}
                    Choose={Choose}
                    choosenOne={choosenOne[0]}
                    price={price}
                    />
        </div>
)})}   

        
        
        
      </div>



    </div>
  );
}