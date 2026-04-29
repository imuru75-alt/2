import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import avatar1 from '../../assets/Testimonials/avatar1.svg';
import avatar2 from '../../assets/Testimonials/avatar2.svg';
import testimonialLine from '../../assets/Testimonials/testimonial-line.svg'; 
import quoteIcon from '../../assets/Testimonials/quote-icon.svg'; 
import './Testimonials.css';

const testimonialsData = [
  {
    text: "Я должен объяснить вам, как родилась эта ошибочная идея порицания удовольствия и восхваления боли, и я дам вам полный отчет.",
    name: "Честер Фейл",
    role: "КЛИЕНТ",
    avatar: avatar1
  },
  {
    text: "Их профессионализм и подход к работе полностью изменили наш взгляд на маркетинг. Исключительный результат и соблюдение всех сроков.",
    name: "Малина Уилланс",
    role: "КЛИЕНТ",
    avatar: avatar2
  }
];

const Testimonials = () => {
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
            <span className="section-subtitle">Отзывы</span>
            <h2 className="portfolio-title">Обратная Связь От Клиентов</h2>
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
          {testimonialsData.map((review, index) => (
            <div key={index} className="testi-card">
              
              <div className="testi-text-box">
                <div className="testi-orange-line"></div>
                <p className="testi-text">"{review.text}"</p>
              </div>

              <div className="testi-deco-line">
                <img src={testimonialLine} alt="Line" />
              </div>
              
              <div className="testi-bottom">
                <div className="testi-author-box">
                  <img loading="lazy" 
  src={review.avatar} 
  alt={review.name} 
  className="testi-avatar" 
/>

                  <div className="testi-name-box">
                    <h4 className="testi-name">{review.name}</h4>
                    <p className="testi-role">{review.role}</p>
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
