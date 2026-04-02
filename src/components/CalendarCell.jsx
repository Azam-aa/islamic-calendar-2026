import { useStore } from '../store/useStore';
import clsx from 'clsx';

const CalendarCell = ({ data, onClick }) => {
  const { language } = useStore();
  const { date, isCurrentMonth, hijri, events } = data;
  
  if (!date) return <div className="p-2"></div>;

  const today = new Date();
  const isToday = 
    date.getDate() === today.getDate() && 
    date.getMonth() === today.getMonth() && 
    date.getFullYear() === today.getFullYear();

  const hasEvents = events && events.length > 0;
  const hasMajorEvent = hasEvents && events.some(e => e.isMajor);
  
  const baseClasses = "relative flex flex-col justify-start p-1 md:p-2 border rounded-lg md:border-2 transition-all duration-200 cursor-pointer overflow-hidden min-h-[52px] md:min-h-[72px]";
  const inactiveClasses = "opacity-30 border-transparent bg-transparent pointer-events-none";
  
  // Normal active style
  let cellBg = "bg-surface-light dark:bg-surface-dark border-slate-200 dark:border-slate-800 hover:border-accent dark:hover:border-accent hover:shadow-md";
  
  // Event day: change the whole cell background color
  if (hasEvents && isCurrentMonth) {
    if (hasMajorEvent) {
      // Major event: prominent teal/cyan tinted background
      cellBg = "bg-gradient-to-br from-teal-500/20 to-cyan-500/20 dark:from-teal-500/30 dark:to-cyan-400/20 border-teal-400/60 dark:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/10";
    } else {
      // Minor event: subtle emerald tint
      cellBg = "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300/50 dark:border-emerald-600/40 hover:shadow-md";
    }
  }
  
  const activeClasses = isCurrentMonth ? cellBg : inactiveClasses;
  const todayClasses = isToday && isCurrentMonth ? "ring-2 ring-accent dark:ring-accent-light shadow-md shadow-accent/20" : "";

  return (
    <div 
      className={clsx(baseClasses, activeClasses, todayClasses)}
      onClick={isCurrentMonth ? onClick : undefined}
    >
      <div className="flex justify-between items-start w-full">
        {/* Gregorian Date */}
        <span className={clsx(
          "text-lg sm:text-xl font-bold font-sans leading-tight",
          isToday && isCurrentMonth && "text-accent dark:text-accent-light",
          hasMajorEvent && isCurrentMonth && !isToday && "text-teal-700 dark:text-teal-300",
          hasEvents && !hasMajorEvent && isCurrentMonth && !isToday && "text-emerald-700 dark:text-emerald-300",
          !hasEvents && !isToday && "text-text-light dark:text-text-dark"
        )}>
          {date.getDate()}
        </span>
        
        {/* Hijri Day */}
        {isCurrentMonth && hijri && (
          <span className="text-[10px] md:text-xs font-medium text-text-mutedLight dark:text-text-mutedDark leading-tight">
            {hijri.day}
          </span>
        )}
      </div>

      {/* Hijri Month Name */}
      {isCurrentMonth && hijri && (
        <div className={clsx(
          "text-[8px] md:text-[10px] mt-auto leading-tight font-medium truncate",
          hasEvents ? "opacity-80" : "opacity-50"
        )}>
          {language === 'ur' ? hijri.monthUr : hijri.monthEn}
        </div>
      )}

      {/* Event name badge for major events */}
      {hasMajorEvent && isCurrentMonth && (
        <div className="absolute bottom-0 left-0 right-0 bg-teal-500/90 dark:bg-teal-600/90 px-1 py-[1px] md:py-0.5">
          <span className="text-[6px] md:text-[8px] text-white font-bold truncate block leading-tight">
            {language === 'ur' ? events[0].titleUr : events[0].titleEn}
          </span>
        </div>
      )}

      {/* Small indicator for minor events */}
      {hasEvents && !hasMajorEvent && isCurrentMonth && (
        <div className="absolute top-0.5 right-0.5 md:top-1 md:right-1">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </div>
      )}
    </div>
  );
};

export default CalendarCell;
