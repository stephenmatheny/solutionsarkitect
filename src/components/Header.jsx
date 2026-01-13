import { NavLink } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import DesktopNav from "./nav/DesktopNav.jsx";
import MobileMenu from "./nav/MobileMenu.jsx";
import { navLinks } from "../navigation/navLinks.js";
import { useMobileDrawer } from "../hooks/useMobileDrawer.js";

export default function Header() {
  const {
    isOpen,
    openMenu,
    closeMenu,
    drawerRef,
    menuButtonRef,
  } = useMobileDrawer();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: mobile menu button */}
        <div className="order-1 flex items-center gap-3 md:order-2">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-drawer"
            aria-expanded={isOpen}
            onClick={openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 md:hidden"
          >
            <IconMenu2 size={22} />
          </button>

          {/* Desktop links */}
          <DesktopNav links={navLinks} />
        </div>

        {/* Right: logo */}
        <NavLink to="/" className="order-2 flex items-center gap-2 md:order-1">
          {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50"> */}
            <img
              src="/small-logo.svg"
              alt="Solutions Arkitect logo"
              className="h-24 w-24"
            />
          {/* </span> */}
          {/* <span className="font-semibold tracking-tight">Solutions Arkitect</span> */}
        </NavLink>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        navLinks={navLinks}
        drawerRef={drawerRef}
      />
    </header>
  );
}
