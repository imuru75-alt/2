import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import bgImg from '../../assets/CTA/cta-bg.svg'; 
import './CTA.css';


const CTA = () => {
  return (
    <section className="cta-section">
      <div className="bg-grid-lines">
        <div className="bg-grid-flex">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>
      </div>

      <div className="cta-container">
        <div className="cta-bg-wrapper">
          <img loading="lazy" src={bgImg} alt="Team Background" />
        </div>

        <div className="cta-box">
          <h2 className="cta-title">
            Давайте Создадим Что-то Великое <span style={{ color: '#dcb17a' }}>Вместе!</span>
          </h2>

          <button className="cta-btn group">
            <span className="cta-btn-text">Свяжитесь с Нами</span>
            <ArrowUpRight size={18} strokeWidth={2} className="cta-btn-icon" />
          </button>
        </div>
      </div>

      <div className="cta-spacer"></div>
    </section>
  );
};

export default CTA;
