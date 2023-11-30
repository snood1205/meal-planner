import {FC} from "react";

import {NavLink} from "react-router-dom";
import {Submenu} from "./submenu.tsx";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const Sidebar: FC<Props> = () => (
  <div className="absolute z-30 h-full transition-all duration-300 w-64 bg-gray-800 p-5 rounded-lg">
    <nav className="mt-10 text-gray-400">
      <NavLink to="/" className={isActive => `${isActive ? "outline outline-2 outline-offset-2 outline-white rounded-md" : "text-white"} block mb-4`}>Home</NavLink>
      <Submenu to="/meals" displayText="Meals">
        <NavLink to="/meals/new" className="block ml-6 text-sm text-gray-300 rounded-md">Create a new meal</NavLink>
      </Submenu>
    </nav>
  </div>
);