import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#E29578] to-[#0D3B66] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Left Pulse Line */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-0" style={{ height: "40vh" }}>
        <div className="w-px flex-1 bg-[#0D3B66]/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E29578] to-[#0D3B66] rounded-full transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E29578] mt-1" />
      </div>
    </>
  );
}