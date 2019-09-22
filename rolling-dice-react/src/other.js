import React from 'react';
import Die from './Die.js';
import './dice.css';

//Create a class component called <DiceBox />
class DiceBox extends React.Component {
    constructor() {
        super()
            this.state = {
                nums: []
            }
    }
// Write a method in that class that produces 5 random numbers between 1 and 6 and saves them in state.
    random(count) { //dynamic parameter count
        let newArray =[]
        for(let i=0; i < count; i++){
        newArray.push(Math.floor(Math.random()*6)+1 //pushing 5x
        )
        }
    //1st param what you want state to become, 2nd, a callback when state is complete
        const firstParam = function(){
        return {nums: newArray}
        }
        const secondParam = function() {
        console.log("state is now set", newArray)
        }

        this.setState(firstParam, secondParam) //2nd optional parameter, a fcn
        }

    render() {
        return(
            <div>
        {/* Display the 5 random numbers in your <DiceBox /> JSX. */}
            <button onClick={()=> (this.random(5))}>random</button>
            {this.state.nums}
            <Die num={this.state.nums} secondkey=' '/>
            </div>
        )
    }
}

export default DiceBox