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
import Bann3 from '../../assets/inscription en ligne.png';
import Bann4 from '../../assets/Modern Hiring Recruitment Announcement Facebook Post.png';



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

export default function SoonestEvents() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };


  return (
    <div>
      <legend className='Title'>Evénéments proches... </legend>
      <div className='soonestEventBox'>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Bann}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
          CSB vs ASO SM
              </span><br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Bann1}
          alt="Photo"

className="photoEventHeight"
        />
          <span className='soonestEventName'>
          Masterclass Linda B
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded1}
            onClick={handleExpandClick1}
            aria-expanded={expanded1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Bann4}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
          L'Oiseau Rare live
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded2}
            onClick={handleExpandClick2}
            aria-expanded={expanded2}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Bann3}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
          Brunch Hotel Mandji
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded3}
            onClick={handleExpandClick3}
            aria-expanded={expanded3}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Bann2}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
          Festival des étoiles
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded4}
            onClick={handleExpandClick4}
            aria-expanded={expanded4}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded4} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Photo}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
          Pop show 3
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded5}
            onClick={handleExpandClick5}
            aria-expanded={expanded5}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded5} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Photo}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
                Divers
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded6}
            onClick={handleExpandClick6}
            aria-expanded={expanded6}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded6} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        <div className='soonestEventCard'>
          <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="100%"
          image={Photo}
          alt="Photo"

className="photoEventHeight"/>
          <span className='soonestEventName'>
                Divers
              </span> <br />
                        <span className='soonestEventFont'>
                          A partir de  1500fcfa
                        </span>
        <CardActions disableSpacing>
          
          <IconButton aria-label="share">
            <button className='buyingBtn'>
              Acheter
            </button>
          </IconButton>
          <ExpandMore
            expand={expanded7}
            onClick={handleExpandClick7}
            aria-expanded={expanded7}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded7} timeout="auto" unmountOnExit>
              <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </Collapse>
          </Card>
        </div>
        
        
      </div>
    </div>
  );
}