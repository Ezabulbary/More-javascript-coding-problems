const products = [
    {name: 'shirt', price: 500},
    {name: 'pant', price: 1000},
    {name: 'phone', price: 21000},
    {name: 'leptop', price: 85000},
    {name: 'watch', price: 500},
]

let totalPrice = 0;

for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);


// total price with quantity 

const cart = [
    { name: 'shirt', price: 500, quantity:10 },
    { name: 'pant', price: 1000, quantity:6 },
    { name: 'phone', price: 21000, quantity:1 },
    { name: 'leptop', price: 85000, quantity:1 },
    { name: 'watch', price: 500, quantity:1 },
]

let totalCart = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    totalCart = totalCart + productTotal;
}
console.log(totalCart);