import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
    </div>
  );
}

export default Home;
