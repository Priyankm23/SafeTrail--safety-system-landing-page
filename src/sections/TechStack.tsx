"use client";

import { motion } from 'framer-motion';

const techStack = [
  { category: "Mobile",           items: ["React Native", "Expo", "TypeScript", "Mapbox", "AsyncStorage", "expo-sms"] },
  { category: "Backend",          items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT", "bcryptjs"] },
  { category: "Blockchain",       items: ["Polygon (L2)", "Ethers.js", "Smart Contracts", "AES-256", "Audit Proofs"] },
  { category: "Risk / ML",        items: ["Python", "FastAPI", "scikit-learn", "XGBoost", "PyTorch", "Modal"] },
  { category: "Infrastructure",   items: ["Docker", "Docker Compose", "GitHub Actions", "Winston", "Morgan"] },
  { category: "Mapping & Geo",    items: ["Mapbox", "OpenStreetMap", "GeoJSON", "Point-in-polygon", "Haversine"] },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 section-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-beige-900"
          >
            A Modern <span className="text-electric-blue">Tech Ecosystem</span>
          </motion.h2>
          <p className="text-beige-600 max-w-2xl mx-auto">
            Leveraging industry-standard tools and frameworks to ensure low-latency
            response times and enterprise-grade security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl card-surface relative group hover:shadow-md transition-all"
            >
              <h3 className="text-base font-bold text-beige-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-electric-blue rounded-full" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-beige-100 border border-beige-200 text-sm font-semibold text-beige-700 hover:bg-electric-blue/10 hover:text-electric-blue hover:border-electric-blue/30 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
