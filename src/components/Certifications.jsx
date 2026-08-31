import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Certifications & Learning</h2>
          <p className="text-secondaryText text-xs sm:text-sm">Continuous learning and professional development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="transition-all duration-300 group hover:shadow-xl hover:shadow-[rgba(168,85,247,0.04)] w-full flex"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
              whileHover={{ 
                y: -2,
                borderColor: 'rgba(168, 85, 247, 0.15)',
                background: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="p-4 sm:p-5 flex items-start gap-3 w-full">
                <div className="p-2 bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.06)] group-hover:border-[rgba(168,85,247,0.15)] transition-all flex-shrink-0" style={{ borderRadius: '0px' }}>
                  <Award className="w-4 h-4 text-primaryAccent/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-primaryAccent transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-secondaryText/70 mt-0.5">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[9px] text-primaryAccent/50 group-hover:text-primaryAccent transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;