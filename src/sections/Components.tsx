"use client";

import { motion } from 'framer-motion';
import { Smartphone, LayoutDashboard, Database, Cpu, GitBranch, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const systems = [
  {
    icon: Smartphone,
    title: "Tourist Mobile App",
    tech: ["React Native", "Expo", "TypeScript", "Mapbox"],
    description: "The primary safety tool for travelers. Features SOS button, live map, geofence alerts, digital ID, and offline protocols.",
    github: "https://github.com/Meetpatel006/smart-safety",
    live: null,
    color: "text-electric-blue",
    bgColor: "bg-electric-blue/10",
    accentBar: "#1d6fc4",
  },
  {
    icon: LayoutDashboard,
    title: "Authority Dashboard",
    tech: ["React", "TypeScript", "Vite", "shadcn/ui"],
    description: "Command centre for law enforcement. Live SOS feed, heatmaps, unit assignment, and full tourist management.",
    github: "https://github.com/Priyankm23/authority-dashboard",
    live: null,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    accentBar: "#ea580c",
  },
  {
    icon: Database,
    title: "Node.js Backend",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "Ethers.js", "Polygon"],
    description: "Core API engine handling registration, blockchain anchoring, SOS routing, risk scoring, and real-time Socket.IO sync.",
    github: "https://github.com/Priyankm23/smart-tourist-safety-app-backend",
    live: null,
    color: "text-emerald-safe",
    bgColor: "bg-emerald-safe/10",
    accentBar: "#0f9b6b",
  },
  {
    icon: Cpu,
    title: "Path Deviation Service",
    tech: ["Python", "FastAPI", "Docker", "XGBoost"],
    description: "Standalone microservice monitoring tourist itineraries. Triggers automated alerts on significant route deviation.",
    github: "https://github.com/Meetpatel006/path-deviation",
    live: null,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    accentBar: "#9333ea",
  }
];

/* All unique tech, grouped visually */
const allTech = [
  { label: "React Native", category: "Frontend" },
  { label: "React / Vite",  category: "Frontend" },
  { label: "TypeScript",   category: "Frontend" },
  { label: "Node.js",      category: "Backend" },
  { label: "Express",      category: "Backend" },
  { label: "MongoDB",      category: "Backend" },
  { label: "Socket.IO",    category: "Realtime" },
  { label: "Python",       category: "ML / Path" },
  { label: "FastAPI",      category: "ML / Path" },
  { label: "XGBoost",      category: "ML / Path" },
  { label: "Polygon L2",   category: "Blockchain" },
  { label: "Ethers.js",    category: "Blockchain" },
  { label: "Docker",       category: "Infra" },
  { label: "Mapbox",       category: "Maps" },
];

const categoryColor: Record<string, string> = {
  "Frontend":   "bg-electric-blue/8 text-electric-blue border-electric-blue/20",
  "Backend":    "bg-emerald-safe/8  text-emerald-safe  border-emerald-safe/20",
  "Realtime":   "bg-teal-50         text-teal-600      border-teal-200",
  "ML / Path":  "bg-purple-50       text-purple-600    border-purple-200",
  "Blockchain": "bg-orange-50       text-orange-600    border-orange-200",
  "Infra":      "bg-beige-100       text-beige-600     border-beige-200",
  "Maps":       "bg-sky-50          text-sky-600       border-sky-200",
};

export default function Components() {
  return (
    <section id="components" className="py-24 section-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-beige-400 mb-4"
            >
              System Components
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 text-beige-900 leading-tight tracking-tight"
            >
              The four pillars of<br />
              <span className="text-electric-blue">SafeTrail ecosystem</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-beige-600 text-sm leading-relaxed"
            >
              Each component is a specialized system working in seamless synchronization
              to protect every tourist journey.
            </motion.p>
          </div>
          <Link
            href="https://github.com/Meetpatel006"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-beige-900 text-white font-bold text-sm hover:bg-beige-800 transition-all active:scale-95 shadow-sm flex-shrink-0"
          >
            <GitBranch className="w-4 h-4" />
            View organization
          </Link>
        </div>

        {/* ── Component cards ─────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex flex-col gap-5 p-7 rounded-3xl bg-white border border-beige-200 hover:border-beige-300 hover:shadow-lg transition-all group overflow-hidden"
            >
              {/* accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${system.accentBar}, transparent)` }} />

              {/* icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${system.bgColor} group-hover:scale-110 transition-transform`}>
                <system.icon className={`w-6 h-6 ${system.color}`} />
              </div>

              {/* title + tech */}
              <div>
                <h3 className="text-base font-bold text-beige-900 mb-3">{system.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {system.tech.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md bg-beige-50 text-beige-500 border border-beige-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* description */}
              <p className="text-xs text-beige-600 leading-relaxed flex-1">
                {system.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 mt-auto">
                <Link
                  href={system.github}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-beige-50 border border-beige-200 text-xs font-bold text-beige-700 hover:bg-beige-100 transition-all"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  Codebase
                </Link>
                {system.live && (
                  <Link
                    href={system.live as string}
                    target="_blank"
                    className="w-9 h-9 rounded-xl bg-beige-50 border border-beige-200 flex items-center justify-center hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Tech stack strip ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-white border border-beige-200"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-beige-400 mb-4">Full technology stack</p>
          <div className="flex flex-wrap gap-2">
            {allTech.map((t, i) => (
              <span
                key={i}
                className={`text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg border ${categoryColor[t.category]}`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
