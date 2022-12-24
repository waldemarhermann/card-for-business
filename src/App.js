import React from "react"
import "./App.css"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <div className="main-container">
      <Info />
      <About />
      <Interests />
      </div>
      <Footer />
    </div>
  )
}

export default App
