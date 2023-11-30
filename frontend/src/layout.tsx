import {FC, useState} from "react";
import {Sidebar} from "./components/sidebar";
import {Outlet} from "react-router-dom";

export const Layout: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar}/>
      <div className="flex-1 ml-64">
        <Outlet />
      </div>
    </div>
  );
};