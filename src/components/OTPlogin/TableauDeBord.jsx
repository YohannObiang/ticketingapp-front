import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TableauDeBord.module.css';
import axios from 'axios';
import Results from './Results/Results';
import { Button } from '@mui/material';



function TableauDeBord({ setIsLoggedIn, setIsSent, email, categoriesbillet,setChoosenEvent,URL, evenements }) {
  const navigate = useNavigate();
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
      <div className={styles.content}>
        <Results
        categoriesbillet={categoriesbillet}
        setChoosenEvent={setChoosenEvent}
        URL={URL}
        evenements={evenements}
        array={array}
        adressemail={adressemail}
        />
        
      </div>
      {/* Bouton de déconnexion flottant */}
      <button onClick={handleLogout} style={{position:'fixed', bottom:'20px', right:'10px'}}>
        Se déconnecter
      </button>
    </div>
  );
}

export default TableauDeBord;
