"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  LayoutDashboard,
  GitBranch,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const repos = [
  { label: "Tourist App", slug: "smart-safety", owner: "Meetpatel006" },
  {
    label: "Authority Dashboard",
    slug: "authority-dashboard",
    owner: "Priyankm23",
  },
  {
    label: "Backend API",
    slug: "smart-tourist-safety-app-backend",
    owner: "Priyankm23",
  },
  { label: "Path Deviation", slug: "path-deviation", owner: "Meetpatel006" },
];

export default function LiveDemo() {
  return (
    <section
      id="demo"
      className="py-28 section-surface-white relative overflow-hidden"
    >
      {/* subtle radial glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div
          style={{
            width: 800,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(29,111,196,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-beige-400 mb-4"
          >
            Try the system
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-4xl md:text-5xl font-black text-beige-900 leading-tight tracking-tight"
            >
              Explore &amp; experience
              <br />
              <span className="text-electric-blue">SafeTrail live</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-beige-500 md:max-w-xs text-sm leading-relaxed"
            >
              Access the authority dashboard, install the Android app, or dive
              into the open-source repositories.
            </motion.p>
          </div>
        </div>

        {/* ── Primary action cards ─────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {/* Authority Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-between gap-8 p-10 rounded-3xl bg-beige-900 text-white overflow-hidden group"
          >
            {/* background icon */}
            <LayoutDashboard className="absolute -right-6 -bottom-6 w-40 h-40 text-white/5" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Live environment
              </div>
              <h3 className="text-2xl font-black leading-snug mb-3">
                Authority Command Centre
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Log in with demo credentials to explore real-time SOS
                management, tourist heatmaps, and unit assignment — fully
                functional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-electric-blue hover:bg-blue-600 font-bold text-sm transition-all active:scale-95 shadow-[0_4px_20px_rgba(29,111,196,0.5)]"
              >
                Open dashboard <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/Priyankm23/authority-dashboard"
                target="_blank"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-sm transition-all"
              >
                <GitBranch className="w-4 h-4" /> Code
              </Link>
            </div>
          </motion.div>

          {/* Android APK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative flex flex-col justify-between gap-8 p-10 rounded-3xl bg-white border border-beige-200 overflow-hidden group hover:border-beige-300 hover:shadow-lg transition-all"
          >
            <Smartphone className="absolute -right-4 -bottom-4 w-36 h-36 text-emerald-safe/8" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-safe/10 text-emerald-safe text-xs font-bold mb-6 border border-emerald-safe/20">
                <Smartphone className="w-3.5 h-3.5" />
                Android only
              </div>
              <h3 className="text-2xl font-black text-beige-900 leading-snug mb-3">
                Tourist Safety App
              </h3>
              <p className="text-beige-600 text-sm leading-relaxed max-w-sm">
                Install the APK directly to experience the 3-tier panic button,
                geofence map, and blockchain digital ID on your Android device.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://github.com/Meetpatel006/smart-safety/releases/download/v1.4.1/SmartSafety-1.4.1-release.apk"
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-safe hover:bg-emerald-600 text-white font-bold text-sm transition-all active:scale-95 shadow-[0_4px_20px_rgba(15,155,107,0.3)]"
              >
                Download APK <Download className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/Meetpatel006/smart-safety"
                target="_blank"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-beige-50 border border-beige-200 hover:bg-beige-100 text-beige-700 font-bold text-sm transition-all"
              >
                <GitBranch className="w-4 h-4" /> Code
              </Link>
            </div>

            <p className="text-[10px] font-semibold text-beige-400 -mt-4">
              Enable &quot;Install from unknown sources&quot; in Android
              settings before installing.
            </p>
          </motion.div>
        </div>

        {/* ── Repository strip ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="p-6 rounded-2xl bg-white border border-beige-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-beige-400 mb-1">
                Open source
              </p>
              <p className="text-sm font-bold text-beige-900">
                All 4 repositories are publicly available on GitHub
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {repos.map((r, i) => (
                <Link
                  key={i}
                  href={`https://github.com/${r.owner}/${r.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-beige-50 border border-beige-200 text-xs font-bold text-beige-700 hover:bg-beige-100 hover:border-beige-300 transition-all group/repo"
                >
                  <GitBranch className="w-3 h-3 text-beige-400 group-hover/repo:text-beige-700 transition-colors" />
                  {r.label}
                  <ArrowRight className="w-2.5 h-2.5 text-beige-300 group-hover/repo:text-beige-600 group-hover/repo:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
