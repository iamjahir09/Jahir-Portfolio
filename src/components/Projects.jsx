import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import {
  Github,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  Minus,
  Cpu,
  Database,
  Code2
} from 'lucide-react';

// ============================================
// TECH STACK ICONS
// ============================================

const TechIcon = ({ tech }) => {
  const getIcon = () => {
    switch (tech) {
      case 'Python':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            className="w-3.5 h-3.5"
          />
        );

      case 'Java':
      case 'Core Java':
      case 'Java Collections':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
            className="w-3.5 h-3.5"
          />
        );

      case 'TensorFlow/Keras':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            alt="TensorFlow"
            className="w-3.5 h-3.5"
          />
        );

      case 'PyTorch':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
            alt="PyTorch"
            className="w-3.5 h-3.5"
          />
        );

      case 'Scikit-learn':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
            alt="Scikit-learn"
            className="w-3.5 h-3.5"
          />
        );

      case 'NumPy':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
            alt="NumPy"
            className="w-3.5 h-3.5"
          />
        );

      case 'Pandas':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
            alt="Pandas"
            className="w-3.5 h-3.5"
          />
        );

      case 'React':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-3.5 h-3.5"
          />
        );

      case 'HTML':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            className="w-3.5 h-3.5"
          />
        );

      case 'CSS':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            className="w-3.5 h-3.5"
          />
        );

      case 'Git':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
            className="w-3.5 h-3.5"
          />
        );

      case 'GitHub':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-3.5 h-3.5"
          />
        );

      case 'VS Code':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            className="w-3.5 h-3.5"
          />
        );

      case 'OpenCV':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
            alt="OpenCV"
            className="w-3.5 h-3.5"
          />
        );

      case 'SQL':
      case 'SQLite':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="SQL"
            className="w-3.5 h-3.5"
          />
        );

      case 'Matplotlib':
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
            alt="Matplotlib"
            className="w-3.5 h-3.5"
          />
        );

      default:
        return <Code2 className="w-3.5 h-3.5" />;
    }
  };

  return getIcon();
};


// ============================================
// PROJECTS
// ============================================

const Projects = () => {

  const getRiskIcon = (category) => {
    if (category === 'Low') {
      return (
        <TrendingDown className="w-3 h-3 text-green-400" />
      );
    }

    if (category === 'Medium') {
      return (
        <Minus className="w-3 h-3 text-yellow-400" />
      );
    }

    return (
      <TrendingUp className="w-3 h-3 text-red-400" />
    );
  };


  const getProjectIcon = (id) => {
    if (id === 1) {
      return <Cpu className="w-4 h-4" />;
    }

    if (id === 2) {
      return <Database className="w-4 h-4" />;
    }

    return <Code2 className="w-4 h-4" />;
  };


  return (
    <section
      id="projects"
      className="py-14 sm:py-16 lg:py-20 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================
            SECTION HEADER
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >

          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold">
            Featured{' '}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p className="section-subtitle text-sm sm:text-base mt-1.5">
            Building intelligent systems and software solutions
          </p>

        </motion.div>


        {/* ========================================
            PROJECT GRID
        ======================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {portfolioData.projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.45
              }}
              className="flex"
            >

              {/* ========================================
                  PROJECT CARD
              ======================================== */}

              <motion.div
                className="
                  group
                  w-full
                  flex
                  flex-col
                  overflow-hidden
                  relative
                  bg-white/[0.025]
                  backdrop-blur-xl
                  border
                  border-white/[0.07]
                  shadow-lg
                "
                style={{
                  borderRadius: '12px'
                }}
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(168, 85, 247, 0.22)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.22)'
                }}
                transition={{
                  duration: 0.22
                }}
              >


                {/* ========================================
                    PROJECT IMAGE
                ======================================== */}

                <div
                  className="
                    relative
                    w-full
                    aspect-[16/8]
                    overflow-hidden
                    bg-black/30
                  "
                >

                  {project.image ? (

                    <motion.img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                  ) : (

                    <div
                      className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-purple-500/[0.08]
                        via-transparent
                        to-blue-500/[0.06]
                      "
                    >

                      <div className="flex flex-col items-center gap-1.5 text-secondaryText/25">

                        {getProjectIcon(project.id)}

                        <span className="text-[9px] font-mono uppercase tracking-widest">
                          Project Preview
                        </span>

                      </div>

                    </div>

                  )}


                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/65
                      via-transparent
                      to-black/10
                      opacity-80
                      group-hover:opacity-55
                      transition-opacity
                      duration-300
                    "
                  />


                  {/* Project Number */}

                  <div
                    className="
                      absolute
                      top-2.5
                      left-2.5
                      px-2
                      py-0.5
                      text-[9px]
                      font-mono
                      font-semibold
                      text-white/90
                      bg-black/45
                      backdrop-blur-md
                      border
                      border-white/10
                    "
                    style={{
                      borderRadius: '5px'
                    }}
                  >
                    {String(project.id).padStart(2, '0')}
                  </div>


                  {/* GitHub */}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="
                      absolute
                      top-2.5
                      right-2.5
                      p-1.5
                      text-white/70
                      bg-black/45
                      backdrop-blur-md
                      border
                      border-white/10
                      hover:text-white
                      hover:bg-black/65
                      transition-all
                    "
                    style={{
                      borderRadius: '6px'
                    }}
                    whileHover={{
                      scale: 1.08
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                  >

                    <Github className="w-3.5 h-3.5" />

                  </motion.a>

                </div>


                {/* ========================================
                    CARD CONTENT
                ======================================== */}

                <div className="p-4 flex flex-col flex-1">


                  {/* Title */}

                  <div className="flex items-center justify-between gap-2 mb-1.5">

                    <h3
                      className="
                        text-[15px]
                        sm:text-base
                        font-bold
                        text-white
                        leading-tight
                        group-hover:text-primaryAccent
                        transition-colors
                        duration-300
                      "
                    >
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      className="
                        w-3.5
                        h-3.5
                        flex-shrink-0
                        text-secondaryText/20
                        group-hover:text-primaryAccent
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-all
                      "
                    />

                  </div>


                  {/* Description */}

                  <p
                    className="
                      text-secondaryText/60
                      text-[11px]
                      sm:text-xs
                      leading-relaxed
                      mb-3
                      line-clamp-3
                    "
                  >
                    {project.description}
                  </p>


                  {/* ========================================
                      PROJECT DETAILS
                  ======================================== */}

                  <div className="mb-3">


                    {/* Project 1 Metrics */}

                    {project.id === 1 && project.metrics && (

                      <div
                        className="
                          grid
                          grid-cols-3
                          gap-1
                          p-1.5
                          bg-purple-500/[0.035]
                          border
                          border-purple-500/[0.06]
                        "
                        style={{
                          borderRadius: '7px'
                        }}
                      >

                        <div className="text-center py-1">

                          <p className="text-[7px] text-secondaryText/35 uppercase tracking-wider">
                            Images
                          </p>

                          <p className="text-xs font-bold text-primaryAccent">
                            {project.metrics.images}
                          </p>

                        </div>


                        <div className="text-center py-1">

                          <p className="text-[7px] text-secondaryText/35 uppercase tracking-wider">
                            Classes
                          </p>

                          <p className="text-xs font-bold text-secondaryAccent">
                            {project.metrics.classes}
                          </p>

                        </div>


                        <div className="text-center py-1">

                          <p className="text-[7px] text-secondaryText/35 uppercase tracking-wider">
                            Reduction
                          </p>

                          <p className="text-xs font-bold text-green-400">
                            ↓ {project.metrics.reduction}
                          </p>

                        </div>

                      </div>

                    )}


                    {/* Project 2 Features */}

                    {project.id === 2 && project.features && (

                      <div className="flex flex-wrap gap-1">

                        {project.features.map((feature) => (

                          <span
                            key={feature}
                            className="
                              text-[8px]
                              text-secondaryText/60
                              px-1.5
                              py-0.5
                              bg-white/[0.025]
                              border
                              border-white/[0.055]
                              hover:border-purple-500/20
                              hover:text-secondaryText/90
                              transition-all
                            "
                            style={{
                              borderRadius: '4px'
                            }}
                          >
                            {feature}
                          </span>

                        ))}

                      </div>

                    )}


                    {/* Project 3 Risk Categories */}

                    {project.id === 3 && project.riskCategories && (

                      <div className="flex flex-wrap gap-1">

                        {project.riskCategories.map((risk) => (

                          <div
                            key={risk}
                            className="
                              flex
                              items-center
                              gap-1
                              px-1.5
                              py-0.5
                              bg-white/[0.025]
                              border
                              border-white/[0.055]
                            "
                            style={{
                              borderRadius: '4px'
                            }}
                          >

                            {getRiskIcon(risk)}

                            <span className="text-[8px] text-secondaryText/60 font-medium">
                              {risk}
                            </span>

                          </div>

                        ))}

                      </div>

                    )}

                  </div>


                  {/* ========================================
                      TECH STACK
                  ======================================== */}

                  <div className="mt-auto">

                    <p
                      className="
                        text-[8px]
                        text-secondaryText/30
                        uppercase
                        tracking-[0.16em]
                        mb-1.5
                        font-semibold
                      "
                    >
                      Tech Stack
                    </p>


                    <div className="flex flex-wrap gap-1">

                      {project.tech.map((tech) => (

                        <div
                          key={tech}
                          className="
                            flex
                            items-center
                            gap-1
                            px-1.5
                            py-0.5
                            bg-white/[0.025]
                            border
                            border-white/[0.05]
                            hover:border-purple-500/20
                            hover:bg-purple-500/[0.035]
                            transition-all
                          "
                          style={{
                            borderRadius: '4px'
                          }}
                        >

                          <TechIcon tech={tech} />

                          <span className="text-[8px] text-secondaryText/55 font-medium">
                            {tech}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* ========================================
                      FOOTER
                  ======================================== */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      pt-2.5
                      mt-3
                      border-t
                      border-white/[0.05]
                    "
                  >

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-1
                        text-[9px]
                        font-semibold
                        text-secondaryText/45
                        hover:text-primaryAccent
                        transition-colors
                      "
                      whileHover={{
                        x: 2
                      }}
                    >

                      <Github className="w-3 h-3" />

                      View Code

                      <ArrowUpRight className="w-2.5 h-2.5" />

                    </motion.a>


                    <span
                      className="
                        text-[8px]
                        font-mono
                        text-secondaryText/15
                      "
                    >
                      PROJECT_{String(project.id).padStart(2, '0')}
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