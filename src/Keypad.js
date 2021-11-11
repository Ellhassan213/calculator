import React from "react"
import "./index.css"

function Keypad(props) {
    return(
        <div>
            <button className="ACButton" name="AC" onClick={props.handleClick}> AC </button>
            <button className="Button" name="/" onClick={props.handleClick}> / </button>
            <br></br>
            <button className="Button" name="7" onClick={props.handleClick}> 7 </button>
            <button className="Button" name="8" onClick={props.handleClick}> 8 </button>
            <button className="Button" name="9" onClick={props.handleClick}> 9 </button>
            <button className="Button" name="*" onClick={props.handleClick}> x </button>
            <br></br>
            <button className="Button" name="4" onClick={props.handleClick}> 4 </button>
            <button className="Button" name="5" onClick={props.handleClick}> 5 </button>
            <button className="Button" name="6" onClick={props.handleClick}> 6 </button>
            <button className="Button" name="-" onClick={props.handleClick}> - </button>
            <br></br>
            <button className="Button" name="1" onClick={props.handleClick}> 1 </button>
            <button className="Button" name="2" onClick={props.handleClick}> 2 </button>
            <button className="Button" name="3" onClick={props.handleClick}> 3 </button>
            <button className="Button" name="+" onClick={props.handleClick}> + </button>
            <br></br>
            <button className="Button" name="0" onClick={props.handleClick}> 0 </button>
            <button className="Button" name="." onClick={props.handleClick}> . </button>
            <button className="EQButton" name="=" onClick={props.handleClick}> = </button>
            <br></br>
        </div>
    )
}

export default Keypad