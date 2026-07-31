import { useTheme } from "../../context/ThemeContext.jsx";

import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
    >
      {darkMode ? (
        <FaSun className="text-yellow-500 text-lg" />
      ) : (
        <FaMoon className="text-indigo-600 text-lg" />
      )}
    </button>
  );
}
