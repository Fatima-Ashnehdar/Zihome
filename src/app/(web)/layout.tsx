import { Footer } from "@/layout/footer/footer";
import { Header } from "@/layout/header/header";
import { MobileMenuWrapper } from "@/layout/mobile-menu/mobileMenuWrapper";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileMenuWrapper />
    </>
  );
}
