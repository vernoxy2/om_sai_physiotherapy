import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import NavBar from "./component/NavBar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Conditions from "./pages/ConditionPage/Conditions";
import Service from "./pages/ServiceTherapyPage/Service";
import Products from "./pages/ProductPage/Product";
import FAQ from "./pages/FAQPage/FAQ";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import GetTouch from "./component/GetTouch";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className='text-4xl'>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/sevrice&therapy" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gettouch" element={<GetTouch />} />
        </Routes>
        <Footer />   
      </BrowserRouter>
    </div>
  )
}

export default App
