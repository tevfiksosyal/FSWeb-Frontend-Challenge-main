import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Skills() {
    const { translations } = useContext(LanguageContext);
    const skills = [
        { skill: "JavaScript", description: translations.descriptionFirst },
        { skill: "React.Js", description: translations.descriptionSecond },
        { skill: "Node.js", description: translations.descriptionThird },
    ];

    return (
        <div className="py-12 bg-white dark:bg-[#252128] text-gray-300 transition-colors duration-300">
            
            <h3 className="text-4xl font-bold text-left mb-8 pl-44 text-[#1F2937] dark:text-[#6B7280]">
                {translations.skills}
            </h3>
            
            <div className="flex justify-center gap-x-24">
                {skills.map((skill, index) => (
                    <div key={index} className="max-w-xs text-left">
                        <h4 className="text-2xl font-semibold text-[#3730A3] dark:text-indigo-300 mb-4">
                            {skill.skill}
                        </h4>
                        <p className="text-sm text-gray-400">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
