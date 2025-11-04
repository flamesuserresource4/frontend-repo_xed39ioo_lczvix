import { useState, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function DomeIntro() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* 3D Spline Background (full cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient accents - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000814]/40 via-transparent to-[#7f00ff]/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.15),transparent_50%)]" />

      {/* Content overlay with parallax hover card */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl"
        >
          <ParallaxCard pos={pos} onMove={onMove}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                NovaEra Hub — The Genesis Dome
              </h1>
              <p className="text-white/85 leading-relaxed">
                Welcome to NovaEra Hub — the living ecosystem of tomorrow’s innovations. I’m
                <span className="text-white font-medium"> Nilesh Singh</span>, Founder and Deep-Tech Visionary, building autonomous systems that think, evolve, and sustain the planet.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {['AI', 'Quantum', 'Sustainability', 'Vision'].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </ParallaxCard>
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxCard({ children, pos, onMove }) {
  // Style values for dynamic light and shadow following the cursor
  const lightStyle = {
    background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(0,255,255,0.25), transparent 60%)`,
  };
  const borderGradient = {
    backgroundImage: 'linear-gradient(135deg, rgba(0,255,255,0.5), rgba(127,0,255,0.5))',
  };

  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative rounded-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Neon gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-60 blur-md" style={borderGradient} />

      {/* Card body */}
      <div className="relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 sm:p-8">
        {/* Moving light */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl" style={lightStyle} />
        {/* Inner glow corners */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 [mask-image:radial-gradient(circle_at_100%_0,black,transparent_60%)]" />
        <div className="relative">{children}</div>
      </div>

      {/* Floating shadow with parallax feel */}
      <div
        className="absolute -bottom-6 left-6 right-6 h-12 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(60%_80% at ${pos.x}% 50%, rgba(0,0,0,0.5), transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
