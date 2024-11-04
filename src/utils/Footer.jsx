import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';


const Footer = () => {
    const { translations } = useContext(LanguageContext);
  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#141414] p-36 mt-20">
      <div className="">
        <div className='flex flex-col justify-center'>
        <h2 className=" text-[#1F2937] dark:text-[#AEBCCF] text-4xl font-bold ">{translations.footerTxtOne}</h2>
        <h2 className="text-[#1F2937] dark:text-[#AEBCCF] text-4xl font-bold ">{translations.footerTxtTwo}</h2>
        </div>
        
        <div className="flex flex-row md:flex-row justify-between mt-20">
          <div className="flex items-center">
          👉&nbsp;<a href="mailto:e.cetinerdem@gmail.com" className="text-[#AF0C48] dark:text-[#BAB2E7] underline  transition-colors font-semibold">
            tevfiksosyal@gmail.com
            </a>
          </div>
          <div className="flex space-x-4 mr-4">
            <a href="https://www.linkedin.com/in/tevfik-fikret-sosyal-52a167290/" className="text-[#0A0A14] dark:text-[#E1E1FF] hover:text-gray-600 transition-colors font-semibold">{translations.personalBlog}</a>
            <a href="https://github.com/tevfiksosyal" className="text-[#00AB6B] dark:text-[#00AB6B] hover:text-green-300 transition-colors font-semibold">Github</a>
            <a href="https://www.linkedin.com/in/tevfik-fikret-sosyal-52a167290/" className="text-[#0077B5] dark:text-[#0077B5] hover:text-blue-300 transition-colors font-semibold">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;