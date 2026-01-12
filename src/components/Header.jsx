import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IconChess,
  IconMenu2,
  IconX,
  IconHome2,
  IconChevronRight,
} from "@tabler/icons-react";
import clsx from "clsx";

const linkBase =
  "rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-slate-100";
const linkActive = "bg-slate-100 text-slate-900";
const linkInactive = "text-slate-700";

// Single source of truth for nav (desktop + mobile)
const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: IconHome2,
  },
  {
    to: "/lufkin-chess",
    label: "Lufkin Chess",
    icon: IconChess,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const wasOpenRef = useRef(false);
  const previousOverflow = useRef("");

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = previousOverflow.current || "";
      return;
    }

    const drawerEl = drawerRef.current;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea",
      "input[type=\"text\"]",
      "input[type=\"radio\"]",
      "input[type=\"checkbox\"]",
      "select",
      "[tabindex]:not([tabindex=\"-1\"])",
    ].join(", ");

    const getFocusableElements = () => {
      if (!drawerEl) return [];
      return Array.from(drawerEl.querySelectorAll(focusableSelectors)).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.getAttribute("tabindex") !== "-1" &&
          !el.classList.contains("hidden"),
      );
    };

    const focusableEls = getFocusableElements();
    if (focusableEls.length) {
      focusableEls[0].focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = getFocusableElements();
      if (!focusables.length) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        }
      } else if (document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow.current || "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

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
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 md:hidden"
          >
            <IconMenu2 size={22} />
          </button>

          {/* Desktop links */}
          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx(linkBase, isActive ? linkActive : linkInactive)
                }
              >
                <span className="inline-flex items-center gap-2">
                  <Icon size={16} />
                  {label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right: logo */}
        <NavLink to="/" className="order-2 flex items-center gap-2 md:order-1">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/small-logo.svg"
              alt="Solutions Arkitect logo"
              className="h-7 w-7"
            />
          </span>
          <span className="font-semibold tracking-tight">Solutions Arkitect</span>
        </NavLink>
      </div>

      {/* MOBILE OVERLAY (covers entire viewport) */}
      <div
        className={clsx(
          "fixed inset-0 z-[999] md:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* Backdrop (dark + heavier blur) */}
        <div
          className={clsx(
            "fixed inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-300 ease-out",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />

        {/* Full-screen container */}
        <div
          ref={drawerRef}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={clsx(
            "fixed inset-0 h-[100dvh] w-screen",
            isOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          {/* Full-width sliding panel */}
          <div
            className={clsx(
              "h-[100dvh] w-screen overflow-y-auto bg-slate-900/95 text-slate-100 shadow-2xl backdrop-blur-md",
              "transition-transform duration-300 ease-out will-change-transform",
              isOpen ? "translate-x-0" : "-translate-x-full",
            )}
            onClick={() => setIsOpen(false)} // tap empty area closes
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold text-white">Menu</span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  Solutions Arkitect
                </span>
              </div>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0"
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="px-3 py-3">
              <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Navigate
              </div>

              <div className="space-y-1">
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        "group flex items-center justify-between rounded-2xl px-3 py-3 text-base font-medium transition",
                        "hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                        isActive ? "bg-white/10 text-white" : "text-slate-100",
                      )
                    }
                  >
                    <span className="inline-flex items-center gap-3">
                      <span
                        className={clsx(
                          "inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                          "bg-white/5 ring-1 ring-white/10",
                          "group-hover:bg-white/10",
                        )}
                      >
                        <Icon size={18} />
                      </span>
                      {label}
                    </span>

                    <IconChevronRight
                      size={18}
                      className="text-white/35 transition group-hover:text-white/60"
                    />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Bottom subtle fade for polish */}
            <div className="pointer-events-none sticky bottom-0 h-10 bg-gradient-to-t from-slate-900/95 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
}
