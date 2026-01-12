import { useEffect, useRef, useState } from "react";

export function useMobileDrawer() {
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

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return {
    isOpen,
    openMenu,
    closeMenu,
    setIsOpen,
    drawerRef,
    menuButtonRef,
  };
}

export default useMobileDrawer;
