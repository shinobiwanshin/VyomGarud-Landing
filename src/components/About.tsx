"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          About VyomGarud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
        >
          We specialize in limitless-range UAVs powered by cellular and
          LoRa-based hybrid communication, enabling seamless command, control,
          and multi-drone coordination even in challenging environments. Built
          with military-grade precision, VyomGarud systems combine cutting-edge
          avionics, AI-driven telemetry, and secure cloud infrastructure to
          deliver unmatched situational awareness and mission endurance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">Founded</h3>
            <p className="text-gray-400">2025</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              Location
            </h3>
            <p className="text-gray-400">Bhopal, India</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              Industry
            </h3>
            <p className="text-gray-400">IT/Technology & Electronics</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-400 mt-8"
        >
          At VyomGarud, we believe the future of aerial operations lies in
          autonomy, resilience, and connectivity—and we are engineering that
          future today.
        </motion.p>
      </div>
    </section>
  );
}
