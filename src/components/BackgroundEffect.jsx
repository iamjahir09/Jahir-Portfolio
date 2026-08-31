import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const particles = [];
    const particleCount = 350;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    
    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        // Faster speed
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.25 + 0.05;
        this.width = width;
        this.height = height;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.025 + 0.01;
        
        // Light direction influence
        if (this.x < width * 0.3) {
          this.speedX += 0.06;
          this.speedY += 0.04;
        } else if (this.x > width * 0.7) {
          this.speedX -= 0.06;
          this.speedY += 0.04;
        }
      }
      
      update() {
        this.wobble += this.wobbleSpeed;
        
        // More movement
        this.x += this.speedX + Math.sin(this.wobble) * 0.04;
        this.y += this.speedY + Math.cos(this.wobble * 0.7) * 0.03;
        
        // Random direction changes (scattering)
        if (Math.random() < 0.01) {
          this.speedX += (Math.random() - 0.5) * 0.06;
          this.speedY += (Math.random() - 0.5) * 0.04;
        }
        
        // Speed limit - faster now
        this.speedX = Math.max(-0.3, Math.min(0.3, this.speedX));
        this.speedY = Math.max(-0.25, Math.min(0.25, this.speedY));
        
        // Wrap around
        if (this.x < -20) this.x = this.width + 20;
        if (this.x > this.width + 20) this.x = -20;
        if (this.y < -20) this.y = this.height + 20;
        if (this.y > this.height + 20) this.y = -20;
      }
      
      draw(ctx) {
        ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity * 0.1})`;
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    
    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };
    
    const drawLights = (ctx, width, height) => {
      // LEFT TOP CORNER - Warm Golden Light
      const leftX = 0;
      const leftY = 0;
      
      const gradient1 = ctx.createRadialGradient(leftX, leftY, 0, leftX, leftY, width * 0.5);
      gradient1.addColorStop(0, 'rgba(255, 230, 200, 0.18)');
      gradient1.addColorStop(0.05, 'rgba(255, 220, 180, 0.14)');
      gradient1.addColorStop(0.15, 'rgba(255, 200, 150, 0.10)');
      gradient1.addColorStop(0.35, 'rgba(255, 180, 130, 0.07)');
      gradient1.addColorStop(0.6, 'rgba(255, 160, 110, 0.04)');
      gradient1.addColorStop(0.85, 'rgba(255, 140, 90, 0.015)');
      gradient1.addColorStop(1, 'rgba(255, 120, 70, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // RIGHT TOP CORNER - Cyan/Teal Light
      const rightX = width;
      const rightY = 0;
      
      const gradient2 = ctx.createRadialGradient(rightX, rightY, 0, rightX, rightY, width * 0.5);
      gradient2.addColorStop(0, 'rgba(34, 211, 238, 0.18)');
      gradient2.addColorStop(0.05, 'rgba(34, 211, 238, 0.14)');
      gradient2.addColorStop(0.15, 'rgba(34, 211, 238, 0.10)');
      gradient2.addColorStop(0.35, 'rgba(34, 211, 238, 0.07)');
      gradient2.addColorStop(0.6, 'rgba(34, 211, 238, 0.04)');
      gradient2.addColorStop(0.85, 'rgba(34, 211, 238, 0.015)');
      gradient2.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // LEFT Light beam
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width * 0.4, 0);
      ctx.lineTo(width * 0.3, height * 0.5);
      ctx.lineTo(0, height * 0.4);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 220, 180, 0.12)';
      ctx.fill();
      ctx.restore();

      // RIGHT Light beam
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(width - width * 0.4, 0);
      ctx.lineTo(width - width * 0.3, height * 0.5);
      ctx.lineTo(width, height * 0.4);
      ctx.closePath();
      ctx.fillStyle = 'rgba(34, 211, 238, 0.15)';
      ctx.fill();
      ctx.restore();

      // Right side extra glow
      const gradient3 = ctx.createRadialGradient(width, height * 0.1, 0, width, height * 0.1, width * 0.15);
      gradient3.addColorStop(0, 'rgba(34, 211, 238, 0.08)');
      gradient3.addColorStop(0.5, 'rgba(34, 211, 238, 0.04)');
      gradient3.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);
    };
    
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      drawLights(ctx, width, height);
      
      particles.forEach(p => {
        p.width = width;
        p.height = height;
        p.update();
        p.draw(ctx);
      });
      
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
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundEffect;