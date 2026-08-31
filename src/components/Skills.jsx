// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolio';
// import { Sparkles, Code2, Brain, Globe, Wrench, Cpu } from 'lucide-react';

// const Skills = () => {
//   const iconMap = {
//     '01': Code2,
//     '02': Brain,
//     '03': Globe,
//     '04': Wrench,
//   };

//   const categoryColors = {
//     '01': 'border-blue-500/20 hover:border-blue-500/50',
//     '02': 'border-purple-500/20 hover:border-purple-500/50',
//     '03': 'border-green-500/20 hover:border-green-500/50',
//     '04': 'border-orange-500/20 hover:border-orange-500/50',
//   };

//   const categoryIcons = {
//     '01': '💻',
//     '02': '🧠',
//     '03': '🌐',
//     '04': '🔧',
//   };

//   return (
//     <section id="skills" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">
//       {/* Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(168,85,247,0.02)] to-transparent pointer-events-none"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Heading - Left Aligned */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-14"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.08)] mb-4"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-primaryAccent" />
//             <span className="text-xs font-medium text-primaryAccent/70 tracking-wider uppercase">Expertise</span>
//           </motion.div>
          
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
//             Technical <span className="gradient-text">Arsenal</span>
//           </h2>
//           <p className="text-secondaryText text-base sm:text-lg max-w-2xl">
//             Technologies and tools I work with
//           </p>
//         </motion.div>

//         {/* Skills Grid - Full Width Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {portfolioData.skills.map((skill, index) => {
//             const Icon = iconMap[skill.category] || Code2;
//             const colorClass = categoryColors[skill.category] || 'border-white/10 hover:border-white/30';
//             const emoji = categoryIcons[skill.category] || '📦';
            
//             return (
//               <motion.div
//                 key={skill.category}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`border transition-all duration-300 group ${colorClass}`}
//                 style={{
//                   background: 'linear-gradient(145deg, rgba(20, 15, 40, 0.7), rgba(10, 10, 25, 0.8))',
//                   borderRadius: '0px',
//                 }}
//                 whileHover={{ 
//                   y: -4, 
//                   background: 'rgba(20, 15, 40, 0.85)',
//                   boxShadow: '0 8px 32px rgba(168, 85, 247, 0.06)',
//                 }}
//               >
//                 <div className="p-6 sm:p-8">
//                   {/* Header */}
//                   <div className="flex items-center gap-4 mb-5">
//                     <div className="text-3xl">{emoji}</div>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-[10px] font-mono text-primaryAccent/40 font-medium tracking-wider">0{skill.category}</span>
//                         <span className="w-1 h-1 bg-primaryAccent/20"></span>
//                         <span className="text-[10px] text-secondaryText/30">{skill.technologies.length} tools</span>
//                       </div>
//                       <h4 className="text-lg sm:text-xl font-semibold text-white mt-0.5 group-hover:text-primaryAccent transition-colors">
//                         {skill.title}
//                       </h4>
//                       <p className="text-xs text-secondaryText/60 mt-0.5">{skill.description}</p>
//                     </div>
//                   </div>

//                   {/* Tech Tags - With Icons */}
//                   <div className="flex flex-wrap gap-2">
//                     {skill.technologies.map((tech, techIndex) => (
//                       <motion.span
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.08 + techIndex * 0.03 }}
//                         className="px-4 py-2 text-sm font-medium text-secondaryText/80 border hover:text-white transition-all duration-300"
//                         style={{
//                           background: 'rgba(255,255,255,0.02)',
//                           borderColor: 'rgba(255,255,255,0.05)',
//                           borderRadius: '0px',
//                         }}
//                         whileHover={{ 
//                           background: 'rgba(168,85,247,0.06)',
//                           borderColor: 'rgba(168,85,247,0.2)',
//                           scale: 1.02,
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>

//                   {/* Footer */}
//                   <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.03)] flex items-center justify-between">
//                     <span className="text-[10px] text-secondaryText/20 font-mono">✦ {skill.technologies.length} technologies</span>
//                     <div className="flex gap-1">
//                       <span className="w-1.5 h-1.5 bg-primaryAccent/30"></span>
//                       <span className="w-1.5 h-1.5 bg-primaryAccent/20"></span>
//                       <span className="w-1.5 h-1.5 bg-primaryAccent/10"></span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Currently Learning - Different Style */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-12 border border-[rgba(168,85,247,0.06)] p-6 sm:p-8"
//           style={{
//             background: 'linear-gradient(145deg, rgba(20, 15, 40, 0.5), rgba(10, 10, 25, 0.6))',
//             borderRadius: '0px',
//           }}
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-2xl">🚀</span>
//             <h3 className="text-lg font-semibold text-white">Currently Exploring</h3>
//             <span className="text-xs px-2 py-0.5 bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.08)] text-subtleAccent/70 font-mono">Learning</span>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {portfolioData.currentlyLearning.map((item, index) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 + index * 0.05 }}
//                 className="flex items-center gap-2.5 px-4 py-2.5 border hover:border-[rgba(168,85,247,0.2)] transition-all duration-300"
//                 style={{
//                   background: 'rgba(168,85,247,0.03)',
//                   borderColor: 'rgba(168,85,247,0.06)',
//                   borderRadius: '0px',
//                 }}
//                 whileHover={{ 
//                   background: 'rgba(168,85,247,0.06)',
//                   scale: 1.02,
//                 }}
//               >
//                 <span className="w-1.5 h-1.5 bg-gradient-to-r from-primaryAccent to-secondaryAccent animate-pulse"></span>
//                 <span className="text-sm text-secondaryText font-medium">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;