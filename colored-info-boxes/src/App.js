import React from 'react';
import './App.css';
import Boxes from "./Boxes"

function App() {
  return (
    <div className="coloredBoxes">
      <Boxes 
      backgroundColor="#4DDBE8" title ="First Title" subtitle="first Subtitle" information="Important Stuff" />

    <Boxes 
    backgroundColor="#61C8FF" title = "Second Title" subtitle="second subtitle" information="blah blah blah" />
    
    <Boxes 
    backgroundColor="#4D89E8" title = "Third Title" subtitle="Third subtitle" information="beep beep beep" />

    <Boxes
    backgroundColor="#5469FF" title="4th Title" subtitle="4th subtitle" information="blah blah" />

<Boxes
    backgroundColor="#FF94B1" title="5th Title" subtitle="5th subtitle" information="so so something" />

<Boxes
    backgroundColor="#68B39C" title="6th Title" subtitle="6th subtitle" information="so so something" />

<Boxes
    backgroundColor="#E887D2" title="7th Title" subtitle="7th subtitle" information="so so something" />

<Boxes
    backgroundColor="#F1A1FF" title="8th Title" subtitle="8th subtitle" information="so so something" />

<Boxes
    backgroundColor="#BF87E8" title="9th Title" subtitle="9th subtitle" information="so so something" />

<Boxes
    backgroundColor="#6CCCAF" title="10th Title" subtitle="10th subtitle" information="so so something" />


    </div>
  )
}

export default App
