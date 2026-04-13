"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Activity, Lock, BarChart2,
  Wifi, Download, ArrowRight, Code2, Layers
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ─── slide data ─────────────────────────────────────────────── */
const appSlides = [
  { img: "/images/_app%20images/homePage_with_notification_app.jpeg", label: "home page with notification", desc: "home page with notification" },
  { img: "/images/_app%20images/sos_trigger_app.jpeg", label: "sos trigger on home page", desc: "sos trigger on home page" },
  { img: "/images/_app%20images/risk_area_shown_on_map_app.jpeg", label: "risk area shown on map page", desc: "risk area shown on map page" },
  { img: "/images/_app%20images/mapPage_app.jpeg", label: "risk grid with reasons", desc: "map page layout showing risk reasons" },
  { img: "/images/_app%20images/groupmanagementPage_app.jpeg", label: "group management page", desc: "group management page" },
  { img: "/images/_app%20images/settingsPage_app.jpeg", label: "settings and id page", desc: "settings and id page" },
];

const authoritySlides = [
  { img: "/images/dashboard_authority.png",     label: "Command Centre",   desc: "Live overview & stats" },
  { img: "/images/map_authority.png",           label: "Live Map View",    desc: "All tourists & zones" },
  { img: "/images/sosManagement_authority.png", label: "SOS Management",   desc: "Alert triage & dispatch" },
];

/* ─── shared hook ─────────────────────────────────────────────── */
function useSlideshow(count: number, ms = 3400) {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCur(p => (p + 1) % count); }, ms);
    return () => clearInterval(t);
  }, [count, ms]);
  const goTo = (i: number) => { setDir(i > cur ? 1 : -1); setCur(i); };
  return { cur, dir, goTo };
}

const sv = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
};

/* ─── Android phone ───────────────────────────────────────────── */
function Phone() {
  const { cur, dir, goTo } = useSlideshow(appSlides.length, 3400);
  const safeCur = cur >= appSlides.length ? 0 : cur;
  const W = 300, H = 625;

  return (
    <div className="flex flex-col items-center select-none" style={{ width: W }}>
      {/* chassis */}
      <div className="relative" style={{ width: W, height: H }}>
        <div className="absolute inset-0 rounded-[48px]"
          style={{ background: "linear-gradient(160deg,#2c2c2c 0%,#111 55%,#1c1c1c 100%)",
            boxShadow: "0 48px 96px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.04)" }} />

        {/* buttons */}
        {[
          { side:"right", top:128, h:60 },
          { side:"left",  top:100,  h:34 },
          { side:"left",  top:144, h:34 },
          { side:"left",  top:188, h:64 },
        ].map((b, i) => (
          <div key={i} className="absolute rounded-sm"
            style={{ [b.side]: -3, top: b.top, width: 4, height: b.h, background: "#2a2a2a",
              boxShadow: b.side === "left" ? "inset 1px 0 0 rgba(255,255,255,0.08)" : "inset -1px 0 0 rgba(255,255,255,0.08)" }} />
        ))}

        {/* screen bezel */}
        <div className="absolute overflow-hidden rounded-[42px]" style={{ inset: 8, background: "#000" }}>
          {/* status bar */}
          <div style={{ height: 30, background: "rgba(0,0,0,0.92)", fontSize: 10.5, fontFamily: "monospace", color: "white" }}
            className="flex items-center justify-between px-5">
            <span>9:41</span>
            <div className="flex gap-1"><span>▲</span><span>WiFi</span><span>100%</span></div>
          </div>
          {/* slides */}
          <div className="relative overflow-hidden" style={{ height: "calc(100% - 30px)", background: "#f5ece0" }}>
            <AnimatePresence custom={dir} initial={false}>
              <motion.div key={safeCur} custom={dir} variants={sv}
                initial="enter" animate="center" exit="exit"
                transition={{ type: "tween", duration: 0.42, ease: "easeInOut" }}
                className="absolute inset-0">
                <Image src={appSlides[safeCur].img} alt={appSlides[safeCur].label} fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* pill camera */}
        <div className="absolute rounded-full"
          style={{ top: 18, left: "50%", transform: "translateX(-50%)", width: 60, height: 12, background: "#111", zIndex: 20 }} />
      </div>

      {/* dots */}
      <div className="flex gap-2 mt-4">
        {appSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}>
            <div className="rounded-full transition-all duration-300"
              style={{ width: i === safeCur ? 22 : 8, height: 8,
                background: i === safeCur ? "#1d6fc4" : "rgba(29,111,196,0.22)" }} />
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm font-bold text-electric-blue">{appSlides[safeCur].label}</p>
      <p className="text-xs text-beige-500">{appSlides[safeCur].desc}</p>
    </div>
  );
}

/* ─── PC monitor (desktop) ────────────────────────────────────── */
function Monitor() {
  const { cur, dir, goTo } = useSlideshow(authoritySlides.length, 3400);
  const W = 640, H = 430;

  return (
    <div className="flex flex-col items-center select-none">
      {/* outer frame */}
      <div className="relative rounded-2xl"
        style={{
          width: W, height: H,
          background: "linear-gradient(160deg,#2e2e2e 0%,#1a1a1a 100%)",
          boxShadow: "0 32px 70px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)",
          padding: "12px 12px 10px",
        }}>

        {/* title bar */}
        <div className="flex items-center gap-1.5 mb-2 px-1">
          {["#ef4444","#f59e0b","#22c55e"].map((c, i) => (
            <div key={i} className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: c, opacity: 0.85 }} />
          ))}
          <div className="flex-1 mx-3 h-5 rounded flex items-center justify-center overflow-hidden"
            style={{ background: "rgba(255,255,255,0.07)", fontSize: 9.5, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", whiteSpace: "nowrap", padding: "0 8px" }}>
            authority.safetrail.in — Command Centre
          </div>
          <div className="flex items-center gap-1 flex-shrink-0 px-2 py-0.5 rounded-full"
            style={{ background: "rgba(220,38,38,0.85)", fontSize: 8, fontWeight: 700, color: "white" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />LIVE
          </div>
        </div>

        {/* screen — object-contain so full dashboard is visible */}
        <div className="relative overflow-hidden rounded-lg"
          style={{ height: "calc(100% - 38px)", background: "#ffffff" }}>
          <AnimatePresence custom={dir} initial={false}>
            <motion.div key={cur} custom={dir} variants={sv}
              initial="enter" animate="center" exit="exit"
              transition={{ type: "tween", duration: 0.42, ease: "easeInOut" }}
              className="absolute inset-0 flex items-start justify-center"
              style={{ background: "#ffffff" }}>
              <Image
                src={authoritySlides[cur].img}
                alt={authoritySlides[cur].label}
                fill
                className="object-contain object-top"
                style={{ background: "#ffffff" }}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* dots inside frame */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {authoritySlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}>
              <div className="rounded-full transition-all duration-300"
                style={{ width: i === cur ? 18 : 6, height: 6,
                  background: i === cur ? "#1d6fc4" : "rgba(255,255,255,0.25)" }} />
            </button>
          ))}
        </div>
      </div>

      {/* neck + base */}
      <div className="flex flex-col items-center">
        <div style={{ width: 32, height: 34, background: "linear-gradient(180deg,#2a2a2a,#1a1a1a)" }} />
        <div style={{ width: 140, height: 11, background: "linear-gradient(180deg,#222,#333)", borderRadius: "0 0 11px 11px" }} />
      </div>

      <p className="mt-3 text-sm font-bold text-electric-blue">{authoritySlides[cur].label}</p>
      <p className="text-xs text-beige-500">{authoritySlides[cur].desc}</p>
    </div>
  );
}

/* ─── Mobile-only flat authority panel ────────────────────────── */
function MobileAuthorityPanel() {
  const { cur, dir, goTo } = useSlideshow(authoritySlides.length, 3400);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-beige-200 shadow-md select-none">
      {/* browser-bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1e1e1e]">
        {["#ef4444","#f59e0b","#22c55e"].map((c,i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background:c, opacity:0.85 }} />
        ))}
        <div className="flex-1 mx-2 h-4 rounded text-center flex items-center justify-center"
          style={{ background:"rgba(255,255,255,0.08)", fontSize:8, color:"rgba(255,255,255,0.35)", fontFamily:"monospace" }}>
          authority.safetrail.in
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full"
          style={{ background:"rgba(220,38,38,0.85)", fontSize:7, fontWeight:700, color:"white" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />LIVE
        </div>
      </div>
      {/* screenshot */}
      <div className="relative" style={{ height: 200, background:"#fff" }}>
        <AnimatePresence custom={dir} initial={false}>
          <motion.div key={cur} custom={dir} variants={sv}
            initial="enter" animate="center" exit="exit"
            transition={{ type:"tween", duration:0.4, ease:"easeInOut" }}
            className="absolute inset-0">
            <Image src={authoritySlides[cur].img} alt={authoritySlides[cur].label}
              fill className="object-contain object-top" style={{ background:"#fff" }} />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* footer strip */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#f8f8f8] border-t border-beige-100">
        <div>
          <p className="text-xs font-bold text-electric-blue">{authoritySlides[cur].label}</p>
          <p className="text-[10px] text-beige-400">{authoritySlides[cur].desc}</p>
        </div>
        <div className="flex gap-1.5">
          {authoritySlides.map((_,i) => (
            <button key={i} onClick={() => goTo(i)}>
              <div className="rounded-full transition-all duration-300"
                style={{ width: i===cur ? 16 : 6, height:6, background: i===cur ? "#1d6fc4" : "rgba(29,111,196,0.2)" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── connection wire ─────────────────────────────────────────── */
function Wire() {
  return (
    <div className="flex flex-col items-center gap-2 px-2" style={{ width: 110, flexShrink: 0 }}>
      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-emerald-safe font-bold text-[10px]"
        style={{ background: "rgba(15,155,107,0.10)", border: "1px solid rgba(15,155,107,0.25)" }}>
        <Wifi className="w-3 h-3" />Socket.IO
      </div>

      {/* animated track */}
      <div className="relative w-full flex items-center" style={{ height: 24 }}>
        <div className="w-full rounded-full" style={{ height: 2, background: "linear-gradient(90deg,rgba(29,111,196,0.12),rgba(29,111,196,0.5),rgba(29,111,196,0.12))" }} />
        {[0,1,2,3,4].map(i => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ width: 10, height: 10, background: "radial-gradient(circle,#1d6fc4,rgba(29,111,196,0.1))", top: "50%", y: "-50%" }}
            animate={{ x: ["-10px","110px"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.36 }} />
        ))}
      </div>

      <span className="text-[9px] font-medium text-beige-400 text-center leading-tight">Real-time<br/>sync</span>
    </div>
  );
}

/* ─── developer card ──────────────────────────────────────────── */
function DevCard({ name, role, stack, gradient }: {
  name: string; role: string; stack: string[]; gradient: string;
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-beige-200 shadow-sm hover:shadow-md transition-all group">
      {/* avatar circle */}
      <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black text-lg"
        style={{ background: gradient }}>
        {name.charAt(0)}
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <p className="font-bold text-beige-900 text-sm leading-tight">{name}</p>
        <p className="text-xs text-beige-500 leading-snug">{role}</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {stack.map(s => (
            <span key={s} className="px-2 py-0.5 rounded-md bg-beige-100 border border-beige-200 text-[10px] font-bold text-beige-600 uppercase tracking-wide">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden beige-texture pt-24 pb-16">
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[35%] h-[40%] bg-electric-blue/6 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-emerald-safe/5 blur-[160px] rounded-full" />
      </div>

      {/* ── 1. Headline ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-beige-200 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-beige-600">
            SIH 2025 · Ministry of NER · Problem ID 25002
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-beige-900 mb-6">
          Intelligent Safety for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-blue-500 to-emerald-safe">
            Indian Tourists
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-beige-600 leading-relaxed max-w-2xl">
          Tourists face remote terrain, limited connectivity, and dangerously delayed emergency
          responses. SafeTrail closes the gap with real-time geofencing, calculation-based risk
          scoring, and blockchain-verified digital IDs — all on one platform.
        </p>

        {/* trust pills */}
        <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm font-bold">
          <span className="flex items-center gap-1.5 text-emerald-safe"><Lock className="w-4 h-4" />Blockchain Verified</span>
          <span className="text-beige-300">|</span>
          <span className="flex items-center gap-1.5 text-electric-blue"><Activity className="w-4 h-4" />Real-time SOS</span>
          <span className="text-beige-300">|</span>
          <span className="flex items-center gap-1.5 text-danger-red"><BarChart2 className="w-4 h-4" />Dynamic Risk Score</span>
        </div>
      </motion.div>

      {/* ── 2. Device showcase ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="relative mt-10 w-full px-4"
      >
        {/* glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div style={{ width: 700, height: 350,
            background: "radial-gradient(ellipse, rgba(29,111,196,0.09) 0%, transparent 70%)",
            filter: "blur(50px)" }} />
        </div>

        {/* ── Desktop: phone + wire + monitor side by side ── */}
        <div className="hidden md:flex justify-center items-end gap-0">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <Phone />
          </motion.div>
          <Wire />
          <Monitor />
        </div>

        {/* ── Mobile: phone top, authority panel below ── */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <Phone />

          {/* Socket.IO label bridge */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-emerald-safe font-bold text-[10px]"
              style={{ background:"rgba(15,155,107,0.10)", border:"1px solid rgba(15,155,107,0.25)" }}>
              <Wifi className="w-3 h-3" />Socket.IO — Real-time sync
            </div>
            <div className="w-px h-4 bg-beige-300" />
          </div>

          <div className="w-full max-w-sm">
            <MobileAuthorityPanel />
          </div>
        </div>
      </motion.div>

      {/* ── 3. CTA left · Developer right ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="mt-12 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
      >
        {/* ── Left: CTAs ───────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-beige-900 mb-1">Ready to explore?</h2>
            <p className="text-beige-500 text-sm">Install the app on any Android device, or open the live authority dashboard.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#demo"
              className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(29,111,196,0.35)] hover:shadow-[0_4px_30px_rgba(29,111,196,0.55)] active:scale-95">
              <Download className="w-4 h-4" />
              Download APK
            </a>
            <a href="#demo"
              className="inline-flex items-center gap-2 bg-white hover:bg-beige-50 text-beige-900 px-7 py-3.5 rounded-xl font-bold transition-all border border-beige-300 shadow-sm hover:shadow-md active:scale-95">
              Authority Dashboard
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Android note */}
          <div className="flex items-center gap-2 text-xs text-beige-400">
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#0f9b6b">
              <path d="M17.523 15.341a.772.772 0 0 1-.772-.772.772.772 0 0 1 .772-.772.772.772 0 0 1 .772.772.772.772 0 0 1-.772.772m-11.046 0a.772.772 0 0 1-.772-.772.772.772 0 0 1 .772-.772.772.772 0 0 1 .772.772.772.772 0 0 1-.772.772M17.71 10.011l1.547-2.68a.322.322 0 0 0-.118-.44.322.322 0 0 0-.44.118l-1.567 2.712A9.93 9.93 0 0 0 12 8.888a9.93 9.93 0 0 0-5.132 1.833L5.3 7.01a.322.322 0 0 0-.44-.118.322.322 0 0 0-.118.44l1.547 2.68C3.89 11.617 2.223 14.134 2 17h20c-.223-2.866-1.89-5.383-4.29-6.989"/>
            </svg>
            Android-only · Enable "Install from unknown sources" before installing the APK
          </div>
        </div>

        {/* ── Right: Team ───────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-4 h-4 text-beige-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-beige-400">Built by</span>
          </div>

          <DevCard
            name="Priyank Moradiya"
            role="Node.js Backend — Tourist App API & Authority Dashboard API, Socket.IO real-time layer, Blockchain integration"
            stack={["Node.js", "MongoDB", "Socket.IO", "Ethers.js", "Docker"]}
            gradient="linear-gradient(135deg,#1d6fc4,#0f4fa8)"
          />

          <DevCard
            name="Meet Patel"
            role="Frontend — Tourist Android App, Authority Dashboard UI, Path Deviation Microservice & its Frontend"
            stack={["React Native", "Expo", "React", "FastAPI", "Python"]}
            gradient="linear-gradient(135deg,#0f9b6b,#0a7050)"
          />

          <div className="flex items-center gap-2 mt-1 text-xs text-beige-400">
            <Layers className="w-3.5 h-3.5" />
            <span>4 repositories · 17+ app releases · Open source</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
