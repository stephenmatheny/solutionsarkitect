import { NavLink } from "react-router-dom";
import { IconX, IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";

export default function MobileMenu({ isOpen, onClose, navLinks, drawerRef }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-[999] md:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-300 ease-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Full-screen container (ref used for focus trap) */}
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
            "relative h-[100dvh] w-screen overflow-y-auto bg-slate-900/95 text-slate-100 shadow-2xl backdrop-blur-md",
            "transition-transform duration-300 ease-out will-change-transform",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
          onClick={onClose} // tap empty area closes
        >
          {/* Optional gradient (kept BEHIND everything) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Content column (stop propagation so taps on content don't close) */}
          <div
            className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-sm flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header (ALWAYS VISIBLE) */}
            <div className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/95 px-4 py-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-semibold text-white">
                    Menu
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    Solutions Arkitect
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-0"
                >
                  <IconX size={20} />
                </button>
              </div>
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
                    onClick={onClose}
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
                        {Icon ? <Icon size={18} /> : null}
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

            {/* Bottom fade */}
            <div className="pointer-events-none sticky bottom-0 mt-auto h-10 bg-gradient-to-t from-slate-900/95 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
