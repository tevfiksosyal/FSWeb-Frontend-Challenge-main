import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Content from './components/Content'; 
import { useLocalStorage } from './hooks/useLocalStorage';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className={darkMode ? 'dark' : null}>
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <LanguageProvider>
        <Content darkMode={darkMode} setDarkMode={setDarkMode}/>
      </LanguageProvider>
    </ThemeProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
    </div>
  );
}

export default App;