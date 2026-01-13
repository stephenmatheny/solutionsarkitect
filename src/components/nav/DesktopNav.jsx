import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  navLinkActive,
  navLinkBase,
  navLinkInactive,
} from "../../styles/uiClasses.js";
import { scrollToHashOrTop } from "../../utils/scrollToTop.js";

export default function DesktopNav({ links }) {
  return (
    <nav className="hidden items-center gap-2 md:flex">
      {links
        .filter((link) => link.showOnDesktop)
        .map(({ to, label, icon }) => {
          const IconComponent = icon;
          return (
            <NavLink
              key={to}
              to={to}
              onClick={() => scrollToHashOrTop()}
              className={({ isActive }) =>
                clsx(navLinkBase, isActive ? navLinkActive : navLinkInactive)
              }
            >
              <span className="inline-flex items-center gap-2">
                {IconComponent ? <IconComponent size={16} /> : null}
                {label}
              </span>
            </NavLink>
          );
        })}
    </nav>
  );
}
