import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Resumes Analyzed' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Zap, value: '< 30s', label: 'Analysis Time' },
    { icon: Globe, value: '120+', label: 'Countries Served' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ResumeAI
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                ResumeAI is the world's most advanced AI-powered resume analysis platform, 
                designed to help job seekers optimize their resumes for maximum impact in 
                today's competitive job market.
              </p>
              
              <p>
                Our cutting-edge machine learning algorithms analyze thousands of data points 
                to provide personalized recommendations that increase your chances of landing 
                interviews with top companies.
              </p>
              
              <p>
                Whether you're a recent graduate or an experienced professional, our platform 
                adapts to your unique career profile and industry requirements to deliver 
                actionable insights that make a real difference.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center group hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;