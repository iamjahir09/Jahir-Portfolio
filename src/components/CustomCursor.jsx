import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const isDesktop = window.innerWidth >= 768;

  // White color
  const mainColor = '#FFFFFF';

  useEffect(() => {
    if (!isDesktop) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

  if (!isDesktop) return null;

  return (
    <>
      {/* Normal Windows Style Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: position.x - 2,
          y: position.y - 2,
          width: 4,
          height: 4,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: position.x === 0 && position.y === 0 ? 0 : 1,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        {/* Inner Dot */}
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: mainColor,
            boxShadow: `0 0 8px ${mainColor}44`,
          }}
        />

        {/* Outer Ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border"
          style={{
            borderColor: mainColor,
            opacity: 0.15,
          }}
          animate={{
            scale: isHovering ? 1.6 : 1,
            opacity: isHovering ? 0.3 : 0.15,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />

        {/* Click Effect */}
        <motion.div
          className="absolute -inset-1 rounded-full"
          style={{
            background: mainColor,
            opacity: 0,
          }}
          animate={{
            scale: isClicking ? 1.5 : 0.5,
            opacity: isClicking ? 0.1 : 0,
          }}
          transition={{ duration: 0.05, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;