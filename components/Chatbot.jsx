import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { chatbotData } from '../data';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm Dhruv's AI assistant. How can I help you learn more about him?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const getResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
      return chatbotData.responses.greeting[Math.floor(Math.random() * chatbotData.responses.greeting.length)];
    }
    
    if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology') || lowercaseInput.includes('programming')) {
      return chatbotData.responses.skills;
    }
    
    if (lowercaseInput.includes('experience') || lowercaseInput.includes('internship') || lowercaseInput.includes('work')) {
      return chatbotData.responses.experience;
    }
    
    if (lowercaseInput.includes('education') || lowercaseInput.includes('university') || lowercaseInput.includes('cgpa') || lowercaseInput.includes('degree')) {
      return chatbotData.responses.education;
    }
    
    if (lowercaseInput.includes('project') || lowercaseInput.includes('portfolio') || lowercaseInput.includes('github')) {
      return chatbotData.responses.projects;
    }
    
    if (lowercaseInput.includes('achievement') || lowercaseInput.includes('award') || lowercaseInput.includes('certification')) {
      return chatbotData.responses.achievements;
    }
    
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('linkedin')) {
      return chatbotData.responses.contact;
    }
    
    return chatbotData.responses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const botResponse = {
      type: 'bot',
      content: getResponse(inputValue),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} className="text-white" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Bot className="text-blue-400" size={20} />
                <h3 className="text-white font-medium">Chat with Dhruv's AI</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-blue-600' : 'bg-white/20'}`}>
                      {message.type === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-blue-400" />}
                    </div>
                    <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-200'}`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Dhruv..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;