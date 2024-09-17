"use client";

import ThemeSwitcher from "./theme-switcher";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 border-b border-gray-200 dark:border-gray-700 overflow-x-auto whitespace-nowrap z-10">
      <div className="max-w-2xl mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold mr-8">
          Louis Facun
        </a>

        <div className="flex items-center">
          <a href="/about-me" className="mx-2 hover:text-blue-500">
            About Me
          </a>
          <a href="#projects" className="mx-2 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="mx-2 hover:text-blue-500">
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
