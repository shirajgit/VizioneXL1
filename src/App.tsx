 
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import WhatWeDo from './Pages/WhatWeDo'
import WhoAreWe from './Pages/WhoAreWe'

function App() {
  
  return (
   <>
       <Navbar></Navbar>
       {/* <Home></Home> */}
       {/* <WhoAreWe></WhoAreWe> */}
       <WhatWeDo></WhatWeDo>
        <Footer></Footer>
   </>
  )
}

export default App
