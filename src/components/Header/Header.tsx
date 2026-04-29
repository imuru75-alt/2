import React from 'react';
import { ShoppingCart, Search, Menu, ChevronDown, Globe } from 'lucide-react';
import './Header.css';
import { Link } from "react-router-dom";
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div style={{ width: '40px' }}></div>
        <nav className="header-nav">
          <Link to="/" className="nav-link active">
            {t('header.home')} <ChevronDown size={12} strokeWidth={3} />
          </Link>
          <a href="#" className="nav-link">
            {t('header.pages')} <ChevronDown size={12} strokeWidth={3} />
          </a>
          <a href="#" className="nav-link">
            {t('header.blog')} <ChevronDown size={12} strokeWidth={3} />
          </a>
          <Link to="/portfolio" className="nav-link">
            {t('header.portfolio')} <ChevronDown size={12} strokeWidth={3} />
          </Link>
          <a href="#" className="nav-link">
            {t('header.shop')} <ChevronDown size={12} strokeWidth={3} />
          </a>
          <a href="#" className="nav-link" style={{ gap: 0 }}>
            {t('header.contacts')}
          </a>
        </nav>
        <div className="header-actions">
          {/* Кнопка смены языка */}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-1 font-bold bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition text-black text-sm mr-2"
          >
            <Globe size={16} /> {language.toUpperCase()}
          </button>
          <button className="cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-badge">0</span>
          </button>
          <button className="cart-btn">
            <Search size={20} />
          </button>
          <button className="menu-btn">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;