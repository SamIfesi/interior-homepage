import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/FooterSection';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import HandMade from './components/HandMade/HandMade';
import { heroData, review, handMadeSec } from './components/Data/Data';

function App() {
  return (
    <>
      <Navbar />
      <HandMade data={handMadeSec} />
      <HeroSection data={heroData} />
      <CustomerReviews data={review[0]} />
      <Footer />
    </>
  );
}

export default App;
