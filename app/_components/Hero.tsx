"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Globe2, Landmark, Send, Plane } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire me where to go",
    icon: <Plane className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Discover Hidden Gems",
    icon: <Landmark className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
];
function Hero() {
  const { user } = useUser();
  const router = useRouter();
  const onSend = () => {
    if (!user) {
      router.push("/sign-in");

      return;
    }
  };
  return (
    <div className="mt-24 w-full flex justify-center">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-3xl font-bold">
          Hey, I'm Your Personal Trip Planner
        </h1>
        <p className="text-lg">Tell me what you want i will handle the rest</p>

        {/* input box */}
        <div className="border rounded-2xl p-4 shadow relative">
          <Textarea
            placeholder="Create a Trip To Goa This Weekend ..."
            className="w-full h-28 bg-transparent border-none focus-visible:right-0 shadow-none resize-none "
          />
          <Button
            size={"icon"}
            className="absolute bottom-6 right-6 "
            onClick={() => onSend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {/* suggestion list */}
        <div className="flex gap-5">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:scale-105"
            >
              {suggestion.icon}
              <h2 className="text-sm ">{suggestion.title}</h2>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center flex-col">
          <h2 className="my-7 mt-14 flex gap-2 text-center">
            Not sure to start? <strong>See How It Work</strong>
          </h2>
          {/* videosection */}
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.example.com/dummy-video"
            thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
