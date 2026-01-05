"use client";

import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-black dark:bg-gray-800 dark:text-white md:h-14 md:w-14"
    >
      {/* Moon Icon */}
      {theme === "light" && (
        <svg
          viewBox="0 0 23 23"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.55 1.5C5.8 1.5 1.3 5.25 1.3 11.25C1.3 17.25 5.8 21.75 11.8 21.75C17.8 21.75 21.55 17.25 21.55 13.5C13.3 18.75 4.3 9.75 9.55 1.5Z" />
        </svg>
      )}

      {/* Sun Icon */}
      {theme === "dark" && (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggler;
