import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/FooterSection';
import { heroData } from './components/Data/Data';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection data={heroData} />
      <Footer />
    </>
  );
}

export default App;
