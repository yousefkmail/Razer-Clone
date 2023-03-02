import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Pages/MainPage/MainPage/MainPage";
import PcPage from "./Pages/PcPage/PcPage";
function App() {
  return (
    <div style={{ backgroundColor: "black" }} className="App">
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/pc" element={<PcPage />} />
        <Route path="/console" element={<div> Welcome to console</div>} />
        <Route path="/mobile" element={<div> welcome to mobile</div>} />
        <Route path="/lifestyle" element={<div> welcome to lifestyle</div>} />
        <Route path="/services" element={<div> welcome to services</div>} />
        <Route path="/community" element={<div> welcome to cummounity</div>} />
        <Route path="/support" element={<div> welcome to support</div>} />
        <Route path="/store" element={<div> welcome to store </div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
