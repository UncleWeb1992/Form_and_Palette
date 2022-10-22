import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navigate: FC = () => {
  const { pathname } = useLocation();

  const links = [
    { name: "Форма", path: "/" },
    { name: "Палитра", path: "/palette" },
  ];
  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <li
          className="mr-4 px-4 py-2 hover:underline text-[17px]"
          key={link.name}
        >
          <NavLink
            className={
              pathname === link.path
                ? "text-blue-800/80 font-bold"
                : "text-white"
            }
            to={link.path}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigate;
