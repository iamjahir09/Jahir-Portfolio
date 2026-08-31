import { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const particles = [];
    const particleCount = 45;
    const connectionDistance = 120;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };
    
    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.15;
        this.width = width;
        this.height = height;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > this.width) this.speedX *= -1;
        if (this.y < 0 || this.y > this.height) this.speedY *= -1;
      }
      
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    const init = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(rect.width, rect.height));
      }
    };
    
    const drawLines = (ctx, width, height) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = 0.08 * (1 - distance / connectionDistance);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.width = width;
        p.height = height;
        p.update();
        p.draw(ctx);
      });
      
      drawLines(ctx, width, height);
      
      animationId = requestAnimationFrame(animate);
    };
    
    resize();
    init();
    animate();
    
    window.addEventListener('resize', () => {
      resize();
      init();
    });
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Particles;