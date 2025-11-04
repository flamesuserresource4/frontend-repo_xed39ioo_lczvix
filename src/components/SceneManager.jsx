import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// SceneManager controls which 3D room/section is visible and animates transitions
export default function SceneManager({ scenes }) {
  const [current, setCurrent] = useState(Object.keys(scenes)[0]);

  const tabs = Object.keys(scenes);

  return (
    <div className="relative w-full min-h-screen bg-[#000814] text-white">
      {/* Neon glass nav */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.25)]">
          <ul className="flex items-center gap-2 px-3 py-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrent(tab)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  current === tab
                    ? 'bg-[#00ffff]/20 text-[#00ffff] shadow-[0_0_20px_rgba(0,255,255,0.35)]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={current === tab}
              >
                {tab}
              </button>
            ))}
          </ul>
        </div>
      </div>

      {/* Scene container with cinematic transitions */}
      <div className="relative w-full min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {scenes[current]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
