export default function StatsCard({ title, value, change, icon, color }) {
  const isPositive = change?.startsWith("+");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        <span
          className={`text-sm font-medium ${isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
        >
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold mt-3 text-gray-900 dark:text-white">
        {value}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
    </div>
  );
}
