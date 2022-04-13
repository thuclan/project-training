import './css/normalize.css';
import './App.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Poster from './components/Poster/Poster';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />
      <Poster />
      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);
export default App;
