import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const DurationOptions = [
  {
    id: 1,
    title: "Weekend Getaway",
    desc: "2–3 days trip",
    icon: "🌇",
    value: "3 Days",
  },
  {
    id: 2,
    title: "One Week",
    desc: "Perfect short vacation",
    icon: "🏖️",
    value: "7 Days",
  },
  {
    id: 3,
    title: "Two Weeks",
    desc: "Explore at a relaxed pace",
    icon: "🗺️",
    value: "14 Days",
  },
  {
    id: 4,
    title: "Custom Duration",
    desc: "Enter your own number of days",
    icon: "✏️",
    value: "custom",
  },
];

function TripDuration({ onSelect }: { onSelect: (val: string) => void }) {
  const [customDays, setCustomDays] = useState("");

  const handleSelect = (value: string) => {
    if (value === "custom") return; // show input instead
    onSelect(value);
  };

  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {DurationOptions.map((item) => (
        <div
          key={item.id}
          onClick={() => handleSelect(item.value)}
          className="p-3 border rounded-2xl bg-white hover:bg-blue-100 hover:cursor-pointer transition"
        >
          <h2 className="text-2xl">{item.icon}</h2>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>

          {item.value === "custom" && (
            <div className="mt-2">
              <input
                type="number"
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
                placeholder="Enter days"
                className="border p-2 rounded-lg w-full mb-2"
              />
              <Button
                onClick={() => customDays && onSelect(`${customDays} Days`)}
                disabled={!customDays}
                className="w-full"
              >
                Confirm
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TripDuration;
