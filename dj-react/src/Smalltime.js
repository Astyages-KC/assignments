import React from "react"
import Music from "./Music"


const Smalltime = props => {


    return (
        <div>
        <div className="djReactMain">
            <div className="div1" style= {{
              backgroundColor: props.box1
            }}
            ></div> 
            <div className="div2" style= {{
              backgroundColor: props.box2
            }}></div> 
            <div className="div3" style= {{
              backgroundColor: props.box4
            }}></div> 
            <div className="div4" style= {{
              backgroundColor: props.box3
            }}></div>
            </div>
            <div className="buttonDiv">
            <button className ="bW" onClick={props.whiteToBlackColor}>
                whiteBlack</button>
            <button className="purpButton" onClick={props.purpleBox}>
                Purple</button>
            <button className="bigTimeBlue" onClick={props.bigTimeBlue}>
                Blue</button>
                <button className="bigTimeDj" onClick={props.bigTimeDj}>
                Insane Dj</button>
                <Music />
                
                </div>
        </div>


    )
}

export default Smalltime