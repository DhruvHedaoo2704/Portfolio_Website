import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] w-full">
      <div className="relative flex justify-center items-center">
        {/* Outer Ring */}
        <div className="absolute w-16 h-16 rounded-full border-4 border-slate-300 dark:border-slate-800 opacity-50 dark:opacity-20"></div>
        {/* Inner Spinning Ring */}
        <div className="absolute w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
        {/* Center Dot */}
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
