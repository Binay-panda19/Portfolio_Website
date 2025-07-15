import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Binaya</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500 dark:text-white">About</a>
          <a href="#skills" className="hover:text-blue-500 dark:text-white">Skills</a>
          <a href="#projects" className="hover:text-blue-500 dark:text-white">Projects</a>
          <a href="#contact" className="hover:text-blue-500 dark:text-white">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 bg-blue-500 text-white px-2 py-1 rounded"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
