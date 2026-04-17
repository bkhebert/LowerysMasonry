import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-gray-800">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;