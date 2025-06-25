import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI resume assistant. I can help you analyze your resume, provide optimization tips, and answer questions about your career profile. How can I assist you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMockAIResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! I\'m excited to help you optimize your resume. Would you like me to analyze a specific section or provide general tips?';
    } else if (lowerCaseMessage.includes('skills') || lowerCaseMessage.includes('technologies')) {
      return 'Great question! For technical roles, I recommend highlighting your most relevant skills prominently. Consider grouping them by category (Programming Languages, Frameworks, Tools) and include proficiency levels. Would you like specific advice for your field?';
    } else if (lowerCaseMessage.includes('ats') || lowerCaseMessage.includes('applicant tracking')) {
      return 'ATS optimization is crucial! Here are key tips: Use standard section headings, include relevant keywords from job descriptions, avoid complex formatting, and save as both PDF and Word formats. Want me to elaborate on any of these?';
    } else if (lowerCaseMessage.includes('format') || lowerCaseMessage.includes('layout')) {
      return 'Resume formatting is essential for readability! Use consistent fonts, clear section breaks, bullet points for achievements, and maintain proper white space. A clean, professional layout increases your chances significantly.';
    } else if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('work')) {
      return 'For work experience, focus on achievements rather than duties. Use action verbs, quantify results with numbers/percentages, and tailor descriptions to match target job requirements. Each bullet should demonstrate value you brought to previous roles.';
    } else if (lowerCaseMessage.includes('keywords')) {
      return 'Keywords are vital for ATS systems! Analyze job descriptions for recurring terms, include industry-specific terminology, and naturally integrate keywords throughout your resume. Don\'t keyword stuff - maintain readability.';
    } else if (lowerCaseMessage.includes('thank')) {
      return 'You\'re very welcome! I\'m here whenever you need resume advice. Feel free to ask about specific sections, optimization strategies, or career guidance. Good luck with your job search!';
    } else {
      return 'That\'s an interesting question! While I can provide general resume guidance, I\'d recommend uploading your resume for personalized analysis. I can help with formatting, ATS optimization, keyword integration, and content improvement. What specific area would you like to focus on?';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getMockAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <section id="chat" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Chat with Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get instant advice, tips, and personalized recommendations for your resume optimization journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/20 p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Resume Assistant</h3>
                  <p className="text-purple-300 text-sm">Online • Ready to help</p>
                </div>
                <div className="ml-auto">
                  <Sparkles className="text-purple-400" size={20} />
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                        {message.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                      </div>
                      <div className={`p-4 rounded-2xl ${message.sender === 'user' ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30' : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30'}`}>
                        <p className="text-white leading-relaxed">{message.text}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 p-4 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="border-t border-purple-500/20 p-6">
              <form onSubmit={handleSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me about resume optimization..."
                  className="flex-1 bg-slate-700/50 border border-purple-500/30 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-200"
                >
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIChat;