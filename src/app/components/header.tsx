"use client";

import ThemeSwitcher from "./theme-switcher";

const Header = () => {
  return (
    <header className="no-scrollbar sticky top-0 z-10 overflow-x-auto whitespace-nowrap border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-2">
        <a href="/" className="mr-8 text-xl font-bold">
          Louis Facun
        </a>

        <div className="flex items-center">
          <a
            href="/about"
            className="mx-2 transition duration-300 hover:-rotate-6 hover:text-blue-500"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="mx-2 transition duration-300 hover:-rotate-6 hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mx-2 transition duration-300 hover:-rotate-6 hover:text-blue-500"
          >
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
