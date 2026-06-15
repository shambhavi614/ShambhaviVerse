"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
  {
    title: "DeepCrop",
    description:
      "AI-powered crop disease detection platform built using Next.js, OpenAI GPT-4o Vision API, MongoDB and Tailwind CSS.",
    tech: ["Next.js", "OpenAI", "MongoDB", "Tailwind"],
    featured: true,
    live: "https://deepcrop.vercel.app/",
    github: "https://github.com/shambhavi614/DeepCrop-AI-PLANT-DISEASE-DETECTION",
  },
  {
    title: "GitHub Repository Explorer",
    description:
      "GitHub profile explorer with sorting, search history and API integration.",
    tech: ["Next.js", "Axios", "GitHub API"],
    live: "https://github-repo-explorer-woad.vercel.app/",
    github: "https://github.com/shambhavi614/github-repo-explorer",
  },
];

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-6 lg:px-16 py-24 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE CHARACTER */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

            <Image
              src="/projects-character.png"
              alt="Projects Character"
              width={700}
              height={1000}
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
                drop-shadow-[0_0_40px_rgba(0,229,255,0.45)]
              "
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            🚀 Portfolio Highlights
          </div>

          <h2 className="text-5xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Real-world applications combining Artificial Intelligence,
            Full Stack Development and Modern Technologies.
          </p>

          <div className="space-y-8">

            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  group relative overflow-hidden rounded-3xl p-7 border
                  transition-all duration-500
                  hover:-translate-y-2 hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]
                  ${
                    project.featured
                      ? "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-cyan-400"
                      : "bg-[#141B34] border-cyan-500/20"
                  }
                `}
              >

                {/* Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-1000" />

                {project.featured && (
                  <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-400 text-black text-xs font-bold">
                    ⭐ FEATURED PROJECT
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm hover:bg-cyan-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
    >
      Live Demo
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
    >
      GitHub
    </a>
  )}
</div>

              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}