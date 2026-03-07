import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpo,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandReactNative } from 'react-icons/tb';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DAFB' },
      { name: 'Expo', icon: <SiExpo />, color: '#000020' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#6e7681' },
      { name: 'VS Code', icon: <VscVscode />, color: '#007ACC' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent dark:text-accent-light text-sm font-semibold tracking-widest uppercase">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-light-text dark:text-dark-text mt-3">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="bg-light-card dark:bg-dark-card rounded-2xl p-6 border border-gray-light/50 dark:border-dark-card hover:border-accent/30 dark:hover:border-accent-light/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6 font-[family-name:var(--font-poppins)]">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.15 + sIdx * 0.08 }}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-dark-bg/50 transition-all duration-300"
                  >
                    <span
                      className="text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-light-text dark:text-dark-text">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
