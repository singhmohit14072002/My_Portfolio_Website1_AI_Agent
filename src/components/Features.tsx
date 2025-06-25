import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, Shield, BarChart3, FileCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your resume for optimal performance.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes through Applicant Tracking Systems with confidence.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get real-time suggestions and improvements as you upload your resume.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is encrypted and secure. We never store your personal information.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive scoring and metrics to track your resume performance.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FileCheck,
      title: 'Format Validation',
      description: 'Ensure your resume meets industry standards and best practices.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Resume Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of AI-powered tools helps you create the perfect resume 
            that stands out to employers and passes through automated screening systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;