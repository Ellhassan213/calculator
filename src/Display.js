import React from "react"
import "./index.css"

function Display(props) {
    return(
        <div className="Display">
            <h1> {props.expression} </h1>
        </div>
    )
}

export default Display