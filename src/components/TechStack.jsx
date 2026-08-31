import { motion } from 'framer-motion';

const TechStack = () => {
  const techStack = [
    // Programming Languages
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    
    // ML/DL Frameworks
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    
    // Data Science Libraries
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    
    // Computer Vision
    { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    
    // Web Technologies
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    
    // Database
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  // Custom logos for technologies without devicon
  const customTech = [
    { name: 'Deep Learning', icon: '🧠' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'NLP', icon: '💬' },
    { name: 'Seaborn', icon: '🌊' },
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
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-7 h-7 object-contain"
              />
              <span className="text-base text-secondaryText/80 font-medium">{tech.name}</span>
            </motion.div>
          ))}

          {/* Custom Emoji Technologies */}
          {customTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (techStack.length + index) * 0.03 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(168,85,247,0.25)] hover:bg-[rgba(168,85,247,0.06)] transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-base text-secondaryText/80 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;