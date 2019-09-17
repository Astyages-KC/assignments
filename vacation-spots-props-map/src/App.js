import React from 'react';
import './App.css';
import Vacation from "./components/Vacation"

let vacationSpots = [
  {
    place: "Island Park, Idaho",
    price: 150,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

function App() {
  
  return (
    <div className="vacationSpots">
      <h2>Choose a destination vacation!  </h2>
      <Vacation 
      spot={vacationSpots} 
      />
      
    
      
    </div>
  );
}

export default App;
