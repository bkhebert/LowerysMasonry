import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;