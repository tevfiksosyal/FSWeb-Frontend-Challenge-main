import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Languagetxt() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <span className="text-gray-800 dark:text-gray-200">
      <button
        className="focus:outline-none text-[0.7rem] font-bold"
        onClick={toggleLanguage}
      >
        {language === 'en' ? (
          <>
            <span className="text-[#B7AAFF]">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          <>
            SWITCH TO <span className="text-[#B7AAFF]">ENGLISH</span>
          </>
        )}
      </button>
    </span>
  );
}

export default Languagetxt;