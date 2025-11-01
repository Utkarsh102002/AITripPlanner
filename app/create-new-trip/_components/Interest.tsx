import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const interestOptions = [
  { id: 1, label: "Beaches 🏖️" },
  { id: 2, label: "Mountains 🏔️" },
  { id: 3, label: "Adventure 🧗‍♂️" },
  { id: 4, label: "Culture 🏛️" },
  { id: 5, label: "Food 🍜" },
  { id: 6, label: "Shopping 🛍️" },
];

function Interests({ onSelect }: { onSelect: (val: string) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow mt-2">
      <h2 className="font-semibold text-lg mb-3 text-gray-800">
        What are your travel interests?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {interestOptions.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleSelection(item.label)}
            className={`p-3 border rounded-2xl text-center transition cursor-pointer ${
              selected.includes(item.label)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-blue-100 border-gray-200"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <Button
        className="mt-4 w-full"
        onClick={() => onSelect(selected.join(", "))}
        disabled={selected.length === 0}
      >
        Confirm
      </Button>
    </div>
  );
}

export default Interests;
