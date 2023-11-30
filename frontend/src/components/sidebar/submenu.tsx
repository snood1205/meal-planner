import { FC, PropsWithChildren, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = PropsWithChildren<NavLinkProps> & {
  displayText: string;
};

export const Submenu: FC<Props> = ({ displayText, children, ...navLinkProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 relative">
      <NavLink {...navLinkProps} className={({ isActive }) => `${isActive ? "outline outline-2 outline-offset-2 outline-white" : "text-white"} flex items-center justify-between rounded-md p-2 bg-gray-700 w-full`}>
        {displayText}
        <button onClick={() => setIsOpen(!isOpen)} className="absolute inset-y-0 right-0 px-2 rounded-md text-white leading-none">
          {isOpen ? "−" : "+"}
        </button>
      </NavLink>
      {isOpen && (
        <div className="ml-6 mt-1">
          {children}
        </div>
      )}
    </div>
  );
};
