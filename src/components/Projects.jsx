import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, ArrowUpRight, TrendingDown, TrendingUp, Minus, Cpu, Database, Code2 } from 'lucide-react';

// Official Tech Logos (Using SVG URLs)
const TechIcon = ({ tech, className = "w-5 h-5" }) => {
  const getIcon = () => {
    switch(tech) {
      case 'Python':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
            alt="Python" 
            className="w-5 h-5"
          />
        );
      case 'Java':
      case 'Core Java':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
            alt="Java" 
            className="w-5 h-5"
          />
        );
      case 'TensorFlow/Keras':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
            alt="TensorFlow" 
            className="w-5 h-5"
          />
        );
      case 'PyTorch':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
            alt="PyTorch" 
            className="w-5 h-5"
          />
        );
      case 'Scikit-learn':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" 
            alt="Scikit-learn" 
            className="w-5 h-5"
          />
        );
      case 'NumPy':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
            alt="NumPy" 
            className="w-5 h-5"
          />
        );
      case 'Pandas':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
            alt="Pandas" 
            className="w-5 h-5"
          />
        );
      case 'React':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            alt="React" 
            className="w-5 h-5"
          />
        );
      case 'HTML':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            alt="HTML" 
            className="w-5 h-5"
          />
        );
      case 'CSS':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
            alt="CSS" 
            className="w-5 h-5"
          />
        );
      case 'Git':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="Git" 
            className="w-5 h-5"
          />
        );
      case 'GitHub':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub" 
            className="w-5 h-5"
          />
        );
      case 'VS Code':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            alt="VS Code" 
            className="w-5 h-5"
          />
        );
      case 'OpenCV':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" 
            alt="OpenCV" 
            className="w-5 h-5"
          />
        );
      case 'SQL':
      case 'SQLite':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
            alt="SQL" 
            className="w-5 h-5"
          />
        );
      case 'Java Collections':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
            alt="Java Collections" 
            className="w-5 h-5"
          />
        );
      case 'OOP':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#F59E0B" strokeWidth="2"/>
            <path d="M7 7L17 7" stroke="#F59E0B" strokeWidth="2"/>
            <path d="M7 12L17 12" stroke="#F59E0B" strokeWidth="2"/>
            <path d="M7 17L12 17" stroke="#F59E0B" strokeWidth="2"/>
            <text x="12" y="14.5" textAnchor="middle" fontSize="3" fill="#F59E0B" fontFamily="Arial" fontWeight="bold">OOP</text>
          </svg>
        );
      case 'Logistic Regression':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M3 17L8 12L13 15L21 7" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="8" cy="12" r="1.5" fill="#F59E0B"/>
            <circle cx="13" cy="15" r="1.5" fill="#F59E0B"/>
            <circle cx="21" cy="7" r="1.5" fill="#F59E0B"/>
            <text x="12" y="22" textAnchor="middle" fontSize="2.5" fill="#F59E0B" fontFamily="Arial" fontWeight="bold">LR</text>
          </svg>
        );
      case 'CNN':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="2" stroke="#F59E0B" strokeWidth="2"/>
            <circle cx="12" cy="8" r="2.5" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1.5"/>
            <circle cx="8" cy="16" r="2" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="2" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5"/>
            <text x="12" y="20.5" textAnchor="middle" fontSize="2.5" fill="#F59E0B" fontFamily="Arial" fontWeight="bold">CNN</text>
          </svg>
        );
      case 'Machine Learning':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="#F59E0B" strokeWidth="2"/>
            <path d="M12 3L12 21" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M3 12L21 12" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="12" cy="12" r="2.5" fill="#F59E0B" fillOpacity="0.3"/>
            <text x="12" y="13" textAnchor="middle" fontSize="2.5" fill="#F59E0B" fontFamily="Arial" fontWeight="bold">ML</text>
          </svg>
        );
      case 'Deep Learning':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="#F59E0B" strokeWidth="2"/>
            <path d="M12 3L12 21" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M3 12L21 12" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="12" cy="12" r="3" fill="#F59E0B" fillOpacity="0.2"/>
            <text x="12" y="13" textAnchor="middle" fontSize="2.5" fill="#F59E0B" fontFamily="Arial" fontWeight="bold">DL</text>
          </svg>
        );
      case 'Generative AI':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 8.5L21 9L16 13.5L18 20L12 16.5L6 20L8 13.5L3 9L9.5 8.5L12 2Z" fill="#F59E0B"/>
            <text x="12" y="12" textAnchor="middle" fontSize="2.5" fill="white" fontFamily="Arial" fontWeight="bold">AI</text>
          </svg>
        );
      case 'Matplotlib':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" 
            alt="Matplotlib" 
            className="w-5 h-5"
          />
        );
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return getIcon();
};

const Projects = () => {
  const getRiskIcon = (category) => {
    if (category === 'Low') return <TrendingDown className="w-3.5 h-3.5 text-green-400" />;
    if (category === 'Medium') return <Minus className="w-3.5 h-3.5 text-yellow-400" />;
    return <TrendingUp className="w-3.5 h-3.5 text-red-400" />;
  };

  const getProjectIcon = (id) => {
    if (id === 1) return <Cpu className="w-5 h-5" />;
    if (id === 2) return <Database className="w-5 h-5" />;
    return <Code2 className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle text-sm sm:text-base mt-2">Building intelligent systems and software solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex"
            >
              <motion.div
                className="transition-all duration-300 group hover:shadow-xl hover:shadow-[rgba(168,85,247,0.04)] w-full flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
                whileHover={{ 
                  y: -4,
                  borderColor: 'rgba(168, 85, 247, 0.15)',
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="p-5 sm:p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.06)] text-primaryAccent/60 group-hover:border-[rgba(168,85,247,0.15)] group-hover:bg-[rgba(168,85,247,0.08)] transition-all duration-300" style={{ borderRadius: '0px' }}>
                        {getProjectIcon(project.id)}
                      </div>
                      <span className="text-[10px] font-mono text-primaryAccent/30 font-medium bg-[rgba(168,85,247,0.04)] px-2 py-0.5" style={{ borderRadius: '0px' }}>0{project.id}</span>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondaryText/30 hover:text-white transition-colors p-1 hover:bg-[rgba(255,255,255,0.05)]" style={{ borderRadius: '0px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-tight group-hover:text-primaryAccent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-secondaryText/70 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
                    {project.description}
                  </p>

                  <div className="min-h-[70px]">
                    {project.id === 1 && project.metrics && (
                      <div className="grid grid-cols-2 gap-1.5 mb-3 p-2 bg-[rgba(168,85,247,0.04)] border border-[rgba(168,85,247,0.04)]" style={{ borderRadius: '0px' }}>
                        <div className="text-center">
                          <p className="text-[8px] text-secondaryText/40 uppercase tracking-wider">Images</p>
                          <p className="text-sm font-bold text-primaryAccent">{project.metrics.images}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[8px] text-secondaryText/40 uppercase tracking-wider">Classes</p>
                          <p className="text-sm font-bold text-secondaryAccent">{project.metrics.classes}</p>
                        </div>
                        <div className="text-center col-span-2">
                          <p className="text-[8px] text-secondaryText/40 uppercase tracking-wider">Model Size</p>
                          <p className="text-[10px] font-bold text-subtleAccent">
                            {project.metrics.originalSize} → {project.metrics.optimizedSize}
                          </p>
                          <p className="text-[10px] font-bold text-green-400">↓ {project.metrics.reduction}</p>
                        </div>
                      </div>
                    )}

                    {project.id === 2 && project.features && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.features.map((feature) => (
                          <span key={feature} className="text-[9px] text-secondaryText/60 px-1.5 py-0.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]" style={{ borderRadius: '0px' }}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.id === 3 && project.riskCategories && (
                      <div className="flex gap-1.5 mb-3">
                        {project.riskCategories.map((risk) => (
                          <div key={risk} className="flex items-center gap-1 px-2 py-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]" style={{ borderRadius: '0px' }}>
                            {getRiskIcon(risk)}
                            <span className="text-[9px] text-secondaryText/60 font-medium">{risk}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack - NO horizontal line, all techs visible */}
                  <div className="mt-auto pt-3">
                    <p className="text-[9px] text-secondaryText/40 uppercase tracking-wider mb-1.5 font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <div key={tech} className="flex items-center gap-1.5 px-2 py-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] transition-all duration-300 hover:border-[rgba(168,85,247,0.12)] hover:bg-[rgba(168,85,247,0.04)]" style={{ borderRadius: '0px' }}>
                          <TechIcon tech={tech} />
                          <span className="text-[9px] text-secondaryText/60 font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-[rgba(255,255,255,0.04)]">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-secondaryText/50 hover:text-primaryAccent transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      View Code
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.a>
                    
                    <span className="text-[9px] font-mono text-secondaryText/20">
                      #{String(project.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;