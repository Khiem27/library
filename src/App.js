import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProductsLayout from "./Layout/AddProducts/AddProductsLayout";
import LoginLayout from "./Layout/Authentication/Login/LoginLayout";
import RegisterLayout from "./Layout/Authentication/Register/RegisterLayout";
import CheckoutLayout from "./Layout/Checkout/CheckoutLayout";
import HomeLayout from "./Layout/Home/HomeLayout";
import ListCustomerLayout from "./Layout/ListCustomer/ListCustomerLayout";
import ShoppingCartLayout from "./Layout/ShoppingCart/ShoppingCartLayout";
function App() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: "17732a57-e3e2-4d80-b30b-1f667a3153b4",
      type: "Candidate",
      username: "Admin",
      email: "admin@gmail.com",
      password: "123456789",
      avatar:
        "https://res.cloudinary.com/thekhiem/image/upload/v1649480055/udws8sdyn7y6z4gcmsrk.ico",
      professional_title: null,
      languages: null,
      age: null,
      current_salary: null,
      expected_salary: null,
      description: null,
      phone: null,
      country: null,
      post_code: null,
      city: null,
      full_address: null,
      curriculum_vitae: null,
      created_at: "2022-04-06T01:54:25.919Z",
      resume: null,
    })
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/account/login" element={<LoginLayout />} />
        <Route path="/account/register" element={<RegisterLayout />} />
        <Route path="/account/list" element={<ListCustomerLayout />} />
        <Route path="/cart" element={<ShoppingCartLayout />} />
        <Route path="/pages/contact-us" element={<AddProductsLayout />} />
        <Route path="/pages/about-us" element={<CheckoutLayout />} />
      </Routes>
    </div>
  );
}

export default App;
