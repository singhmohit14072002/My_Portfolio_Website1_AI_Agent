import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, ArrowRight } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="text-purple-400" size={16} />
              <span className="text-purple-300 text-sm font-medium">AI-Powered Analysis</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Analyze Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Resume with AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Transform your career with our advanced AI resume analyzer. Get instant feedback, 
              optimization suggestions, and personalized insights to land your dream job.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Upload size={20} />
                <span>Upload Resume</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Try Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Analysis</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">ATS Compatibility</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ delay: 1, duration: 1 }}
                          className="h-full bg-gradient-to-r from-green-400 to-green-600"
                        ></motion.div>
                      </div>
                      <span className="text-green-400 font-semibold">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Keyword Match</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ delay: 1.2, duration: 1 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        ></motion.div>
                      </div>
                      <span className="text-blue-400 font-semibold">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Overall Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '88%' }}
                          transition={{ delay: 1.4, duration: 1 }}
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                        ></motion.div>
                      </div>
                      <span className="text-purple-400 font-semibold">88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;