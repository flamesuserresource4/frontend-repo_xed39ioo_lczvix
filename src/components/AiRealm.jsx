import { motion } from 'framer-motion';

export default function AiRealm() {
  return (
    <section className="relative min-h-[100vh] w-full bg-[#000814] text-white overflow-hidden">
      {/* Ambient background with subtle pulsing grid */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,255,0.25)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-semibold"
        >
          The Autonomous Network — AI Realm
        </motion.h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          A floating network of neural nodes connected by energy lines. Explore projects that think, remember, and adapt.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Novynex OS card */}
          <InfoCard
            title="Novynex OS"
            subtitle="Autonomous Operating System"
            body="An autonomous operating system that builds and runs entire companies — no code, no team, pure AI orchestration."
            accent="cyan"
          />

          {/* Autonomous AI Minds card */}
          <InfoCard
            title="Autonomous AI Minds"
            subtitle="Adaptive Agents"
            body="Agents that think, remember, and adapt — they learn like humans through examples and feedback."
            accent="purple"
          />
        </div>
      </div>

      {/* Glow orbs to suggest nodes */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[#00ffff]/20" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-[#7f00ff]/20" />
    </section>
  );
}

function InfoCard({ title, subtitle, body, accent = 'cyan' }) {
  const accentColor = accent === 'cyan' ? 'from-[#00ffff]/20 to-transparent' : 'from-[#7f00ff]/20 to-transparent';
  const borderColor = accent === 'cyan' ? 'border-cyan-400/30' : 'border-fuchsia-400/25';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-2xl border ${borderColor} bg-white/5 backdrop-blur-md`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentColor}`} />
      <div className="relative p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        <p className="mt-4 text-white/85">{body}</p>
      </div>
    </motion.div>
  );
}
