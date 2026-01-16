import { useState } from 'react';
import { NAV_ITEMS } from '../constants';

function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/50 dark:border-gray-700/50 px-4 sm:px-6 lg:px-10 py-1 sticky top-0 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <div
        className="flex items-center gap-2 sm:gap-3 text-gray-900 dark:text-white cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        <img
          src="/public/images/sandal-logo.png"
          alt="Bahçedeki Sandal Logo"
          className="h-16 sm:h-24 w-auto"
        />
        <span className="md:hidden text-lg sm:text-2xl font-bold whitespace-nowrap">
          Bahçedeki Sandal
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className={`text-base md:text-lg font-medium leading-normal cursor-pointer relative py-2 transition-all duration-300 group ${
                currentPage === item.id
                  ? 'text-black dark:text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-300 transition-all duration-300 ${
                  currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-900 dark:text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background-light dark:bg-background-dark border-b border-gray-200/50 dark:border-gray-700/50 md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={`text-base font-medium leading-normal cursor-pointer transition-colors ${
                  currentPage === item.id
                    ? 'text-black dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
