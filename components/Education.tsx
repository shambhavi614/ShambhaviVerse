"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="max-w-7xl mx-auto px-6 lg:px-16 py-28 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 font-semibold tracking-[3px] uppercase">
            Academic Background
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-10">
            Education
          </h2>

          <div className="space-y-8 relative">

            {/* Timeline */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-cyan-500/20"></div>

            {/* B.Tech */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                relative
                pl-16
                bg-[#141B34]
                border border-cyan-500/20
                rounded-3xl
                p-6
                hover:border-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]
                transition-all
              "
            >
              <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                <GraduationCap size={20} />
              </div>

              <h3 className="text-2xl font-bold">
                B.Tech – Computer Science & AI
              </h3>

              <p className="text-cyan-400 mt-2">
                Galgotias College of Engineering & Technology
              </p>

              <p className="text-gray-400 mt-3">
                2022 – 2026 • CGPA: 8.0
              </p>
            </motion.div>

            {/* Class XII */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                relative
                pl-16
                bg-[#141B34]
                border border-cyan-500/20
                rounded-3xl
                p-6
                hover:border-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]
                transition-all
              "
            >
              <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                <School size={20} />
              </div>

              <h3 className="text-xl font-bold">
                Class XII
              </h3>

              <p className="text-cyan-400 mt-2">
                USM Public School
              </p>

              <p className="text-gray-400 mt-3">
                Percentage: 80%
              </p>
            </motion.div>

            {/* Class X */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="
                relative
                pl-16
                bg-[#141B34]
                border border-cyan-500/20
                rounded-3xl
                p-6
                hover:border-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]
                transition-all
              "
            >
              <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black">
                <BookOpen size={20} />
              </div>

              <h3 className="text-xl font-bold">
                Class X
              </h3>

              <p className="text-cyan-400 mt-2">
                DAV Public School
              </p>

              <p className="text-gray-400 mt-3">
                Percentage: 90%
              </p>
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
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
              src="/education-character.png"
              alt="Education Character"
              width={500}
              height={650}
              priority
              unoptimized
              className="
                relative
                z-10
                object-contain
                animate-float
                hover:scale-105
                transition-all
                duration-700
                drop-shadow-[0_0_35px_rgba(0,229,255,0.35)]
              "
            />

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
