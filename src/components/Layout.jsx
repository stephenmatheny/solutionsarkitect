import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      
      <Analytics />

      <Footer />
    </div>
  );
}
