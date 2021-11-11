import React, {useState} from "react"
import Keypad from "./Keypad"
import Display from "./Display"

function App() {

    const [expression, setExpression] = useState("")

    function handleClick(event) {
        const {name} = event.target

        if(name === "AC") {
            setExpression("") 
        }else if(name === "="){
            if(expression.startsWith("0")) {
                setExpression("") 
                console.log("Leading 0 not allowed!")
            }else if(expression === "") {
                setExpression("") 
            }else{
                //Error handling here TBD
                setExpression(eval(expression))
            }
        }else{
            setExpression(PrevExpression => PrevExpression + name)
        }
    }

    return (
        <div>
            <h1> Calculator </h1>
            <Display expression={expression}/>
            <Keypad handleClick={handleClick}/>
        </div>
    )
}

export default App