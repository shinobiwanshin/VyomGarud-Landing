"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ready to explore how VyomGarud can transform your operations?
              Contact our team to discuss your requirements and discover the
              perfect UAV solution for your needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#ff7b00] text-xl">📧</span>
                <span className="text-gray-300">info@vyomgarud.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#ff7b00] text-xl">📞</span>
                <span className="text-gray-300">+91 8881444693</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#ff7b00] text-xl">📍</span>
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff7b00] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff7b00] transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff7b00] transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff7b00] hover:bg-[#e66a00] text-white py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © 2025 VyomGarud. All rights reserved. | Precision Engineering for
            Autonomous Flight
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
