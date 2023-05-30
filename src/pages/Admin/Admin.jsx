import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectedResource from '../../components/ProtectedResource';
import Login from '../../components/Login';
import '../Details/Details.css';




const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isTurned, setIsTurned] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    
    useEffect(() => {
        
        checkAuthentication();
      }, []);



      const checkAuthentication = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            // Envoyer une requête au serveur pour vérifier la validité du token JWT
            const response = await axios.post('http://localhost:3001/api/check-auth', { token });
            if (response.data.valid) {
              setIsLoggedIn(false);
              console.log('token');
            } else {
              setIsLoggedIn(true);
              console.log('no token');

            }
          } else {
            setIsLoggedIn(true);
            console.log('no no token');

          }
        } catch (error) {
          setIsLoggedIn(true);
          console.error('Une erreur s\'est produite lors de la vérification de l\'authentification:', error);
        }
      };
  



  const handleLogin = async () => {




    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password
      });

      const { token } = response.data;
      // Stockez le token dans le stockage local ou dans un cookie sécurisé
      localStorage.setItem('token', token);

      // Effectuez les actions nécessaires après une connexion réussie
      console.log('Connexion réussie');
      setIsTurned(!isTurned);

    } catch (error) {
      // Gérez les erreurs de connexion ici
      console.error(error.response.data.message);

    }
  };







  const logoff = () => {
    setIsTurned(true);
    localStorage.removeItem('token')
  };




   return (
 <div className='log'>   
     <div className="navbarBackground"></div>
 
     {isLoggedIn ? (
     <div>
        
            
            <Login
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
         />

     </div>
 
     )}
    
     </div>
   );
};

export default LoginForm;
