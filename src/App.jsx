
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"

import EditTask from "./components/EditTask"
import Filters from "./components/Filters"

function App() {
  

  return (
    <>
         <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/filters" element={<Filters/>}/>
      <Route path="/editTask/:id" element={<EditTask/>}/>
      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
