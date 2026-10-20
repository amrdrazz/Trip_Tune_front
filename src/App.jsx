import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Destination from "./pages/Destination"
import Hotels from "./pages/Hotels"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </>
  )
}

export default App
