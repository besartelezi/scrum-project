import { GbayProvider } from './context/GbayContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <GbayProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main> 
        <Footer />
      </Router>
    </GbayProvider>
  )
}

export default App