import { motion } from 'framer-motion';
import { HiCode, HiBriefcase, HiLightBulb } from 'react-icons/hi';
import profileImg from '../assets/images/profile.jpg';

const stats = [
  { icon: <HiCode size={24} />, value: '2+', label: 'Years Experience' },
  { icon: <HiBriefcase size={24} />, value: '10+', label: 'Projects Completed' },
  { icon: <HiLightBulb size={24} />, value: '5+', label: 'Technologies' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-light-card dark:bg-dark-card/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent dark:text-accent-light text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-light-text dark:text-dark-text mt-3">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-accent/20 dark:border-accent-light/20 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 dark:bg-accent-light/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 dark:bg-accent-light/5 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-gray-medium leading-relaxed mb-6">
              I am a frontend developer specializing in{' '}
              <span className="text-accent dark:text-accent-light font-semibold">
                React
              </span>{' '}
              and{' '}
              <span className="text-accent dark:text-accent-light font-semibold">
                React Native
              </span>
              . I enjoy building modern, scalable and interactive applications
              that provide great user experiences.
            </p>
            <p className="text-base md:text-lg text-gray-medium leading-relaxed mb-8">
              With a passion for clean code and thoughtful design, I strive to
              create web and mobile solutions that are both beautiful and
              functional. I love learning new technologies and applying them to
              solve real-world problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white dark:bg-dark-card border border-gray-light/50 dark:border-dark-card"
                >
                  <div className="text-accent dark:text-accent-light mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-light-text dark:text-dark-text font-[family-name:var(--font-poppins)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
