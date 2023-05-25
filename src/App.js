import './App.css';
import Home from '../src/pages/Home';
import Details from './pages/Details/Details';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
