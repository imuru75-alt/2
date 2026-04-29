import React from 'react';
import { ShoppingCart, Search, Menu, ChevronDown } from 'lucide-react';
import './Header.css';
// 1. Импортируем Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        
        <div style={{ width: '40px' }}></div>

        <nav className="header-nav">
          {/* 2. Заменили <a> на <Link to="/"> для Главной */}
          <Link to="/" className="nav-link active">
            ГЛАВНАЯ <ChevronDown size={12} strokeWidth={3} />
          </Link>
          
          <a href="#" className="nav-link">
            СТРАНИЦЫ <ChevronDown size={12} strokeWidth={3} />
          </a>
          
          <a href="#" className="nav-link">
            БЛОГ <ChevronDown size={12} strokeWidth={3} />
          </a>
          
          {/* 3. Заменили <a> на <Link to="/portfolio"> для Портфолио */}
          <Link to="/portfolio" className="nav-link">
            ПОРТФОЛИО <ChevronDown size={12} strokeWidth={3} />
          </Link>
          
          <a href="#" className="nav-link">
            МАГАЗИН <ChevronDown size={12} strokeWidth={3} />
          </a>
          
          <a href="#" className="nav-link" style={{ gap: 0 }}>
            КОНТАКТЫ
          </a>
        </nav>

        <div className="header-actions">
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
