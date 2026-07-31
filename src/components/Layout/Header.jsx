import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import ThemeToggle from "../common/ThemeToggle.jsx";
export default function Header({ toggleSidebar }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Logo + Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleSidebar}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition lg:hidden"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap"
          >
            Dashboard
          </Link>
        </div>
        {/* Center: Search */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right: Notifications + Theme + Profile */}

        <div className="flex items-center gap-1 sm:gap-3">
          {/* mobile search */}

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition md:hidden"
            aria-label="Search"
          >
            <FaSearch className="text-gray-600 dark:text-gray-300 text-base sm:text-lg" />
          </button>
          {/* notifications */}

          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition relative">
            <FaBell className="text-gray-600 dark:text-gray-300 text-base sm:text-lg" />
            <span className="absolute top-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900"></span>
          </button>
          <ThemeToggle />
          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <FaUserCircle className="text-gray-600 dark:text-gray-300 text-xl sm:text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="md:hidden px-3 pb-3">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
