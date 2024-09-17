//import Image from "next/image";
import ProjectCard from "@/app/components/project-card";
import ThemedPhoto from "@/app/components/themed-photo";

import { ChevronRightIcon } from "@/app/components/icons";

export default function Home() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 py-8 sm:py-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
            Hi, I&apos;m Louis!
          </h1>
          <p className="mb-4 text-gray-500 max-w-sm sm:max-w-md leading-loose">
            I&apos;m a passionate software developer based in Philippines
            specializing in Next.js, React.js, Tailwind CSS, and Django Rest
            Framework.
          </p>
          <a
            href="about-me"
            className="flex items-center gap-x-2 text-blue-500"
          >
            Learn more about me <ChevronRightIcon />
          </a>
        </div>
        <div className="sm:w-1/3">
          <div className="flex justify-center">
            <ThemedPhoto />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-32 max-w-2xl mx-auto px-4 py-8 sm:py-12"
      >
        <h2 className="text-xl font-bold mb-4 ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="PHSaver.com"
            description="In progress full-stack development for PHSaver.com"
            slug="phsaver"
            techList={["Next.js", "Tailwind", "Django", "Django REST"]}
          />
        </div>
      </section>

      <section id="contact" className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <form
          action="#"
          method="POST"
          className="p-4 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-500 dark:text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-500  dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-500  dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
