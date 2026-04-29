import React from 'react';
import brandingIcon from '../../assets/Services/brandingIcon.svg';
import interactiveIcon from '../../assets/Services/interactiveIcon.svg';
import illustrationIcon from '../../assets/Services/illustrationIcon.svg';
import './Services.css';
import brandingText from '../../assets/Services/brandingText.svg'; 
import interactiveText from '../../assets/Services/interactiveText.svg';
import illustrationText from '../../assets/Services/illustrationText.svg';

const services = [
  {
    icon: brandingIcon,
    titleImg: brandingText,
    description: 'Мы создаем уникальные бренды, которые выделяются на рынке и запоминаются аудитории навсегда.',
    items: ['Дизайн логотипа', 'Визитные карточки', 'Социальные сети', 'Реклама', 'Продвижение'],
  },
  {
    icon: interactiveIcon,
    titleImg: interactiveText,
    description: 'Интерактивные решения, обеспечивающие плавное взаимодействие пользователя с вашим продуктом.',
    items: ['Веб-разработка', 'Мобильные приложения', 'UI/UX Дизайн', 'Прототипирование', 'Тестирование'],
  },
  {
    icon: illustrationIcon,
    titleImg: illustrationText,
    description: 'Оживляем идеи с помощью креативных иллюстраций и высококачественного 3D-моделирования.',
    items: ['2D Иллюстрации', '3D Моделирование', 'Анимация', 'Концепт-арт', 'Игровая графика'],
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-grid">

          {services.map((service, index) => (
            <div key={index} className="service-card">

              <div className="service-header">
                <img src={service.icon} alt="" className="service-icon" />
                <img src={service.titleImg} alt="" className="service-title-img" />
              </div>

              <p className="service-desc">{service.description}</p>

              <div className="service-list">
                {service.items.map((item, i) => (
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
