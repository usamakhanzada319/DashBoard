import { useState } from "react";
import { statsData, chartData, recentOrders } from "../data/mockData.js";
import Sidebar from "../components/Layout/Sidebar.jsx";
import Header from "../components/Layout/Header.jsx";
import StatsCard from "../components/Dashboard/StatsCard";
import ChartCard from "../components/Dashboard/ChartCard";
import RecentOrders from "../components/Dashboard/RecentOrders";

function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/*sidebar  */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* main content */}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* status grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6 ">
            {statsData.map((stat) => (
              <StatsCard key={stat.id} {...stat} />
            ))}
          </div>
          {/* charts grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard
              title="Revenue"
              data={chartData.revenue}
              labels={chartData.labels}
              type="bar"
            />
            <ChartCard
              title="Orders"
              data={chartData.orders}
              labels={chartData.labels}
              type="line"
            />
          </div>

          {/* recent orders */}

          <RecentOrders orders={recentOrders} />
        </main>
      </div>
    </div>
  );
}

export default DashBoard;
