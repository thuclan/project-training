import './css/normalize.css';
import './App.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />

      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);
export default App;
