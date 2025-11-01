// "use client";
// import React, { useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Send } from "lucide-react";
// import axios from "axios";

// type Message = {
//   role: string;
//   content: string;
// };

// function ChatBox() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [userInput, setuserInput] = useState<string>();

//   const onSend = async () => {
//     if (!userInput?.trim()) return;
//     setuserInput("");
//     const newMsg: Message = {
//       role: "user",
//       content: userInput,
//     };

//     setMessages((prev: Message[]) => [...prev, newMsg]);

//     const result = await axios.post("/api/aimodel", {
//       messages: [...messages, newMsg],
//     });

//     setMessages((prev: Message[]) => [
//       ...prev,
//       {
//         role: "assiatant",
//         content: result?.data?.resp,
//       },
//     ]);

//     console.log(result.data);
//   };

//   return (
//     <div className="h-[75vh] flex flex-col">
//       {/* display message */}
//       <section className="flex-1 overflow-y-auto p-4">
//         {messages.map((msg: Message, index) =>
//           msg.role == "user" ? (
//             <div className="flex justify-end mt-2" key={index}>
//               <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
//                 {msg.content}
//               </div>
//             </div>
//           ) : (
//             <div className="flex justify-start mt-2" key={index}>
//               <div className="max-w-lg bg-gray-100 text-Black px-4 py-2 rounded-lg">
//                 {msg.content}
//               </div>
//             </div>
//           )
//         )}
//       </section>

//       {/* user input  */}
//       <section>
//         <div className="border rounded-2xl p-4 shadow relative">
//           <Textarea
//             placeholder="Start typeing here..."
//             className="w-full h-28 bg-transparent border-none focus-visible:right-0 shadow-none resize-none "
//             onChange={(event) => setuserInput(event.target.value)}
//             value={userInput}
//           />
//           <Button
//             size={"icon"}
//             className="absolute bottom-6 right-6 "
//             onClick={() => onSend()}
//           >
//             <Send className="h-4 w-4" />
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ChatBox;


"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader } from "lucide-react";
import axios from "axios";
import EmptyState from "./EmptyState";
import GroupSize from "./GroupSize";
import TripDuration from "./TripDuration";


import Budget from "./Budget";
import Interests from "./Interest";

type Message = {
  role: string,
  content: string,
  ui?:string,
};

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // ✅ Send message handler
  const onSend = async () => {
    if (!userInput.trim()) return;

    const newMsg: Message = {
      role: "user",
      content: userInput,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, newMsg]);
    setUserInput("");
    setLoading(true);

    try {
      // ✅ Send user + history to backend
      const result = await axios.post("/api/aimodel", {
        messages: [...messages, newMsg],
      });

      const aiResponse = result?.data?.resp || "No response received.";

      // ✅ Add AI message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
          ui:result?.data?.ui,
        },
      ]);

      console.log("🧠 AI Response:", result.data);
    } catch (error) {
      console.error("🚨 API Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Unable to fetch response." },
      ]);
    } finally {
      setLoading(false);
    }
  };


const RenderGenerativeUi = (ui: string) => {
  const handleSelect = (value: string) => {
    setUserInput(value);
    onSend();
  };

  switch (ui) {
    case "groupsize":
      return <GroupSize onSelect={handleSelect} />;
    case "budget":
      return <Budget onSelect={handleSelect} />;
    case "tripduration":
      return <TripDuration onSelect={handleSelect} />;
    case "interests":
      return <Interests onSelect={handleSelect} />;
    default:
      return null;
  }
};


  return (
    <div className="h-[75vh] flex flex-col">
      {/* ✅ Empty state (first screen before chat starts) */}
      {messages?.length === 0 && (
        <EmptyState
          onSelectOption={(v: string) => {
            setUserInput(v);
            onSend();
          }}
        />
      )}

      {/* ✅ Chat Display */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) =>
          msg.role === "user" ? (
            // ✅ User message bubble
            <div className="flex justify-end mt-2" key={index}>
              <div className="max-w-lg bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                {msg.content}
              </div>
            </div>
          ) : (
            // ✅ Assistant message bubble
            <div className="flex justify-start mt-2" key={index}>
              <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg shadow">
                {msg.content}
                {RenderGenerativeUi(msg.ui ?? "")}
              </div>
            </div>
          )
        )}

        {/* ✅ Loader (AI thinking...) */}
        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg shadow flex items-center gap-2">
              <Loader className="h-4 w-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
      </section>

      {/* ✅ Input Section */}
      <section>
        <div className="border rounded-2xl p-4 shadow relative">
          <Textarea
            placeholder="Start typing here..."
            className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />

          {/* ✅ Send Button */}
          <Button
            size="icon"
            className="absolute bottom-6 right-6"
            onClick={onSend}
            disabled={loading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
