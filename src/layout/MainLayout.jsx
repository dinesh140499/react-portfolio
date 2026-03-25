import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="ml-[27vw] min-h-dvh">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
