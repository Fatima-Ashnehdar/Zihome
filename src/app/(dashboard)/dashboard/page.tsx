import RecentActivity from "../components/recent-activity";
import StatCard from "../components/stat-card";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="12,480" change="+12.5%" />

        <StatCard title="Revenue" value="$48,240" change="+8.2%" />

        <StatCard title="Orders" value="1,284" change="+5.4%" />

        <StatCard title="Conversion" value="4.8%" change="+2.1%" />
      </div>

      {/* Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Overview</h3>
              <p className="text-sm text-gray-500">Your performance this month</p>
            </div>

            <select className="rounded-lg border px-3 py-2 text-sm">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>This year</option>
            </select>
          </div>

          <div className="mt-8 flex h-64 items-end gap-3">
            {[35, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-black"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
