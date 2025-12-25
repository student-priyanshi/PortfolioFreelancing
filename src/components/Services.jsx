import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  Layout,
  Smartphone,
  Building2,
  Briefcase,
  Gauge,
  Laptop,
  Palette
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Website Design & Development',
      description: 'Custom, responsive websites built with modern technologies and best practices',
    },
    {
      icon: <Laptop size={40} />,
      title: 'React / Frontend Development',
      description: 'Interactive web applications using React, Vue, or your preferred framework',
    },
    {
      icon: <Layout size={40} />,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for lead generation and sales',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Business Websites',
      description: 'Professional websites that establish credibility and drive business growth',
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Portfolio Websites',
      description: 'Stunning portfolio sites that showcase your work and attract clients',
    },
    {
      icon: <Gauge size={40} />,
      title: 'Performance Optimization',
      description: 'Speed up your website for better user experience and SEO rankings',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Responsive Design',
      description: 'Flawless experiences across all devices, from mobile to desktop',
    },
    {
      icon: <Globe size={40} />,
      title: 'Web Animation',
      description: 'Engaging animations that bring your website to life and captivate users',
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>

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
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What I Can Do
            <br />
            <span className="text-red-500">For Your Business</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative group perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-900 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

              <motion.div
                whileHover={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.4)' }}
                className="relative bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-500 transition-all duration-300 h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-red-500 mb-4 inline-block"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
