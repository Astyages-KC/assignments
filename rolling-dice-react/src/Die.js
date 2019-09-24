import React from 'react'

const Die = (props) => {
    function newDie(value, index, array){
        return <div className="dice" key={index}>

            
        </div>

}
const newArr=props.num.map(newDie)
return newArr

}

export default Die