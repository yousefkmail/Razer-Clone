import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Pages/MainPage/MainPage/MainPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/pc" element={<div> Welcome to pc</div>} />
        <Route path="/console" element={<div> Welcome to console</div>} />
        <Route path="/mobile" element={<div> welcome to mobile</div>} />
        <Route path="/lifestyle" element={<div> welcome to lifestyle</div>} />
        <Route path="/services" element={<div> welcome to services</div>} />
        <Route path="/community" element={<div> welcome to cummounity</div>} />
        <Route path="/support" element={<div> welcome to support</div>} />
        <Route path="/store" element={<div> welcome to store </div>} />
      </Routes>
    </div>
  );
}

export default App;
