import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Idx from "./index";
import './index.css'
import REach from "./Reach-Us";
import AboutUs from "./About-Us";
import Corporate from "./corporate";
//  Dream Destination Weddings and Events
import Luxury from "./Componet/Luxury";
import Wedding from "./Componet/Wedding";
import CM from "./Componet/Celebrity Management";
import Rsp from "./Componet/Reality";
//  What we do
import WeddingDecorators from './What-We-Do/WEDDING-DECOR/Wedding-decore';
import WeddingPlaner from './What-We-Do/WEDDING_PLANER/WEDDING_PLANER';
import Hostilaty from './What-We-Do/Hostilaty/Hostilaty';
import Catering from './What-We-Do/Catering/Catering';
//  WEDDING-PLANNING-&-MANAGEMENT
import Complete_wedding_planer from "./WEDDING-PLANNING-&-MANAGEMENT/COMPLETE-WEDDING-PLANNING/App";
import PARTIAL_WEDDING_PLANNING from "./WEDDING-PLANNING-&-MANAGEMENT/PARTIAL-WEDDING-PLANNING/App";
import Theme_Based_Wedding from "./WEDDING-PLANNING-&-MANAGEMENT/THEME-BASED-WEDDING-PLANNING/App";
import Wedding_Designers_In_India from "./WEDDING-PLANNING-&-MANAGEMENT/Wedding-Designers-In-India/App";
// EXCLUSIVE WEDDING DEALS
import Beach from "./EXCLUSIVE WEDDING DEALS/Beach-Wedding/Beach-Wedding";
import Cruise from "./EXCLUSIVE WEDDING DEALS/Cruise.jsx/Cruise";
import Royal from "./EXCLUSIVE WEDDING DEALS/Royal-Wedding/Royal";
import Desert from "./EXCLUSIVE WEDDING DEALS/Desert-Wedding/Desert";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(1, 0);
  }, [location.pathname]);
  return children
}

const App = () => {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Playfair Display SC' rel='stylesheet'></link>

      <BrowserRouter>
        <Wrapper>
          <Routes>

            <Route path="/" element={<Idx />} />
            <Route path="/Luxury" element={<Luxury />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Wedding" element={< Wedding />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Celebrity" element={< CM />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Reality" element={< Rsp />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Reach-us" element={< REach />} />

            <Route path="/" element={<Idx />} />
            <Route path="/About-us" element={< AboutUs />} />

            <Route path="/" element={<Idx />} />
            <Route path="/corporate-services" element={< Corporate />} />

            <Route path="/" element={<Idx />} />
            <Route path="/WeddingDecorators" element={< WeddingDecorators />} />

            <Route path="/" element={<Idx />} />
            <Route path="/WeddingPlaner" element={< WeddingPlaner />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Hostilaty" element={< Hostilaty />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Catering" element={< Catering />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Complete_wedding_planer" element={<Complete_wedding_planer />} />

            <Route path="/" element={<Idx />} />
            <Route path="/PARTIAL_WEDDING_PLANNING" element={<PARTIAL_WEDDING_PLANNING />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Theme_Based_Wedding" element={<Theme_Based_Wedding />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Wedding_Designers_In_India" element={<Wedding_Designers_In_India />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Beach_Wedding" element={<Beach />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Cruise_Wedding" element={<Cruise />} />

            <Route path="/" element={<Idx />} />
            <Route path="/Royal_Wedding" element={<Royal/>} />

            <Route path="/" element={<Idx />} />
            <Route path="/Desert_Wedding" element={<Desert/>} />

          </Routes>
        </Wrapper>
      </BrowserRouter >
    </>
  )
};

export default App;