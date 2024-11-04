import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Profile() {
  const { translations } = useContext(LanguageContext);

  const profile = {
    birthday: "15.12.1997",
    residenceCity: "İstanbul",
    education: "Akdeniz University",
    preferedRole: "Frontend, UI",
  };

  const profileFields = {
    birthday: translations.birthday,
    residenceCity: translations.residenceCity,
    education: translations.education,
    preferedRole: translations.preferedRole,
  };

  return (
    <div className='flex justify-around'>
      <div>
        <h2 className="text-4xl font-bold text-left mb-8  text-[#1F2937] dark:text-[#6B7280]">{translations.profile}</h2>
        <div>
          <h3 className="text-2xl font-semibold text-[#3730A3] dark:text-indigo-300 mb-4">{translations.profile}</h3>
          <div className='flex '>
            <div className='w-32 '>
                {Object.keys(profileFields).map((key) => (
                <p key={key}>
                    <span className="font-bold text-[#1F2937] dark:text-white">
                    {profileFields[key]}:
                    </span>
                </p>
                ))}
            </div>
            <div className='w-60 '>
                {Object.keys(profile).map((key) => (
                <p key={key}>
                    <span className="text-[#1F2937] dark:text-white">{profile[key]}</span>
                </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/3 mt-16 flex-wrap  translate-x-[-60px]'> {/* Added -ml-20 here */}
        <h3 className="text-2xl font-semibold text-[#3730A3] dark:text-indigo-300 mb-4">{translations.aboutMe}</h3>
        <p className='text-sm text-[#6B7280] dark:text-white mb-4'>
          {translations.aboutTxt}
          <br /> <br />
        </p>
      </div>
    </div>
  );
}

export default Profile;



/*
          {Object.keys(profile).map((key) => (
            <p key={key}>
              <span className="font-bold text-[#1F2937] dark:text-white">
                {profileFields[key]}
              </span>
              <span className="text-[#1F2937] dark:text-white">: &nbsp; &nbsp; {profile[key]}</span>
            </p>
          ))}
*/
