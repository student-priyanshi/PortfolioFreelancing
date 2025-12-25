import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ChevronDown } from 'lucide-react';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#ef4444"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="inline-block mb-4"
          >
            <span className="bg-red-500/20 text-red-500 px-4 py-2 rounded-full text-sm font-semibold border border-red-500/50 backdrop-blur-sm">
              Available for Freelance Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            Freelance
            <br />
            <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Web Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I design and build high-performance,{' '}
            <span className="text-red-500 font-semibold">animated websites</span>{' '}
            that convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/50"
            >
              Hire Me
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-red-500 hover:text-white transition-all"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white cursor-pointer"
        >
          <ChevronDown size={40} className="text-red-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
