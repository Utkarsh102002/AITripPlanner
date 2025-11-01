import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function TripOrigin({ onSelect }: { onSelect: (val: string) => void }) {
  const [location, setLocation] = useState("");

  return (
    <div className="p-3 bg-white rounded-2xl shadow">
      <h2 className="font-semibold text-lg mb-2">
        Where are you starting from?
      </h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your city..."
        className="border p-2 rounded-lg w-full mb-3"
      />
      <Button onClick={() => onSelect(location)}>Confirm</Button>
    </div>
  );
}

export default TripOrigin;
