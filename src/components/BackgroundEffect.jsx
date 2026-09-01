import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationId;
    let time = 0;

    const particles = [];
    const particleCount = 3500;

    // =====================================================
    // CURSOR INTERACTION
    // =====================================================
    let mouseX = -1000;
    let mouseY = -1000;

    let previousMouseX = -1000;
    let previousMouseY = -1000;

    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    let mouseActive = false;

    // Invisible circular interaction radius
    const mouseRadius = 125;

    // =====================================================
    // CANVAS RESIZE
    // =====================================================
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // =====================================================
    // PARTICLE CLASS
    // =====================================================
    class Particle {
      constructor(width, height, startY = null) {
        const sizeRand = Math.random();

        // Tiny particles
        if (sizeRand < 0.75) {
          this.size = Math.random() * 0.3 + 0.18;
          this.opacity = Math.random() * 0.20 + 0.08;
          this.type = 'tiny';

        // Small particles
        } else if (sizeRand < 0.90) {
          this.size = Math.random() * 0.35 + 0.55;
          this.opacity = Math.random() * 0.22 + 0.18;
          this.type = 'small';

        // Large particles
        } else {
          this.size = Math.random() * 0.1 + 1.0;
          this.opacity = Math.random() * 0.22 + 0.30;
          this.type = 'large';
        }

        // =================================================
        // NATURAL POSITION - Store original position
        // =================================================
        this.originalX = Math.random() * width;
        this.originalY = startY !== null ? startY : Math.random() * height;

        this.x = this.originalX;
        this.y = this.originalY;

        // =================================================
        // MOVEMENT
        // =================================================
        this.speedY = -(Math.random() * 0.4 + 0.15);
        this.speedX = (Math.random() - 0.5) * 0.04;

        this.width = width;
        this.height = height;

        // =================================================
        // CURSOR PHYSICS
        // =================================================
        this.repelVelocityX = 0;
        this.repelVelocityY = 0;

        this.repelOffsetX = 0;
        this.repelOffsetY = 0;

        // =================================================
        // TWINKLE
        // =================================================
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;

        // =================================================
        // WOBBLE
        // =================================================
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.01 + 0.005;
        this.wobbleAmount = Math.random() * 0.5 + 0.2;

        // =================================================
        // MOON PROPERTIES
        // =================================================
        this.moonAngle = Math.random() * Math.PI * 2;
        this.moonRadius = 80 + Math.random() * 40;
        this.moonCenterX = width * 0.75;
        this.moonCenterY = height * 0.15;

        const moonStartAngle = -Math.PI / 2 - 0.8;
        const moonEndAngle = Math.PI / 2 + 0.8;

        this.moonAngle = moonStartAngle + Math.random() * (moonEndAngle - moonStartAngle);
        this.moonRadius = 60 + Math.random() * 50;
        this.moonOffset = 0.3 + Math.random() * 0.2;

        this.currentOpacity = this.opacity;

        // Track if particle is displaced
        this.isDisplaced = false;
      }

      // =====================================================
      // UPDATE PARTICLE
      // =====================================================
      update() {

        // =================================================
        // NORMAL PARTICLE MOVEMENT - Use original position as base
        // =================================================
        // Move the original position upward
        this.originalY += this.speedY;
        this.originalX += this.speedX + Math.sin(this.wobble) * 0.02;
        this.wobble += this.wobbleSpeed;

        // =================================================
        // CURSOR REPULSION
        // =================================================
        let repelX = 0;
        let repelY = 0;
        let isRepelled = false;

        if (mouseActive) {
          const dx = this.originalX - mouseX;
          const dy = this.originalY - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius && distance > 0) {
            const directionX = dx / distance;
            const directionY = dy / distance;
            const influence = 1 - distance / mouseRadius;
            const force = influence * influence;

            const repulsionStrength = 1.35;

            repelX = directionX * force * repulsionStrength;
            repelY = directionY * force * repulsionStrength;

            // Cursor movement influence
            const movementInfluence = force * 0.075;
            repelX += mouseVelocityX * movementInfluence;
            repelY += mouseVelocityY * movementInfluence;

            isRepelled = true;
            this.isDisplaced = true;
          }
        }

        // Apply repulsion
        if (isRepelled) {
          this.repelVelocityX += repelX;
          this.repelVelocityY += repelY;
        }

        this.repelOffsetX += this.repelVelocityX;
        this.repelOffsetY += this.repelVelocityY;

        // Spring return - when cursor moves away, return to original position
        if (!isRepelled && this.isDisplaced) {
          // Gradual return to original position
          const returnSpeed = 0.03;
          this.repelOffsetX += (0 - this.repelOffsetX) * returnSpeed;
          this.repelOffsetY += (0 - this.repelOffsetY) * returnSpeed;

          // If almost back to original, reset displacement flag
          if (Math.abs(this.repelOffsetX) < 0.01 && Math.abs(this.repelOffsetY) < 0.01) {
            this.repelOffsetX = 0;
            this.repelOffsetY = 0;
            this.isDisplaced = false;
          }
        }

        // Apply displacement to original position to get final position
        this.x = this.originalX + this.repelOffsetX;
        this.y = this.originalY + this.repelOffsetY;

        // Damping
        this.repelVelocityX *= 0.82;
        this.repelVelocityY *= 0.82;

        // =================================================
        // EXTRA SETTLE WHEN MOUSE LEAVES
        // =================================================
        if (!mouseActive && this.isDisplaced) {
          const returnSpeed = 0.04;
          this.repelOffsetX += (0 - this.repelOffsetX) * returnSpeed;
          this.repelOffsetY += (0 - this.repelOffsetY) * returnSpeed;

          if (Math.abs(this.repelOffsetX) < 0.01 && Math.abs(this.repelOffsetY) < 0.01) {
            this.repelOffsetX = 0;
            this.repelOffsetY = 0;
            this.isDisplaced = false;
          }
        }

        // =================================================
        // MOON FORMATION
        // =================================================
        const moonCenterX = this.width * 0.75;
        const moonCenterY = this.height * 0.15;
        const moonRadius = 80;

        const dx = this.originalX - moonCenterX;
        const dy = this.originalY - moonCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (this.originalY < this.height * 0.3 && this.originalX > this.width * 0.5) {
          const angle = Math.atan2(dy, dx);
          const targetRadius = moonRadius * (0.9 + 0.1 * Math.sin(angle * 3));
          const isCrescent = Math.cos(angle) > 0.1;

          if (isCrescent && dist < moonRadius * 1.5) {
            const targetX = moonCenterX + Math.cos(angle) * targetRadius;
            const targetY = moonCenterY + Math.sin(angle) * targetRadius * 0.9;

            // Apply moon attraction to original position
            this.originalX += (targetX - this.originalX) * 0.015;
            this.originalY += (targetY - this.originalY) * 0.015;

            this.currentOpacity = this.opacity * (1.2 + 0.3 * Math.sin(time * 0.001 + this.moonAngle));
          }
        }

        // =================================================
        // RESET PARTICLE - Reset original position
        // =================================================
        if (this.originalY < -50) {
          this.originalY = this.height + Math.random() * 50;
          this.originalX = Math.random() * this.width;
          this.speedY = -(Math.random() * 0.4 + 0.15);
          this.speedX = (Math.random() - 0.5) * 0.04;

          this.repelVelocityX = 0;
          this.repelVelocityY = 0;
          this.repelOffsetX = 0;
          this.repelOffsetY = 0;
          this.isDisplaced = false;

          // Reset moon properties
          const moonStartAngle = -Math.PI / 2 - 0.8;
          const moonEndAngle = Math.PI / 2 + 0.8;
          this.moonAngle = moonStartAngle + Math.random() * (moonEndAngle - moonStartAngle);
          this.moonRadius = 60 + Math.random() * 50;
        }

        // =================================================
        // HORIZONTAL WRAPPING
        // =================================================
        if (this.originalX < -20) {
          this.originalX = this.width + 20;
        }

        if (this.originalX > this.width + 20) {
          this.originalX = -20;
        }

        // Update final position
        this.x = this.originalX + this.repelOffsetX;
        this.y = this.originalY + this.repelOffsetY;

        // =================================================
        // TWINKLE
        // =================================================
        const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase);
        this.currentOpacity = this.opacity * (0.82 + twinkle * 0.18);
      }

      // =====================================================
      // DRAW PARTICLE
      // =====================================================
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 220, ${this.currentOpacity})`;
        ctx.fill();

        if (this.type === 'large') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.38, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(this.currentOpacity + 0.12, 0.9)})`;
          ctx.fill();
        }
      }
    }

    // =====================================================
    // INITIALIZE PARTICLES
    // =====================================================
    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        const y = Math.random() * height;
        particles.push(new Particle(width, height, y));
      }
    };

    // =====================================================
    // LIGHTS / GLOW
    // =====================================================
    const drawLights = (ctx, width, height) => {

      // =====================================
      // LEFT TOP CORNER
      // Warm Golden Glow
      // =====================================
      const leftX = 0;
      const leftY = 0;

      const gradient1 = ctx.createRadialGradient(leftX, leftY, 0, leftX, leftY, width * 0.5);

      gradient1.addColorStop(0, 'rgba(255, 230, 200, 0.30)');
      gradient1.addColorStop(0.05, 'rgba(255, 220, 180, 0.24)');
      gradient1.addColorStop(0.15, 'rgba(255, 200, 150, 0.16)');
      gradient1.addColorStop(0.35, 'rgba(255, 180, 130, 0.10)');
      gradient1.addColorStop(0.6, 'rgba(255, 160, 110, 0.05)');
      gradient1.addColorStop(0.85, 'rgba(255, 140, 90, 0.02)');
      gradient1.addColorStop(1, 'rgba(255, 120, 70, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // =====================================
      // RIGHT TOP CORNER
      // Cyan / Teal Glow
      // =====================================
      const rightX = width;
      const rightY = 0;

      const gradient2 = ctx.createRadialGradient(rightX, rightY, 0, rightX, rightY, width * 0.5);

      gradient2.addColorStop(0, 'rgba(34, 211, 238, 0.30)');
      gradient2.addColorStop(0.05, 'rgba(34, 211, 238, 0.24)');
      gradient2.addColorStop(0.15, 'rgba(34, 211, 238, 0.16)');
      gradient2.addColorStop(0.35, 'rgba(34, 211, 238, 0.10)');
      gradient2.addColorStop(0.6, 'rgba(34, 211, 238, 0.05)');
      gradient2.addColorStop(0.85, 'rgba(34, 211, 238, 0.02)');
      gradient2.addColorStop(1, 'rgba(34, 211, 238, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // =====================================
      // RIGHT SIDE EXTRA GLOW
      // =====================================
      const gradient3 = ctx.createRadialGradient(width, height * 0.1, 0, width, height * 0.1, width * 0.15);

      gradient3.addColorStop(0, 'rgba(34, 211, 238, 0.10)');
      gradient3.addColorStop(0.5, 'rgba(34, 211, 238, 0.05)');
      gradient3.addColorStop(1, 'rgba(34, 211, 238, 0)');

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);

      // =====================================
      // MOON GLOW
      // =====================================
      const moonCenterX = width * 0.75;
      const moonCenterY = height * 0.15;

      const moonGlow = ctx.createRadialGradient(moonCenterX, moonCenterY, 0, moonCenterX, moonCenterY, 200);

      moonGlow.addColorStop(0, 'rgba(255, 240, 220, 0.12)');
      moonGlow.addColorStop(0.3, 'rgba(255, 220, 200, 0.06)');
      moonGlow.addColorStop(0.7, 'rgba(200, 180, 220, 0.025)');
      moonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonCenterX, moonCenterY, 200, 0, Math.PI * 2);
      ctx.fill();
    };

    // =====================================================
    // MOUSE MOVE
    // =====================================================
    const handleMouseMove = (event) => {
      const newX = event.clientX;
      const newY = event.clientY;

      if (previousMouseX > -500 && previousMouseY > -500) {
        mouseVelocityX = newX - previousMouseX;
        mouseVelocityY = newY - previousMouseY;
      }

      mouseX = newX;
      mouseY = newY;

      previousMouseX = newX;
      previousMouseY = newY;

      mouseActive = true;
    };

    // =====================================================
    // MOUSE LEAVE
    // =====================================================
    const handleMouseLeave = () => {
      mouseActive = false;

      mouseVelocityX = 0;
      mouseVelocityY = 0;

      mouseX = -1000;
      mouseY = -1000;

      previousMouseX = -1000;
      previousMouseY = -1000;
    };

    // =====================================================
    // ANIMATION
    // =====================================================
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      time++;

      ctx.clearRect(0, 0, width, height);

      // Draw smooth lights
      drawLights(ctx, width, height);

      // Draw particles
      particles.forEach((particle) => {
        particle.width = width;
        particle.height = height;

        particle.update();
        particle.draw(ctx);
      });

      // Smoothly reduce cursor movement velocity
      mouseVelocityX *= 0.82;
      mouseVelocityY *= 0.82;

      animationId = requestAnimationFrame(animate);
    };

    // =====================================================
    // START
    // =====================================================
    resize();
    init();
    animate();

    // =====================================================
    // EVENT LISTENERS
    // =====================================================
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // =====================================================
    // CLEANUP
    // =====================================================
    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none bg-particles-canvas"
      style={{
        zIndex: 0
      }}
    />
  );
};

export default BackgroundEffect;