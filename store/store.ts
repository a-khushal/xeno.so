import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themes, languages } from "@/lib/constants";

type Padding = 16 | 32 | 64 | 128;
type Theme = keyof typeof themes;
type Language = keyof typeof languages;

interface UIState {
    backgroundToggled: boolean;
    toggleBackground: () => void;

    darkMode: boolean;
    toggleDarkMode: () => void;

    lineNumbers: boolean;
    toggleLineNumbers: () => void;

    padding: Padding;
    setPadding: (padding: Padding) => void;

    theme: Theme;
    setTheme: (theme: Theme) => void;

    language: Language;
    setLanguage: (lang: Language) => void;

    hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            backgroundToggled: false,
            toggleBackground: () => set((state) => ({ backgroundToggled: !state.backgroundToggled })),

            darkMode: false,
            toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

            lineNumbers: false,
            toggleLineNumbers: () => set((state) => ({ lineNumbers: !state.lineNumbers })),

            padding: 32,
            setPadding: (padding) => set({ padding }),

            theme: "candy",
            setTheme: (theme) => set({ theme }),

            language: "typescript",
            setLanguage: (language) => set({ language }),

            hasHydrated: false,
            setHasHydrated: (state) => set({ hasHydrated: state }),
        }),
        {
            name: "ui-store",
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);