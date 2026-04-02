import { Moon, Sun, Languages } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../data/calendarData';

const Header = () => {
  const { language, theme, toggleLanguage, toggleTheme } = useStore();
  const t = TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-background-light/95 dark:bg-background-dark/95">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 px-4">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-dark to-accent-light dark:from-accent-light dark:to-accent-dark">
                {language === 'ur' ? 'اسلامی کیلنڈر 2026' : 'Islamic Calendar 2026'}
              </h1>
              <span className="text-xs text-text-mutedLight dark:text-text-mutedDark">
                {language === 'ur' ? 'ہجری 1447 / 1448' : 'Hijri 1447 / 1448'}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark hover:opacity-80 transition-opacity"
                title={t.languageToggle}
              >
                <Languages size={18} className="text-accent" />
                <span className="text-sm font-medium">{t.languageToggle}</span>
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark hover:opacity-80 transition-opacity"
                title={t.themeToggle}
              >
                {theme === 'dark' ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-accent" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
