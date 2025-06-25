import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'API', 'Documentation']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact', 'Privacy', 'Terms']
    }
  ];

  return (
    <footer id="contact" className="relative py-20 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ResumeAI
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering careers with AI-driven resume optimization. 
              Transform your job search with intelligent insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:text-white hover:border-purple-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 ResumeAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-400" size={16} fill="currentColor" />
            </motion.div>
            <span>for job seekers worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;