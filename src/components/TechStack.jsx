import { motion } from 'framer-motion';

const TechStack = () => {
  const techStack = [
    // Programming Languages
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },

    // ML/DL Frameworks
    {
      name: 'TensorFlow',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    },
    {
      name: 'PyTorch',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    },
    {
      name: 'Scikit-learn',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    },

    // Data Science Libraries
    {
      name: 'NumPy',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    },
    {
      name: 'Pandas',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    },
    {
      name: 'Matplotlib',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
    },

    // Computer Vision
    {
      name: 'OpenCV',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    },

    // Web Technologies
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },

    // Database
    {
      name: 'SQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },

    // Version Control & DevOps
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },

    {
      name: 'GitHub',
      icon: '',
      isWhite: true,
    },

    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
  ];

  // Custom SVG icons for technologies/concepts
  // that don't have a universally recognized official logo
  const customTech = [
    {
      name: 'Deep Learning',
      icon: (
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 6L12 4L18 6" />
          <path d="M6 6L12 12L18 6" />
          <path d="M6 18L12 12L18 18" />
          <path d="M6 18L12 20L18 18" />
          <path d="M12 4V12" />
          <path d="M12 12V20" />

          <circle cx="6" cy="6" r="2" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="12" cy="20" r="2" />
        </svg>
      ),
    },

    {
      name: 'Machine Learning',
      icon: (
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M7 8h2" />
          <path d="M7 12h2" />
          <path d="M7 16h2" />
          <path d="M13 8h4" />
          <path d="M13 12h4" />
          <path d="M13 16h4" />
          <path d="M10 6v12" />
        </svg>
      ),
    },

    {
      name: 'NLP',
      icon: (
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H12l-5 4v-4h-.5A2.5 2.5 0 0 1 4 13.5z" />
          <path d="M8 8h8" />
          <path d="M8 11h5" />
        </svg>
      ),
    },

    {
      name: 'Seaborn',
      icon: (
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 15c3-7 6-7 9 0s6 7 9 0" />
          <path d="M3 11c3-7 6-7 9 0s6 7 9 0" />
          <path d="M3 19c3-7 6-7 9 0s6 7 9 0" />
        </svg>
      ),
    },

    {
      name: 'LLM',
      icon: (
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="4.5" cy="7" r="2" />
          <circle cx="19.5" cy="7" r="2" />
          <circle cx="4.5" cy="17" r="2" />
          <circle cx="19.5" cy="17" r="2" />

          <path d="M7 8.5L9.5 10" />
          <path d="M17 8.5L14.5 10" />
          <path d="M7 15.5L9.5 14" />
          <path d="M17 15.5L14.5 14" />
        </svg>
      ),
    },

    {
      name: 'Generative AI',
      icon: (
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9z" />
          <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z" />
          <path d="M5 14l.6 1.9L7.5 17l-1.9.6L5 19.5l-.6-1.9L2.5 17l1.9-.6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="gradient-text">Tech Stack</span>
          </h2>

          <p className="text-secondaryText text-base sm:text-lg max-w-2xl mx-auto">
            Technologies I work with to build intelligent systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >

          {/* Official Logo Technologies */}
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(168,85,247,0.25)] hover:bg-[rgba(168,85,247,0.06)] transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
            >

              {tech.isWhite ? (
                // GitHub White Logo
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ) : (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />
              )}

              <span className="text-base text-secondaryText/80 font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}

          {/* Custom SVG Technologies */}
          {customTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: (techStack.length + index) * 0.03,
              }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(168,85,247,0.25)] hover:bg-[rgba(168,85,247,0.06)] transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
            >

              {/* SVG Icon */}
              <span className="text-white">
                {tech.icon}
              </span>

              <span className="text-base text-secondaryText/80 font-medium">
                {tech.name}
              </span>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;