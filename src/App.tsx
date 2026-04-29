// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // Импортируем Провайдер
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
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
    <LanguageProvider> {/* Оборачиваем всё приложение */}
      <BrowserRouter>
        <Header />
        <main className="pt-[100px]"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;