// 1. Show me how to calculate the average price of all items. Please console.log the average

// const _ = require("lodash");

// const prices = items.map((num) => {
//   return num["price"];
// });

const prices = _.map(items, "price");
const averagePrice = _.sum(prices) / prices.length;

console.log(`The average price is $${averagePrice.toFixed(2)}`);

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.

const specificCostList = _.filter(items, (item) => {
  return item.price <= 18 && item.price >= 14;
});

console.log(
  `Items that cost between $14.00 USD and $18.00 USD:`,
  specificCostList
);

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

const alternateCurrency = _.filter(items, ["currency_code", "GBP"]);

// console.log(alternateCurrency);

alternateCurrency.forEach((item) =>
  console.log(`${item.title} costs £${item.price}`)
);

// 4. Show me how to find which items are made of wood. Please console.log the ones you find.

const madeOfWood = _.filter(items, (item) => {
  return item["materials"].includes("wood");
});

console.log(`Items that are made of wood include:`, madeOfWood);

// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

const longMaterialList = _.filter(items, (item) => {
  return item["materials"].length >= 8;
});

// console.log(longMaterialList);

longMaterialList.forEach((item) =>
  console.log(
    `${item.title} has ${item.materials.length} materials`,
    item.materials
  )
);

// 6. Show me how to calculate how many items were made by their sellers. Please console.log your answer.

const madeBySeller = _.filter(items, ["who_made", "i_did"]);

// console.log(madeBySeller);

console.log(`${madeBySeller.length} items were made by their sellers`);
