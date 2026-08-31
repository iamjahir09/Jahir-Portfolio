import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/iamjahir09', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jahir-shaikh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jahirshaikh162003@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-[rgba(168,85,247,0.06)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondaryText/60">
            © 2026 Jahir Shaikh
          </p>
          
          <p className="text-sm text-secondaryText/40 font-light tracking-wide">
            Built with curiosity, code &amp; AI.
          </p>

          <div className="flex space-x-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-secondaryText/40 hover:text-secondaryText rounded-lg hover:bg-[rgba(255,255,255,0.03)] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;