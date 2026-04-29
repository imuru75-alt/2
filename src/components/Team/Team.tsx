import React from 'react';
import { ArrowLeft, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import team1 from '../../assets/Team/team1.svg';
import team2 from '../../assets/Team/team2.svg';
import team3 from '../../assets/Team/team3.svg';
import crossIcon from '../../assets/Portfolio/portfolio-cross.svg'; 
import './Team.css';
import { useLanguage } from '../../context/LanguageContext';

const teamImages = [
  { img: team1, active: false },
  { img: team2, active: true },
  { img: team3, active: false },
];

const Team = () => {
  const { t } = useLanguage();
  
  return (
    <section className="team-section">
      <div className="bg-grid-lines">
        <div className="bg-grid-flex">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>
      </div>
      
      <div className="team-container">
        <div className="team-cross">
          <img src={crossIcon} alt="Decoration" />
        </div>
        
        <div className="team-header-flex">
          <div className="team-title-box">
            <span className="section-subtitle">{t('team.subtitle')}</span>
            <h2 className="portfolio-title">{t('team.title')}</h2>
          </div>
          <div className="team-desc-box">
            <p className="team-desc">{t('team.desc')}</p>
            <div className="team-arrows">
              <button className="team-arrow-btn">
                <ArrowLeft size={20} strokeWidth={2} />
              </button>
              <button className="team-arrow-btn">
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="team-grid">
          {teamImages.map((member, index) => (
            <div key={index} className="team-card group">
              <div className="team-img-box">
                <img 
                  loading="lazy" 
                  src={member.img} 
                  alt="Team" 
                  className={`team-img ${member.active ? 'team-img-color' : 'team-img-gray'}`} 
                />
                
                {member.active && (
                  <div className="team-socials">
                    <Facebook size={14} className="social-icon" fill="currentColor" />
                    <Twitter size={14} className="social-icon" fill="currentColor" />
                    <Instagram size={14} className="social-icon" />
                    <Linkedin size={14} className="social-icon" fill="currentColor" />
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="team-name">{t(`team.names.${index}`)}</h4>
                <p className="team-role">{t(`team.roles.${index}`)}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-pagination">
          <div className="pag-dot-active"></div>
          <div className="pag-dot"></div>
          <div className="pag-dot"></div>
        </div>
      </div>
    </section>
  );
};
export default Team;