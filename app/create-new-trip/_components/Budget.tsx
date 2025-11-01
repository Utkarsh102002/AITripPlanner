import React from "react";

export const BudgetOptions = [
  {
    id: 1,
    title: "Low Budget",
    desc: "Save smart, travel local",
    icon: "💸",
    value: "Low",
  },
  {
    id: 2,
    title: "Medium Budget",
    desc: "Balanced comfort and value",
    icon: "💰",
    value: "Medium",
  },
  {
    id: 3,
    title: "Premium Budget",
    desc: "Luxury travel experience",
    icon: "💎",
    value: "Premium",
  },
];

function Budget({ onSelect }: { onSelect: (val: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {BudgetOptions.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item.value)}
          className="p-3 border rounded-2xl bg-white hover:bg-blue-100 hover:cursor-pointer transition"
        >
          <h2 className="text-2xl">{item.icon}</h2>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Budget;
