import './css/normalize.css';
import './App.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Trending from './components/Trending/Trending';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />
      <Trending />
      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);
export default App;
