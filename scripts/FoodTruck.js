import { EntreeOptions } from "./Entrees.js"
import { Purchases } from "./Sales.js"
import { placeOrderButton } from "./SaveSales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    /* const salesHTML = await Sales() */
    const entreesHTML = await EntreeOptions()
    const vegetableHTML = await Veggies()
    const sideHTML = await Sides()
    const purchaseHTML = await Purchases()
    const buttonHTML = await placeOrderButton()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">
        <section class="options">
            <h2>Main Dish</h2>
            ${entreesHTML}
        </section>
        <section class="options">
            <h2>Vegetable</h2>
            ${vegetableHTML}
        </section>
        <section class="options">
            <h2>Sides</h2>
            ${sideHTML}
        </section>
        </article>

        <article class="button">
        <section class="buttonClass">
        ${buttonHTML}
        </section>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${purchaseHTML}
        </article>

    `
}
