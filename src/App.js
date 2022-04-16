import './css/normalize.css';
import './App.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Trending from './components/Trending/Trending';
import News from './components/New/New';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />
      <div className="content">
        <Trending />
        <News />
      </div>
      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);
export default App;
