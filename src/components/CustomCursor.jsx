import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState([]);
  const trailIndexRef = useRef(0);
  const animationRef = useRef(null);

  // Smooth position with lerp
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });

  const isDesktop = window.innerWidth >= 768;

  // Right side light color - Cyan/Teal
  const mainColor = '#22D3EE';
  const colors = ['#22D3EE', '#06B6D4', '#67E8F9', '#A5F3FC', '#34D399', '#2DD4BF'];

  useEffect(() => {
    if (!isDesktop) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add colorful trail particle
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTrails(prev => [...prev, {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 1.5,
        life: 1,
        vy: -(Math.random() * 0.8 + 0.2),
        vx: (Math.random() - 0.5) * 0.8,
        color: randomColor,
      }]);
      trailIndexRef.current++;
    };

    const updateHover = (e) => {
      const target = e.target;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('.interactive');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateHover);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateHover);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDesktop]);

  // Smooth animation loop
  useEffect(() => {
    if (!isDesktop) return;

    const animate = () => {
      smoothRef.current.x += (position.x - smoothRef.current.x) * 0.2;
      smoothRef.current.y += (position.y - smoothRef.current.y) * 0.2;
      setSmoothPos({ x: smoothRef.current.x, y: smoothRef.current.y });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position, isDesktop]);

  // Trail animation
  useEffect(() => {
    if (!isDesktop) return;

    const animateTrails = () => {
      setTrails(prev => 
        prev
          .map(t => ({
            ...t,
            y: t.y + t.vy,
            x: t.x + t.vx,
            life: t.life - 0.025,
            size: t.size * 0.99,
            vy: t.vy + 0.02,
          }))
          .filter(t => t.life > 0)
      );
    };

    const trailInterval = setInterval(animateTrails, 16);

    return () => {
      clearInterval(trailInterval);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Airplane Cursor - Smaller */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: smoothPos.x - 16,
          y: smoothPos.y - 16,
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          rotate: isHovering ? 15 : 0,
          opacity: smoothPos.x === 0 && smoothPos.y === 0 ? 0 : 1,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        {/* Glow behind airplane */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${mainColor}30, transparent 70%)`,
            scale: 1.8,
          }}
          animate={{
            scale: isHovering ? 2.5 : 1.8,
            opacity: isHovering ? 0.8 : 0.3,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />

        {/* Airplane SVG - Smaller */}
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%', filter: `drop-shadow(0 0 8px ${mainColor}40)` }}>
          <path
            d="M12 1 L15 10 L23 12 L15 14 L12 23 L9 14 L1 12 L9 10 L12 1Z"
            fill={mainColor}
            stroke={mainColor}
            strokeWidth="0.5"
            opacity="0.9"
          />
          <path
            d="M12 4 L14 10.5 L19.5 12 L14 13.5 L12 20 L10 13.5 L4.5 12 L10 10.5 L12 4Z"
            fill="white"
            opacity="0.15"
          />
          <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Colorful Trail Particles - Cyan/Teal shades */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none rounded-full z-[9998]"
          style={{
            x: trail.x - trail.size / 2,
            y: trail.y - trail.size / 2,
            width: trail.size,
            height: trail.size,
            background: trail.color,
            opacity: trail.life * 0.6,
            boxShadow: `0 0 ${trail.size * 2}px ${trail.color}40`,
          }}
        />
      ))}

      {/* Extra small sparkles */}
      {trails.slice(0, 3).map((trail, i) => (
        <motion.div
          key={`spark-${trail.id}-${i}`}
          className="fixed pointer-events-none z-[9997]"
          style={{
            x: trail.x - 1 - i * 1.2,
            y: trail.y - 1 - i * 2,
            width: 1.5 + i * 0.3,
            height: 1.5 + i * 0.3,
            background: 'white',
            opacity: trail.life * 0.15,
            borderRadius: '50%',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;