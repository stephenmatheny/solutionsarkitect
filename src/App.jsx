import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Academy from "./pages/Academy.jsx";
import Events from "./pages/Events.jsx";
import LufkinChess from "./pages/LufkinChess.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Software from "./pages/Software.jsx";
import Websites from "./pages/Websites.jsx";
import Automation from "./pages/Automation.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/events" element={<Events />} />
        <Route path="/software" element={<Software />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/automation" element={<Automation />} />

        {/* IMPORTANT: Keep this EXACT route forever */}
        <Route path="/lufkin-chess" element={<LufkinChess />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
