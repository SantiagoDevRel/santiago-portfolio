"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Spotlight() {
  const [hidden, setHidden] = useState(false);

  const mouseX = useMotionValue(-800);
  const mouseY = useMotionValue(-800);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    function handleHide() { setHidden(true); }
    function handleShow() { setHidden(false); }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("spotlight:hide", handleHide);
    window.addEventListener("spotlight:show", handleShow);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("spotlight:hide", handleHide);
      window.removeEventListener("spotlight:show", handleShow);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          x: springX,
          y: springY,
          marginLeft: -400,
          marginTop: -400,
          background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, rgba(255,107,53,0.035) 15%, rgba(255,107,53,0.025) 30%, rgba(255,107,53,0.015) 45%, rgba(255,107,53,0.006) 60%, transparent 80%)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      />
    </div>
  );
}
