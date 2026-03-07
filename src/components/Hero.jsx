import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function ParticleCanvas({ darkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = darkMode
          ? `rgba(96, 165, 250, ${this.opacity})`
          : `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = darkMode
              ? `rgba(96, 165, 250, ${0.08 * (1 - dist / 120)})`
              : `rgba(59, 130, 246, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

export default function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-dark-bg dark:via-primary-dark dark:to-dark-bg"
    >
      <ParticleCanvas darkMode={darkMode} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent-light/10 text-accent dark:text-accent-light text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-poppins)] text-light-text dark:text-dark-text mb-4 tracking-tight">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600 dark:from-accent-light dark:to-blue-400">
              Prasad
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-gray-medium mb-4"
          >
            React &amp; React Native Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-gray-medium/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build modern web and mobile applications using React and React
            Native. Crafting seamless user experiences with clean, efficient
            code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3.5 bg-accent hover:bg-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 border-2 border-accent/30 dark:border-accent-light/30 text-accent dark:text-accent-light hover:bg-accent/5 dark:hover:bg-accent-light/5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollTo('about')} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-gray-medium/50 hover:text-accent transition-colors"
            >
              <HiArrowDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
