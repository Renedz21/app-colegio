import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="relative h-full">
      <div className="z-[80] hidden h-full md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <main className="px-4 md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
