import AppBar from './components/Appbar';
import Menu from './components/Menu';
import MainComponent from './components/MainComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useEffect } from 'react';
import { initializeTheme } from './redux/slices/themeSlice';

const App: React.FC = () => {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen)

  useEffect(() => {
    // Initialize the theme when the app is mounted
    dispatch(initializeTheme());
  }, [dispatch]);

  useEffect(() => {
    // Apply the theme to the body element
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (!isAuthenticated) {
    return <div className='min-h-screen '>
      <AppBar />
      <div className="flex flex-col w-screen bg-gray-100 font-bold text-xl justify-center items-center  dark:bg-gray-800 dark:text-white">
        !! User is unauthenticated !!
      </div>
    </div>

  }

  return (
    <div className="min-h-screen flex flex-col min-w-screen bg-gray-100 dark:bg-gray-800 dark:text-white">
      <AppBar />
  
      <div
        className={`grid w-full flex-1 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "grid-cols-[1fr_4fr]" : "grid-cols-[0fr_1fr]"
        }`}
      >
        <Menu />
  
        <MainComponent />
      </div>
    </div>
  );
  
};

export default App;
