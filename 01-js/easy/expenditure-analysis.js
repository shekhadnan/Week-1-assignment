/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var obj = {};
  var arr = [];
  for (var i = 0; i < transactions.length; i++) {
    if (!obj[transactions[i].category]) {
      obj[transactions[i].category] = 0;
    }
    obj[transactions[i].category] =
      obj[transactions[i].category] + transactions[i].price;
  }
  for (let category in obj) {
    arr.push({ [category]: obj[category] });
  }
  return arr;
}

const transactions = [
  { itemName: "Item 1", category: "Food", price: 20, timestamp: "2024-04-14" },
  { itemName: "Item 2", category: "Food", price: 30, timestamp: "2024-04-14" },
  {
    itemName: "Item 3",
    category: "Clothing",
    price: 50,
    timestamp: "2024-04-14",
  },
  {
    itemName: "Item 4",
    category: "Electronics",
    price: 100,
    timestamp: "2024-04-14",
  },
  { itemName: "Item 5", category: "Food", price: 25, timestamp: "2024-04-14" },
];

console.log(calculateTotalSpentByCategory(transactions));
}

module.exports = calculateTotalSpentByCategory;
