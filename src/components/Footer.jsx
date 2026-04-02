import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../data/calendarData';
import { Phone, Mail, Link as LinkIcon } from 'lucide-react';

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const Youtube = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
);

const Footer = () => {
  const { language } = useStore();
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ur';

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark py-8 px-4 sm:px-6 lg:px-8 mt-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Brand & Intro */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-start max-w-sm">
          {/* Mock Logo area since we don't have the explicit PNG, styling it nicely */}
          <div className="flex items-center gap-2 mb-4 font-bold text-lg md:text-xl text-accent dark:text-accent-light">
             <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xl">S</span>
             </div>
             {t.saraTravel}
          </div>
          <p className="text-sm text-text-mutedLight dark:text-text-mutedDark mb-6">
            Authorized and IATA-accredited Hajj & Umrah agency, offering the best and most affordable packages. Founded in 1994.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-accent hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-accent hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-accent hover:text-white transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">{language === 'ur' ? 'اہم لنکس' : 'Quick Links'}</h4>
          <ul className="space-y-2 text-sm text-text-mutedLight dark:text-text-mutedDark">
            <li><a href="#" className="hover:text-accent transition-colors">{t.home}</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">{t.umrah}</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Ramadan Umrah</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">{t.hajj}</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">{t.halalTours}</a></li>
            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><LinkIcon size={14}/> {t.downloadPosters}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
          <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">{t.contact}</h4>
          <ul className="space-y-4 text-sm text-text-mutedLight dark:text-text-mutedDark">
            <li className="flex items-center gap-3 justify-center sm:justify-start hover:text-accent transition-colors cursor-pointer">
              <Phone size={16} />
              <span>+1 (718) 848-1222</span>
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start hover:text-accent transition-colors cursor-pointer">
              <Mail size={16} />
              <span>info@sarainternationaltravel.com</span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-accent to-accent-light dark:from-accent-dark dark:to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent/30 transition-all active:scale-95">
            {t.registerNow}
          </button>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-text-mutedLight dark:text-text-mutedDark">
        <p>Ⓒ 2026 All rights Reserved • Sara International Travel USA • Umrah License Number – 17002</p>
      </div>
    </footer>
  );
};

export default Footer;
