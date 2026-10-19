/**@format */

export const mockDashboardTitle = {
  title: "زی هوم / پروفایل کاربری ",
};

export function DashboardTitle() {
  return (
    <div className="pt-29">
      <p className="text-base text-gray-700">{mockDashboardTitle.title}</p>
    </div>
  );
}
