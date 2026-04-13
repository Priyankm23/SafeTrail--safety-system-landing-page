"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Database, Cpu, LayoutDashboard, Link as LinkIcon } from 'lucide-react';

const components = [
  { icon: Smartphone,     label: 'Tourist App',       sublabel: 'React Native',  color: 'text-electric-blue',  ring: 'ring-electric-blue/20',  bg: 'bg-electric-blue/8' },
  { icon: Database,       label: 'Node.js API',        sublabel: 'Backend',       color: 'text-emerald-safe',   ring: 'ring-emerald-safe/20',   bg: 'bg-emerald-safe/8' },
  { icon: Cpu,            label: 'Path Service',       sublabel: 'Python / FastAPI', color: 'text-purple-600', ring: 'ring-purple-300',        bg: 'bg-purple-50' },
  { icon: LayoutDashboard,label: 'Authority Dashboard',sublabel: 'React',         color: 'text-orange-500',     ring: 'ring-orange-300',        bg: 'bg-orange-50' },
  { icon: LinkIcon,       label: 'Blockchain',         sublabel: 'Polygon L2',    color: 'text-blue-500',       ring: 'ring-blue-300',          bg: 'bg-blue-50' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-28 section-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-beige-400 mb-4"
          >
            System Design
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="text-4xl md:text-5xl font-black text-beige-900 leading-tight tracking-tight mb-5"
          >
            Robust &amp; Transparent<br />
            <span className="text-emerald-safe">System Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-beige-600 max-w-2xl mx-auto text-base leading-relaxed"
          >
            SafeTrail isn&apos;t just an app — it&apos;s a multi-layer safety ecosystem. A Node.js core,
            distributed Python microservices for path analysis, and a Polygon blockchain layer
            for immutable audit trails, all working in real time.
          </motion.p>
        </div>

        {/* ── Diagram — full width, clickable ───────────── */}
        <motion.a
          href="/images/architecture diagram.png"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="group relative block w-full rounded-3xl overflow-hidden border border-beige-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-zoom-in"
          style={{ background: '#fff' }}
          title="Click to view full-size architecture diagram"
        >
          {/* Image */}
          <Image
            src="/images/architecture diagram.png"
            alt="SafeTrail System Architecture"
            width={1400}
            height={840}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.015]"
            priority
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-beige-900/0 group-hover:bg-beige-900/5 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-5 py-2.5 bg-white/90 border border-beige-200 rounded-full shadow-lg backdrop-blur-sm text-sm font-bold text-beige-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open full diagram
            </div>
          </div>

          {/* Label badge */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 border border-beige-200 rounded-full shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-safe animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-beige-700">SIH 2025 Architecture</span>
          </div>
        </motion.a>

        {/* ── 5 Component Icons ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-2 sm:gap-4"
        >
          {components.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 + i * 0.06 }}
              className="flex flex-col items-center gap-2.5 px-5 py-4 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-default min-w-[110px]"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ring-1 ${c.ring} ${c.bg} group-hover:scale-110 transition-transform`}>
                <c.icon className={`w-5 h-5 ${c.color}`} />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-beige-900 leading-tight">{c.label}</p>
                <p className="text-[10px] text-beige-400 mt-0.5">{c.sublabel}</p>
              </div>
            </motion.div>
          ))}

          {/* Connector hint between icons on desktop */}
          <style jsx>{`
            @media (min-width: 640px) {
              .comp-row { position: relative; }
              .comp-row::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 24px;
                right: 24px;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(168,130,90,0.2) 20%, rgba(168,130,90,0.2) 80%, transparent);
                z-index: 0;
              }
            }
          `}</style>
        </motion.div>

        {/* Caption */}
        <p className="text-center text-xs text-beige-400 mt-6">
          5 interconnected services · Real-time data flow via Socket.IO · Polygon blockchain audit trail
        </p>

      </div>
    </section>
  );
}
