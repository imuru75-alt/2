import React from 'react';
import { Phone } from 'lucide-react';
import './Footer.css';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const col1 = t<string[]>('footer.col1');
  const col2 = t<string[]>('footer.col2');

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-info">
            <p className="footer-desc">
              {t('footer.desc')}
            </p>
            <button className="footer-phone-btn">
              <Phone size={14} strokeWidth={2.5} />
              (973) 068 2300
            </button>
          </div>
          
          <div className="footer-links-box">
            <h4 className="footer-links-title">{t('footer.linksTitle')}</h4>
            <div className="footer-links-grid">
              <div className="footer-links-col">
                {col1.map((link, i) => (
                  <a key={i} href="#" className="footer-link">{link}</a>
                ))}
              </div>
              <div className="footer-links-col">
                {col2.map((link, i) => (
                  <a key={i} href="#" className="footer-link">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-legal">
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.privacy')}</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
export default Footer;