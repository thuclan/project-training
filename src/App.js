import './css/normalize.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Trending from './components/Trending/Trending';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />
    </main>
    <Footer />
  </>
);
export default App;
