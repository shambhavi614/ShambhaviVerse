"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="
        relative
        mt-24
        overflow-hidden
        border-t border-cyan-500/10
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
              ✨ Portfolio Journey
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Thanks for visiting{" "}
              <span className="text-cyan-400">ShambhaviVerse</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
              Every project here represents a step in my journey
              towards becoming an AI Engineer. I enjoy creating
              intelligent applications, scalable web products,
              and impactful digital experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://github.com/shambhavi614"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                LinkedIn
              </a>

              <a
                href="/SHAMBHAVI_JHA_Resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
              >
                Resume
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

              <Image
                src="/hero-character.png"
                alt="Character"
                width={350}
                height={350}
                className="relative z-10 animate-float hover:scale-110 transition"
              />

              <div className="absolute -top-4 -left-8 bg-cyan-400 text-black px-4 py-2 rounded-full font-bold animate-bounce">
                See You Soon 👋
              </div>

              <div className="absolute bottom-6 -right-6 bg-purple-500 text-white px-4 py-2 rounded-full animate-pulse">
                AI Engineer
              </div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          className="mt-16 pt-8 border-t border-cyan-500/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            © 2026 Shambhavi Jha • Built with Next.js, TypeScript & Tailwind CSS ☕
          </p>

          <p className="text-cyan-400 mt-3 text-base font-medium">
            Turning ideas into intelligent solutions.
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
}