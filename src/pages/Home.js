import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';
import SoonestEvents from '../components/SoonestEvents/SoonestEvents';

function Home({setChoosenCategorie, setIdCategorie,setChoosenEvent, valueSearch, setValueSearch,evenements, setResultSearch}) {
  return (
    <div className="App">
      
      <Header
      valueSearch={valueSearch}
      setValueSearch={setValueSearch}
      evenements={evenements}
      setResultSearch={setResultSearch}
      setChoosenEvent={setChoosenEvent}
      />
      <Categories
      setChoosenCategorie={setChoosenCategorie}
      setIdCategorie={setIdCategorie}
      />
      <SoonestEvents/>

    </div>
  );
}

export default Home;
