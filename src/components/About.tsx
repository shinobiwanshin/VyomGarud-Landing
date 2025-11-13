"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-800 dark:bg-darkHover">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 dark:text-white"
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 dark:text-gray-300"
        >
          At VyomGarud, we pioneer the future of unmanned aerial vehicles
          through cutting-edge technology and uncompromising quality. Our
          military-grade drone systems combine advanced autonomy, precision
          engineering, and robust reliability to deliver solutions that exceed
          expectations in surveillance, delivery, and defense applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-400 dark:text-gray-400"
        >
          From concept to deployment, we ensure every system meets the highest
          standards of performance, security, and innovation.
        </motion.p>
      </div>
    </section>
  );
}
