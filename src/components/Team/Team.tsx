import React from 'react';
import { ArrowLeft, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import team1 from '../../assets/Team/team1.svg';
import team2 from '../../assets/Team/team2.svg';
import team3 from '../../assets/Team/team3.svg';
import crossIcon from '../../assets/Portfolio/portfolio-cross.svg'; 
import './Team.css';

const teamMembers = [
  { 
    name: 'Эми Калдерон', 
    role: 'Веб Разработчик', 
    img: team1, 
    active: false 
  },
  { 
    name: 'Рэймонд Хорн', 
    role: 'Цифровой Маркетолог', 
    img: team2, 
    active: true
  },
  { 
    name: 'Линда Таунер', 
    role: 'Дизайнер Приложений', 
    img: team3, 
    active: false 
  },
];

const Team = () => {
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
            <span className="section-subtitle">Наша Команда</span>
            <h2 className="portfolio-title">
              Члены Команды, Строящие Наше Будущее
            </h2>
          </div>
          
          <div className="team-desc-box">
            <p className="team-desc">
              Познакомьтесь с талантливыми специалистами, которые воплощают ваши смелые идеи в реальные цифровые продукты.
            </p>
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
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card group">
              
              <div className="team-img-box">
              <img loading="lazy" 
              src={member.img} 
              alt={member.name} 
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
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
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
