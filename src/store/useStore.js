import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      language: 'en',
      theme: 'dark', // default to dark mode per requirements
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'ur' : 'en' })),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
    }),
    {
      name: 'calendar-storage', // unique name
      partialize: (state) => ({ language: state.language, theme: state.theme }),
    }
  )
);
