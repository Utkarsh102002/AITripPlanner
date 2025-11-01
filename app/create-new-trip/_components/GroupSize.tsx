import React from "react";

export const SelectTravelesList = [
  { id: 1, title: "Just Me", desc: "A solo traveler", icon: "🧍", people: "1" },
  { id: 2, title: "A Couple", desc: "Two travelers", icon: "🥂", people: "2" },
  { id: 3, title: "Family", desc: "3 to 5 people", icon: "🏡", people: "3-5" },
  {
    id: 4,
    title: "Friends",
    desc: "5 to 10 people",
    icon: "⛵",
    people: "5-10",
  },
];

function GroupSize({ onSelect }: { onSelect: (val: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {SelectTravelesList.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item.people)}
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

export default GroupSize;