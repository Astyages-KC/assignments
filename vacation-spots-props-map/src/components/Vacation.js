import React from "react"


function Vacation(props) {

    return (

        <div>
            {
                props.spot.map(p => {
                    return (
                    <div>
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