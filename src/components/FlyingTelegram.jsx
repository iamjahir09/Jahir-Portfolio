import { motion, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef } from 'react';

const FlyingTelegram = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Hero se TechStack tak trigger (0 to 0.3)
  // Projectile Motion: X moves left to right
  const x = useTransform(scrollYProgress, [0, 0.3], ['-120px', 'calc(100vw + 120px)']);
  
  // Projectile Motion: Y goes up then down (parabolic arc)
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], ['80vh', '30vh', '15vh', '50vh']);
  
  // Rotation: follows the arc
  const rotate = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [-10, -30, -45, 10]);
  
  // Scale: grows then shrinks
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0.5, 1.2, 1.5, 0.8]);
  
  // Opacity: fade in then out
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.25, 0.3], [0, 1, 1, 0]);

  // Trail effect
  const trailCount = 5;
  const trails = Array.from({ length: trailCount }, (_, i) => {
    const delay = (i + 1) * 0.04;
    const trailX = useTransform(scrollYProgress, [0, 0.3], [`-${120 + i * 35}px`, `calc(100vw + ${120 + i * 35}px)`]);
    const trailY = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [
      `${80 + i * 3}vh`,
      `${30 + i * 3}vh`,
      `${15 + i * 3}vh`,
      `${50 + i * 3}vh`
    ]);
    const trailOpacity = useTransform(scrollYProgress, [0, 0.02, 0.25, 0.3], [0, 0.4 - i * 0.06, 0.4 - i * 0.06, 0]);
    const trailScale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0.4, 0.8 - i * 0.08, 1.1 - i * 0.08, 0.4]);
    return { x: trailX, y: trailY, opacity: trailOpacity, scale: trailScale };
  });

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9995]">
      {/* Trail Icons */}
      {trails.map((trail, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            x: trail.x,
            y: trail.y,
            opacity: trail.opacity,
            scale: trail.scale,
            top: 0,
            left: 0,
          }}
        >
          <div className="text-[#22D3EE] opacity-25">
            <Send className="w-5 h-5" />
          </div>
        </motion.div>
      ))}

      {/* Main Telegram Icon */}
      <motion.div
        className="absolute"
        style={{
          x: x,
          y: y,
          rotate: rotate,
          scale: scale,
          opacity: opacity,
          top: 0,
          left: 0,
        }}
      >
        <div className="relative">
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%)',
              scale: 2.5,
            }}
          />
          
          {/* Main Telegram Button */}
          <div className="relative bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] p-3.5 rounded-full shadow-2xl shadow-[#22D3EE]/40 border border-white/20">
            <Send className="w-9 h-9 text-white" style={{ transform: 'rotate(-20deg)' }} />
          </div>

          {/* Speed effect */}
          <motion.div
            className="absolute -left-12 top-1/2 -translate-y-1/2 flex gap-1"
            style={{
              opacity: useTransform(scrollYProgress, [0.02, 0.1, 0.2, 0.25], [0, 1, 1, 0]),
            }}
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#22D3EE]/40 rounded-full" />
            <div className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#22D3EE]/25 rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Sparkle Particles */}
      {[...Array(10)].map((_, i) => {
        const particleX = useTransform(scrollYProgress, [0, 0.3], [
          `-${80 + i * 8}px`, 
          `calc(100vw + ${80 + i * 8}px)`
        ]);
        const particleY = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [
          `${80 + i * 3}vh`,
          `${30 + i * 3}vh`,
          `${15 + i * 3}vh`,
          `${50 + i * 3}vh`
        ]);
        const particleOpacity = useTransform(scrollYProgress, [0, 0.02, 0.25, 0.3], [0, 0.6 - i * 0.04, 0.6 - i * 0.04, 0]);
        const particleSize = 2 + (i % 3);
        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-[#22D3EE]"
            style={{
              x: particleX,
              y: particleY,
              opacity: particleOpacity,
              width: particleSize,
              height: particleSize,
              boxShadow: `0 0 ${particleSize * 2}px rgba(34, 211, 238, 0.3)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FlyingTelegram;