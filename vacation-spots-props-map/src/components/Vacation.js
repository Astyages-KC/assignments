import React from "react"


function Vacation(props) {
let i = -1;
let color;
    return (

        <div>
            {
                
                props.vacationSpots.map(p => {
                    i += 1;
                    if(p.timeToGo === "Spring") {
                        color = 'green';
                    } else if(p.timeToGo === "Summer") {
                        color = 'yellow';
                    } else if(p.timeToGo === "Winter") {
                        color = 'brown';
                    }  else if(p.timeToGo === "Fall") {
                        color='orange';
                    }
                    return (
                    <div style={{backgroundColor: color}} key={`spot-${i}`}>
                    <br/>
                    <h3>Vacation Spot: {p.place}</h3>
                    <p>Price: {p.price}</p>
                    <p>Best Time to Go: {p.timeToGo}</p>
                    <br />
                    </div>)
                }) 
            }
        </div>
    )
}
                   

export default Vacation