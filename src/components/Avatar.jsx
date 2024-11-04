import React from 'react';

const Avatar = () => {
  return (
    <div 
      className={`
        w-12 h-12 
        rounded-full 
        flex items-center justify-center 
        text-2xl font-semibold 
        bg-[#EEEBFF] dark:bg-[#3730A3] 
        text-[#3730A3] dark:text-[#EEEBFF]
        transition-colors duration-300
        overflow-hidden
      `}
    >
      <span className="transform rotate-12 translate-y-[-1px] translate-x-[-1px] inline-block">TFS</span>
    </div>
  );
};

export default Avatar;