import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const NetworkBackground = () => {
  // Generate stable random nodes
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 30 + 20,
      color: Math.random() > 0.5 ? 'bg-blue-500' : 'bg-purple-500'
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light/Dark dynamic gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 dark:from-slate-900/50 dark:to-slate-800/50 dark:mix-blend-overlay"></div>
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Nodes (simulating tech architecture nodes) */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full ${node.color} opacity-10 dark:opacity-[0.05] blur-2xl`}
          style={{
            width: node.size * 2,
            height: node.size * 2,
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Tech Architecture SVGs (Simulating connections) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.08]" preserveAspectRatio="none">
        <motion.path
          d="M 10 20 C 30 50, 70 10, 90 40"
          stroke="currentColor"
          className="text-blue-600 dark:text-blue-400"
          strokeWidth="0.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 20 80 C 40 60, 60 90, 80 70"
          stroke="currentColor"
          className="text-purple-600 dark:text-purple-400"
          strokeWidth="0.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.path
          d="M 0 50 Q 50 10 100 50 T 200 50"
          stroke="currentColor"
          className="text-cyan-600 dark:text-cyan-400"
          strokeWidth="0.3"
          strokeDasharray="4 4"
          fill="none"
          vectorEffect="non-scaling-stroke"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default NetworkBackground;
