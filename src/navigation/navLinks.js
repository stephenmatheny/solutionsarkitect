import { IconChess, IconHome2, IconSchool } from "@tabler/icons-react";

export const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: IconHome2,
    showOnDesktop: false,
  },
  {
    to: "/academy",
    label: "Ark Enrichment Academy",
    icon: IconSchool,
    showOnDesktop: true,
  },
  {
    to: "/lufkin-chess",
    label: "Lufkin Chess",
    icon: IconChess,
    showOnDesktop: true,
  },
];

export default navLinks;
