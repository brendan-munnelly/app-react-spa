import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import './Petite.css'
  
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform the redirect if a redirect path is stored
    const redirectPath = sessionStorage.redirect;
    delete sessionStorage.redirect; // Clear the session storage
    if (redirectPath) navigate(redirectPath);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <main>
      {/* Place non-global routes inside am HTML main tag */}
      <Routes>
          {/* Use Home component for the root path */}
          <Route index element={<Home />} /> 
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
  