import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterLayout from "./Layout/Authentication/Register/RegisterLayout";
import HomeLayout from "./Layout/Home/HomeLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/account/register" element={<RegisterLayout />} />
      </Routes>
    </div>
  );
}

export default App;
