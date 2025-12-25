import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Zap, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Custom Development',
      description: 'Tailored web solutions built from scratch to match your unique business needs',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Modern UI/UX',
      description: 'Beautiful, intuitive interfaces that users love and remember',
    },
    {
      icon: <Zap size={32} />,
      title: 'High Performance',
      description: 'Lightning-fast websites optimized for speed and conversions',
    },
    {
      icon: <Target size={32} />,
      title: 'Client-Focused',
      description: 'Your success is my priority. Clear communication, on-time delivery',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-700/10 rounded-full filter blur-[120px]"></div>

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
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Turning Ideas Into
            <br />
            <span className="text-red-500">Digital Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a freelance web developer specializing in creating stunning,
            high-performance websites that drive results. With expertise in modern
            frameworks and a passion for animations, I craft digital experiences
            that captivate users and convert visitors into customers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-500/60 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-red-500 mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
