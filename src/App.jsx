import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import NavBar from "./component/NavBar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Conditions from "./pages/ConditionPage/Conditions";
import Products from "./pages/ProductPage/Product";
import FAQ from "./pages/FAQPage/FAQ";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import GetTouch from "./component/GetTouch";
import Footer from "./component/Footer";
import Physiotherapy from "./pages/ServicePage/PhysioTherapy/PhysioTherapy.jsx";
import ChiropracticCare from "./pages/ServicePage/ChiropracticCare/ChiropracticeCare.jsx";
import MassageTherapy from "./pages/ServicePage/MassageTherapy/MassageTherapy.jsx";
import Acupuncture from "./pages/ServicePage/Acupuncture/Acupuncture.jsx";
import ShockwaveTherapy from "./pages/ServicePage/ShockwaveTherapy/ShockwaveTherapy.jsx";
import Spinal from "./pages/ServicePage/Spinal/Spinal.jsx";

const App = () => {
  return (
    <div className="text-4xl">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/services">
            <Route
              path="physiotherapy-mississauga"
              element={<Physiotherapy />}
            />
            <Route path="chiropractic-care" element={<ChiropracticCare />} />
            <Route path="massage-therapy" element={<MassageTherapy />} />
            <Route path="acupuncture-treatment" element={<Acupuncture />} />
            <Route path="shockwave-therapy" element={<ShockwaveTherapy />} />
            <Route path="spinal-traction" element={<Spinal />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/gettouch" element={<GetTouch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
