import { GbayProvider } from './context/GbayContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ShoppingCartPage from "./pages/ShoppingCartPage";
import RedirectBuy from "./pages/RedirectBuy";
import PurchaseConfirmation from "./pages/PurchaseConfirmation";

import Navbar from "./components/Navbar";
// import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";

function App() {

  return (
    <GbayProvider>
      <Router>
        <Navbar />
        {/*<SubNavbar />*/}
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/user/:id/add-product" element={<AddProductPage />} />
            <Route path="/user/:id/edit-product/:productId" element={<EditProductPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
            <Route path="/redirect" element={<RedirectBuy />} />
            <Route path="/confirm" element={<PurchaseConfirmation />} />
          </Routes>
        </main> 
        <Footer />
      </Router>
    </GbayProvider>
  )
}

export default App