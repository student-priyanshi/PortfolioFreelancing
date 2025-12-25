import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Framer Motion', level: 90 },
    { name: 'Three.js', level: 85 },
    { name: 'Node.js', level: 87 },
    { name: 'Next.js', level: 90 },
    { name: 'HTML5', level: 98 },
    { name: 'CSS3', level: 96 },
    { name: 'Git', level: 92 },
    { name: 'Responsive Design', level: 97 },
  ];

  const technologies = [
    'React', 'Vue', 'Next.js', 'Vite', 'Tailwind CSS',
    'Framer Motion', 'GSAP', 'Three.js', 'TypeScript',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Git', 'Webpack', 'REST APIs', 'GraphQL',
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-[120px]"></div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-red-500 font-semibold text-lg mb-2 block"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            My Technical
            <br />
            <span className="text-red-500">Arsenal</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="text-red-500 font-bold">{skill.level}%</span>
              </div>

              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                >
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  ></motion.div>
                </motion.div>

                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(239, 68, 68, 0.3)',
                      '0 0 30px rgba(239, 68, 68, 0.5)',
                      '0 0 20px rgba(239, 68, 68, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-900/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-red-500/30 hover:border-red-500 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-red-500/30"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
