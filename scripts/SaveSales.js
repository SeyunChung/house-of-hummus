import { placeOrder } from "./TransientState.js";

const handlePlacedOrderClick = (clickEvent) => {
    if(clickEvent.target.id === 'placeOrder') {
        placeOrder(parseInt(clickEvent.target.id))
    }
}

export const placeOrderButton = () => {
    document.addEventListener("click", handlePlacedOrderClick)
    return `<button id="placeOrder">Purchase Combo</button>`
}