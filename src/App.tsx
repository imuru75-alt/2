import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Импорт остальных твоих компонентов главной страницы
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
// Компонент портфолио для главной (оставляем как есть)
import PortfolioSection from "./components/Portfolio/Portfolio"; 
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import CTA from "./components/CTA/CTA";



const HomePage = () => (
  <>
    <Hero />
    <Brands />
    <AboutUs />
    <Services />
    <PortfolioSection />
    <Team />
    <Testimonials />
    <Blog />
    <CTA />
  </>
);
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-[100px]"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
