import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import div from '@mui/material/div';
import CardMedia from '@mui/material/CardMedia';
import Cover from '../../gradient.png';
import Tour from '../../assets/tour.png';
import Concert from '../../assets/concert.png';
import Seminaire from '../../assets/seminaire.png';
import Sport from '../../assets/sport.png';
import Gala from '../../assets/gala.png';
import Fete from '../../assets/fete.png';
import Chic from '../../assets/chic.png';
import {Link } from "react-router-dom";


export default function Categories({setIdCategorie, setChoosenCategorie}) {
  const theme = useTheme();
  
  return (
    <div>
      <legend className='Title'>Catégories</legend>
      <div className='categorieBox'>
        <Link to="/categories" onClick={() => {setIdCategorie(12);setChoosenCategorie('Concerts')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Concert}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Concerts
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(13);setChoosenCategorie('Brunchs')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Gala}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Brunchs
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(15);setChoosenCategorie('Sport')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Sport}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Sport
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(14);setChoosenCategorie('Séminaires')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Seminaire}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Séminaires
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(19);setChoosenCategorie('Galas')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Chic}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Galas
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(18);setChoosenCategorie('Tours')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Tour}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Tours
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(17);setChoosenCategorie('Fêtes')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Fete}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
              Fêtes
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
        <Link to="/categories" onClick={() => {setIdCategorie(16);setChoosenCategorie('Divers')}}>

        <div className='categorieCard'>
          <Card sx={{ display: 'flex' }}>
          
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={Cover}
            alt="cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='categoriesContent' >
              <span className='categoriesFont'>
                Divers
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
        </Link>
      </div>
    </div>
  );
}