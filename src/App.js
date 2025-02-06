import './App.css';
import Home from '../src/pages/Home';
import Details from './pages/Details/Details';
import Results from './pages/Results/Results';
import Validation from './pages/Validation/Validation';
import Admin from './pages/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultsByCategories from './pages/ResultsByCategories/ResultsByCategories';
import axios from 'axios';
import RouteProtegee from './components/OTPlogin/RouteProtegee';
import Inscription from './components/OTPlogin/Inscription';
import DemanderOTP from './components/OTPlogin/DemanderOTP';
import TableauDeBord from './components/OTPlogin/TableauDeBord';
import VerifierOTP from './components/OTPlogin/VerifierOTP';

function App() {
  const URL = "https://ebillet.onrender.com";
  const [evenements, setEvenements] = useState([]);
  const [choosenEvent, setChoosenEvent] = useState([]);
  const [IdCategorie, setIdCategorie] = useState(0);
  const [ChoosenCategorie, setChoosenCategorie] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [resultSearch, setResultSearch] = useState(null);
  const [categoriesbillet, setCategoriesbillet] = useState([]);
  const [ClosestEvent, setClosestEvent] = useState([]);
  const [IdUserLoggedIn, setIdUserLoggedIn] = useState('');
  const [UserTickets, setUserTickets] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [Ctitket, setCticket] = useState([]);
  const [events, setevents] = useState([]);
  const[Ctitketsold, setCticketsold] = useState([])


  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        // Envoyer une requête au serveur pour vérifier la validité du token JWT
        const response = await axios.post(`${URL}/api/check-auth`, { token });
        if (response.data.valid) {
          setIsLoggedIn(false);
          setIdUserLoggedIn(response.data.message.idd.userId);
          var response3 = await axios.get(`${URL}/evenements/organisateur/${response.data.message.idd.userId}`);
          setUserTickets(response3.data);
          var response4 = await axios.get(`${URL}/evenement/categoriesbillet/${response3.data[0].id_evenement}`);
          setCticket(response4.data);
          var response5 = await axios.get(`${URL}/billetsvendus/evenement/${response3.data[0].id_evenement}`);

          setCticketsold(response5.data);
        } else {
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(true);
      console.error('Une erreur s\'est produite lors de la vérification de l\'authentification:', error);
    }
  };

  useEffect(() => {
    getCategoriesbillet();
  }, []);

  const getCategoriesbillet = async () => {
    var response = await axios.get(`${URL}/categoriesbillet`);
    setCategoriesbillet(response.data);
    var response1 = await axios.get(`${URL}/evenements`);
    setEvenements(response1.data);
    var response2 = await axios.get(`${URL}/closestevents`);
    setClosestEvent(response2.data);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIdCategorie={setIdCategorie}
                setChoosenCategorie={setChoosenCategorie}
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
                evenements={evenements}
                setResultSearch={setResultSearch}
                setChoosenEvent={setChoosenEvent}
                URL={URL}
                ClosestEvent={ClosestEvent}
                categoriesbillet={categoriesbillet}
              />
            }
          />
          <Route
            path="/details"
            element={
              <Details
                choosenEvent={choosenEvent}
                categoriesbillet={categoriesbillet}
                URL={URL}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Results
                resultSearch={resultSearch}
                valueSearch={valueSearch}
                categoriesbillet={categoriesbillet}
                setChoosenEvent={setChoosenEvent}
                URL={URL}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <ResultsByCategories
                evenements={evenements}
                IdCategorie={IdCategorie}
                categoriesbillet={categoriesbillet}
                setChoosenEvent={setChoosenEvent}
                ChoosenCategorie={ChoosenCategorie}
                URL={URL}
              />
            }
          />
          <Route
            path="/validation"
            element={
              <Validation
                choosenEvent={choosenEvent}
                URL={URL}
                IdUserLoggedIn={IdUserLoggedIn}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin
                choosenEvent={choosenEvent}
                URL={URL}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                UserTickets={UserTickets}
                Ctitket={Ctitket}
                IdUserLoggedIn={IdUserLoggedIn}
                Ctitketsold={Ctitketsold}
                setCticketsold={setCticketsold}
              />
            }
          />
          <Route path="/mes-billets" element={<DemanderOTP
          categoriesbillet={categoriesbillet}
          setChoosenEvent={setChoosenEvent}
          choosenEvent={choosenEvent}
          ChoosenCategorie={ChoosenCategorie}
          URL={URL}
          evenements={evenements}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
