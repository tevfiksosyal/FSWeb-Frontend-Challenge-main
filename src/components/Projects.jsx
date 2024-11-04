import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ProjectCard from './ProjectCard';
import { projectsData } from '../projectData';

const Projects = () => {
    const { translations } = useContext(LanguageContext);
    const data = projectsData(translations);
  return (
    <div>
        <h3 className=" max-w-[12%] text-4xl ml-36 pl-4 font-bold text-[#1F2937] dark:text-[#6B7280] mb-8">{translations.projects}</h3>
        <div className="max-w-[92%] mx-auto pl-20"> {/* Adjust max-width as needed */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </div>
        </div>
    </div>

  );
};

export default Projects;
