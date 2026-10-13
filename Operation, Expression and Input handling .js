const billAmount = Number(prompt("Enter bill amount:"));
const tipPercentage = Number(prompt("Enter tip percentage:"));

const tip = billAmount * tipPercentage / 100;
const total = billAmount + tip;

console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);
