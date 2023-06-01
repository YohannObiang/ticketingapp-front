import React from "react";
import './Details.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Gala from '../../assets/bann.png';
import { useState, useEffect } from 'react';






const Details = ({choosenEvent, categoriesbillet,  URL}) => {

  const theme = createTheme({
    palette: {
      primary: {
  
        main: '#000',
  
      },
      secondary: {
  
        main: '#6d1493',
        
      },
    },
  });


  var tableType = categoriesbillet


    const choosenOne=categoriesbillet.filter((element,index)=>{
      return element.id_evenement === choosenEvent.id_evenement});
      
      console.log(choosenOne)
  

    return ( 
    <div>
    <div className="navbarBackground"></div>
    <div className="contain">
        <div className='desktop'>
                <ThemeProvider theme={theme} >
                <Card sx={{ width: '54%', height:'580px', marginBottom: 5}}   >
                <CardContent>
                <h2 style={{color:'#262D44'}}>Détails</h2>        
                <div className="afficheDetails"
                style={{backgroundImage: `url(${URL+"/uploads/"+choosenEvent.illustration})`}}
                >

                </div>

                </CardContent>
                </Card>
                <Card sx={{ width: '42%', height:'580px', marginBottom: 5}}   className="cardDetails">
            

                <CardContent>
                <h3>{}</h3>
                <Divider/>
                <br />
                <strong style={{color:'#262D44', fontSize: '20px'}}>{choosenEvent.evenement}</strong><br />
                <span style={{color:'#262D44'}}>{choosenEvent.date}</span><br />
                <span style={{color:'#262D44'}}>{choosenEvent.lieu}, {choosenEvent.ville}</span><br /><br />
                {choosenOne.map((item) => {
                  return(
                    <div>
                      <span style={{color:'#262D44'}}>{item.categoriebillet}: {item.prix}fcfa </span><br/>
                    </div>
                )})}        
  <br />
                <div className="description">
                <span style={{color:'#262D44'}}>
                {choosenEvent.description}
                </span>
                </div>

                </CardContent>

                <CardActions className='centered'>
                <Link to="/validation">
                <Button size="medium" variant="contained" color='secondary' sx={{marginBottom: 1, marginLeft:1}}> <strong className='text' style={{color:'#fff'}}>Acheter</strong></Button>
                </Link>
                <Button size="small"  color='primary' sx={{marginBottom: 1, marginLeft:1}}> Retour</Button>

                </CardActions>
                </Card>
                </ThemeProvider>
        </div>
        <div className='mobile'>     
            <ThemeProvider theme={theme} >

                <Card sx={{ width: '90%', height:'450px', marginBottom: 2}}   >
                <h2 style={{color:'#262D44'}}>Détails</h2>
                <div className="afficheDetails"
                style={{backgroundImage: `url(${URL+"/uploads/"+choosenEvent.illustration})`}}
                ></div>

                
                </Card>
                <Card sx={{ width: '90%', height:'fit-content', marginBottom: 2}}   >
                
                <CardContent>
                <h3>{}</h3>
                <Divider/>
                <strong style={{color:'#262D44', fontSize: '20px'}}>{choosenEvent.evenement}</strong><br />
                <span style={{color:'#262D44'}}>{choosenEvent.date}</span><br />
                <span style={{color:'#262D44'}}>{choosenEvent.lieu}, {choosenEvent.ville}</span><br /><br />
                {choosenOne.map((item) => {
                  return(
                    <div>
                      <span style={{color:'#262D44'}}>{item.categoriebillet}: {item.prix}fcfa </span><br/>
                    </div>
                )})} 
  <br />

                <div className="description">
                <span style={{color:'#262D44'}}>
                {choosenEvent.description}
                </span>
                </div>

                
                </CardContent>
            <div className="centered">
                <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                <Link to="/validation">
                <Button size="medium" variant="contained" sx={{m:1}} color='secondary'> <strong className='text' style={{color:'#fff'}}>Acheter</strong></Button>
                </Link>
                
                <Button size="small"  color='primary' sx={{marginBottom: 1, marginTop:1}}> Retour</Button>
            
                </CardActions></div>
                </Card>
                </ThemeProvider>
        </div>
    </div>
    </div>
     );
}
 
export default Details;