import './App.css';
import Home from '../src/pages/Home';
import Details from './pages/Details/Details';
import Results from './pages/Results/Results';
import Validation from './pages/Validation/Validation';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";
import ResultsByCategories from './pages/ResultsByCategories/ResultsByCategories';
import axios from 'axios';


function App() {
  const URL = 'http://localhost:3001'



  const [evenements, setEvenements] = React.useState([]);

  React.useEffect(() => {
    getEvenements();
  },[]);
 
  const getEvenements = async () => {
    var response = await axios.get(`${URL}/evenements`);
    setEvenements(response.data);

  };

  const [choosenEvent, setChoosenEvent] = useState([])
  const [IdCategorie, setIdCategorie] = useState(0)
  const [ChoosenCategorie, setChoosenCategorie] = useState('')
  const [valueSearch, setValueSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [TicketToBePaid, setTicketToBePaid] = useState([]);
  const [categoriesbillet, setCategoriesbillet] = useState([]);


  useEffect(() => {
    getCategoriesbillet();
  }, []);

  const getCategoriesbillet = async () => {
    var response = await axios.get(`${URL}/categoriesbillet`);
    setCategoriesbillet(response.data);
  };  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home
          setIdCategorie={setIdCategorie}
          setChoosenCategorie={setChoosenCategorie}
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
          evenements = {evenements}
          setResultSearch={setResultSearch}
          setChoosenEvent = {setChoosenEvent}

          />} /> 
          <Route path="/details" element={<Details
          choosenEvent={choosenEvent}
          categoriesbillet={categoriesbillet}

          />} /> 
          <Route path="/results" element={<Results
          resultSearch={resultSearch}
          valueSearch={valueSearch}
          categoriesbillet={categoriesbillet}
          setChoosenEvent = {setChoosenEvent}
          />} /> 
          <Route path="/categories" element={<ResultsByCategories
          evenements = {evenements}
          setChoosenEvent = {setChoosenEvent}
          IdCategorie={IdCategorie}
          categoriesbillet={categoriesbillet}
          ChoosenCategorie={ChoosenCategorie}
          />} /> 
          <Route path="/validation" element={<Validation
          choosenEvent={choosenEvent}
          />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
