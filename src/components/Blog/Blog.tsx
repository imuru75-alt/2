import React from 'react';
import centerImg from '../../assets/Blog/blog-center-img.svg'; 
import './Blog.css';

const blogPosts = [
  {
    category: "UI Дизайн",
    date: "15 Дек 2022",
    title: "Что Такое Маркетинг Цифровых Агентств",
    
  },
  {
    category: "Маркетинг",
    date: "15 Дек 2022",
    title: "Простой Чек-лист по Маркетингу в Социальных Сетях",
  },
  {
    category: "Бизнес",
    date: "15 Дек 2022",
    title: "Поддержка во Время Экспоненциального Роста",
  },
  {
    category: "Маркетинг",
    date: "15 Дек 2022",
    title: "Важность Создания Контента Прямо Сейчас",
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="bg-grid-lines">
        <div className="bg-grid-flex">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>
      </div>

      <div className="blog-container">
        
        <div className="blog-header">
          <div className="portfolio-title-box">
            <span className="section-subtitle">Последние Обновления</span>
            <h2 className="portfolio-title">Посмотрите Некоторые Обновления в Нашем Блоге</h2>
          </div>
          
          <div className="team-desc-box">
            <p className="team-desc">Будьте в курсе последних трендов индустрии, полезных советов и новостей нашей компании.</p>
            <div className="portfolio-view-btn" style={{ marginTop: 0 }}>
              <div className="portfolio-view-bg" style={{ left: '-24px' }}></div>
              <span className="portfolio-view-text">Смотреть Весь Блог</span>
            </div>
          </div>
        </div>

        <div className="blog-content">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card group">
                <div className="blog-meta">
                  <span className="blog-cat">{post.category}</span>
                  <span className="blog-sep">|</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
              </div>
            ))}
          </div>

          <img loading="lazy" src={centerImg} alt="Blog Highlight" className="blog-center-img" />

        </div>

      </div>
    </section>
  );
};

export default Blog;
