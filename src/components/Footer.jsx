import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/iamjahir09', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jahir-shaikh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jahirshaikh162003@gmail.com', label: 'Email' },
  ];

  return (
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        </div>
      </div>
    
  );
};

export default Footer;