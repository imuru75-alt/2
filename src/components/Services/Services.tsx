import React from 'react';
import brandingIcon from '../../assets/Services/brandingIcon.svg';
import interactiveIcon from '../../assets/Services/interactiveIcon.svg';
import illustrationIcon from '../../assets/Services/illustrationIcon.svg';
import brandingText from '../../assets/Services/brandingText.svg'; 
import interactiveText from '../../assets/Services/interactiveText.svg';
import illustrationText from '../../assets/Services/illustrationText.svg';
import './Services.css';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceText {
  desc: string;
  items: string[];
}

const serviceImages = [
  { icon: brandingIcon, titleImg: brandingText },
  { icon: interactiveIcon, titleImg: interactiveText },
  { icon: illustrationIcon, titleImg: illustrationText }
];

const Services = () => {
  const { t } = useLanguage();
  // Передаем интерфейс ServiceText в качестве типа для массива
  const texts = t<ServiceText[]>('services');

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-grid">
          
          {texts.map((text, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <img src={serviceImages[index].icon} alt="" className="service-icon" />
                <img src={serviceImages[index].titleImg} alt="" className="service-title-img" />
              </div>
              
              <p className="service-desc">{text.desc}</p>
              
              <div className="service-list">
                {text.items.map((item, i) => (
                  <div key={i} className="service-list-item">
                    <div className="service-bullet"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};
export default Services;