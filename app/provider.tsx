"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }: { children: React.ReactNode }) {
  const createUserMutation = useMutation(api.user.CreateNewUser);
  const { user, isLoaded } = useUser(); // ✅ use isLoaded to avoid early call
  const [userDetail, setUserDetail] = useState<any>(null);

  // ✅ define function before useEffect
  const createNewUser = async () => {
    if (!user) return;

    try {
      const result = await createUserMutation({
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        imageUrl: user.imageUrl || "",
      });

      console.log("✅ Convex user created or fetched:", result);
      setUserDetail(result);
    } catch (error) {
      console.error("❌ Error creating user in Convex:", error);
    }
  };

  // ✅ only call when user is fully loaded and available
  useEffect(() => {
    if (isLoaded && user) {
      createNewUser();
    }
  }, [isLoaded, user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export default Provider;

// ✅ Custom hook for easy context access
export const useUserDetail = () => useContext(UserDetailContext);
