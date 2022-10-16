import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainHome from "./Navigation/MainHome";
import Home from "./Navigation/Home";
import SProduct from "./Navigation/SProduct";
import Cart from "./Navigation/Cart";
import Search from "./Navigation/Search";
import Profile from "./Navigation/Profile";
import { ShopProvider } from "./Store/AuthContext";

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MainHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/product/:id" element={<SProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShopProvider>
  );
}

export default App;
