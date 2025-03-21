let inputPrice = prompt("Enter a price, for example $49,99");

let price = parseFloat(inputPrice.replace("$",""));

let discountedPrice = price * 0.9;

console.log(`Your new price is: $${discountedPrice.toFixed(2)}`);