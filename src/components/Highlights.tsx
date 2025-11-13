"use client";

import { motion } from "motion/react";

const highlights = [
  {
    title: "Advanced Autonomy",
    description:
      "AI-powered flight systems with intelligent decision-making and adaptive navigation.",
  },
  {
    title: "High Reliability",
    description:
      "Military-grade components ensuring 99.9% uptime and fail-safe operations.",
  },
  {
    title: "Precision Engineering",
    description:
      "Sub-millimeter accuracy in positioning and payload delivery systems.",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 px-4 bg-gray-800 dark:bg-darkHover">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 dark:text-white"
        >
          Key Highlights
        </motion.h2>

        <div className="space-y-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-6"
            >
              <div className="w-4 h-4 bg-[#ff7b00] rounded-full shrink-0"></div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-lg dark:text-gray-400">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
