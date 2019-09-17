import React from "react"

function Box(props) {
    console.log(props)
    const style = {
        backgroundColor: props.backgroundColor
    }
    return (
    <div style={style}>
        <p> {props.info}</p>
        <p> {props.title}</p>
        <p> {props.subtitle}</p>
        <p> {props.information}</p>

    </div>)
}

export default Box