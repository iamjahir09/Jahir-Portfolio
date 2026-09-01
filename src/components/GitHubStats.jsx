import { motion } from 'framer-motion';
import { Github, Code, GitBranch, Flame } from 'lucide-react';

const GitHubStats = () => {
  const username = 'iamjahir09';

  const stats = [
    {
      icon: Code,
      label: 'Total Contributions',
      value: '320',
      sub: 'Feb 22, 2024 - Present',
      textColor: 'text-blue-400',
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: '3',
      sub: 'Aug 30 - Sep 1',
      textColor: 'text-orange-400',
    },
    {
      icon: GitBranch,
      label: 'Longest Streak',
      value: '10',
      sub: 'Mar 14 - Mar 23',
      textColor: 'text-green-400',
    },
  ];

  const languages = [
    { name: 'Python', color: '#3776AB', percent: 40 },
    { name: 'Java', color: '#ED8B00', percent: 25 },
    { name: 'JavaScript', color: '#F7DF1E', percent: 15 },
    { name: 'HTML', color: '#E34F26', percent: 10 },
    { name: 'CSS', color: '#1572B6', percent: 10 },
  ];

  return (
    <section id="github" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(168,85,247,0.02)] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[rgba(168,85,247,0.08)] border border-[rgba(168,85,247,0.06)]" style={{ borderRadius: '0px' }}>
              <Github className="w-5 h-5 text-primaryAccent/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              GitHub <span className="gradient-text">Stats</span>
            </h2>
          </div>
          <p className="text-secondaryText text-sm sm:text-base max-w-2xl pl-1">
            Open source contributions and project activity
          </p>
        </motion.div>

        {/* Stats Grid - Same as Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-5 border border-[rgba(168,85,247,0.06)] transition-all duration-300 group hover:border-[rgba(168,85,247,0.15)]"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.06)] group-hover:border-[rgba(168,85,247,0.15)] transition-all" style={{ borderRadius: '0px' }}>
                    <Icon className="w-4 h-4 text-secondaryText/60 group-hover:text-primaryAccent transition-colors" />
                  </div>
                  <span className="text-[10px] text-secondaryText/40 uppercase tracking-wider">{stat.label}</span>
                </div>
                <p className={`text-2xl sm:text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                <p className="text-[10px] text-secondaryText/30 mt-1">{stat.sub}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Top Languages - Same as Journey Cards + Close */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 p-4 sm:p-5 border border-[rgba(168,85,247,0.06)] transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <p className="text-xs text-secondaryText/40 uppercase tracking-wider mb-3">Top Languages</p>
          {/* Languages in 2 columns - closer */}
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 p-1.5 border border-[rgba(255,255,255,0.03)]" style={{ borderRadius: '0px' }}>
                <div className="w-2.5 h-2.5 flex-shrink-0" style={{ background: lang.color }} />
                <span className="text-xs text-secondaryText/70 flex-1">{lang.name}</span>
                <span className="text-xs text-secondaryText/40 font-mono">{lang.percent}%</span>
                <div className="w-12 h-1 bg-[rgba(255,255,255,0.04)]">
                  <div 
                    className="h-full transition-all duration-1000" 
                    style={{ 
                      width: `${lang.percent}%`, 
                      background: lang.color 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <motion.a
            href="https://github.com/iamjahir09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border transition-all duration-300 text-secondaryText/60 hover:text-white group"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderColor: 'rgba(168, 85, 247, 0.06)',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
            whileHover={{ 
              scale: 1.02, 
              borderColor: 'rgba(168, 85, 247, 0.2)',
              background: 'rgba(168, 85, 247, 0.04)',
            }}
          >
            <Github className="w-4 h-4 group-hover:text-primaryAccent transition-colors" />
            <span className="group-hover:text-primaryAccent transition-colors">View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;