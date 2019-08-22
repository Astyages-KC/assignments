let shopper = {
    groceryItem: "milk",
    itemPrice: 2.99,
    isOnsale: true,
    groceryCart: ["eggs", "butter", "bread"],
    groceryList: function() {
        shopper.groceryCart.push("bananas")
    // return `${shopper.groceryItem}  $ ${shopper.itemPrice} on sale? ${shopper.isOnsale} , other items to buy ${shopper.groceryCart}`; 
    return shopper.groceryItem + " $" + shopper.itemPrice + " on sale? " + shopper.isOnsale + ", Other items to buy " + shopper.groceryCart
}    
}
console.log (shopper.groceryList());

