// 2: Shopping Cart Analyzer
// Calculate total bill
// Return:
// • Total amount
// • Total quantity of items
// Use rest operator to accept multiple items

function CartAnalyzer(...items) {
    let TotalAmount = 0;
    let TotalQuantity = 0;

    items.forEach(items => {
        TotalAmount += items.price * items.quantity;
        TotalQuantity += items.quantity;
        
    })

    return {

        TotalAmount,
        TotalQuantity
    }
}

const cart = CartAnalyzer(
    { name: "Shirt", price: 6000, quantity: 2 },
    { name: "Shoes", price: 8000, quantity: 1 }
)

console.log(cart)