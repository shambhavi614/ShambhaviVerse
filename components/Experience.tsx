import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 lg:px-16 py-24 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div
          className="flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="relative w-[450px] h-[450px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

            {/* Image */}
            <Image
              src="/experience-character.png"
              alt="Experience Character"
              width={720}
              height={220}
              priority
              unoptimized
              className="
                relative
                z-10
                object-contain
                animate-float
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div data-aos="fade-left" data-aos-duration="1200">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4 animate-pulse">
            Professional Journey
          </span>

          <h2 className="text-5xl font-bold mb-4">
            Experience
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Industry exposure, practical development experience and
            real-world project contributions.
          </p>

          {/* CARD */}
          <div
            className="
              relative
              bg-[#141B34]
              border
              border-cyan-500/20
              rounded-3xl
              p-8
              overflow-hidden
              transition-all
              duration-500
              hover:border-cyan-400
              hover:shadow-[0_0_40px_rgba(0,229,255,0.25)]
              hover:-translate-y-2
            "
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >

            {/* Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

              <div>
                <h3 className="text-3xl font-bold">
                  Software Developer Intern
                </h3>

                <p className="text-cyan-400 mt-2 text-lg">
                  Guidona Softpedia
                </p>
              </div>

              <div className="mt-4 lg:mt-0">
                <p className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-gray-300">
                  Mar 2025 – Aug 2025
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-8 leading-relaxed text-lg">
              Worked on modern web development technologies including
              Next.js and TypeScript. Built responsive interfaces,
              optimized performance, collaborated using Git & GitHub,
              and gained practical exposure to professional software
              development workflows.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                "Next.js",
                "TypeScript",
                "Git",
                "GitHub",
                "Responsive UI",
                "Web Development",
              ].map((tech, index) => (
                <span
                  key={tech}
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                  className="
                    px-4 py-2 rounded-full
                    bg-cyan-500/10
                    border border-cyan-500/20
                    text-cyan-300
                    transition-all duration-300
                    hover:scale-105
                    hover:border-cyan-400
                    hover:bg-cyan-500/20
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}