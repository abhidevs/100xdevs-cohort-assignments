/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const spendingByCategory = {};

  transactions.forEach((item) => {
    if (!spendingByCategory[item.category]) {
      spendingByCategory[item.category] = 0;
    }

    spendingByCategory[item.category] += parseInt(item.price);
  })

  const spendingByCategoryList = [];

  for (const category in spendingByCategory) {
    spendingByCategoryList.push({
      category,
      totalSpent: spendingByCategory[category]
    });
  }

  return spendingByCategoryList;
}

module.exports = calculateTotalSpentByCategory;
