"use client";

import { motion } from 'framer-motion';
import { Mountain, SignalHigh, CloudRain, PawPrint, Languages, Clock } from 'lucide-react';

const problems = [
  {
    num: '01',
    icon: Mountain,
    title: 'Remote & Challenging Terrain',
    description:
      "Difficult geography in India's hilly and forested regions makes traditional rescue access dangerously slow. Standard GPS is unreliable and rescue units struggle to locate exact positions.",
    tag: 'Terrain',
  },
  {
    num: '02',
    icon: SignalHigh,
    title: 'Limited Network Connectivity',
    description:
      "Signal shadow zones are common in national parks, hill stations, and tribal belts. Most SOS apps fail silently when there's no data — a critical failure when seconds matter.",
    tag: 'Infrastructure',
  },
  {
    num: '03',
    icon: CloudRain,
    title: 'Sudden Weather & Natural Events',
    description:
      'Monsoon flash floods, landslides, and cyclones can strand tourists without warning. Real-time alerts are absent in most tourism planning tools available today.',
    tag: 'Environment',
  },
  {
    num: '04',
    icon: PawPrint,
    title: 'Untracked Wildlife Corridors',
    description:
      "Eco-tourism brings tourists into zones with active wildlife movement. Without a dynamic overlay of risk areas, even guided tours can unknowingly enter high-danger corridors.",
    tag: 'Wildlife',
  },
  {
    num: '05',
    icon: Languages,
    title: 'Language & Communication Barrier',
    description:
      "Non-local travelers — especially international tourists — cannot effectively communicate emergencies to local residents or regional authority operators in a crisis.",
    tag: 'Communication',
  },
  {
    num: '06',
    icon: Clock,
    title: 'Fragmented Emergency Response',
    description:
      'Without a unified monitoring layer, authorities receive emergency information too late, through too many channels, with no centralized coordination or prioritization system.',
    tag: 'Response',
  },
];

export default function ProblemStatement() {
  return (
    <section id="problems" className="py-28 relative overflow-hidden section-surface-white">

      {/* Subtle background texture lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, #8a6a3a 0px, #8a6a3a 1px, transparent 1px, transparent 64px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header block ─────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 pb-10 border-b border-beige-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-beige-400 mb-4">The Problem Space</p>
            <h2 className="text-4xl md:text-5xl font-black text-beige-900 leading-[1.08] tracking-tight">
              Why tourist safety<br />
              in India demands<br />
              <em className="not-italic text-electric-blue">a dedicated system</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-beige-600 text-base leading-relaxed max-w-sm lg:text-right"
          >
            Generic safety apps aren&apos;t designed for India&apos;s geographic complexity,
            infrastructure gaps, or the scale of tourism across 28 states and 8 union territories.
          </motion.p>
        </div>

        {/* ── Problem rows ─────────────────────────────────────── */}
        <div className="flex flex-col">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_auto] gap-x-8 gap-y-2 py-9 border-b border-beige-200 group hover:bg-beige-100/50 px-4 -mx-4 rounded-xl transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex flex-col items-center gap-3 pt-1">
                <span
                  className="font-black text-2xl leading-none transition-colors duration-300 group-hover:text-electric-blue"
                  style={{ color: 'rgba(138,106,58,0.25)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {p.num}
                </span>
                <div className="w-px flex-1 bg-beige-200 group-hover:bg-electric-blue/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-beige-200 group-hover:bg-electric-blue/10 transition-colors">
                    <p.icon className="w-4 h-4 text-beige-500 group-hover:text-electric-blue transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-beige-900 group-hover:text-beige-950 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-beige-600 text-sm leading-relaxed max-w-2xl">
                  {p.description}
                </p>
              </div>

              {/* Tag — desktop only */}
              <div className="hidden md:flex items-start pt-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-beige-400 border border-beige-300 px-2.5 py-1 rounded-md group-hover:border-electric-blue/30 group-hover:text-electric-blue transition-colors">
                  {p.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer callout ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl border border-beige-300 bg-white/60"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-beige-400 mb-1">SafeTrail solves all six</p>
            <p className="text-xl font-bold text-beige-900">
              One platform. Every layer of risk. Covered.
            </p>
          </div>
          <a
            href="#features"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-[0_4px_20px_rgba(29,111,196,0.3)] active:scale-95"
          >
            See How It Works →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
