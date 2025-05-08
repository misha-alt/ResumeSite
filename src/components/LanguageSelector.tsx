import React from 'react';
import { Language } from '../translations/types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className={`px-2 py-1 rounded ${
          currentLanguage === 'en'
            ? 'bg-primary-500 text-white'
            : 'bg-transparent text-gray-600 hover:text-primary-500'
        }`}
        onClick={() => onLanguageChange('en')}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded ${
          currentLanguage === 'es'
            ? 'bg-primary-500 text-white'
            : 'bg-transparent text-gray-600 hover:text-primary-500'
        }`}
        onClick={() => onLanguageChange('es')}
      >
        ES
      </button>
      <button
        className={`px-2 py-1 rounded ${
          currentLanguage === 'ru'
            ? 'bg-primary-500 text-white'
            : 'bg-transparent text-gray-600 hover:text-primary-500'
        }`}
        onClick={() => onLanguageChange('ru')}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSelector;