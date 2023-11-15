import { Route, Routes } from "react-router-dom"
import { About, Contact, Hero, Navbar , Events, Footer} from './components'

const App=() => {
  return (
      <div className="relative bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>
          <Footer/> 
      </div>
  )
}

export default App
