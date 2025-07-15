import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Binaya Kumar Panda</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl max-w-xl text-gray-700 dark:text-gray-300">
        A passionate Full Stack Developer skilled in MERN stack & DevOps.
      </p>
      <a
        href="/resume.pdf"
        className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        download
      >
        Download Resume
      </a>
    </motion.section>
  );
}
