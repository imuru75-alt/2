import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import portfolioImg from '../../assets/Portfolio/portfolioImg.svg'; 
import crossIcon from '../../assets/Portfolio/portfolio-cross.svg'; 
import './Protfolio.css';
import { useLanguage } from '../../context/LanguageContext';

const portfolioBase = [
  { num: '01.', active: false },
  { num: '02.', active: true, img: portfolioImg },
  { num: '03.', active: false },
  { num: '04.', active: false },
];

const Portfolio = () => {
  const { t } = useLanguage();
  const items = t<string[]>('portfolio.items');

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
            <span className="section-subtitle">{t('portfolio.subtitle')}</span>
            <h2 className="portfolio-title">
              {t('portfolio.title')}
            </h2>
          </div>

          <div className="portfolio-desc-box">
            <p className="portfolio-desc">
              {t('portfolio.desc')}
            </p>
            <div className="portfolio-view-btn group">
              <div className="portfolio-view-bg"></div>
              <span className="portfolio-view-text">{t('portfolio.btn')}</span>
            </div>
          </div>
        </div>

        <div className="portfolio-list">
          {portfolioBase.map((item, index) => (
            <div 
              key={index} 
              className={`portfolio-item group ${item.active ? 'active' : 'inactive'}`}
            >
              
              <div className="portfolio-item-left">
                <span className="portfolio-num">{item.num}</span>
                <h3 className="portfolio-item-title">{items[index]}</h3>
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
                  alt={items[index]} 
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