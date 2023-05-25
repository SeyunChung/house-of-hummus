import { setVegetableChoice } from "./TransientState.js"


const handleVegetableChoice = (event) => {
    if(event.target.name === "vegetable") {
        setVegetableChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleVegetableChoice)




// Create and export a function that fetches the vegetable objects from our local database
export const Veggies = async () => {
    // fetch the vegetables data from our local api
    const response = await fetch("http://localhost:8088/vegetables")
    //convet data to javascript objects 
    const vegetables = await response.json()

    let vegetableHTML = ""

    const divStringArray = vegetables.map(
        (vegetable) => {
            return `<div>
            <input type='radio' name='vegetable' value='${vegetable.id}'/> ${vegetable.type}
            </div>`
        }
    )

    vegetableHTML += divStringArray.join("")

    return vegetableHTML
}