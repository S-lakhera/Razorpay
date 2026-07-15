import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-1 min-h-[92vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
