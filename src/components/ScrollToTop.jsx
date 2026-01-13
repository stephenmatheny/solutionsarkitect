import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHashOrTop } from "../utils/scrollToTop.js";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    scrollToHashOrTop(location.hash);
  }, [location.pathname, location.hash]);

  return null;
}
