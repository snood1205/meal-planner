import {FC} from "react";

import {NavLink} from "react-router-dom";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const Sidebar: FC<Props> = () => (
  <div
    className={`absolute z-30 h-full transition-all duration-300 w-64 bg-gray-800 p-5`}>
    <nav className="mt-10 text-gray-400">
      <NavLink to="/" className={isActive => `${isActive ? "outline outline-2 outline-offset-2 outline-white" : "text-white"} block mb-4`}>Home</NavLink>
      <NavLink to="/meals" className={isActive => `${isActive ? "outline outline-2 outline-offset-2 outline-white" : "text-white"} block mb-4`}>Meals</NavLink>
    </nav>
  </div>
)