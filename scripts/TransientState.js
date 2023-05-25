const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0,
  };
  
  export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree;
    //console.log(transientState)
  };
  
  export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable;
    //console.log(transientState)
  }

  export const setSideDishChoice = (chosenSideDish) => {
    transientState.sideId = chosenSideDish
    //console.log(transientState)
  }
  
   export const placeOrder = async () => { 
    
          /* Add the required keys to the object below that are
          needed for a POST operation. */
      
  
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };
  
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/purchases", postOptions);
    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
}; 