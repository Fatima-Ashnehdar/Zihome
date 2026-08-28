const activities = [
  {
    user: "Ali Ahmadi",
    action: "Created an account",
    date: "2 min ago",
  },
  {
    user: "Sara Mohammadi",
    action: "Purchased a product",
    date: "15 min ago",
  },
  {
    user: "Reza Karimi",
    action: "Updated profile",
    date: "1 hour ago",
  },
  {
    user: "Maryam Hosseini",
    action: "Created an order",
    date: "2 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border bg-white">
      <div className="border-b p-5">
        <h3 className="font-semibold">Recent Activity</h3>
      </div>

      <div className="divide-y">
        {activities.map((item) => (
          <div key={item.user} className="flex items-center justify-between p-5">
            <div>
              <p className="font-medium">{item.user}</p>
              <p className="text-sm text-gray-500">{item.action}</p>
            </div>

            <span className="text-sm text-gray-400">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
