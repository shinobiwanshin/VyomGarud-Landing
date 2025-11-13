"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden dark:from-darkTheme dark:via-gray-800 dark:to-darkTheme">
      {/* Background pattern or animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#ff7b00] to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight dark:text-white"
        >
          VyomGarud
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed dark:text-gray-300"
        >
          Precision Engineering for Autonomous Flight
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-12 max-w-xl mx-auto dark:text-gray-400"
        >
          Military-grade UAV and drone systems delivering high reliability,
          advanced autonomy, and unparalleled precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl dark:bg-[#ff7b00] dark:hover:bg-[#e66a00]">
            Explore Solutions
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-darkTheme">
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Floating elements for futuristic feel */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-2 h-2 bg-[#ff7b00] rounded-full opacity-60"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-3 h-3 bg-[#ff7b00] rounded-full opacity-40"
      ></motion.div>
    </section>
  );
}
