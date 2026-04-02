// ======== HIJRI MONTH START DATES IN 2026 ========
// Based on the exact user-provided table data from Sara International Travel
// Each entry marks the Gregorian date when a new Hijri month begins in 2026.
export const HIJRI_MONTH_STARTS_2026 = [
  { gMonth: 0, gDay: 20, hMonth: "Sha'ban", hMonthUrdu: "شعبان", hMonthIndex: 8 },
  { gMonth: 1, gDay: 18, hMonth: "Ramadan", hMonthUrdu: "رمضان", hMonthIndex: 9 },
  { gMonth: 2, gDay: 20, hMonth: "Shawwal", hMonthUrdu: "شوال", hMonthIndex: 10 },
  { gMonth: 3, gDay: 18, hMonth: "Dhul Qa'dah", hMonthUrdu: "ذو القعدة", hMonthIndex: 11 },
  { gMonth: 4, gDay: 18, hMonth: "Dhul Hijjah", hMonthUrdu: "ذو الحجة", hMonthIndex: 12 },
  { gMonth: 5, gDay: 17, hMonth: "Muharram", hMonthUrdu: "محرم", hMonthIndex: 1, isNewYear: true },
  { gMonth: 6, gDay: 17, hMonth: "Safar", hMonthUrdu: "صفر", hMonthIndex: 2 },
  { gMonth: 7, gDay: 15, hMonth: "Rabi' al-Awwal", hMonthUrdu: "ربيع الأول", hMonthIndex: 3 },
  { gMonth: 8, gDay: 14, hMonth: "Rabi' al-Thani", hMonthUrdu: "ربيع الثاني", hMonthIndex: 4 },
  { gMonth: 9, gDay: 13, hMonth: "Jumada al-Awwal", hMonthUrdu: "جمادى الأولى", hMonthIndex: 5 },
  { gMonth: 10, gDay: 12, hMonth: "Jumada al-Thani", hMonthUrdu: "جمادى الآخرة", hMonthIndex: 6 },
  { gMonth: 11, gDay: 11, hMonth: "Rajab", hMonthUrdu: "رجب", hMonthIndex: 7 }
];

// ======== IMPORTANT ISLAMIC EVENTS 2026 ========
export const EVENTS_2026 = [
  {
    date: "2026-01-16",
    titleEn: "Al Isra' wal Mi'raj",
    titleUr: "شبِ معراج",
    hijriDate: "27th Rajab 1447",
    isMajor: true
  },
  {
    date: "2026-02-03",
    titleEn: "Shab-e-Barat",
    titleUr: "شبِ برات",
    hijriDate: "15th Shaban 1447",
    isMajor: false
  },
  {
    date: "2026-02-18",
    titleEn: "Ramadan Begins",
    titleUr: "رمضان کا آغاز",
    hijriDate: "1st Ramadan 1447",
    isMajor: true
  },
  {
    date: "2026-03-15",
    titleEn: "Laylatul Qadr (Est.)",
    titleUr: "شبِ قدر",
    hijriDate: "27th Ramadan 1447",
    isMajor: true
  },
  {
    date: "2026-03-20",
    titleEn: "Eid al-Fitr",
    titleUr: "عید الفطر",
    hijriDate: "1st Shawwal 1447",
    isMajor: true
  },
  {
    date: "2026-05-18",
    titleEn: "Dhul Hijjah Begins",
    titleUr: "ذو الحجّہ کا آغاز",
    hijriDate: "1st Dhul Hijjah 1447",
    isMajor: false
  },
  {
    date: "2026-05-25",
    titleEn: "Hajj Begins",
    titleUr: "حج کا آغاز",
    hijriDate: "8th Dhul Hijjah 1447",
    isMajor: true
  },
  {
    date: "2026-05-26",
    titleEn: "Day of Arafah",
    titleUr: "یوم عرفہ",
    hijriDate: "9th Dhul Hijjah 1447",
    isMajor: true
  },
  {
    date: "2026-05-27",
    titleEn: "Eid al-Adha",
    titleUr: "عید الاضحیٰ",
    hijriDate: "10th Dhul Hijjah 1447",
    isMajor: true
  },
  {
    date: "2026-06-16",
    titleEn: "Islamic New Year",
    titleUr: "اسلامی نیا سال",
    hijriDate: "1st Muharram 1448",
    isMajor: true
  },
  {
    date: "2026-06-25",
    titleEn: "Day of Ashura",
    titleUr: "یوم عاشوراء",
    hijriDate: "10th Muharram 1448",
    isMajor: true
  },
  {
    date: "2026-08-25",
    titleEn: "Eid Milad un Nabi",
    titleUr: "عید میلاد النبی ﷺ",
    hijriDate: "12th Rabi al-Awwal 1448",
    isMajor: true
  }
];

// ======== TABLE DATA for the Important Dates section below calendar ========
export const KEY_DATES_TABLE = [
  { eventEn: "Al Isra' wal Mi'raj (The Night Journey & Ascension)", eventUr: "شبِ معراج (اسراء و معراج)", gregDateEn: "16th January 2026", gregDateUr: "16 جنوری 2026", hijriDate: "27th Rajab 1447" },
  { eventEn: "Shab-e-Barat", eventUr: "شبِ برات", gregDateEn: "3rd February 2026", gregDateUr: "3 فروری 2026", hijriDate: "15th Shaban 1447" },
  { eventEn: "Ramadan Begins", eventUr: "رمضان کا آغاز", gregDateEn: "17th or 18th February 2026", gregDateUr: "17 یا 18 فروری 2026", hijriDate: "1st Ramadan 1447" },
  { eventEn: "Laylatul Qadr", eventUr: "شبِ قدر", gregDateEn: "15th or 16th March 2026", gregDateUr: "15 یا 16 مارچ 2026", hijriDate: "27th Ramadan 1447*" },
  { eventEn: "Eid al-Fitr", eventUr: "عید الفطر", gregDateEn: "19th or 20th March 2026", gregDateUr: "19 یا 20 مارچ 2026", hijriDate: "1st Shawwal 1447" },
  { eventEn: "Dhul Hijjah Begins", eventUr: "ذو الحجّہ کا آغاز", gregDateEn: "18th May 2026", gregDateUr: "18 مئی 2026", hijriDate: "1st Dhul Hijjah 1447" },
  { eventEn: "Hajj Begins", eventUr: "حج کا آغاز", gregDateEn: "25th May 2026", gregDateUr: "25 مئی 2026", hijriDate: "8th Dhul Hijjah 1447" },
  { eventEn: "Day of Arafah", eventUr: "یوم عرفہ", gregDateEn: "26th May 2026", gregDateUr: "26 مئی 2026", hijriDate: "9th Dhul Hijjah 1447" },
  { eventEn: "Eid al-Adha", eventUr: "عید الاضحیٰ", gregDateEn: "27th May 2026", gregDateUr: "27 مئی 2026", hijriDate: "10th Dhul Hijjah 1447" },
  { eventEn: "Islamic New Year", eventUr: "اسلامی نیا سال", gregDateEn: "16th June 2026", gregDateUr: "16 جون 2026", hijriDate: "1st Muharram 1448" },
  { eventEn: "Day of Ashura", eventUr: "یوم عاشوراء", gregDateEn: "25th June 2026", gregDateUr: "25 جون 2026", hijriDate: "10th Muharram 1448" },
];

export const ISLAMIC_MONTHS = [
  { num: 1, en: "Muharram", ur: "محرم" },
  { num: 2, en: "Safar", ur: "صفر" },
  { num: 3, en: "Rabi Al-Awwal", ur: "ربيع الأول" },
  { num: 4, en: "Rabi Al-Thani", ur: "ربيع الثاني" },
  { num: 5, en: "Jumada Al-Awwal", ur: "جمادى الأولى" },
  { num: 6, en: "Jumada Al-Thani", ur: "جمادى الآخرة" },
  { num: 7, en: "Rajab", ur: "رجب" },
  { num: 8, en: "Shaban", ur: "شعبان" },
  { num: 9, en: "Ramadan", ur: "رمضان" },
  { num: 10, en: "Shawwal", ur: "شوال" },
  { num: 11, en: "Dhul Qadah", ur: "ذو القعدة" },
  { num: 12, en: "Dhul Hijjah (Month of Hajj)", ur: "ذو الحجة (حج کا مہینہ)" },
];

// ======== TRANSLATIONS ========
export const TRANSLATIONS = {
  en: {
    themeToggle: "Toggle Theme",
    languageToggle: "اردو",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    importantDates: "Important Dates",
    keyIslamicDates: "Key Islamic Dates in 2026",
    islamicMonths: "Islamic Months",
    keyIslamicDate: "Key Islamic Date",
    gregorianDate: "Gregorian Date",
    hijriDate: "Hijri Date",
    moonNote: "These dates are dependent on moon sightings",
    laylaNight: "* It is widely believed that Laylatul Qadr occurs on the 27th Night of Ramadan, however many scholars recommend focusing on the last 10 nights of Ramadan.",
    noEvents: "No important events today.",
    details: "Details",
    gregLabel: "Gregorian Date",
    hijriLabel: "Hijri Date",
  },
  ur: {
    themeToggle: "تھیم تبدیل کریں",
    languageToggle: "English",
    days: ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
    months: ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
    importantDates: "اہم تاریخیں",
    keyIslamicDates: "2026 کی اہم اسلامی تاریخیں",
    islamicMonths: "اسلامی مہینے",
    keyIslamicDate: "اہم اسلامی تاریخ",
    gregorianDate: "عیسوی تاریخ",
    hijriDate: "ہجری تاریخ",
    moonNote: "یہ تاریخیں چاند دیکھنے پر منحصر ہیں",
    laylaNight: "* عام طور پر یہ مانا جاتا ہے کہ شبِ قدر رمضان کی 27ویں رات کو ہوتی ہے، تاہم بہت سے علماء آخری 10 راتوں پر توجہ دینے کی سفارش کرتے ہیں۔",
    noEvents: "آج کوئی خاص واقعہ نہیں ہے۔",
    details: "تفصیلات",
    gregLabel: "عیسوی تاریخ",
    hijriLabel: "ہجری تاریخ",
  }
};
