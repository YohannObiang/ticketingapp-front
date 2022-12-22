import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ComingEvents from './components/ComingEvents/ComingEvents';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ComingEvents/>
    </div>
  );
}

export default App;
