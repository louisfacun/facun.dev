"use client";

import { ReactNode, useEffect, useState } from "react";

import NavLink from "@/app/components/nav-link";

// TODO: micro features
// add philippine flag
// add short story toggle
// add icons
// add sounds
// add animations
// add accordion for experience and education

// Extra info
// ai disclaimer (or my opinion on ai usage)
// photos

export default function Page() {
  // Navigation tab
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveTab(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Mobile nav */}
      <div className="no-scrollbar sticky top-12 flex gap-x-2 gap-y-4 overflow-x-auto whitespace-nowrap border-b border-gray-200 bg-white text-sm font-semibold dark:border-gray-700 dark:bg-gray-900 dark:text-white sm:hidden sm:flex-col sm:text-lg">
        {/* TODO: update active tab on scroll */}
        {/* Mobile-first screen navigation tab */}
        <NavLink id="story" text="Story" isActive={activeTab === "story"} />
        <NavLink id="skills" text="Skills" isActive={activeTab === "skills"} />
        <NavLink
          id="experience"
          text="Experience"
          isActive={activeTab === "experience"}
        />
        <NavLink
          id="education"
          text="Education"
          isActive={activeTab === "education"}
        />
        <NavLink id="links" text="Links" isActive={activeTab === "links"} />
        <NavLink
          id="contact"
          text="Contact"
          isActive={activeTab === "contact"}
        />
      </div>
      {/* sm:py-16 */}
      <div className="mx-auto max-w-2xl px-4 sm:py-16">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-8">
          {/* TODO: update active tab on scroll */}
          {/* Medium screen navigation tab */}
          <div className="hidden dark:text-white sm:block sm:w-1/4">
            <div className="fixed flex flex-col gap-x-4 gap-y-4 overflow-x-auto whitespace-nowrap text-lg font-semibold">
              <a href="#story">Story</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="sm:w-3/4">
            <h1 className="mb-4 text-2xl font-semibold">
              About Me (Louis Facun)
            </h1>
            <Section id="story" heading="My Story">
              <div className="flex flex-col gap-y-4">
                <p>
                  My journey into the world of technology began in high school
                  when I discovered WAP sites (WML) on my Nokia N70. That moment
                  sparked a passion that would shape my career path.
                </p>
                <p>
                  After high school, I shared this story with the dean of the
                  Bachelor of IT program I had applied to, convinced I was on
                  the right track. However, life had other plans, and I had to
                  pause my formal education. But my love for coding persisted.
                </p>
                <p>
                  Determined to stay connected to the tech world, I sought out
                  jobs that allowed me to dabble in programming. I taught myself
                  HTML, CSS, PHP, and JavaScript, eventually trying my hand at
                  freelancing. While I built some simple websites, I felt
                  something was missing. That&apos;s when I realized: formal
                  education in programming was my calling.
                </p>
                <p>
                  I returned to school, this time with thorough research and a
                  clear goal. I chose Computer Science, not just for the
                  curriculum, but also for the chance to collaborate and build
                  lasting friendships. It wasn&apos;t until my final year that I
                  discovered my passion for AI and Machine Learning while
                  working on my thesis. This experience honed my Python skills
                  and opened up new horizons.
                </p>
                <p>
                  Excited by the possibilities, I considered pursuing a
                  Master&apos;s in Computer Science, but soon discovered my
                  interests lay elsewhere. I tried my hand at teaching as a
                  college instructor, but quickly realized it wasn&apos;t the
                  right fit for me.
                </p>
                <p>
                  Seeking hands-on experience, I joined a research project as a
                  Python developer. However, I found myself yearning for more
                  dynamic challenges and clear career progression.
                </p>
                <p>
                  This realization led me to my current focus: full stack web
                  development. I&apos;ve been continuously learning and
                  building, with being my latest endeavor. Each day brings new
                  challenges and opportunities to grow my skills across the
                  entire web development stack.
                </p>
                <p>
                  I&apos;m currently deepening my understanding of full stack
                  web development through hands-on projects like{" "}
                  <a href="#">PHSaver.com</a>. This ongoing experience is
                  helping me build a strong foundation in both frontend and
                  backend technologies, and I&apos;m eager to apply what
                  I&apos;m learning in a professional setting.
                </p>
                <p>
                  Whether you&apos;re looking for a developer eager to grow or
                  need someone to tackle challenges with fresh insights,
                  I&apos;m open to both freelance opportunities and full-time
                  positions. I&apos;m particularly interested in roles where I
                  can continue learning, solve complex problems, and contribute
                  to innovative projects.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me enjoying video
                  games like Dota 2 and League of Legends, or diving into
                  graphic design, especially creating logos and icons. I&apos;m
                  always excited to take on new challenges and collaborate on
                  innovative projects.
                </p>
              </div>
            </Section>

            <Section id="skills" heading="My Skills">
              <Heading size="h3" heading="Front-End Web Development" />
              <ul className="mb-4 list-disc pl-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>

              <Heading size="h3" heading="Back-End Web Development" />
              <ul className="mb-4 list-disc pl-5">
                <li>Python</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Django</li>
                <li>Django REST framework</li>
              </ul>

              <Heading size="h3" heading="DevOps" />
              <ul className="mb-4 list-disc pl-5">
                <li>GitHub Actions</li>
                <li>AWS</li>
                <li>DigitalOcean</li>
              </ul>

              <Heading size="h3" heading="Tools" />
              <ul className="mb-4 list-disc pl-5">
                <li>Development: VSCode, Github Copilots</li>
                <li>UI/UX Design: Familiarity with Figma</li>
                <li>Vector Design: Inkscape</li>
              </ul>
            </Section>

            <Section id="experience" heading="My Experience">
              <p>
                Science Research Assistant (Python Developer) | UP Diliman,
                Marine Science Institute
              </p>
              <p>
                Computer Science Instructor | Don Mariano Marcos Memorial State
                University
              </p>
            </Section>

            <Section id="education" heading="My Education">
              <p>
                Don Mariano Marcos Memorial State University Bachelor of
                Computer Science (BCompSc) 2017-2021
              </p>
            </Section>

            <Section id="links" heading="My Links">
              <div className="flex flex-col">
                <a href="https://github.com/louisfacun" target="lf_gh">
                  GitHub
                </a>
                <a href="https://x.com/louisfacun" target="lf_x">
                  X/Twitter
                </a>
                <a href="https://linkedin.com/in/louisfacun" target="lf_li">
                  LinkedIn
                </a>
              </div>
            </Section>

            <Section id="contact" heading="My Contact">
              Email: louisfacun@gmail.com
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}

const Heading = ({ size, heading }: { size: string; heading: string }) => {
  if (size == "h2") {
    return <h2 className="mb-2 text-xl font-semibold">{heading}</h2>;
  }
  if (size == "h3") {
    return <h3 className="mb-2 font-semibold">{heading}</h3>;
  }
};

const Section = ({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div id={id} className="mb-8 scroll-mt-28 leading-loose sm:scroll-mt-28">
      <Heading size="h2" heading={heading} />
      <div className="text-gray-500 dark:text-gray-400">{children}</div>
    </div>
  );
};
