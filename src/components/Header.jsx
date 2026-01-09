import { NavLink } from "react-router-dom";
import { IconChess, IconMathSymbols, IconBrandGithub } from "@tabler/icons-react";
import clsx from "clsx";

const linkBase =
  "rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-slate-100";
const linkActive = "bg-slate-100 text-slate-900";
const linkInactive = "text-slate-700";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
            <IconMathSymbols size={20} />
          </span>
          <span className="font-semibold tracking-tight">Solutions Arkitect</span>
        </NavLink>

        <nav className="hidden items-center gap-2 sm:flex">
          <NavLink
            to="/academy"
            className={({ isActive }) =>
              clsx(linkBase, isActive ? linkActive : linkInactive)
            }
          >
            Academy
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              clsx(linkBase, isActive ? linkActive : linkInactive)
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/lufkin-chess"
            className={({ isActive }) =>
              clsx(linkBase, isActive ? linkActive : linkInactive)
            }
          >
            <span className="inline-flex items-center gap-2">
              <IconChess size={16} /> Lufkin Chess
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              clsx(linkBase, isActive ? linkActive : linkInactive)
            }
          >
            Contact
          </NavLink>
        </nav>

        <a
          className="hidden rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex"
          href="#"
          onClick={(e) => e.preventDefault()}
          title="Link this later"
        >
          <span className="inline-flex items-center gap-2">
            <IconBrandGithub size={16} /> Admin
          </span>
        </a>
      </div>
    </header>
  );
}
