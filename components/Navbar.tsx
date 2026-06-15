"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-7xl
        z-50
      "
    >
      <div
        className="
          backdrop-blur-2xl
          bg-[#0B1020]/75
          border border-cyan-500/20
          rounded-3xl
          px-8 py-4
          flex items-center justify-between
          shadow-[0_0_40px_rgba(0,229,255,0.15)]
        "
      >
        {/* Logo */}
        <motion.h1
          animate={{
            textShadow: [
              "0 0 10px rgba(34,211,238,0.3)",
              "0 0 25px rgba(34,211,238,0.8)",
              "0 0 10px rgba(34,211,238,0.3)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
            text-3xl
            font-extrabold
            tracking-wide
            cursor-pointer
          "
        >
          <span className="text-cyan-400">
            Shambhavi
          </span>
          <span className="text-white">
            Verse
          </span>
        </motion.h1>

        {/* Navigation */}
        <ul
          className="
            hidden lg:flex
            gap-8
            text-gray-300
            text-lg
            font-medium
          "
        >
          {[
            "about",
            "education",
            "skills",
            "experience",
            "projects",
            "certificates",
            "contact",
          ].map((item) => (
            <li
              key={item}
              className="
                relative
                group
              "
            >
              <a
                href={`#${item}`}
                className="
                  capitalize
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:-translate-y-1
                  inline-block
                "
              >
                {item}
              </a>

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-cyan-400
                  w-0
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.a
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(34,211,238,0.2)",
              "0 0 25px rgba(34,211,238,0.7)",
              "0 0 10px rgba(34,211,238,0.2)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          href="/SHAMBHAVI_JHA_Resume.pdf"
          download
          className="
            hidden lg:block
            px-5 py-2
            rounded-xl
            bg-cyan-400
            text-black
            font-semibold
          "
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
}