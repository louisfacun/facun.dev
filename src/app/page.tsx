//import Image from "next/image";
import ProjectCard from "@/app/components/project-card";
import ThemedPhoto from "@/app/components/themed-photo";

import { ChevronRightIcon } from "@/app/components/icons";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:py-4">
        <div className="flex flex-col items-center text-center sm:w-2/3 sm:items-start sm:text-left">
          <h1 className="mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl">
            Hi, I&apos;m Louis!
          </h1>
          <p className="mb-4 max-w-sm leading-loose text-gray-500 dark:text-gray-400 sm:max-w-md">
            I&apos;m a passionate software developer based in Philippines
            specializing in Next.js, React.js, Tailwind CSS, and Django Rest
            Framework.
          </p>
          <a
            href="/about"
            className="flex transform items-center gap-x-2 text-blue-500 transition duration-300 hover:scale-110 hover:text-blue-700"
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
        className="mx-auto max-w-2xl scroll-mt-32 px-4 py-8 sm:py-12"
      >
        <h2 className="mb-4 text-center text-xl font-bold sm:text-left">
          Projects
        </h2>
        <div className="mx-auto max-w-xs sm:max-w-full">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <ProjectCard
              imgHref="/phsaver.svg"
              imgAlt="PHSaver logo"
              title="PHSaver.com full-stack web development"
              description="A digital banks in the Philippines directory"
              slug="phsaver"
              techList={["Next.js", "Tailwind CSS", "Django", "Django REST"]}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <h2 className="mb-4 text-xl font-bold">Contact Me</h2>
        <form
          action="#"
          method="POST"
          className="rounded-md border border-gray-200 p-4 dark:border-gray-700 sm:p-6"
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
              className="w-full rounded-md border border-gray-200 p-2 dark:border-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-500 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-200 p-2 dark:border-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-500 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-md border border-gray-200 p-2 dark:border-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
