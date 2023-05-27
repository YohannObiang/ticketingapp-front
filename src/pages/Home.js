import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';
import SoonestEvents from '../components/SoonestEvents/SoonestEvents';

function Home({setChoosenCategorie,categoriesbillet, setIdCategorie,setChoosenEvent, valueSearch,ClosestEvent, setValueSearch,evenements, setResultSearch, URL}) {
  return (
    <div className="App">
      
      <Header
      valueSearch={valueSearch}
      setValueSearch={setValueSearch}
      evenements={evenements}
      setResultSearch={setResultSearch}
      setChoosenEvent={setChoosenEvent}
      URL={URL}
      />
      <Categories
      setChoosenCategorie={setChoosenCategorie}
      setIdCategorie={setIdCategorie}
      />
      <SoonestEvents
      URL={URL}
      ClosestEvent={ClosestEvent}
      setChoosenEvent={setChoosenEvent}
      categoriesbillet={categoriesbillet}
      />

    </div>
  );
}

export default Home;
