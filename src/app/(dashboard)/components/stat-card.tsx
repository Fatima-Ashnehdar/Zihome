type StatCardProps = {
  title: string;
  value: string;
  change: string;
};

export default function StatCard({ title, value, change }: StatCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <div className="mt-2 flex items-end justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>

        <span className="text-sm font-medium text-green-600">{change}</span>
      </div>
    </div>
  );
}
