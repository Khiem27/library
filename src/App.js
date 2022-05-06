import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProductsLayout from "./Layout/AddProducts/AddProductsLayout";
import RegisterLayout from "./Layout/Authentication/Register/RegisterLayout";
import HomeLayout from "./Layout/Home/HomeLayout";
import ShoppingCartLayout from "./Layout/ShoppingCart/ShoppingCartLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/account/register" element={<RegisterLayout />} />
        <Route path="/cart" element={<ShoppingCartLayout />} />
        <Route path="/pages/contact-us" element={<AddProductsLayout />} />
      </Routes>
    </div>
  );
}

export default App;
