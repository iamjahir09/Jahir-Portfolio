import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, ArrowUpRight, TrendingDown, TrendingUp, Minus, Cpu, Database, Code2 } from 'lucide-react';

// Official Tech Logos (Using SVG URLs)
const TechIcon = ({ tech, className = "w-7 h-7" }) => {
  const getIcon = () => {
    switch(tech) {
      case 'Python':
        return (
          <img 
            src="https://www.python.org/static/community_logos/python-logo-generic.svg" 
            alt="Python" 
            className="w-17 h-7"
          />
        );
      case 'Java':
      case 'Core Java':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
            alt="Java" 
            className="w-7 h-7"
          />
        );
      case 'TensorFlow/Keras':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
            alt="TensorFlow" 
            className="w-7 h-7"
          />
        );
      case 'PyTorch':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
            alt="PyTorch" 
            className="w-7 h-7"
          />
        );
      case 'Scikit-learn':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" 
            alt="Scikit-learn" 
            className="w-7 h-7"
          />
        );
      case 'NumPy':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
            alt="NumPy" 
            className="w-7 h-7"
          />
        );
      case 'Pandas':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
            alt="Pandas" 
            className="w-7 h-7"
          />
        );
      case 'React':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            alt="React" 
            className="w-7 h-7"
          />
        );
      case 'HTML':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            alt="HTML" 
            className="w-7 h-7"
          />
        );
      case 'CSS':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
            alt="CSS" 
            className="w-7 h-7"
          />
        );
      case 'Git':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="Git" 
            className="w-7 h-7"
          />
        );
      case 'GitHub':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub" 
            className="w-7 h-7"
          />
        );
      case 'VS Code':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            alt="VS Code" 
            className="w-7 h-7"
          />
        );
      case 'OpenCV':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" 
            alt="OpenCV" 
            className="w-7 h-7"
          />
        );
      case 'SQL':
      case 'SQLite':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
            alt="SQL" 
            className="w-7 h-7"
          />
        );
      case 'Java Collections':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
            alt="Java Collections" 
            className="w-7 h-7"
          />
        );
      case 'OOP':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6366F1" strokeWidth="2.5"/>
            <path d="M7 7L17 7" stroke="#6366F1" strokeWidth="2.5"/>
            <path d="M7 12L17 12" stroke="#6366F1" strokeWidth="2.5"/>
            <path d="M7 17L12 17" stroke="#6366F1" strokeWidth="2.5"/>
            <text x="12" y="14.5" textAnchor="middle" fontSize="4" fill="#6366F1" fontFamily="Arial" fontWeight="bold">OOP</text>
          </svg>
        );
      case 'Logistic Regression':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M3 17L8 12L13 15L21 7" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="8" cy="12" r="2" fill="#A855F7"/>
            <circle cx="13" cy="15" r="2" fill="#A855F7"/>
            <circle cx="21" cy="7" r="2" fill="#A855F7"/>
            <text x="12" y="22" textAnchor="middle" fontSize="3" fill="#A855F7" fontFamily="Arial" fontWeight="bold">LR</text>
          </svg>
        );
      case 'CNN':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="2" stroke="#22D3EE" strokeWidth="2.5"/>
            <circle cx="12" cy="8" r="3" fill="#22D3EE" fillOpacity="0.3" stroke="#22D3EE" strokeWidth="1.5"/>
            <circle cx="8" cy="16" r="2.5" fill="#22D3EE" fillOpacity="0.2" stroke="#22D3EE" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="2.5" fill="#22D3EE" fillOpacity="0.2" stroke="#22D3EE" strokeWidth="1.5"/>
            <text x="12" y="20.5" textAnchor="middle" fontSize="3" fill="#22D3EE" fontFamily="Arial" fontWeight="bold">CNN</text>
          </svg>
        );
      case 'Machine Learning':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#A855F7" strokeWidth="2"/>
            <path d="M12 3L12 21" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M3 12L21 12" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 4"/>
            <circle cx="12" cy="12" r="3" fill="#A855F7" fillOpacity="0.3"/>
            <text x="12" y="13" textAnchor="middle" fontSize="3" fill="#A855F7" fontFamily="Arial" fontWeight="bold">ML</text>
          </svg>
        );
      case 'Deep Learning':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="2"/>
            <path d="M12 3L12 21" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M3 12L21 12" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="12" cy="12" r="4" fill="#8B5CF6" fillOpacity="0.2"/>
            <text x="12" y="13" textAnchor="middle" fontSize="3" fill="#8B5CF6" fontFamily="Arial" fontWeight="bold">DL</text>
          </svg>
        );
      case 'Generative AI':
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" fill="#8B5CF6"/>
            <text x="12" y="12" textAnchor="middle" fontSize="3" fill="white" fontFamily="Arial" fontWeight="bold">AI</text>
          </svg>
        );
      case 'Matplotlib':
        return (
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" 
            alt="Matplotlib" 
            className="w-7 h-7"
          />
        );
      default:
        return <Code2 className="w-7 h-7" />;
    }
  };

  return getIcon();
};

const Projects = () => {
  const getRiskIcon = (category) => {
    if (category === 'Low') return <TrendingDown className="w-4 h-4 text-green-400" />;
    if (category === 'Medium') return <Minus className="w-4 h-4 text-yellow-400" />;
    return <TrendingUp className="w-4 h-4 text-red-400" />;
  };

  const getProjectIcon = (id) => {
    if (id === 1) return <Cpu className="w-7 h-7" />;
    if (id === 2) return <Database className="w-7 h-7" />;
    return <Code2 className="w-7 h-7" />;
  };

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="section-subtitle text-base sm:text-lg mt-2">Building intelligent systems and software solutions</p>
        </motion.div>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="relative">
        <div className="overflow-x-auto overflow-y-visible pb-6 scroll-smooth hide-scrollbar">
          <div className="flex gap-6 px-4 sm:px-6 lg:px-8" style={{ minWidth: 'max-content' }}>
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="min-w-[340px] sm:min-w-[380px] lg:min-w-[420px] max-w-[420px]"
              >
                <motion.div
                  className="rounded-lg overflow-hidden transition-all duration-300 group hover:shadow-xl hover:shadow-[rgba(45,45,65,0.2)] h-full flex flex-col"
                  style={{
                    background: '#1a1a2e',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: 'rgba(255,255,255,0.12)',
                  }}
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-white/60 group-hover:border-[rgba(255,255,255,0.12)] group-hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300">
                          {getProjectIcon(project.id)}
                        </div>
                        <span className="text-xs font-mono text-white/30 font-medium bg-[rgba(255,255,255,0.04)] px-2.5 py-0.5 rounded">0{project.id}</span>
                      </div>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Project-specific content */}
                    {project.id === 1 && project.metrics && (
                      <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]">
                        <div className="text-center">
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Images</p>
                          <p className="text-xl font-bold text-white">{project.metrics.images}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Classes</p>
                          <p className="text-xl font-bold text-white">{project.metrics.classes}</p>
                        </div>
                        <div className="text-center col-span-2">
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Model Size</p>
                          <p className="text-base font-bold text-white">
                            {project.metrics.originalSize} → {project.metrics.optimizedSize}
                          </p>
                          <p className="text-sm font-bold text-green-400 mt-0.5">↓ {project.metrics.reduction} smaller</p>
                        </div>
                      </div>
                    )}

                    {/* Project 2 - All Features */}
                    {project.id === 2 && project.features && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.features.map((feature) => (
                          <span key={feature} className="text-xs text-gray-400 px-2.5 py-1 rounded bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.id === 3 && project.riskCategories && (
                      <div className="flex gap-2 mb-4">
                        {project.riskCategories.map((risk) => (
                          <div key={risk} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]">
                            {getRiskIcon(risk)}
                            <span className="text-xs text-gray-400 font-medium">{risk}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Logos */}
                    <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <div key={tech} className="flex items-center gap-2 px-3 py-1.5 rounded bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)]">
                            <TechIcon tech={tech} />
                            <span className="text-sm text-gray-400 font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-[rgba(255,255,255,0.05)]">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        View Code
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                      
                      <span className="text-xs font-mono text-gray-600">
                        #{String(project.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;