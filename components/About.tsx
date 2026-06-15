"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const journey = [
    {
      year: "2022",
      title: "Started B.Tech Journey",
      desc: "Joined Galgotias College of Engineering and Technology in Computer Science & Artificial Intelligence.",
    },
    {
      year: "2023",
      title: "Programming Foundation",
      desc: "Learned Python, Java, C and strengthened problem-solving skills through projects and coursework.",
    },
    {
      year: "2025",
      title: "Software Developer Intern",
      desc: "Worked at Guidona Softpedia building applications using Next.js, TypeScript, Git and GitHub.",
    },
    {
      year: "2026",
      title: "Building AI Solutions",
      desc: "Developed DeepCrop and other intelligent applications while preparing for AI Engineer roles.",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-6 lg:px-16 py-28"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

            <Image
              src="/about-character.png"
              alt="About Character"
              width={550}
              height={700}
              priority
              className="
                relative
                z-10
                object-contain
                animate-float
                hover:scale-105
                transition-all
                duration-500
                drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]
              "
            />
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold tracking-[3px] uppercase">
            About Me
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-6">
            My Journey
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            From a curious engineering student to an aspiring AI Engineer,
            my journey has been driven by innovation, continuous learning,
            and a passion for building technology that creates impact.
          </p>

          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-cyan-500/20"></div>

            <div className="space-y-8">

              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="
                    relative
                    pl-12
                    bg-[#141B34]
                    border border-cyan-500/20
                    rounded-2xl
                    p-6
                    hover:border-cyan-400
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]
                    transition-all
                    duration-300
                  "
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 w-8 h-8 rounded-full bg-cyan-400 border-4 border-[#0B1020]"></div>

                  <h3 className="text-cyan-400 font-bold text-lg">
                    {item.year}
                  </h3>

                  <h4 className="text-2xl font-semibold mt-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}