import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';
import SoonestEvents from '../components/SoonestEvents/SoonestEvents';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Categories/>
      <SoonestEvents/>

    </div>
  );
}

export default Home;
