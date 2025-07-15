export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Binaya Kumar Panda</span>, 
          an aspiring <span className="font-medium">Full Stack Developer</span> currently pursuing a degree in Computer Science Engineering. 
          I specialize in building web applications using the <span className="font-medium">MERN stack</span>, 
          and I'm passionate about DevOps, automation, and deploying robust solutions.
          <br /><br />
          I'm continuously improving my skills through real-world projects like Cinesync and Snyder’s Cut, 
          and I aim to build scalable and performant web apps that solve meaningful problems. 
          When I’m not coding, I’m exploring new tech tools or brushing up on clean UI/UX principles.
        </p>
      </div>
    </section>
  );
}
