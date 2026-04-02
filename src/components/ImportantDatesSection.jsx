import { useStore } from '../store/useStore';
import { TRANSLATIONS, KEY_DATES_TABLE, ISLAMIC_MONTHS } from '../data/calendarData';

const ImportantDatesSection = () => {
  const { language } = useStore();
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ur';

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-10 mb-20" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* ===== KEY ISLAMIC DATES TABLE ===== */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
          {t.keyIslamicDates}
        </h2>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                <th className="px-4 py-3 text-start font-semibold">{t.keyIslamicDate}</th>
                <th className="px-4 py-3 text-start font-semibold">{t.gregorianDate}</th>
                <th className="px-4 py-3 text-start font-semibold">{t.hijriDate}</th>
              </tr>
            </thead>
            <tbody>
              {KEY_DATES_TABLE.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`border-b border-slate-100 dark:border-slate-800 transition-colors hover:bg-teal-50/50 dark:hover:bg-teal-900/20 ${idx % 2 === 0 ? 'bg-surface-light dark:bg-surface-dark' : 'bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark'}`}
                >
                  <td className="px-4 py-3 font-semibold text-teal-700 dark:text-teal-300">
                    {isRtl ? row.eventUr : row.eventEn}
                  </td>
                  <td className="px-4 py-3 text-text-light dark:text-text-dark">
                    {isRtl ? row.gregDateUr : row.gregDateEn}
                  </td>
                  <td className="px-4 py-3 text-text-mutedLight dark:text-text-mutedDark font-medium">
                    {row.hijriDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footnotes */}
        <div className="mt-4 space-y-2 text-xs md:text-sm text-text-mutedLight dark:text-text-mutedDark px-2">
          <p className="italic flex items-start gap-2">
            <span className="text-teal-500 mt-0.5">🌙</span>
            {t.moonNote}
          </p>
          <p className="italic flex items-start gap-2">
            <span className="text-teal-500 mt-0.5">✦</span>
            {t.laylaNight}
          </p>
        </div>
      </div>

      {/* ===== ISLAMIC MONTHS LIST ===== */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
          {t.islamicMonths}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ISLAMIC_MONTHS.map((month) => (
            <div 
              key={month.num} 
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-500 transition-all hover:shadow-md group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm md:text-base shrink-0 group-hover:scale-110 transition-transform">
                {month.num}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm md:text-base font-semibold text-text-light dark:text-text-dark truncate">
                  {isRtl ? month.ur : month.en}
                </span>
                {!isRtl && (
                  <span className="text-xs text-text-mutedLight dark:text-text-mutedDark truncate">
                    {month.ur}
                  </span>
                )}
                {isRtl && (
                  <span className="text-xs text-text-mutedLight dark:text-text-mutedDark truncate">
                    {month.en}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ImportantDatesSection;
