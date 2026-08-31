import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, TrendingUp, Code, Sparkles, Award, BookOpen, User, Briefcase } from 'lucide-react';

const About = () => {
  const infoItems = [
    { icon: GraduationCap, label: 'Education', value: 'B.E. CSE (AI & ML)', sub: 'Anjuman-I-Islam\'s Kalsekar Technical Campus' },
    { icon: MapPin, label: 'Location', value: 'New Panvel, India' },
    { icon: Calendar, label: 'Expected Graduation', value: '2027' },
    { icon: TrendingUp, label: 'CGPA', value: '7.48' },
  ];

  const stats = [
    { number: '3+', label: 'Projects' },
    { number: '5+', label: 'Technologies' },
    { number: '2027', label: 'Graduation' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(168,85,247,0.02)] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] mb-3"
          >
            
            <span className="text-xs font-medium text-white/80 tracking-wider uppercase">About Me</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Know Me <span className="gradient-text">Better</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide"
              style={{
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                color: '#22D3EE',
                textShadow: '0 0 40px rgba(34, 211, 238, 0.15)',
              }}
            >
              Get to know the person behind the code
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <div 
              className="p-5 sm:p-6 rounded-2xl border border-[rgba(168,85,247,0.08)]"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 15, 40, 0.8), rgba(10, 10, 25, 0.85))',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-[rgba(168,85,247,0.08)] border border-[rgba(168,85,247,0.06)]">
                  <User className="w-4 h-4 text-primaryAccent/70" />
                </div>
                <span className="text-[10px] font-mono text-primaryAccent/40 tracking-wider uppercase">Who I Am</span>
              </div>
              <p className="text-secondaryText leading-relaxed text-sm sm:text-base">
                I'm an aspiring software developer and B.E. Computer Science & Engineering (AI & ML) student 
                with strong foundations in Python, Core Java, SQL, OOP and Machine Learning. I enjoy building 
                practical software systems and exploring how AI can be applied to real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-3 rounded-xl border border-[rgba(168,85,247,0.06)]"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <p className="text-xl sm:text-2xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-[10px] text-secondaryText/50 font-medium mt-0.5 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'Software Development'].map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="px-3 py-1 text-[10px] font-medium text-primaryAccent/80 bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.08)] rounded-full hover:border-[rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.08)] transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div 
              className="p-5 sm:p-6 rounded-2xl border border-[rgba(168,85,247,0.08)] h-full"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 15, 40, 0.8), rgba(10, 10, 25, 0.85))',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-[rgba(168,85,247,0.08)] border border-[rgba(168,85,247,0.06)]">
                  <Briefcase className="w-4 h-4 text-primaryAccent/70" />
                </div>
                <span className="text-[10px] font-mono text-primaryAccent/40 tracking-wider uppercase">Profile Snapshot</span>
              </div>
              
              <div className="space-y-2">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-300 border border-transparent hover:border-[rgba(168,85,247,0.06)]"
                  >
                    <div className="p-2 rounded-lg bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.06)] flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-primaryAccent/70" />
                    </div>
                    <div>
                      <p className="text-[8px] text-secondaryText/40 font-medium tracking-wider uppercase">{item.label}</p>
                      <p className="text-xs text-white font-medium mt-0.5">{item.value}</p>
                      {item.sub && (
                        <p className="text-[10px] text-secondaryText/50 mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-300 border border-transparent hover:border-[rgba(168,85,247,0.06)]"
                >
                  <div className="p-2 rounded-lg bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.06)] flex-shrink-0">
                    <Code className="w-3.5 h-3.5 text-primaryAccent/70" />
                  </div>
                  <div>
                    <p className="text-[8px] text-secondaryText/40 font-medium tracking-wider uppercase">Focus Areas</p>
                    <p className="text-xs text-white font-medium mt-0.5">Software Development · AI / ML</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-4 pt-3 border-t border-[rgba(168,85,247,0.06)]"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primaryAccent/30 to-secondaryAccent/30 border border-[rgba(168,85,247,0.1)] flex items-center justify-center text-[8px] font-bold text-white/60">P</div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondaryAccent/30 to-primaryAccent/30 border border-[rgba(168,85,247,0.1)] flex items-center justify-center text-[8px] font-bold text-white/60">J</div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primaryAccent/30 to-secondaryAccent/30 border border-[rgba(168,85,247,0.1)] flex items-center justify-center text-[8px] font-bold text-white/60">S</div>
                  </div>
                  <span className="text-[10px] text-secondaryText/30 font-mono">Passionate about building intelligent systems</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;