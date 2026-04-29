import React from 'react';
import cocaColaIcon from '../../assets/Logos/Coca-cola.svg';
import galochkaIcon from '../../assets/Logos/Galochka.svg'; 
import nikeIcon from '../../assets/Logos/Nike.svg';
import poloskiIcon from '../../assets/Logos/Poloski.svg'; 
import pumaIcon from '../../assets/Logos/Puma.svg';
import yaMarketIcon from '../../assets/Logos/Ya-Market.svg';
import './Brands.css';

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-flex">
          <img src={poloskiIcon} alt="Brand" className="brand-img brand-img-lg" />
          <img src={galochkaIcon} alt="Brand" className="brand-img" />
          <img src={yaMarketIcon} alt="Brand" className="brand-img brand-img-lg" />
          <img src={nikeIcon} alt="Nike" className="brand-img brand-img-sm" />
          <img src={cocaColaIcon} alt="Coca Cola" className="brand-img" />
          <img src={pumaIcon} alt="Puma" className="brand-img brand-img-lg" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
