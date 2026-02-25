import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import { heroData } from './components/Data/Data';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection data={heroData} />
    </>
  );
}

export default App;
