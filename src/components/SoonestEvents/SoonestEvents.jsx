import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Photo from '../../assets/tour.png';
import Bann from '../../assets/bann.png';
import Bann1 from '../../assets/7335172.jpg';
import Bann2 from '../../assets/oral english (1).png';
import Bann3 from '../../assets/inscriptionenligne.png';
import Bann4 from '../../assets/Modern Hiring Recruitment Announcement Facebook Post.png';
import {Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Trending from './Trending';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SoonestEvents({ClosestEvent, setChoosenEvent, categoriesbillet, URL}) {


  
  // Recuperer l'id d'un evenement choisi
  const Choose=(id_evenement)=>{
      
    const choosenOne=ClosestEvent.slice(0, 8).filter((element,index)=>{
      return element.id_evenement === id_evenement});
      setChoosenEvent(choosenOne[0]);
        };

  return (
    <div>
      <legend className='Title'>Evénéments proches... </legend>
      <div className='soonestEventBox'>
      {ClosestEvent.slice(0, 8).map((item) => {

const choosenOne=categoriesbillet.filter((element,index)=>{
  return element.id_evenement === item.id_evenement});
var price = choosenOne[0].prix;
return(
  <div className='soonestEventCard' key={item.id_evenement}>
          {/* <Card sx={{ maxWidth: 345 }}>
        <Link to="/Details" onClick={()=>Choose(item.id_evenement)}>
        <CardMedia
          component="img"
          height="100%"
          image={URL+"/uploads/"+item.illustration}
          alt={URL+"/uploads/"+item.illustration}

className="photoEventHeight"/>
</Link>
          <span className='soonestEventName'>
          {item.evenement}
              </span><br />
                        <span className='soonestEventFont'>
                          A partir de  {price}fcfa
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
          
        
          </Card> */}
          <Trending 
          item ={item}
          categoriesbillet={categoriesbillet}
          Choose={Choose}
          price={price}
          />

        </div>  
        )})}   
    
      </div>
    </div>
  );
}