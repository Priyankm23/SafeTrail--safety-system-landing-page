import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import ProblemStatement from '@/sections/ProblemStatement';
import Architecture from '@/sections/Architecture';
import Features from '@/sections/Features';
import Components from '@/sections/Components';
import LiveDemo from '@/sections/LiveDemo';
import Footer from '@/sections/Footer';

/** Thin rule with a fade on both ends — sits between any two sections */
function Divider() {
  return (
    <div className="w-full px-12 lg:px-24" aria-hidden>
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(168,130,90,0.25) 20%, rgba(168,130,90,0.35) 50%, rgba(168,130,90,0.25) 80%, transparent 100%)',
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-50 text-beige-900 selection:bg-electric-blue selection:text-white">
      <Navbar />
      <Hero />
      <Divider />
      <ProblemStatement />
      <Divider />
      <Architecture />
      <Divider />
      <Features />
      <Divider />
      <Components />
      <Divider />
      <LiveDemo />
      <Footer />
    </main>
  );
}
