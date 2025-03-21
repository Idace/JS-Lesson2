let inputPrice = prompt("Enter a price:");

let price = parseFloat(inputPrice.replace("$",""));

let discountedPrice = price * 0.9;

console.log(`Your new price is: $${discountedPrice.toFixed(2)}`);