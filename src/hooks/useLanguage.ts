import { useState, useEffect } from 'react';
import { Language } from '../translations/types';
import { translations } from '../translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      const supportedLanguages: Language[] = ['en', 'es', 'ru'];
      
      if (supportedLanguages.includes(browserLang as Language)) {
        setCurrentLanguage(browserLang as Language);
      } else {
        setCurrentLanguage('en'); // Default to English
      }
    };

    detectLanguage();
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value as string;
  };

  return { currentLanguage, setCurrentLanguage, t };
};