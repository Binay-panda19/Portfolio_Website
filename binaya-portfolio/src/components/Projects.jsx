const projects = [
  {
    title: "VideoTube",
    description: "A video streaming platform similar to YouTube, built with MERN stack technologies.",
    link: "https://github.com/Binay-panda19/backend_project.git",
  },
  {
    title: "Snyder’s Cut",
    description: "An AI-powered app that scans your face and suggests the best hairstyle using ML and web tech.",
    link: "https://github.com/Binay-panda19/Snyder-s-Cut.git",
  },
  {
    title: "Wander Lust",
    description: "A travel website that allows users to explore and book travel packages, featuring a user-friendly interface.",
    link: "https://github.com/Binay-panda19/MAJORPROJECT.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {proj.description}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
