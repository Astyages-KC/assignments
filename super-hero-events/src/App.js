import React from "react"
import data from "./data.json"
import SuperHero from "./SuperHero"
import "./styles.css"



const App = () => {
  return (
  <div>
    <SuperHero heros={data} />

  </div>
  )
}

export default App