import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaBox,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaTimes, // 👈 Close icon ke liye
} from "react-icons/fa";

const navItems = [
  { path: "/", label: "Dashboard", icon: FaHome },
  { path: "/orders", label: "Orders", icon: FaShoppingCart },
  { path: "/products", label: "Products", icon: FaBox },
  { path: "/customers", label: "Customers", icon: FaUsers },
  { path: "/reports", label: "Reports", icon: FaChartLine },
  { path: "/settings", label: "Settings", icon: FaCog },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-700 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:z-auto z-50
        `}
      >
        {/* Logo + Close Button */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            Dashboard
          </Link>

          {/* Close Button - Mobile only */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition lg:hidden"
            aria-label="Close sidebar"
          >
            <FaTimes className="text-gray-600 dark:text-gray-300 text-xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="text-lg" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              // Add your logout logic here
              setIsOpen(false);
            }}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-200"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
