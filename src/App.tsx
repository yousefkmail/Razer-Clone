import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ConsolePage from "./Pages/Console/ConsolePage";
import LifeStyle from "./Pages/LifeStylePage/LifeStyle";
import MainPage from "./Pages/MainPage/MainPage/MainPage";
import MobilePage from "./Pages/MobilePage/MobilePage";
import PcPage from "./Pages/PcPage/PcPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="App"
    >
      <div>
        <Navbar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/pc" element={<PcPage />} />
          <Route path="/console" element={<ConsolePage />} />
          <Route path="/mobile" element={<MobilePage />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/community"
            element={<div> welcome to cummounity</div>}
          />
          <Route path="/support" element={<div> welcome to support</div>} />
          <Route path="/store" element={<div> welcome to store </div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
