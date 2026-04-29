import React from 'react';
import { Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-info">
            <p className="footer-desc">
              Ваш надежный партнер в мире цифровых технологий. Мы стремимся превзойти ожидания в каждом нашем проекте.
            </p>
            <button className="footer-phone-btn">
              <Phone size={14} strokeWidth={2.5} />
              (973) 068 2300
            </button>
          </div>

          <div className="footer-links-box">
            <h4 className="footer-links-title">Быстрые Ссылки</h4>
            <div className="footer-links-grid">
              <div className="footer-links-col">
                <a href="#" className="footer-link">О Нас</a>
                <a href="#" className="footer-link">Тарифы</a>
                <a href="#" className="footer-link">Контакты</a>
                <a href="#" className="footer-link">Наша Команда</a>
                <a href="#" className="footer-link">Новости</a>
              </div>
              <div className="footer-links-col">
                <a href="#" className="footer-link">Кейсы</a>
                <a href="#" className="footer-link">Частые Вопросы</a>
                <a href="#" className="footer-link">Услуги</a>
                <a href="#" className="footer-link">Поддержка</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Агентство Все Права Защищены</p>
          <div className="footer-legal">
            <a href="#">Пользовательское Соглашение</a>
            <a href="#">Политика Конфиденциальности</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
