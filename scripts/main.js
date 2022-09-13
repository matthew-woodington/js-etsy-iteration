// 1. Show me how to calculate the average price of all items. Please console.log the average

const prices = items.map((num) => {
  return num["price"];
});

// console.log(prices);

const averagePrice = prices.reduce((acc, i) => acc + i) / prices.length;

console.log(`The average price is $${averagePrice.toFixed(2)}`);
