import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import portfolioImg from '../../assets/Portfolio/portfolioImg.svg'; 
import crossIcon from '../../assets/Portfolio/portfolio-cross.svg'; 
import './Protfolio.css';

const portfolioItems = [
  { num: '01.', title: 'Веб и Мобильная Разработка', active: false },
  { num: '02.', title: 'Интерактивный Дизайн', active: true, img: portfolioImg },
  { num: '03.', title: 'Цифровой Маркетинг', active: false },
  { num: '04.', title: 'Брендинг и Стратегия', active: false },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      
      <div className="bg-grid-lines">
        <div className="bg-grid-flex">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>
      </div>

      <div className="portfolio-container">
        
        <div className="portfolio-header-flex">
          <div className="portfolio-cross">
             <img src={crossIcon} alt="Decoration" />
          </div>

          <div className="portfolio-title-box">
            <span className="section-subtitle">Портфолио</span>
            <h2 className="portfolio-title">
              Мы создаем решения, которые объединяют, поддерживают и вдохновляют
            </h2>
          </div>

          <div className="portfolio-desc-box">
            <p className="portfolio-desc">
              Ознакомьтесь с нашими лучшими кейсами, где дизайн встречается с передовыми технологиями для достижения бизнес-целей.
            </p>
            <div className="portfolio-view-btn group">
              <div className="portfolio-view-bg"></div>
              <span className="portfolio-view-text">Смотреть всё портфолио</span>
            </div>
          </div>
        </div>

        <div className="portfolio-list">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`portfolio-item group ${item.active ? 'active' : 'inactive'}`}
            >
              
              <div className="portfolio-item-left">
                <span className="portfolio-num">{item.num}</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
              </div>
              
              <div className="portfolio-item-icon">
                {item.active ? (
                  <ArrowUpRight className="portfolio-arrow-active" strokeWidth={2} />
                ) : (
                  <ArrowRight className="portfolio-arrow-inactive" strokeWidth={2} />
                )}
              </div>

              {item.active && item.img && (
  <img loading="lazy" 
    src={item.img} 
    alt={item.title} 
    className="portfolio-hover-img" 
  />
)}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
