import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { MapPin } from 'lucide-react';

const Journey = () => {
  return (
    <section id="journey" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Journey</h2>
          <p className="text-secondaryText text-sm sm:text-base">The path from software enthusiast to AI engineer</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primaryAccent/20 via-secondaryAccent/20 to-primaryAccent/10"></div>

          <div className="space-y-5">
            {portfolioData.journey.map((item, index) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 -translate-x-1.5 md:-translate-x-1.5 rounded-full bg-primaryAccent shadow-lg shadow-[rgba(168,85,247,0.2)] border-2 border-background z-10"></div>

                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <div 
                    className="p-3.5 sm:p-4 border border-[rgba(168,85,247,0.06)] transition-all duration-300 group hover:border-[rgba(168,85,247,0.15)]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                    whileHover={{ 
                      y: -2,
                      background: 'rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    <span className="text-[10px] font-mono text-primaryAccent/40 font-medium">STAGE {String(index + 1).padStart(2, '0')}</span>
                    <h4 className="text-sm font-semibold text-white mt-0.5 group-hover:text-primaryAccent transition-colors">{item.stage}</h4>
                    <p className="text-xs text-secondaryText/70 mt-0.5">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;