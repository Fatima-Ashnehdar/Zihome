import Header from "./components/header";
import Sidebar from "./components/sidebar/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen bg-nutral-50">
      <Sidebar />

      <div>
        <Header />
        <main className="pl-[8%] pr-[26%] mt-[6%] mb-[1.5%]">{children}</main>
      </div>
    </div>
  );
}
