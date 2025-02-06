import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TableauDeBord.module.css';
import axios from 'axios';
import Results from './Results/Results';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function TableauDeBord({ setIsLoggedIn, setIsSent, choosenEvent, email, categoriesbillet,setChoosenEvent,URL, evenements }) {
  const navigate = useNavigate();
    const [toTickets, setToTickets] = React.useState(false)
    const [array, setArray] = React.useState([])
    const [adressemail, setadressemail] = React.useState(localStorage.getItem('email'))
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setIsSent(false);
    navigate('/');
  };


  
    React.useEffect(() => {
      setadressemail(localStorage.getItem('email'));
      console.log(localStorage.getItem('email'));
      getData();

    }, [email]);


    const getData = async () => {
        try {
          const response = await axios.get(`https://ebillet.onrender.com/billets-achetes/${adressemail}`);
          console.log(response.data);
          setArray(response.data)
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
      };

  return (
    <div className={styles.dashboard} style={{position:'relative'}}>
      {/* Contenu principal du tableau de bord */}
      {/* <button onClick={()=>{setIsLoggedIn(false)}}>Retour</button> */}
      <div className={styles.content}>
        <Results
        categoriesbillet={categoriesbillet}
        setChoosenEvent={setChoosenEvent}
        URL={URL}
        evenements={evenements}
        array={array}
        adressemail={adressemail}
        setToTickets={setToTickets}
        toTickets={toTickets}
        choosenEvent={choosenEvent}
        />
        
      </div>
      {/* Bouton de déconnexion flottant */}

      <Button variant="contained" onClick={handleLogout} style={{position:'fixed', backgroundColor:'#6f3193', bottom:'20px', right:'10px'}} endIcon={<ExitToAppIcon />}>
      Se déconnecter
      </Button>
    </div>
  );
}

export default TableauDeBord;
