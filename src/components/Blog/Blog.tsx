import React from 'react';
import centerImg from '../../assets/Blog/blog-center-img.svg'; 
import './Blog.css';
import { useLanguage } from '../../context/LanguageContext';

interface BlogPost {
  cat: string;
  date: string;
  title: string;
}

const Blog = () => {
  const { t } = useLanguage();
  const posts = t<BlogPost[]>('blog.posts');

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
            <span className="section-subtitle">{t('blog.subtitle')}</span>
            <h2 className="portfolio-title">{t('blog.title')}</h2>
          </div>
          
          <div className="team-desc-box">
            <p className="team-desc">{t('blog.desc')}</p>
            <div className="portfolio-view-btn" style={{ marginTop: 0 }}>
              <div className="portfolio-view-bg" style={{ left: '-24px' }}></div>
              <span className="portfolio-view-text">{t('blog.btn')}</span>
            </div>
          </div>
        </div>
        
        <div className="blog-content">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div key={index} className="blog-card group">
                <div className="blog-meta">
                  <span className="blog-cat">{post.cat}</span>
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