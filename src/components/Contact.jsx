import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hello@webdev.com',
      link: 'mailto:hello@webdev.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Available Worldwide',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, label: 'GitHub', link: '#' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', link: '#' },
    { icon: <Twitter size={24} />, label: 'Twitter', link: '#' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-700/10 rounded-full filter blur-[120px]"></div>

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
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's Build Something
            <br />
            <span className="text-red-500">Amazing Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have a project in mind? Let's discuss how I can help bring your vision to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-semibold hover:text-red-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-gray-900 to-black border border-red-500/30 hover:border-red-500 p-4 rounded-xl text-red-500 hover:text-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-2xl blur-xl"></div>
              <form
                onSubmit={handleSubmit}
                className="relative bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-red-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-red-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-red-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900 border border-red-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 text-green-500 px-4 py-3 rounded-xl"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-xl font-bold hover:from-red-600 hover:to-red-800 transition-all shadow-lg shadow-red-500/50 hover:shadow-red-500/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="border-t border-red-500/20 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Web Developer Portfolio. All rights reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
