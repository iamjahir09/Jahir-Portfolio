import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Deep Learning',
    'Computer Vision',
    'Generative AI',
    'Building Intelligent Systems with Python'
  ];

  useEffect(() => {
    let timeout;
    const currentRole = roles[textIndex];
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 200);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      }
    } else {
      if (displayText === currentRole) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/iamjahir09', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jahir-shaikh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jahirshaikh162003@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-transparent">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="block text-white">Hey! I'm</span>
              <span className="gradient-text block">Jahir Shaikh</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 flex-wrap"
            >
              <span className="text-base sm:text-lg text-secondaryText font-medium">AI & ML Enthusiast</span>
              <span className="text-base sm:text-lg text-secondaryText font-medium">·</span>
              <span className="text-base sm:text-lg font-semibold text-primaryAccent">
                {displayText}
                <span className="inline-block w-0.5 h-5 ml-0.5 bg-primaryAccent animate-pulse"></span>
              </span>
            </motion.div>

            {/* Hero Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base text-secondaryText max-w-lg leading-relaxed"
            >
              Building intelligent systems that turn data into real-world solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2.5 pt-1"
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[rgba(168,85,247,0.25)] transition-all text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white font-medium rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-all backdrop-blur-sm text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-1.5 pt-1"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-secondaryText hover:text-white rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-end items-start"
          >
            <div className="relative">
              {/* Glass Card Background */}
              <div className="absolute inset-0 glass-card rounded-2xl blur-2xl opacity-20"></div>
              
              {/* Image Container */}
              <motion.div
                className="relative w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-[rgba(168,85,247,0.15)] shadow-xl shadow-[rgba(168,85,247,0.05)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Border Ring */}
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-primaryAccent via-secondaryAccent to-subtleAccent opacity-50"></div>
                
                {/* Your Image */}
                <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Jahir Shaikh - AI/ML Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Subtle Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primaryAccent/5 to-secondaryAccent/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;