import Navbar from "@/components/Navbar";
import Character from "@/components/Character";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import AOSProvider from "@/components/AOSProvider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white overflow-hidden">
      
      <AOSProvider />

      {/* Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            top-20
            left-20
            w-96
            h-96
            bg-cyan-500/10
            rounded-full
            blur-[120px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-20
            w-[500px]
            h-[500px]
            bg-purple-500/10
            rounded-full
            blur-[150px]
            animate-pulse
          "
        />

      </div>

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto min-h-screen px-6 lg:px-16 pt-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div className="animate-fadeIn">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-500/10
              text-cyan-400
              text-sm
              font-medium
              mb-6
            "
          >
            🚀 Welcome to ShambhaviVerse
          </div>

          <p
            className="
              text-cyan-400
              font-semibold
              tracking-[4px]
              uppercase
              text-lg
            "
          >
            Aspiring AI Engineer
          </p>

          <h1
  className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-6xl
    font-black
    mt-1
    leading-tight
    text-center
    lg:text-left
    bg-gradient-to-r
    from-cyan-400
    via-blue-500
    to-purple-500
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_25px_rgba(0,229,255,0.15)]
    break-words
  "
>
  Shambhavi Jha
</h1>

          <h2
            className="
              text-3xl
              lg:text-4xl
              text-gray-300
              mt-6
              font-semibold
            "
          >
            AI Engineer & Full Stack Developer
          </h2>

          <p
            className="
              text-gray-400
              mt-8
              max-w-2xl
              leading-relaxed
              text-lg
            "
          >
            Final-year B.Tech student specializing in Computer Science &
            Artificial Intelligence. Passionate about building AI-powered
            applications, scalable web solutions, and intelligent systems
            that solve real-world problems.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="
                bg-cyan-400
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]
              "
            >
              View Projects
            </a>

            <a
              href="/SHAMBHAVI_JHA_Resume.pdf"
              download
              className="
                border
                border-cyan-400
                px-8
                py-4
                rounded-xl
                hover:bg-cyan-400
                hover:text-black
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Download Resume
            </a>

          </div>

          {/* STATS */}

          <div className="flex gap-10 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                15+
              </h3>

              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                7+
              </h3>

              <p className="text-gray-400">
                Certifications
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                AI
              </h3>

              <p className="text-gray-400">
                Focused
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center items-center">

          <div className="relative">

            {/* Orbit Ring 1 */}

            <div
              className="
                absolute
                inset-0
                border
                border-cyan-500/20
                rounded-full
                animate-spin
              "
              style={{
                width: "500px",
                height: "500px",
                animationDuration: "20s",
              }}
            />

            {/* Orbit Ring 2 */}

            <div
              className="
                absolute
                inset-10
                border
                border-purple-500/20
                rounded-full
                animate-spin
              "
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            />

            {/* Character */}

            <div className="flex justify-center lg:justify-end">
  <Character />
</div>

          </div>

        </div>

        {/* Scroll Indicator */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            animate-bounce
          "
        >
          <div
            className="
              w-6
              h-10
              border-2
              border-cyan-400
              rounded-full
              flex
              justify-center
            "
          >
            <div
              className="
                w-1
                h-3
                bg-cyan-400
                rounded-full
                mt-2
              "
            />
          </div>
        </div>

      </section>

      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />

    </main>
  );
}