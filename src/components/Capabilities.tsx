"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Surveillance Systems",
    description:
      "Advanced UAV platforms for real-time intelligence gathering with high-resolution imaging and autonomous navigation.",
    icon: "👁️",
  },
  {
    title: "Delivery Solutions",
    description:
      "Reliable drone delivery systems for logistics and emergency response, ensuring precision and safety.",
    icon: "📦",
  },
  {
    title: "Military Applications",
    description:
      "Tactical drone systems designed for defense operations with enhanced security and combat capabilities.",
    icon: "🛡️",
  },
  {
    title: "Research & Development",
    description:
      "Cutting-edge R&D in AI, autonomy, and materials science for next-generation UAV technologies.",
    icon: "🔬",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Our Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-[#ff7b00] group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cap.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {cap.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
