import  useTheme  from '../contexts/ThemeContext';
import { useEffect } from 'react';

function ThemeBtn({ darkMode, setDarkMode }) {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    useEffect(() => {
        
        if (darkMode) {
            darkTheme();
        } else {
            lightTheme();
        }
    }, []);

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        setDarkMode(darkModeStatus);
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer pt-[2px]">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}
            />
            <div className="w-14 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[36px] peer-checked:after:border-yellow after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-yellow-300 after:border-yellow-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#3730A3]"></div>
            <span className="ml-3 text-[0.7rem] font-medium text-gray-900 dark:text-gray-300">
                {themeMode === 'dark' ? (
                    <>
                        <span className="text-red-500">LIGHT</span> MODE
                    </>
                ) : (
                    <>
                        <span className="text-red-500">DARK</span> MODE
                    </>
                )}
            </span>
        </label>
    );
}

export default ThemeBtn;