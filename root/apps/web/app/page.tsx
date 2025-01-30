"use client";

import { useEffect } from "react";
import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { registerIfNot } from "../actions/auth";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push("/dashboard");
      console.log(user.id)
      registerIfNot(user.id , user.fullName , user.phoneNumbers[0].phoneNumber , user.emailAddresses[0].emailAddress)
    } 
  }, [isLoaded, user, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to SHEWorks</h1>
      <p>Empowering domestic helpers through their skills.</p>
      <SignInButton>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md">
          Sign In
        </button>
      </SignInButton>
    </div>
  );
}
