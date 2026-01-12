import { IconChess, IconHome2 } from "@tabler/icons-react";

export const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: IconHome2,
    showOnDesktop: false,
  },
  {
    to: "/lufkin-chess",
    label: "Lufkin Chess",
    icon: IconChess,
    showOnDesktop: true,
  },
];

export default navLinks;
