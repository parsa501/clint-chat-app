import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatContainer from "./ChatContainer";
import RightSidebar from "./RightSidebar";

export default function Home() {
  const [user, setUser] = useState(false);

  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[15%]">
      <div
        className={`backdrop-blur-xl border-2 border-b-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
          user
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
}
