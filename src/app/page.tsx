import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import { ArrowDown, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
<main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left Content */}
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
                Software Developer
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                Hi, I'm{" "}
                <span className="text-blue-600">Ayush.</span>
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-300 sm:text-3xl">
                I build modern web experiences.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
                I'm a software developer passionate about building
                responsive, scalable and user-friendly applications using
                modern technologies.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-black"
                >
                  View My Work
                  <ExternalLink
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 text-sm font-medium transition hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
                >
                  Let's Talk
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-9 flex items-center gap-5">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-[3rem] border border-black/10 bg-gray-50 dark:border-white/10 dark:bg-white/[0.03]">
                
                <div className="absolute h-72 w-72 rounded-full border border-blue-600/20" />

                <div className="absolute h-56 w-56 rounded-full border border-blue-600/30" />

                <div className="text-center">
                  <div className="text-7xl font-bold text-blue-600">
                    &lt;/&gt;
                  </div>

                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                    Code • Create • Deploy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-gray-400 transition hover:text-black dark:hover:text-white sm:flex"
          >
            Scroll
            <ArrowDown size={15} />
          </a>
        </div>
      </section>

          {/* about Temporary sections */}
      <section
        id="about"
        className="border-t border-gray-200 px-6 py-24 dark:border-gray-800"
      >
        <Reveal>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Building useful things with code.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                I&apos;m Ayush, a Computer Science graduate and aspiring Full Stack
                Developer. I enjoy creating clean, responsive and user-friendly web
                applications.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                I work with modern technologies like Java, React, Next.js,
                JavaScript, Tailwind CSS and MongoDB. I&apos;m continuously improving
                my development and problem-solving skills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  2+
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Full Stack Projects
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  5+
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  3★
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Java HackerRank
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ∞
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Learning Mindset
                </p>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>


      {/*Skills */}
      <section
        id="skills"
        className="border-t border-gray-200 bg-gray-50 px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Skills
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Technologies I work with.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Java",
              "Python",
              "JavaScript",
              "React.js",
              "Next.js",
              "Node.js",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "MongoDB",
              "Git & GitHub",
              "Vercel",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-semibold text-gray-900 dark:text-white">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


            {/*projects */}
      <section
        id="projects"
        className="border-t border-gray-200 px-6 py-24 dark:border-gray-800"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Projects
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Things I&apos;ve built.
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              A selection of projects where I&apos;ve applied my development skills
              to build practical and modern web experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="flex h-56 items-center justify-center bg-gray-100 dark:bg-gray-800">
                <span className="text-5xl font-bold text-gray-300 dark:text-gray-600">
                  &lt;/&gt;
                </span>
              </div>

              <div className="p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    React
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Tailwind CSS
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Photographer Portfolio
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  A responsive photography portfolio platform with image galleries,
                  dynamic routing, animations, dark mode and a modern responsive UI.
                </p>

                <div className="mt-6 flex gap-5">
                  <a
                    href="https://github.com/Singhayu0/photographer-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white"
                  >
                    GitHub →
                  </a>

                  <a
                    href="https://photographer-portfolio-dun-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="flex h-56 items-center justify-center bg-gray-100 dark:bg-gray-800">
                <span className="text-5xl font-bold text-gray-300 dark:text-gray-600">
                  {"{ }"}
                </span>
              </div>

              <div className="p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Java
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Spring Boot
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    REST API
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Smart Task Prioritizer
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  A task management API designed to organize tasks, assign
                  priorities and provide a structured backend for productivity
                  applications.
                </p>

                <div className="mt-6 flex gap-5">
                  <a
                    href="#"
                    className="font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white"
                  >
                    GitHub →
                  </a>

                  <a
                    href="#"
                    className="font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>                                              

          {/*education and resume*/}

      <section
        id="education"
        className="border-t border-gray-200 bg-gray-50 px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Education
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              My academic journey.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto]">
            {/* Education */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Bachelor&apos;s Degree
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                    B.Tech in Computer Science
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    SDM College of Technology
                  </p>

                  <p className="mt-1 text-gray-500 dark:text-gray-500">
                    Affiliated to RGPV
                  </p>
                </div>

                <span className="w-fit rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Computer Science
                </span>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  Studied computer science fundamentals, programming, data
                  structures, algorithms, database systems and software development.
                </p>
              </div>
            </div>

            {/* Resume */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900 md:w-72">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Resume
              </p>

              <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                Want to know more?
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                Check out my resume for my skills, projects and experience.
              </p>

              <a
                href="/Ayush_Jamadiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-gray-900"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>



        {/*contact */}
      <section
        id="contact"
        className="border-t border-gray-200 px-6 py-24 dark:border-gray-800"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact information */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Contact
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Let&apos;s build something together.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600 dark:text-gray-400">
                I&apos;m currently looking for opportunities where I can learn,
                contribute and grow as a developer. If you have an opportunity or
                simply want to connect, feel free to reach out.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:your-email@example.com"
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  ayushjamadiya88@gmail.com
                </a>

                <a
                  href="https://github.com/Singhayu0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  GitHub →
                </a>

                <a
                  href="https://www.linkedin.com/in/ayush-jamadiya-335887236/"
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Have an opportunity?
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                I&apos;d love to hear about it. You can contact me directly through
                email.
              </p>

              <a
                href="mailto:ayushjamadiya88@gmail.com"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-4 font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-gray-900"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Ayush Jamadiya. All rights reserved.
          </p>

          <a
            href="#"
            className="transition hover:text-gray-900 dark:hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}