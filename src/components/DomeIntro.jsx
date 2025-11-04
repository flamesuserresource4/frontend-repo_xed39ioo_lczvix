import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function DomeIntro() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* 3D Spline Background (full cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient accents - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000814]/40 via-transparent to-[#7f00ff]/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.15),transparent_50%)]" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            NovaEra Hub — The Genesis Dome
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            Welcome to NovaEra Hub — the living ecosystem of tomorrow’s innovations. I’m
            <span className="text-white font-medium"> Nilesh Singh</span>, Founder and Deep-Tech Visionary, building autonomous systems that think, evolve, and sustain the planet.
          </p>

          {/* Themed chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['AI', 'Quantum', 'Sustainability', 'Vision'].map((chip) => (
              <motion.span
                key={chip}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-md"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
