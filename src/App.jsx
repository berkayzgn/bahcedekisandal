import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Videos from './pages/Videos';
import Concerts from './pages/Concerts';
import ConcertDetail from './pages/ConcertDetail';

function App() {
  const location = useLocation();
  const routerNavigate = useNavigate();

  // Get current page from pathname for Header component
  const getPageFromPath = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/about':
        return 'about';
      case '/members':
        return 'members';
      case '/videos':
        return 'videos';
      case '/concerts':
        return 'concerts';
      default:
        if (location.pathname.startsWith('/concert/')) {
          return 'concert-detail';
        }
        return 'home';
    }
  };

  const currentPage = getPageFromPath();

  const navigate = (page) => {
    if (page === 'home') {
      routerNavigate('/');
    } else {
      routerNavigate(`/${page}`);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-100 dark:bg-gray-800">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-5">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <Header currentPage={currentPage} onNavigate={navigate} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/members" element={<Members />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/concerts" element={<Concerts />} />
              <Route path="/concert/:id" element={<ConcertDetail />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
