import './css/normalize.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';

const App = () => (
  <>
    <Header />
    <main>
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <Button />
    </main>
    <Footer />
  </>
);
export default App;
