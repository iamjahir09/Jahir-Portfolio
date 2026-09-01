import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/iamjahir09', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jahir-shaikh', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: Mail, href: 'mailto:jahirshaikh162003@gmail.com', label: 'Email', color: 'hover:text-[#EA4335]' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-mono text-primaryAccent/50 font-medium">CONTACT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4">
            Let's Build Something <span className="gradient-text">Intelligent.</span>
          </h2>
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            <motion.a
              href="mailto:jahirshaikh162003@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[rgba(168,85,247,0.25)] transition-all"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" />
              Email Me
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white font-medium rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-all"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-2 mt-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 text-secondaryText ${social.color} rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-all`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;