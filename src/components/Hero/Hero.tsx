import React from 'react';
import shapeIcon from '../../assets/Hero/shape.svg';
import doubleressIcon from '../../assets/Hero/Doubleress.svg';
import playButtonIcon from '../../assets/Hero/Play-button.svg';
import guysIcon from '../../assets/Hero/guys-s.svg';
import groupIcon from '../../assets/Hero/Group.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* === ЛЕВАЯ ЧАСТЬ === */}
        <div className="hero-left-col">
          <div className="hero-deco-top">
            <img src={doubleressIcon} alt="Decoration" className="w-12" />
          </div>

          <h1 className="hero-title">
            Цифровые <br />
            Решения <br />
            Агентства
          </h1>

          <div className="hero-subtitle-box">
            <p className="hero-subtitle">
              Мы предоставляем передовые цифровые решения для вашего бизнеса. Повышаем эффективность, создаем креативные продукты и выводим бренды на новый уровень.
            </p>

            <div className="hero-scroll-btn">
              <span className="hero-scroll-text">
                &laquo; Вниз
              </span>
              <img
                src={shapeIcon}
                alt="Shape"
                className="hero-scroll-shape"
              />
            </div>
          </div>
        </div>

        {/* === ПРАВАЯ ЧАСТЬ === */}
        <div className="hero-right-col">
          <div className="hero-right-card">
            
            <div className="hero-card-top">
              <div className="hero-image-wrapper">
                <img loading="lazy" src={guysIcon} alt="Hero" className="hero-image" />
                <div className="hero-play-btn">
                  <img
                    src={playButtonIcon}
                    alt="Play Video"
                    className="w-28 h-28"
                  />
                </div>
              </div>

              <div className="hero-stats-wrapper">
                <div>
                  <h3 className="hero-stat-num">12K+</h3>
                  <p className="hero-stat-desc">Проектов завершено</p>
                </div>
                <div>
                  <h3 className="hero-stat-num">7K+</h3>
                  <p className="hero-stat-desc">Счастливых клиентов</p>
                </div>
                <div>
                  <h3 className="hero-stat-num">10+</h3>
                  <p className="hero-stat-desc">Лет опыта</p>
                </div>
                <div>
                  <h3 className="hero-stat-num">270+</h3>
                  <p className="hero-stat-desc">Получено наград</p>
                </div>
              </div>
            </div>

            <div className="hero-card-bottom">
              <div className="hero-bottom-group">
                <img loading="lazy"
                src={groupIcon}
                alt="Users Group"
                className="hero-group-img"
                />

                <div>
                  <h4 className="hero-group-title">240 Бизнесменов</h4>
                  <p className="hero-group-desc">Уже зарегистрировано</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
