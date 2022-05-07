import './css/normalize.css';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import HeroCard from './components/HeroCard/HeroCard';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Trending from './components/Trending/Trending';
import News from './components/New/New';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostOfCate from './components/PostOfCate/PostOfCate';

const BasicLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const ContentLayout = () => (
  <main>
    <HeroCard />
    <div className="content">
      <Trending />
      <News />
    </div>
    <ScrollToTopButton />
  </main>
);

const App = () => (
  <Routes>
    <Route path="/" element={<BasicLayout />}>
      <Route path="/" element={<ContentLayout />} />
      {/* <Route path="water" element={<PostOfCate />} /> */}
    </Route>
  </Routes>
);
export default App;
