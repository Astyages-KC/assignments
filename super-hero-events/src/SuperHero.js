import React from "react"

const SuperHero = (props) => {
console.log(props);
return (
    <div>
        {
            props.heros.map(hero => {
                
                return (
                    <div onClick={() => doStuff(hero.catchPhrase)}>
                        <p className="heroName">{hero.name}</p>
                        <p className="heroShow">{hero.show}</p>
                        <p className="heroPhrase">{hero.catchPhrase}</p>
                        <img src={hero.imageName}></img>

                    </div>

                )
            })
        }
    </div>
)
}

function doStuff(catchPhrase) {
    alert(catchPhrase);
}
export default SuperHero