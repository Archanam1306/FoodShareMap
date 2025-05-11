
import React from 'react';
import FoodListItem from './FoodListItem';

const FoodList = () => {
  const foodItems = [
    {
      name: "Fresh Vegetables",
      description: "Assorted vegetables from local farm",
      quantity: "5 kg",
      distance: "0.8 miles",
      expiresIn: "2 days"
    },
    {
      name: "Bread and Pastries",
      description: "Bread, rolls and pastries from downtown bakery",
      quantity: "12 items",
      distance: "1.2 miles",
      expiresIn: "1 day"
    },
    {
      name: "Canned Goods",
      description: "Assorted non-perishable canned items",
      quantity: "8 cans",
      distance: "0.5 miles",
      expiresIn: "6 months"
    },
    {
      name: "Dairy Products",
      description: "Milk, yogurt and cheese",
      quantity: "4 items",
      distance: "1.5 miles",
      expiresIn: "3 days"
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-xl mb-4 text-foodshare-green-dark">Available Foods</h2>
      <div>
        {foodItems.map((item, index) => (
          <FoodListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
