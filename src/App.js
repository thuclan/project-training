import './css/normalize.css';
import './App.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Trending from './components/Trending/Trending';
import New from './components/New/New';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />
      <Trending />
      <New />
      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);
export default App;
