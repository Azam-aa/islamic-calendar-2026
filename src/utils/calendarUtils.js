import { HIJRI_MONTH_STARTS_2026, EVENTS_2026 } from '../data/calendarData';

// Generates the days array for a given month and year
export const generateMonthGrid = (year, monthIndex) => {
  const firstDay = new Date(year, monthIndex, 1);
  const startDayOfWeek = firstDay.getDay(); // 0 is Sunday
  
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  
  const days = [];
  
  // Padding for previous month
  const prevMonthDays = new Date(year, monthIndex, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, monthIndex - 1, prevMonthDays - i),
      isCurrentMonth: false,
    });
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const curDate = new Date(year, monthIndex, i);
    days.push({
      date: curDate,
      isCurrentMonth: true,
      hijri: getHijriInfoForDate(curDate),
      events: getEventsForDate(curDate)
    });
  }
  
  // Padding for next month
  const remainingCells = 42 - days.length; // 6 rows of 7 days
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      date: new Date(year, monthIndex + 1, i),
      isCurrentMonth: false,
    });
  }
  
  return days;
};

// Gets Hijri info for a specific date in 2026 based on the provided table
export const getHijriInfoForDate = (date) => {
  const gMonth = date.getMonth();
  const gDay = date.getDate();
  
  // Special case: Before the first Hijri month transition in our list (Jan 1 - Jan 19)
  // According to the user's table, Jan 1 = 12 Rajab 1447
  if (gMonth === 0 && gDay < 20) {
    const dayOffset = gDay - 1;
    return {
      day: 12 + dayOffset,
      monthEn: "Rajab",
      monthUr: "رجب",
      year: 1447
    };
  }

  // Find which Hijri month this day belongs to by walking through the transition list
  let currentHijriMonthStart = null;
  for (let i = HIJRI_MONTH_STARTS_2026.length - 1; i >= 0; i--) {
    const start = HIJRI_MONTH_STARTS_2026[i];
    const startGreg = new Date(2026, start.gMonth, start.gDay);
    if (date >= startGreg) {
      currentHijriMonthStart = start;
      break;
    }
  }

  // Fallback (should not happen for dates in 2026 after Jan 19)
  if (!currentHijriMonthStart) {
    currentHijriMonthStart = HIJRI_MONTH_STARTS_2026[0];
  }

  const startDate = new Date(2026, currentHijriMonthStart.gMonth, currentHijriMonthStart.gDay);
  // Use floor instead of ceil to avoid off-by-one errors
  const diffTime = date.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
  
  // Determine Hijri year: 1448 starts at Muharram (June 17, 2026)
  let hYear = 1447;
  if (currentHijriMonthStart.isNewYear || 
      (currentHijriMonthStart.hMonthIndex >= 1 && currentHijriMonthStart.hMonthIndex <= 7 && gMonth >= 5)) {
    hYear = 1448;
  }
  
  return {
    day: diffDays + 1,
    monthEn: currentHijriMonthStart.hMonth,
    monthUr: currentHijriMonthStart.hMonthUrdu,
    year: hYear
  };
};

export const getEventsForDate = (date) => {
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  return EVENTS_2026.filter(event => event.date === formattedDate);
};
