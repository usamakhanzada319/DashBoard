const statusColors = {
  Completed:
    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  Pending:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  Cancelled: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
};

export default function RecentOrders({ orders }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 ">
        Recent Orders
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700">
              <th className="pb-2 font-medium text-gray-500 dark:text-gray-400">
                Customer
              </th>
              <th className="pb-2 font-medium text-gray-500 dark:text-gray-400">
                Product
              </th>
              <th className="pb-2 font-medium text-gray-500 dark:text-gray-400">
                Amount
              </th>
              <th className="pb-2 font-medium text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th className="pb-2 font-medium text-gray-500 dark:text-gray-400">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 dark:border-gray-700/50 last:border-0"
              >
                <td className="py-3 text-gray-900 dark:text-white">
                  {order.customer}
                </td>
                <td className="py-3 text-gray-600 dark:text-gray-300">
                  {order.product}
                </td>

                <td className="py-3 font-medium text-gray-900 dark:text-white">
                  {order.amount}
                </td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-gray-500 dark:text-gray-400">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
