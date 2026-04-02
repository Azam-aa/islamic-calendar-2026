import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../data/calendarData';
import { generateMonthGrid } from '../utils/calendarUtils';
import CalendarCell from './CalendarCell';
import EventModal from './EventModal';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// Calculate the default month ONCE outside the component
const getDefaultMonth = () => {
  const now = new Date();
  return now.getFullYear() === 2026 ? now.getMonth() : 0;
};
const INITIAL_MONTH = getDefaultMonth();

const Calendar = () => {
  const { language } = useStore();
  const t = TRANSLATIONS[language];
  
  const [[monthIndex, direction], setPage] = useState([INITIAL_MONTH, 0]);
  const [selectedDate, setSelectedDate] = useState(null);

  const isRtl = language === 'ur';
  const year = 2026;

  const paginate = (newDirection) => {
    if (monthIndex + newDirection < 0 || monthIndex + newDirection > 11) return;
    setPage([monthIndex + newDirection, newDirection]);
  };

  const currentMonthGrid = useMemo(() => generateMonthGrid(year, monthIndex), [monthIndex]);

  const handleCellClick = (cellData) => {
    if (!cellData.isCurrentMonth) return;
    setSelectedDate(cellData);
  };

  return (
    <div className="flex flex-col flex-1 w-full max-w-4xl mx-auto overflow-hidden">
      
      {/* Month Navigation Header */}
      <div className="flex items-center justify-between px-4 py-4 mb-2 bg-surfaceHighlight-light dark:bg-surfaceHighlight-dark rounded-xl mx-4 mt-4 shadow-sm">
        <button 
          onClick={() => paginate(-1)} 
          disabled={monthIndex === 0}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 transition-colors"
        >
          {isRtl ? <ChevronRight /> : <ChevronLeft />}
        </button>
        <h2 className="text-xl md:text-2xl font-bold font-sans tracking-tight">
          {t.months[monthIndex]} {year}
        </h2>
        <button 
          onClick={() => paginate(1)} 
          disabled={monthIndex === 11}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 transition-colors"
        >
          {isRtl ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Weekdays Header */}
      <div className="grid grid-cols-7 gap-1 px-4 mb-2">
        {t.days.map((day, i) => (
          <div key={i} className={`text-center font-semibold text-xs md:text-sm py-2 ${i === 5 ? 'text-teal-600 dark:text-teal-400' : i === 0 ? 'text-text-mutedLight dark:text-text-mutedDark' : 'text-text-mutedLight dark:text-text-mutedDark'}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Sliding Calendar Grid */}
      <div className="relative flex-1 px-4 min-h-[58vh] md:min-h-[55vh]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={monthIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 350, damping: 35 },
              opacity: { duration: 0.15 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(isRtl ? -1 : 1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(isRtl ? 1 : -1);
              }
            }}
            className="grid grid-cols-7 grid-rows-6 gap-1 md:gap-2 pb-4"
          >
            {currentMonthGrid.map((dayData, index) => (
              <CalendarCell 
                key={index} 
                data={dayData} 
                onClick={() => handleCellClick(dayData)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {selectedDate && (
        <EventModal 
          isOpen={true} 
          onClose={() => setSelectedDate(null)} 
          data={selectedDate} 
        />
      )}
    </div>
  );
};

export default Calendar;
