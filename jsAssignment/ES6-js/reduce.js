const prices = [100, 200, 300, 400];

const total = prices.reduce((sum, item) => sum + item, 0);

console.log("Total = " + total);