import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function Destination({ onSelect }: { onSelect: (val: string) => void }) {
  const [destination, setDestination] = useState("");

  return (
    <div className="p-3 bg-white rounded-2xl shadow">
      <h2 className="font-semibold text-lg mb-2">What's your destination?</h2>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination..."
        className="border p-2 rounded-lg w-full mb-3"
      />
      <Button onClick={() => onSelect(destination)}>Confirm</Button>
    </div>
  );
}

export default Destination;
