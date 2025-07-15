import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <BsGit className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow text-sm font-medium text-gray-700 dark:text-white transition"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
