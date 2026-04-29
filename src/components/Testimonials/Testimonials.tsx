import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import avatar1 from '../../assets/Testimonials/avatar1.svg';
import avatar2 from '../../assets/Testimonials/avatar2.svg';
import testimonialLine from '../../assets/Testimonials/testimonial-line.svg'; 
import quoteIcon from '../../assets/Testimonials/quote-icon.svg'; 
import './Testimonials.css';
import { useLanguage } from '../../context/LanguageContext';

const avatars = [
  { name: "Честер Фейл", avatar: avatar1 },
  { name: "Малина Уилланс", avatar: avatar2 }
];

const Testimonials = () => {
  const { t } = useLanguage();
  const reviews = t<string[]>('testimonials.reviews');

  return (
    <section className="testi-section">
      <div className="bg-grid-lines">
        <div className="bg-grid-flex">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>
      </div>
      
      <div className="testi-container">
        <div className="testi-header">
          <div>
            <span className="section-subtitle">{t('testimonials.subtitle')}</span>
            <h2 className="portfolio-title">{t('testimonials.title')}</h2>
          </div>
          <div className="testi-arrows">
            <button className="team-arrow-btn">
              <ArrowLeft size={20} strokeWidth={2} />
            </button>
            <button className="team-arrow-btn">
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
        
        <div className="testi-grid">
          {reviews.map((text, index) => (
            <div key={index} className="testi-card">
              
              <div className="testi-text-box">
                <div className="testi-orange-line"></div>
                <p className="testi-text">"{text}"</p>
              </div>
              
              <div className="testi-deco-line">
                <img src={testimonialLine} alt="Line" />
              </div>
              
              <div className="testi-bottom">
                <div className="testi-author-box">
                  <img loading="lazy" src={avatars[index].avatar} alt="Avatar" className="testi-avatar" />
                  <div className="testi-name-box">
                    <h4 className="testi-name">{avatars[index].name}</h4>
                    <p className="testi-role">{t('testimonials.client')}</p>
                  </div>
                </div>
                <img src={quoteIcon} alt="Quotes" className="testi-quote-icon" />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
