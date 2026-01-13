 
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
       <Navbar></Navbar>
       {/* <Home></Home> */}
       {/* <WhoAreWe></WhoAreWe> */}
       {/* <WhatWeDo></WhatWeDo> */}
       {/* <OurCreations></OurCreations> */}
       {/* <Career></Career> */}
        <ContactUs></ContactUs>
        <Footer></Footer>
   </>
  )
}

export default App
