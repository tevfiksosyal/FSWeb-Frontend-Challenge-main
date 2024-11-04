
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const ProjectCard = ({ title, image, description, technologies, githubLink, viewSiteLink }) => {
    const { translations } = useContext(LanguageContext);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-sm"> 
      <img className="max-w-[90%] pl-5" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#3730A3] dark:text-[#B7AAFF]">{title}</div>
        <p className="text-gray-700 font-inter text-sm dark:text-[#AEBCCF]">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <button key={index} className="inline-block border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] dark:text-[#B7AAFF] hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-gray-900 transition rounded-md px-3 py-1 text-sm font-semibold  mr-2 mb-2">
            {tech}
          </button>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <a href={githubLink} className="text-[#3730A3] dark:text-[#AEBCCF] hover:text-blue-700 mr-4">Github</a>
        <a href={viewSiteLink} className="text-[#3730A3] dark:text-[#AEBCCF] hover:text-blue-700">{translations.viewSite}</a>
      </div>
    </div>
  );
};

export default ProjectCard;
