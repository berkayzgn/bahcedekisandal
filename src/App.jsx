import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Videos from './pages/Videos';
import Concerts from './pages/Concerts';
import ConcertDetail from './pages/ConcertDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    window.location.hash = `/${page}`;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'members':
        return <Members />;
      case 'videos':
        return <Videos />;
      case 'concerts':
        return <Concerts />;
      case 'concert-detail-1':
      case 'concert-detail-2':
      case 'concert-detail-3':
      case 'concert-detail-4':
      case 'concert-detail-5':
      case 'concert-detail-6':
      case 'concert-detail-7':
      case 'concert-detail-8':
        return <ConcertDetail />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-100 dark:bg-gray-800">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-5">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <Header currentPage={currentPage} onNavigate={navigate} />
            {renderPage()}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
