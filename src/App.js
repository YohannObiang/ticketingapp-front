import './App.css';
import Home from '../src/pages/Home';
import Details from './pages/Details/Details';
import Results from './pages/Results/Results';
import Validation from './pages/Validation/Validation';
import Navbar from './components/Navbar/Navbar';
import AddressForm from './components/AddressForm';
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

  const datedecommande = new Date()

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  function formatDate(date){
    return[
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
    }
  var date1 = new Date(String(formatDate(new Date())));
  var date2 = new Date(String("05/29/2023"));
  var time_Diff = date2.getTime() - date1.getTime();
  var days_Diff = time_Diff / (1000 * 3600 * 24);
  console.log(days_Diff)

  
  const [evenements, setEvenements] = React.useState([]);



  const [choosenEvent, setChoosenEvent] = useState([])
  const [IdCategorie, setIdCategorie] = useState(0)
  const [ChoosenCategorie, setChoosenCategorie] = useState('')
  const [valueSearch, setValueSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [TicketToBePaid, setTicketToBePaid] = useState([]);
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
          setTicketToBePaid ={setTicketToBePaid} 
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


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
