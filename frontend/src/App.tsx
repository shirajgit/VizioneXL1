 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Career from './Pages/Career'
import ContactUs from './Pages/Contact'
import Home from './Pages/Home'
import OurCreations from './Pages/OurCreations'
import WhatWeDo from './Pages/WhatWeDo'
import WhoAreWe from './Pages/WhoAreWe'

function App() {
  
  return (
   <>
  <BrowserRouter>
               <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/whoarewe" element={<WhoAreWe />} />
         <Route path="/whatwedo" element={<WhatWeDo />} />
         <Route path="/ourcreations" element={<OurCreations />} />
         <Route path="/career" element={<Career />} />
        </Routes>
         <Footer></Footer>
       </BrowserRouter>
      
   </>
  )
}

export default App
