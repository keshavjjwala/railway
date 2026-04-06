import React from "react";

const breakfastItems = [
  ["1.", "Dosa", "30"],
  ["2.", "Idly with Vada", "50"],
  ["3.", "Gobi Paratha", "50"],
  ["4.", "Upma", "50"],
  ["5.", "Poori", "40"],
  ["6.", "Egg Dosa", "60"],
  ["7.", "Mysore Bonda", "40"],
  ["8.", "Pesarattu Upma", "50"],
  ["9.", "Ghee Masala Dosa", "60"],
  ["10.", "Set Dosa", "40"]
];

const lunchItems = [
  ["1.", "Veg Meals", "100"],
  ["2.", "Veg Fried Rice", "120"],
  ["3.", "Veg Biryani", "120"],
  ["4.", "Tomato Rice", "60"],
  ["5.", "Mushroom Biryani", "150"],
  ["6.", "Non-Veg Meals", "150"],
  ["7.", "Chicken Dum Biryani", "180"],
  ["8.", "Mixed Non-Veg Biryani", "200"],
  ["9.", "Avakaya Biryani", "150"],
  ["10.", "Gongura Mutton Curry with Rice", "300"]
];

const dinnerItems = [
  ["1.", "Paratha and Curd Rice", "60"],
  ["2.", "Pulka (5) with Paneer", "100"],
  ["3.", "Rumal Roti (5) with Paneer Butter Masala", "150"],
  ["4.", "Aloo Paratha", "50"],
  ["5.", "Fruit Salad", "50"],
  ["6.", "Chapathi (5) with Butter Chicken", "120"],
  ["7.", "Khichdi", "70"],
  ["8.", "Bread Omelette", "50"],
  ["9.", "Bisi Bele Bath", "70"],
  ["10.", "Manchurian Fried Rice", "70"]
];

function MealsTable({ title, items }) {
  return (
    <>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${title}-${item[0]}`}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td className="price-cell">
                <span>Rs. {item[2]}</span>
                <button className="btn-order" type="button">
                  Order Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function MealsPage() {
  return (
    <div className="meals-page">
      <MealsTable title="Breakfast" items={breakfastItems} />
      <hr className="section-divider" />
      <MealsTable title="Lunch" items={lunchItems} />
      <hr className="section-divider" />
      <MealsTable title="Dinner" items={dinnerItems} />
    </div>
  );
}

export default MealsPage;
