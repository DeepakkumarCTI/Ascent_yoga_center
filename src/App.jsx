import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import FloatingContact from "./components/FloatingContact";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function RouteScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL contains a hash such as /contact#form
    if (hash) {
      const id = hash.replace("#", "");

      // Wait for the destination page to render
      const timer = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }

    // Normal route navigation → scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      {/* Initial loading animation */}
      <LoadingScreen />

      {/* Handle normal route scrolling and #hash scrolling */}
      <RouteScrollHandler />

      {/* Existing ScrollTop component */}
      <ScrollTop />

      {/* Main navigation */}
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Floating contact button */}
      <FloatingContact />
    </>
  );
}