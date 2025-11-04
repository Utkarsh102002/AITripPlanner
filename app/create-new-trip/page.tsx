// import React from 'react'
// import ChatBox from './_components/ChatBox';

// function page() {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10'>
//       <div>
        
//        <ChatBox/>
//       </div>
//       <div>
        
//       </div>
//     </div>
//   )
// }

// export default page;
"use client";
import React, { useState } from "react";
import ChatBox from "./_components/ChatBox";

export default function Page() {
  const [finalTrip, setFinalTrip] = useState<string>("");

  const renderTripPlan = () => {
    if (!finalTrip) return null;

    // split by Day 1, Day 2...
    const days = finalTrip.split(/Day\s*\d+:/i).slice(1);
    const titles = finalTrip.match(/Day\s*\d+:/gi) || [];

    // fallback formatting (if no days present)
    const formatted = finalTrip
      .replace(/\.\s+/g, ".\n")
      .split("\n")
      .map((line, i) => (
        <p key={i} className="text-gray-700 leading-relaxed mb-2">
          {line.trim()}
        </p>
      ));

    return (
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-3">🌍 Your Trip Plan</h2>
        {titles.length > 0
          ? days.map((day, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-4 border-l-4"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {titles[i]}
                </h3>
                <p className="text-gray-700 leading-relaxed">{day.trim()}</p>
              </div>
            ))
          : formatted}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
      <div>
        <ChatBox onFinalTrip={setFinalTrip} />
      </div>

      <div className="bg-gray-50 rounded-2xl overflow-y-auto h-[75vh]">
        {finalTrip ? (
          renderTripPlan()
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>No trip plan yet — start chatting!</p>
          </div>
        )}
      </div>
    </div>
  );
}


