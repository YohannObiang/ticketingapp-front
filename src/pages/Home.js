import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Categories/>
    </div>
  );
}

export default Home;
