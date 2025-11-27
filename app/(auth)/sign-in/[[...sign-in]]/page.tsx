import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
      <SignIn />
    </div>
  );
}
