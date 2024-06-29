import React from "react";
import { useRouter } from "next/navigation";
export default function LogOut() {
  const router = useRouter();
  return (
    <div className="bottom-[300px] left-[100px] bg-purple-500 w-[250px] absolute rounded-xl h-[100px] flex justify-center items-center z-[999]">
      <button
        onClick={() => {
          router.push("/login");
        }}
        className="p-3 bg-blue-800 text-white font-bold rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
}
