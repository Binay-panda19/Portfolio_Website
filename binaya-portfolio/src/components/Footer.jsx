import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12 py-6 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        &copy; {new Date().getFullYear()} Binaya Kumar Panda. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6 text-xl mb-2">
        <a
          href="https://github.com/binaya123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/binaya-kumar-panda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-red-500 hover:text-red-700 dark:text-red-400"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-500">
        Built with 💙 using <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> &{" "}
        <span className="font-semibold text-teal-500 dark:text-teal-400">Tailwind CSS</span>
      </p>
    </footer>
  );
}
