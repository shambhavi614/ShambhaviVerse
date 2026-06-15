"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiPython,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaJava, FaBrain } from "react-icons/fa";
import { TbBrandCpp, TbRobot } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <TbBrandCpp /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Power BI", icon: <BsBarChartFill /> },
    { name: "Machine Learning", icon: <TbRobot /> },
    { name: "Artificial Intelligence", icon: <FaBrain /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Shadcn UI", icon: "✨" },
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-6 lg:px-16 py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold tracking-[3px] uppercase">
            My Expertise
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-4">
            Technical Arsenal
          </h2>

          <p className="text-gray-400 mb-12 text-lg leading-relaxed">
            A collection of technologies, frameworks and tools I use
            to build intelligent applications, AI solutions and scalable digital products.
          </p>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="
                  group
                  bg-[#141B34]
                  border border-cyan-500/20
                  rounded-2xl
                  p-5
                  text-center
                  transition-all
                  cursor-pointer
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]
                "
              >
                <div className="text-4xl text-cyan-400 mb-3 flex justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-125">
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-white">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[500px] h-[500px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

            {/* Floating circle animation */}
            <motion.div
              className="absolute inset-0 border border-cyan-500/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Character */}
            <Image
              src="/skills-character.png"
              alt="Skills Character"
              width={520}
              height={520}
              priority
              unoptimized
              className="
                relative
                z-10
                object-contain
                hover:scale-105
                transition-all
                duration-500
                drop-shadow-[0_0_40px_rgba(0,229,255,0.35)]
              "
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}