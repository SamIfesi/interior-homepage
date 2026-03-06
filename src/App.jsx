import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/FooterSection';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import HandMade from './components/HandMade/HandMade';
import CardSection from './components/Cards/CardSection';
import {
  heroData,
  review,
  handMadeSec,
  furnitureProducts,
} from './components/Data/Data';

function App() {
  return (
    <>
      <Navbar />
      <HandMade data={handMadeSec} />
      <HeroSection data={heroData} />
      <CustomerReviews data={review[0]} />
      <CardSection products={furnitureProducts} />
      <Footer />
    </>
  );
}

export default App;
