import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Info } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../data/calendarData';

const EventModal = ({ isOpen, onClose, data }) => {
  const { language } = useStore();
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ur';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const { date, hijri, events } = data;
  const formattedDate = date.toLocaleDateString(isRtl ? 'ur-PK' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark">
            <h3 className="text-lg font-bold">{t.details}</h3>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto">
            {/* Gregorian Date */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse mb-6">
              <div className="p-3 rounded-full bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400 shrink-0">
                <CalendarIcon size={24} />
              </div>
              <div>
                <p className="text-sm text-text-mutedLight dark:text-text-mutedDark mb-1">{t.gregLabel}</p>
                <div className="text-base font-medium">{formattedDate}</div>
              </div>
            </div>

            {/* Hijri Date */}
            {hijri && (
              <div className="flex items-start space-x-3 rtl:space-x-reverse mb-6">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 shrink-0">
                  <CalendarIcon size={24} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-sm text-text-mutedLight dark:text-text-mutedDark mb-1">{t.hijriLabel}</p>
                  <div className="text-base font-medium">
                    {hijri.day} {language === 'ur' ? hijri.monthUr : hijri.monthEn} {hijri.year} AH
                  </div>
                </div>
              </div>
            )}

            {/* Events */}
            {events && events.length > 0 ? (
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Info size={16} />
                  {t.importantDates}
                </h4>
                <div className="space-y-3">
                  {events.map((event, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 border border-teal-500/10">
                      <div className="font-bold text-lg mb-1">
                        {language === 'ur' ? event.titleUr : event.titleEn}
                      </div>
                      <div className="text-sm text-text-mutedLight dark:text-text-mutedDark">
                        {event.hijriDate}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-4 p-4 text-center text-sm text-text-mutedLight dark:text-text-mutedDark bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark rounded-xl">
                {t.noEvents}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EventModal;
