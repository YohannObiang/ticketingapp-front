import './App.css';
import Home from '../src/pages/Home';
import Details from './pages/Details/Details';
import Results from './pages/Results/Results';
import Validation from './pages/Validation/Validation';
import Admin from './pages/Admin/Admin';
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
  const URL = 'https://ebillet.onrender.com'
  // const URL = 'http://localhost:3001'

  
  const [evenements, setEvenements] = React.useState([]);
  const [choosenEvent, setChoosenEvent] = useState([])
  const [IdCategorie, setIdCategorie] = useState(0)
  const [ChoosenCategorie, setChoosenCategorie] = useState('')
  const [valueSearch, setValueSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [categoriesbillet, setCategoriesbillet] = useState([]);
  const [ClosestEvent, setClosestEvent] = useState([]);


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
          URL={URL}
          ClosestEvent = {ClosestEvent}
          categoriesbillet={categoriesbillet}

          />} /> 
          <Route path="/details" element={<Details
          choosenEvent={choosenEvent}
          categoriesbillet={categoriesbillet}
          URL={URL}         
          />} /> 
          <Route path="/results" element={<Results
          resultSearch={resultSearch}
          valueSearch={valueSearch}
          categoriesbillet={categoriesbillet}
          setChoosenEvent = {setChoosenEvent}
          URL={URL}

          />} /> 
          <Route path="/categories" element={<ResultsByCategories
          evenements = {evenements}
          setChoosenEvent = {setChoosenEvent}
          IdCategorie={IdCategorie}
          categoriesbillet={categoriesbillet}
          ChoosenCategorie={ChoosenCategorie}
          URL={URL}

          />} /> 
          <Route path="/validation" element={<Validation
          choosenEvent={choosenEvent}
          URL={URL}
          />} /> 
          <Route path="/admin" element={<Admin
          choosenEvent={choosenEvent}
          URL={URL}
          />} /> 


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
