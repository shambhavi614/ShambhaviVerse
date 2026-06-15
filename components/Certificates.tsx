"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    "Data Science & Analytics – HP LIFE",
    "Database Programming with SQL – Oracle",
    "Database Management System – Infosys",
    "Ethical AI – Infosys",
    "Data Science – DUCAT",
    "Data Structures & Algorithms using Python – Infosys",
    "Software Developer Internship – Guidona Softpedia",
  ];

  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-6 lg:px-16 py-28 overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
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
            🏆 Achievements
          </div>

          <h2
            className="
              text-5xl
              lg:text-6xl
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
            Certifications
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-xl">
            Professional certifications, internships and learning
            achievements that strengthened my technical expertise in
            AI, Software Development and Data Science.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  bg-[#141B34]
                  border
                  border-cyan-500/20
                  rounded-3xl
                  p-6
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-cyan-500/0
                    via-cyan-500/5
                    to-purple-500/5
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

                <div
                  className="
                    text-4xl
                    mb-4
                    group-hover:scale-125
                    transition
                    duration-500
                  "
                >
                  🏆
                </div>

                <h3
                  className="
                    font-semibold
                    leading-relaxed
                    text-white
                    relative
                    z-10
                  "
                >
                  {certificate}
                </h3>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Main Glow */}
            <div
              className="
                absolute
                inset-0
                bg-cyan-500/20
                blur-[120px]
                rounded-full
                animate-pulse
              "
            />

            {/* Floating Rings */}
            <div
              className="
                absolute
                w-[420px]
                h-[420px]
                border
                border-cyan-500/10
                rounded-full
                animate-spin
              "
              style={{ animationDuration: "25s" }}
            />

            <div
              className="
                absolute
                w-[350px]
                h-[350px]
                left-8
                top-8
                border
                border-purple-500/10
                rounded-full
                animate-spin
              "
              style={{
                animationDuration: "18s",
                animationDirection: "reverse",
              }}
            />

            <Image
              src="/certificates-character.png"
              alt="Certificates Character"
              width={480}
              height={580}
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
                drop-shadow-[0_0_40px_rgba(0,229,255,0.4)]
              "
            />

            {/* Badge 1 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="
                absolute
                top-10
                -left-10
                px-4
                py-2
                rounded-full
                bg-cyan-400
                text-black
                font-bold
                shadow-xl
              "
            >
              7+ Certificates
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="
                absolute
                bottom-10
                -right-10
                px-4
                py-2
                rounded-full
                bg-purple-500
                text-white
                font-bold
                shadow-xl
              "
            >
              Continuous Learning
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}