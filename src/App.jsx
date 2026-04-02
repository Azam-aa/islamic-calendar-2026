import { useEffect } from 'react';
import { useStore } from './store/useStore';
import Header from './components/Header';
import Calendar from './components/Calendar';
import ImportantDatesSection from './components/ImportantDatesSection';
import AdUnit from './components/AdUnit';

function App() {
  const { theme, language } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ur' ? 'ur' : 'en';
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent/30 selection:text-accent-dark dark:selection:text-accent-light">
      <Header />
      
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto md:px-8 mt-2 md:mt-6 mb-20">
        {/* Top Ad */}
        <AdUnit className="w-[320px] sm:w-[468px] md:w-[728px] h-[50px] md:h-[90px] rounded-lg mt-2 mb-4" />

        {/* Calendar */}
        <Calendar />

        {/* Ad between calendar and info section */}
        <AdUnit className="w-[320px] sm:w-[468px] md:w-[728px] h-[50px] md:h-[90px] rounded-lg mt-6 mb-2" />

        {/* Important Dates & Islamic Months Section */}
        <ImportantDatesSection />
      </main>

      {/* Sticky Bottom Ad Banner */}
      <div className="fixed bottom-0 left-0 w-full z-30 pointer-events-none flex justify-center">
        <div className="pointer-events-auto bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-lg border-t border-slate-200 dark:border-slate-800 p-2 md:p-3 max-w-screen-xl mx-auto rounded-t-xl">
          <AdUnit className="w-[320px] sm:w-[468px] md:w-[728px] h-[50px] rounded" format="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default App;
