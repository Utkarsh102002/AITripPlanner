import React from "react";
import { Globe2, Plane, Landmark } from "lucide-react";

const suggestions = [
  { title: "Create New Trip", icon: <Globe2 className="text-blue-400 h-5 w-5" /> },
  { title: "Inspire me where to go", icon: <Plane className="text-blue-400 h-5 w-5" /> },
  { title: "Discover Hidden Gems", icon: <Landmark className="text-blue-400 h-5 w-5" /> },
  { title: "Adventure Destination", icon: <Globe2 className="text-blue-400 h-5 w-5" /> },
];

function EmptyState({ onSelectOption }: { onSelectOption: (value: string) => void }) {
  return (
    <div className="text-center px-6 py-4">
      <h2 className="text-2xl font-semibold text-blue-900 mb-2">
        Start Planning A Trip
      </h2>

      <p className="text-gray-600 mb-6">
        Discover personalised travel itineraries, find the best destinations, and plan your dream vacation effortlessly. 
        Let our smart AI assistant do the hard work while you enjoy the journey.
      </p>

      <div className="flex flex-col gap-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => onSelectOption(suggestion.title)} 
            className="flex items-center gap-3 border rounded-xl p-3 cursor-pointer hover:bg-blue-50 transition-all shadow-sm"
          >
            {suggestion.icon}
            <h2 className="text-lg font-medium">{suggestion.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmptyState;
