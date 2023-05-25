export const Purchases = async () => {
    const fetchResponse = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side");
    const purchases = await fetchResponse.json();
    let purchasesHTML = "";
    const purchasesArray = purchases.map((purchase) => {
      const purchasePrice =
      purchase.entree.price + purchase.vegetable.price + purchase.side.price;
      purchasesHTML += `<div>
              Receipt #${purchase.id} = $${purchasePrice}
              </div>`;
    });
    purchasesHTML += purchasesArray.join(" ");
    return purchasesHTML;
  };