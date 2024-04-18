import './App.css'
import { Routes, Route } from 'react-router-dom'
import Branch from './Pages/Homepage/Branch/Branch'
import Homepage from './Pages/Homepage/Homepage'
import About from './Pages/Homepage/About/About'
import Contacts from './Pages/Contacts/Contacts'


export default function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Branch" element={<Branch />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </>
  )

}




