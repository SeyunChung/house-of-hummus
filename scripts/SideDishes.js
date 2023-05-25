import { setSideDishChoice } from "./TransientState.js"


const handleSideChoice = (event) => {
    if(event.target.name === "side") {
        setSideDishChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleSideChoice)





export const Sides = async () => {
    // fetch the vegetables data from our local api
    const response = await fetch("http://localhost:8088/sides")
    //convet data to javascript objects 
    const sides = await response.json()

    let sideHTML = ""

    const divStringArray = sides.map(
        (side) => {
            return `<div>
            <input type='radio' name='side' value='${side.id}'/> ${side.title}
            </div>`
        }
    )

    sideHTML += divStringArray.join("")

    return sideHTML
}