import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import ProductCategories from "./pages/ProductCategories";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productcategories" element={<ProductCategories />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
