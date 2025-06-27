// import Sidebar from "@/components/Sidebar";
import '../globals.css'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
     
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
