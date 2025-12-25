import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Gym Website',
      description: 'Modern fitness center website with dynamic animations, membership plans, and class schedules',
      url: 'https://gym-webiste-ten.vercel.app/',
      tags: ['React', 'Tailwind', 'Animations'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Restaurant Website',
      description: 'Elegant restaurant website featuring menu showcase, online reservations, and stunning food gallery',
      url: 'https://resturant-delta-eight.vercel.app/',
      tags: ['React', 'UI/UX', 'Responsive'],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      title: 'Movers & Packers',
      description: 'Professional moving service website with service listings, quote calculator, and contact forms',
      url: 'https://movers-packers-nu.vercel.app/',
      tags: ['React', 'Business', 'Conversion'],
      gradient: 'from-red-600 to-red-800',
    },
    {
      title: 'Real Estate Website',
      description: 'Comprehensive property listing platform with search filters, property details, and agent profiles',
      url: 'https://real-state-wq17.vercel.app/',
      tags: ['React', 'Real Estate', 'Premium'],
      gradient: 'from-red-700 to-red-900',
    },
    {
      title: 'Swift Move Website',
      description: 'Fast-paced logistics website with tracking features, service areas, and instant quotes',
      url: 'https://swift-move-jz4a.vercel.app/',
      tags: ['React', 'Logistics', 'Modern'],
      gradient: 'from-red-500 to-red-700',
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-500/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-red-700/10 rounded-full filter blur-[120px]"></div>

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
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Featured
            <br />
            <span className="text-red-500">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A selection of my recent work showcasing modern web development and design
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

              <motion.div
                whileHover={{ boxShadow: '0 0 50px rgba(239, 68, 68, 0.3)' }}
                className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-500 transition-all duration-300 h-full flex flex-col"
              >
                <div className="mb-4 flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="text-red-500" size={32} />
                  </motion.div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + tagIndex * 0.1 }}
                      className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm border border-red-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  Live Demo
                  <ExternalLink size={18} />
                </motion.a>

                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
