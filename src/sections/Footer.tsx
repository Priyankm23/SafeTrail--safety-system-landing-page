"use client";

import { Shield, GitBranch, Mail, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 bg-beige-900 text-white relative overflow-hidden">
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage:'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(29,111,196,0.08) 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-electric-blue" />
            <span className="text-xl font-bold tracking-tight">SafeTrail</span>
          </Link>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Smart Tourist Safety Monitoring &amp; Incident Response System.
            Built for SIH 2025, Ministry of NER, India. An open-source
            project leveraging calculation-based risk scoring, Geofencing, and Blockchain for public safety.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/Meetpatel006" target="_blank" className="text-white/40 hover:text-white transition-colors">
              <GitBranch className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">Resources</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="https://github.com/Priyankm23/smart-tourist-safety-app-backend" target="_blank" className="text-white/40 hover:text-white transition-colors">API Documentation</Link>
            <Link href="https://github.com/Meetpatel006/smart-safety" target="_blank" className="text-white/40 hover:text-white transition-colors">App Releases</Link>
            <Link href="https://github.com/Meetpatel006/path-deviation" target="_blank" className="text-white/40 hover:text-white transition-colors">Path Microservice</Link>
            <Link href="https://github.com/Priyankm23/authority-dashboard" target="_blank" className="text-white/40 hover:text-white transition-colors">Dashboard Code</Link>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">SIH 2025</h4>
          <div className="flex flex-col gap-3 text-sm text-white/40">
            <p>Problem ID: 25002</p>
            <p>Ministry: Development of North Eastern Region</p>
            <p>Organization: Government of India</p>
            <p>Domain: Smart City &amp; Tourism Safety</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/30 text-center md:text-left">
          © {currentYear} SafeTrail Project. Open-source under academic license.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/30">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Source Code</Link>
        </div>
      </div>

      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-electric-blue/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
}
