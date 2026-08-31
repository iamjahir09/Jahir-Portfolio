import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { MapPin } from 'lucide-react';

const Journey = () => {
  return (
    <section id="journey" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">The path from software enthusiast to AI engineer</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primaryAccent/20 via-secondaryAccent/20 to-primaryAccent/10"></div>

          <div className="space-y-8">
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
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1.5 md:-translate-x-1.5 rounded-full bg-primaryAccent shadow-lg shadow-[rgba(168,85,247,0.2)] border-2 border-background z-10"></div>

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <div className="glass-card p-5 rounded-2xl border border-[rgba(168,85,247,0.06)]">
                    <span className="text-xs font-mono text-primaryAccent/50 font-medium">STAGE {String(index + 1).padStart(2, '0')}</span>
                    <h4 className="text-base font-semibold text-white mt-1">{item.stage}</h4>
                    <p className="text-sm text-secondaryText mt-0.5">{item.description}</p>
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