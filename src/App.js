import './App.css';
import Home from '../src/pages/Home';
import Details from './pages/Details/Details';
import Results from './pages/Results/Results';
import Validation from './pages/Validation/Validation';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/details" element={<Details/>} /> 
          <Route path="/results" element={<Results/>} /> 
          <Route path="/validation" element={<Validation/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
