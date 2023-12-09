/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
