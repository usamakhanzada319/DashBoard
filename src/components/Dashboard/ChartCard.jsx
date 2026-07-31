import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export default function ChartCard({ title, data, labels, type = "bar" }) {
  const { darkMode } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const maxValue = Math.max(...data) || 1;
  const barColor = darkMode ? "#818cf8" : "#6366f1";
  const hoverColor = darkMode ? "#a5b4fc" : "#4f46e5";
  const lineColor = darkMode ? "#818cf8" : "#6366f1";
  const fillColor = darkMode
    ? "rgba(129, 140, 248, 0.1)"
    : "rgba(99, 102, 241, 0.1)";
  // Bar Chart
  if (type === "bar") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Max: {maxValue.toLocaleString()}
          </span>
        </div>

        <div className="flex items-end justify-between h-48 gap-2 relative">
          {data.map((value, index) => {
            const percentage = (value / maxValue) * 100;
            const barHeight = value === 0 ? 0 : Math.max(percentage, 6);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="flex flex-col items-center flex-1 h-full justify-end group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`
                    absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded 
                    transition-opacity duration-200 whitespace-nowrap
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                >
                  {value.toLocaleString()}
                </div>

                <div
                  className={`
                    w-full rounded-t transition-all duration-500 
                    ${isHovered ? "opacity-100 scale-y-105" : "opacity-90"}
                  `}
                  style={{
                    height: `${barHeight}%`,
                    backgroundColor: isHovered ? hoverColor : barColor,
                    minHeight: value === 0 ? "0px" : "4px",
                    transformOrigin: "bottom",
                  }}
                />

                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                  {labels?.[index] || `Item ${index + 1}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Line Chart (Optional)
  if (type === "line") {
    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - (value / maxValue) * 100;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>

        <div className="relative h-48">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Area fill */}
            <polygon
              points={`0,100 ${points} 100,100`}
              fill={fillColor}
              className="transition-all duration-300"
            />

            {/* Line */}
            <polyline
              points={points}
              fill="none"
              stroke={lineColor}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />

            {/* Points */}
            {data.map((value, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 100 - (value / maxValue) * 100;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="0.5"
                  fill={lineColor}
                  className="transition-all duration-300 hover:r-3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            })}
          </svg>

          {/* Labels */}
          <div className="flex justify-between mt-2">
            {labels?.map((label, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 dark:text-gray-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
