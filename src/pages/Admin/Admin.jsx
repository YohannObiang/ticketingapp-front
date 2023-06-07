import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectedResource from '../../components/ProtectedResource';
import Loginn from '../../components/Loginn';
import '../Details/Details.css';




const LoginForm = ({URL, isLoggedIn, UserTickets, Ctitket, IdUserLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isTurned, setIsTurned] = useState(true);



  const handleLogin = async () => {




    try {
      const response = await axios.post(`${URL}/api/login`, {
        username,
        password
      });

      const { token } = response.data;
      // Stockez le token dans le stockage local ou dans un cookie sécurisé
      localStorage.setItem('token', token);
  
      // Effectuez les actions nécessaires après une connexion réussie
      console.log('Connexion réussie');
      setIsTurned(!isTurned);
      window.location.reload();

    } catch (error) {
      // Gérez les erreurs de connexion ici
      console.error(error.response.data.message);
      window.location.reload();


    }
  };







  const logoff = () => {
    setIsTurned(true);
    localStorage.removeItem('token')
    window.location.reload();
  };

  



   return (
 <div className='log'>   
     <div className="navbarBackground"></div>
 
     {isLoggedIn ? (
     <div>
        
            
            <Loginn
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            />
     </div>
     ) : ( 
     <div>
         <ProtectedResource
         logoff={logoff}
         URL={URL}
         UserTickets={UserTickets}
         Ctitket={Ctitket}
         IdUserLoggedIn={IdUserLoggedIn}
         />

     </div>
 
     )}
    
     </div>
   );
};

export default LoginForm;
