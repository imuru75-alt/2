/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { en } from '../locales/en';
import { ru } from '../locales/ru';

export type Language = 'ru' | 'en';
export type Dictionary = typeof ru;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Используем дженерик вместо any, по умолчанию ожидаем строку
  t: <T = string>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('app_language');
    return (savedLang === 'ru' || savedLang === 'en') ? savedLang : 'ru';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = <T = string,>(key: string): T => {
    // Приводим словари к неизвестному объекту, чтобы TypeScript не ругался
    const dictionary = (language === 'ru' ? ru : en) as Record<string, unknown>;
    const keys = key.split('.');
    let result: unknown = dictionary;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key as unknown as T;
      }
    }
    return result as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};