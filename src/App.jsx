
import {Route, Routes} from "react-router-dom"
import Home from "./Views/Home/Home"
import Payout from "./Views/Payout/Payout"


function App() {
  

  return (
   
      <div className=' bg-white'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/payout" element={<Payout/>}/>
        </Routes>

      </div>
  )
}

export default App
