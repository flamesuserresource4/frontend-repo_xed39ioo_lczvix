import { motion } from 'framer-motion';
import { User, Download, Mail, Github, Linkedin } from 'lucide-react';

export default function VisionaryChamber() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#000814] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(127,0,255,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-semibold"
        >
          The Visionary Chamber — Personal Core
        </motion.h2>
        <p className="mt-3 text-white/80 max-w-3xl">
          Nilesh Singh — Deep-Tech Visionary & Founder of NovaEra Hub. Building autonomous systems and sustainable futures through AI, quantum intelligence, and innovation.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#00ffff]/40 to-[#7f00ff]/40 grid place-items-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Nilesh Singh</h3>
                <p className="text-sm text-white/70">Founder • Deep-Tech Visionary</p>
              </div>
            </div>
            <p className="mt-4 text-white/85">
              Creating a new era of intelligence.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition">
                <Download className="h-4 w-4" /> Resume
              </a>
              <a href="mailto:hello@novaerahub.ai" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffff]/20 hover:bg-[#00ffff]/30 border border-cyan-400/30 text-[#00ffff] transition">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
          >
            <h4 className="font-semibold">Skills</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Gen AI", "AI Agents", "Prompt Engineering", "Quantum Logic", "System Design"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
          >
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 hover:text-white/90 text-white/80">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="inline-flex items-center gap-2 hover:text-white/90 text-white/80">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
