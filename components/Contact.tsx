"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto px-6 lg:px-16 py-28 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* CHARACTER SIDE */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

            <div
              className="absolute w-[450px] h-[450px] border border-cyan-500/10 rounded-full animate-spin"
              style={{ animationDuration: "25s" }}
            />

            <div
              className="absolute w-[380px] h-[380px] top-8 left-8 border border-purple-500/10 rounded-full animate-spin"
              style={{
                animationDuration: "18s",
                animationDirection: "reverse",
              }}
            />

            <Image
              src="/contact-character.png"
              alt="Contact Character"
              width={450}
              height={550}
              priority
              className="
                relative
                z-10
                object-contain
                animate-float
                hover:scale-105
                transition-all
                duration-700
                drop-shadow-[0_0_40px_rgba(0,229,255,0.45)]
              "
            />
          </div>
        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            backdrop-blur-xl
            bg-[#141B34]/70
            border
            border-cyan-500/20
            rounded-3xl
            p-10
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(0,229,255,0.2)]
            transition-all
            duration-500
          "
        >
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-400
              mb-6
            "
          >
            Let's Build Something Amazing 🚀
          </span>

          <h2
            className="
              text-5xl
              font-black
              mb-5
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Open to AI Engineer, Full Stack Developer,
            Software Engineer and Internship opportunities.
          </p>

          <div className="space-y-6">

            <a
              href="mailto:shambhavi6304@gmail.com"
              className="
                flex items-center gap-4 p-4 rounded-2xl
                bg-cyan-500/5 border border-cyan-500/10
                hover:border-cyan-400 hover:translate-x-2
                transition-all
              "
            >
              <Mail className="text-cyan-400" size={24} />
              <span>shambhavi6304@gmail.com</span>
            </a>

            <div
              className="
                flex items-center gap-4 p-4 rounded-2xl
                bg-cyan-500/5 border border-cyan-500/10
              "
            >
              <Phone className="text-cyan-400" size={24} />
              <span>+91 8950065414</span>
            </div>

            <a
              href="https://linkedin.com/in/shambhavi-jha-b0491b291"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4 p-4 rounded-2xl
                bg-cyan-500/5 border border-cyan-500/10
                hover:border-cyan-400 hover:translate-x-2
                transition-all
              "
            >
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/shambhavi614"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4 p-4 rounded-2xl
                bg-cyan-500/5 border border-cyan-500/10
                hover:border-cyan-400 hover:translate-x-2
                transition-all
              "
            >
              <FaGithub className="text-cyan-400 text-2xl" />
              <span>GitHub Portfolio</span>
            </a>

          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/SHAMBHAVI_JHA_Resume.pdf"
              download
              className="
                flex items-center gap-2
                bg-cyan-400 text-black
                px-7 py-3 rounded-xl
                font-semibold
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]
                transition-all
              "
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="#projects"
              className="
                px-7 py-3 rounded-xl
                border border-cyan-400
                hover:bg-cyan-400
                hover:text-black
                transition-all
              "
            >
              View Projects
            </a>

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}
