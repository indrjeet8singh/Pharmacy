import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./components/pages/HomePage";
import LandingPage from "./components/LandingPage";
import About from "./components/pages/About";
import Empower from "./components/pages/Empower";
import Solution from "./components/pages/Solution";
import Partners from "./components/pages/Partners";
import TermsAndCondition from "./components/pages/TermAndCondition";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Faq from "./components/pages/Faq";
import Career from "./components/pages/Career";
import ContactUs from "./components/pages/ContactUs";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="Empower" element={<Empower/>}/>
          <Route path="Solutions" element={<Solution/>}/>
          <Route path="Partners" element={<Partners/>}/>
          <Route path="TermsAndConditions" element={<TermsAndCondition/>}/>
          <Route path="PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="Faq" element={<Faq/>}/>
          <Route path="Career" element={<Career/>}/>
          <Route path="ContactUs" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
