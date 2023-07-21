import React from "react";
import "./App.css";
import Page18 from "./Pages/Page18";
import Page57 from "./Pages/Page57";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page19 from "./Pages/Page19";
import Page58 from "./Pages/Page58";
import Page59 from "./Pages/Page59";
import Page60 from "./Pages/Page60";
import Page61 from "./Pages/Page61";
import Page20 from "./Pages/Page20";
import Imac211 from './Pages/Imac211';
import Page68 from "./Pages/Page68";
import Page69 from "./Pages/Page69";
import Page1 from "./Pages/Page1";
import Page4 from "./Pages/Page4";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Page65 from "./Pages/Page65";
import Page66 from "./Pages/Page66";
import Page4aditya from "./Pages/Page4aditya";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/page57" element={<Page57 />} />
          <Route path="/page58" element={<Page58 />} />
          <Route path="/page59" element={<Page59 />} />
          <Route path="/page60" element={<Page60 />} />
          <Route path="/page61" element={<Page61 />} />
          <Route path="/page19" element={<Page19 />} />
          <Route path="/page20" element={<Page20 />} />
          <Route path="/Page18" element={<Page18 />} />
          <Route path='/imac211' element={<Imac211 />} />
          <Route path="/page68" element={<Page68 />} />
          <Route path="/page69" element={<Page69 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page65" element={<Page65 />} />
          <Route path="/page66" element={<Page66 />} />
          <Route path="/page4aditya" element={<Page4aditya/>}/>
          
          

            
        </Routes>
      </BrowserRouter>
      {/* <Navbar></Navbar>
      <div className="h-screen">&nbsp;</div>
      <Footer></Footer> */}
    </>
  );
}

export default App;
