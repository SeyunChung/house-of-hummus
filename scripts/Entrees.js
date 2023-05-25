import { setEntreeChoice } from "./TransientState.js"


const handleEntreeChoice = (event) => {
    if(event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleEntreeChoice)


// Create and export a function that fetches the entree objects from our local database
export const EntreeOptions = async () => {
    // fetch the entrees data from our local api
    const response = await fetch("http://localhost:8088/entrees")
    //convet data to javascript objects 
    const entrees = await response.json()

    let entreeHTML = ""
    
    const divStringArray = entrees.map(
        (entree) => {
            return `<div>
            <input type='radio' name='entree' value='${entree.id}'/> ${entree.name}
            </div>`
        }
    )

    entreeHTML += divStringArray.join("")

    return entreeHTML
}