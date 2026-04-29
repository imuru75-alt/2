import React from 'react';
import aboutGirlImg from '../../assets/AboutUs/aboutGirl.svg'; 
import spiralIcon from '../../assets/AboutUs/spiralOrange.svg'; 
import halfCircleIcon from '../../assets/AboutUs/halfCircleOrange.svg';
import outlineLogoIcon from '../../assets/AboutUs/outlineLogo.svg'; 
import './AboutUs.css';
import { useLanguage } from '../../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-header">
            <span className="section-subtitle">{t('about.subtitle')}</span>
            <h2 className="about-title">{t('about.title')}</h2>
        </div>
        
        <div className="about-grid">
            <div className="about-left">
                <div className="about-spiral">
                    <img src={spiralIcon} alt="Decoration" />
                </div>
                <div className="about-circle">
                    <img src={halfCircleIcon} alt="Decoration" />
                </div>
                <div className="about-img-box">
                    <img loading="lazy" src={aboutGirlImg} alt="About Us" className="about-img" />
                </div>
                <div className="about-learn-btn group">
                    <div className="about-learn-bg"></div>
                    <span className="about-learn-text">{t('about.btn')}</span>
                </div>
                <div className="about-stats">
                    <div className="about-stats-flex">
                        <div className="about-stat-item">
                            <h3 className="about-stat-num">300+</h3>
                            <p className="about-stat-desc">{t('about.stats.emp')}</p>
                        </div>
                        <div className="about-stat-item">
                            <h3 className="about-stat-num">20+</h3>
                            <p className="about-stat-desc">{t('about.stats.offices')}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about-right">
                <div className="about-logo-outline">
                    <img src={outlineLogoIcon} alt="Logo" />
                </div>
                <div className="about-text-content">
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  );
};
export default AboutUs;