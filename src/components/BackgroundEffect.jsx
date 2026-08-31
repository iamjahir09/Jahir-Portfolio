import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationId;
    let time = 0;

    const particles = [];
    const particleCount = 2500;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Particle {
      constructor(width, height) {
        const sizeRand = Math.random();

        /*
         * STAR PARTICLES
         */
        if (sizeRand < 0.75) {
          this.size = Math.random() * 0.3 + 0.18;
          this.opacity = Math.random() * 0.20 + 0.08;
          this.type = 'tiny';
        } else if (sizeRand < 0.90) {
          this.size = Math.random() * 0.35 + 0.55;
          this.opacity = Math.random() * 0.22 + 0.18;
          this.type = 'small';
        } else {
          this.size = Math.random() * 0.1 + 1.0;
          this.opacity = Math.random() * 0.22 + 0.30;
          this.type = 'large';
        }

        /*
         * EQUALLY DISTRIBUTED - Random position across whole screen
         */
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        /*
         * Each particle moves in a small circular orbit
         * around its own center point
         */
        this.centerX = this.x;
        this.centerY = this.y;
        this.orbitRadius = Math.random() * 60 + 20;
        this.orbitAngle = Math.random() * Math.PI * 2;
        
        /*
         * FASTER SPEED - Increased rotation speed
         */
        this.speed = (Math.random() * 0.025 + 0.01) * (Math.random() > 0.5 ? 1 : -1);

        this.width = width;
        this.height = height;

        // Wobble
        this.phase = Math.random() * Math.PI * 2;
        this.wobbleAmount = Math.random() * 3 + 1;
        this.wobbleSpeed = Math.random() * 0.003 + 0.001;

        // Twinkle
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;

        // Very slow drift
        this.driftX = (Math.random() - 0.5) * 0.015;
        this.driftY = (Math.random() - 0.5) * 0.015;
      }

      update() {
        /*
         * Circular orbit around its own center - FASTER
         */
        this.orbitAngle += this.speed;

        const wobble = Math.sin(time * this.wobbleSpeed + this.phase) * this.wobbleAmount;

        this.x = this.centerX + Math.cos(this.orbitAngle) * (this.orbitRadius + wobble * 0.05);
        this.y = this.centerY + Math.sin(this.orbitAngle) * (this.orbitRadius + wobble * 0.03);

        /*
         * Faster drift
         */
        this.centerX += this.driftX;
        this.centerY += this.driftY;

        // Keep in bounds
        if (this.centerX < 0 || this.centerX > this.width) {
          this.driftX *= -1;
        }
        if (this.centerY < 0 || this.centerY > this.height) {
          this.driftY *= -1;
        }

        /*
         * Twinkle
         */
        const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase);
        this.currentOpacity = this.opacity * (0.82 + twinkle * 0.18);
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.currentOpacity})`;
        ctx.fill();

        if (this.type === 'large') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.38, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(this.currentOpacity + 0.12, 0.9)})`;
          ctx.fill();
        }
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

      // LEFT LIGHT BEAM
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width * 0.4, 0);
      ctx.lineTo(width * 0.3, height * 0.5);
      ctx.lineTo(0, height * 0.4);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 220, 180, 0.10)';
      ctx.fill();
      ctx.restore();

      // RIGHT LIGHT BEAM
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(width - width * 0.4, 0);
      ctx.lineTo(width - width * 0.3, height * 0.5);
      ctx.lineTo(width, height * 0.4);
      ctx.closePath();
      ctx.fillStyle = 'rgba(34, 211, 238, 0.12)';
      ctx.fill();
      ctx.restore();

      // RIGHT SIDE EXTRA GLOW
      const gradient3 = ctx.createRadialGradient(width, height * 0.1, 0, width, height * 0.1, width * 0.15);

      gradient3.addColorStop(0, 'rgba(34, 211, 238, 0.06)');
      gradient3.addColorStop(0.5, 'rgba(34, 211, 238, 0.03)');
      gradient3.addColorStop(1, 'rgba(34, 211, 238, 0)');

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      time++;

      ctx.clearRect(0, 0, width, height);

      drawLights(ctx, width, height);

      particles.forEach((particle) => {
        particle.width = width;
        particle.height = height;

        particle.update();
        particle.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
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