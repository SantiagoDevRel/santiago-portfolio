"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Hero area — orange glow top-right */}
      <div
        className="absolute w-[1200px] h-[1200px]"
        style={{
          top: "-400px",
          right: "-400px",
          background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, rgba(255,107,53,0.035) 15%, rgba(255,107,53,0.025) 30%, rgba(255,107,53,0.015) 45%, rgba(255,107,53,0.006) 60%, transparent 80%)",
        }}
      />
      {/* Hero area — sienna glow left */}
      <div
        className="absolute w-[1000px] h-[1000px]"
        style={{
          top: "-100px",
          left: "-450px",
          background: "radial-gradient(circle, rgba(200,64,10,0.03) 0%, rgba(200,64,10,0.025) 15%, rgba(200,64,10,0.018) 30%, rgba(200,64,10,0.01) 45%, rgba(200,64,10,0.004) 60%, transparent 80%)",
        }}
      />
      {/* Mid-page — career/timeline area */}
      <div
        className="absolute w-[1200px] h-[1200px]"
        style={{
          top: "800px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(255,107,53,0.03) 0%, rgba(255,107,53,0.025) 15%, rgba(255,107,53,0.017) 30%, rgba(255,107,53,0.009) 45%, rgba(255,107,53,0.003) 60%, transparent 80%)",
        }}
      />
      {/* Lower sections — warm glow */}
      <div
        className="absolute w-[1600px] h-[1000px]"
        style={{
          top: "1800px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(255,140,90,0.025) 0%, rgba(255,140,90,0.02) 15%, rgba(255,140,90,0.013) 30%, rgba(255,140,90,0.007) 45%, rgba(255,140,90,0.002) 60%, transparent 80%)",
        }}
      />
    </div>
  );
}
