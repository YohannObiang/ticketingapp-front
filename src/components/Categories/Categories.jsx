import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import div from '@mui/material/div';
import CardMedia from '@mui/material/CardMedia';
import Cover from '..//Header/pexels-mark-angelo-sampan-1587927.jpg'

export default function Categories() {
  const theme = useTheme();

  return (
    <div>
      <legend className='Title'>Catégories</legend>
      <div className='categorieBox'>
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
                Concerts
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
                Gala
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
                Sport
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
                Séminaires
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
                Séminaires
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
                Séminaires
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
                Tours
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
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
              Fêtes
              </span>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography> */}
            </div>
            
          </Box>
        </Card>
        </div>
      </div>
    </div>
  );
}