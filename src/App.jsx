import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import './Petite.css'
  
function App() {
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
  