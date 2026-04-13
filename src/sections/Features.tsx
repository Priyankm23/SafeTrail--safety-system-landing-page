"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  AlertCircle, ShieldCheck, Map, LayoutDashboard, Users,
  Wifi, Megaphone, Globe2, Route, BarChart2,
  ChevronRight,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────── */
const tabs = [
  { id: "emergency",   label: "Emergency response" },
  { id: "identity",    label: "Identity & trust" },
  { id: "geospatial",  label: "Geospatial safety" },
  { id: "operations",  label: "Operations" },
  { id: "support",     label: "Support layer" },
];

type RelatedCard = { badge: string; badgeColor: string; title: string; desc: string };
type StatPill    = { value: string; label: string };
type Feature = {
  tabId:   string;
  num:     string;
  tag:     string;
  tagColor:string;
  icon:    React.ElementType;
  title:   string;
  desc:    string;
  stats:   StatPill[];
  related: RelatedCard[];
};

const features: Feature[] = [
  {
    tabId: "emergency",
    num: "01",
    tag: "Emergency Response",
    tagColor: "text-danger-red border-danger-red/30 bg-danger-red/6",
    icon: AlertCircle,
    title: "3-tier panic button",
    desc: "Help / Urgent / SOS — proportional response tiers that match the severity of any situation. SOS triggers an instant broadcast with the tourist's live location and an SMS fallback for network-shadow zones where connectivity is unavailable. Each alert is timestamped and routed to the nearest authority unit via the command centre.",
    stats: [
      { value: "3",    label: "response tiers" },
      { value: "SMS",  label: "offline fallback" },
      { value: "Live", label: "location broadcast" },
    ],
    related: [
      { badge: "RELATED",  badgeColor: "text-beige-400 border-beige-300",  title: "Authority command centre",    desc: "Live SOS feed routes directly to the command centre with audio alerts and unit assignment." },
      { badge: "RELATED",  badgeColor: "text-beige-400 border-beige-300",  title: "Offline emergency protocol",  desc: "SOS requests are queued locally when data connectivity drops and synced when network is restored." },
      { badge: "COVERAGE", badgeColor: "text-electric-blue border-electric-blue/30", title: "4 system components", desc: "Emergency response integrates with geofencing, command centre, path detection, and the ID system." },
    ],
  },
  {
    tabId: "identity",
    num: "02",
    tag: "Identity & Trust",
    tagColor: "text-emerald-safe border-emerald-safe/30 bg-emerald-safe/6",
    icon: ShieldCheck,
    title: "Blockchain tourist ID",
    desc: "Every tourist receives an immutable registration record anchored on the Polygon network (Ethereum L2). Time-limited QR codes let authority officers verify tourist identities without internet access. Every check-in, SOS event, and gate-entry is permanently written on-chain — creating a government-grade audit trail that cannot be altered or deleted.",
    stats: [
      { value: "Polygon", label: "L2 chain" },
      { value: "AES-256", label: "encryption" },
      { value: "Offline", label: "QR verify" },
    ],
    related: [
      { badge: "ON-CHAIN",  badgeColor: "text-emerald-safe border-emerald-safe/30",  title: "Immutable audit trail",   desc: "Every registration and SOS event is permanently recorded — no retroactive changes possible." },
      { badge: "SECURITY",  badgeColor: "text-beige-400 border-beige-300",           title: "Time-limited QR codes",  desc: "QR tokens expire automatically, preventing misuse of stale or shared credentials." },
      { badge: "COVERAGE",  badgeColor: "text-electric-blue border-electric-blue/30", title: "Authority verification", desc: "Officers can validate a tourist's ID and full incident history from any checkpoint." },
    ],
  },
  {
    tabId: "geospatial",
    num: "03",
    tag: "Geospatial Safety",
    tagColor: "text-electric-blue border-electric-blue/30 bg-electric-blue/6",
    icon: Map,
    title: "Dynamic geofence engine",
    desc: "Real-time map overlays for Danger Zones (Red), Risk Grids (Orange), and Safe Zones — recalculated every 30 minutes from live incident reports, weather conditions, and crowd density data. Tourists and authorities always see the same up-to-date geospatial picture, enabling coordinated, informed decisions during rapidly evolving situations.",
    stats: [
      { value: "30m",  label: "refresh interval" },
      { value: "3",    label: "zone types" },
      { value: "Live", label: "crowd + weather" },
    ],
    related: [
      { badge: "DANGER ZONE", badgeColor: "text-danger-red border-danger-red/30",         title: "Red — avoid immediately",     desc: "Active incident or confirmed high-risk area. Push alert sent to all tourists inside the zone." },
      { badge: "RISK GRID",   badgeColor: "text-orange-500 border-orange-400/30",          title: "Orange — exercise caution",   desc: "Elevated risk from weather, crowd density, or recent incident history in the area." },
      { badge: "SAFE ZONE",   badgeColor: "text-emerald-safe border-emerald-safe/30",      title: "Green — verified safe",       desc: "Confirmed safe by live data. Designated assembly point during active emergencies." },
    ],
  },
  {
    tabId: "operations",
    num: "04",
    tag: "Operations",
    tagColor: "text-orange-500 border-orange-400/30 bg-orange-50",
    icon: LayoutDashboard,
    title: "Authority command centre",
    desc: "A dedicated React dashboard gives law-enforcement and tourism authorities a live, unified view of all registered tourists, active SOS events, geofence zones, and field unit assignments. Audio alerts surface critical events instantly. Built-in heatmaps help identify recurring risk hotspots for proactive resource pre-positioning.",
    stats: [
      { value: "Live",    label: "SOS feed" },
      { value: "Audio",   label: "alert system" },
      { value: "Heatmap", label: "analytics" },
    ],
    related: [
      { badge: "MICROSERVICE", badgeColor: "text-purple-600 border-purple-300",           title: "Path deviation detection",  desc: "A dedicated Python microservice flags tourists who deviate significantly from their planned route." },
      { badge: "GROUP OPS",    badgeColor: "text-beige-400 border-beige-300",             title: "Tour group management",     desc: "Bulk-upload member rosters, assign daily itineraries, and track full-group movement in real time." },
      { badge: "COVERAGE",     badgeColor: "text-electric-blue border-electric-blue/30",  title: "17+ app releases",          desc: "The authority dashboard has been continuously refined through 17+ versioned app deployments." },
    ],
  },
  {
    tabId: "support",
    num: "05",
    tag: "Operations",
    tagColor: "text-purple-600 border-purple-300 bg-purple-50",
    icon: Users,
    title: "Tour group management",
    desc: "Tour organizers can bulk-upload member rosters, assign day-wise itineraries, and monitor group movement live on the dashboard. Crowdsourced incident reporting lets tourists flag hazards that are instantly validated and fed back into the live risk engine — making the system progressively smarter with every tour.",
    stats: [
      { value: "Bulk",   label: "roster import" },
      { value: "Live",   label: "group tracking" },
      { value: "Auto",   label: "risk feedback" },
    ],
    related: [
      { badge: "CROWDSOURCE", badgeColor: "text-orange-500 border-orange-400/30",          title: "Crowdsourced incident reports", desc: "Tourist hazard reports are validated and fed directly into the geofence risk engine to update zone classifications." },
      { badge: "OPERATIONS",  badgeColor: "text-beige-400 border-beige-300",              title: "Itinerary management",           desc: "Organizers set day-wise routes per group; the system tracks deviation and alerts if members stray from the plan." },
      { badge: "COVERAGE",    badgeColor: "text-electric-blue border-electric-blue/30",   title: "Integrated with all layers",     desc: "Group data feeds into geofencing, the risk score engine, and the authority command centre simultaneously." },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function Features() {
  const [activeId, setActiveId] = useState("emergency");
  const active = features.find(f => f.tabId === activeId)!;

  return (
    <section id="features" className="py-28 section-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-beige-400 mb-4"
          >
            Platform Capabilities
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-4xl md:text-5xl font-black text-beige-900 leading-tight tracking-tight"
            >
              Built for every layer<br />
              of{" "}
              <span className="text-electric-blue">tourist safety</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-beige-500 md:max-w-xs text-sm leading-relaxed"
            >
              From blockchain-verified identities to offline emergency
              protocols — covering scenarios that standard apps ignore.
            </motion.p>
          </div>
        </div>

        {/* ── Tab strip ───────────────────────────────────── */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border ${
                activeId === t.id
                  ? "bg-beige-900 text-white border-beige-900 shadow-sm"
                  : "bg-white text-beige-600 border-beige-200 hover:border-beige-400 hover:text-beige-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Feature panel ───────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-4"
          >
            {/* ── Left: main feature card ─────────────────── */}
            <div className="flex flex-col justify-between gap-8 p-10 rounded-3xl bg-white border border-beige-200 shadow-sm">
              {/* top */}
              <div className="flex flex-col gap-6">
                {/* category tag */}
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md border w-fit ${active.tagColor}`}>
                  {active.tag}
                </span>

                {/* number */}
                <span className="text-8xl font-black leading-none text-electric-blue select-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {active.num}
                </span>

                {/* title */}
                <h3 className="text-3xl font-black text-beige-900 leading-snug">
                  {active.title}
                </h3>

                {/* description */}
                <p className="text-beige-600 leading-relaxed text-base max-w-lg">
                  {active.desc}
                </p>
              </div>


            </div>

            {/* ── Right: related cards ─────────────────────── */}
            <div className="flex flex-col gap-3">
              {active.related.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.25 }}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-beige-200 hover:border-beige-300 hover:shadow-md transition-all group cursor-default"
                >
                  <span className={`text-[9px] font-black uppercase tracking-[0.18em] px-2 py-1 rounded border w-fit ${r.badgeColor}`}>
                    {r.badge}
                  </span>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-beige-900 leading-snug">{r.title}</h4>
                    <ChevronRight className="w-4 h-4 text-beige-300 flex-shrink-0 mt-0.5 group-hover:text-beige-500 transition-colors" />
                  </div>
                  <p className="text-xs text-beige-500 leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
