import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/FooterSection';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import HandMade from './components/HandMade/HandMade';
import CardSection from './components/Gallery/CardSection.jsx';
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
      <CardSection products={furnitureProducts} />
      <CustomerReviews data={review[0]} />
      <Footer />
    </>
  );
}

export default App;
