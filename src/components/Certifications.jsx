import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Certifications & Learning</h2>
          <p className="section-subtitle">Continuous learning and professional development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="glass-card p-6 rounded-2xl border border-[rgba(168,85,247,0.06)] hover:border-[rgba(168,85,247,0.15)] transition-all group"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.06)] group-hover:border-[rgba(168,85,247,0.15)] transition-all flex-shrink-0">
                  <Award className="w-5 h-5 text-primaryAccent/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-white group-hover:text-primaryAccent transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-secondaryText mt-0.5">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-primaryAccent/60 group-hover:text-primaryAccent transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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