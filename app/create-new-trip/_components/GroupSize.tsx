import React from "react";

export const SelectTravelesList = [
  {
    id: 1,

    title: "Just Me",

    desc: "A sole traveles in exploration",

    icon: "✈️",

    people: "1",
  },

  {
    id: 2,

    title: "A Couple",

    desc: "Two traveles in tandem",

    icon: "🥂",

    people: "2 People",
  },

  {
    id: 3,

    title: "Family",

    desc: "A group of fun loving adv",

    icon: "🏡",

    people: "3 to 5 People",
  },

  {
    id: 4,

    title: "Friends",

    desc: "A bunch of thrill-seekes",

    icon: "⛵",

    people: "5 to 10 People",
  },
];

function GroupSize() {
  return <div>
    
    {SelectTravelesList.map((item,index)=>(
        <div key={index} className="p-3 border rounded-2xl bg-white hover:cursor-pointer">
            <h2>{item.icon}</h2>
            <h2>{item.title}</h2>
        </div>
    ))}
    </div>;
}

export default GroupSize;
