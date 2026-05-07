import React, { useState, useEffect, useRef } from 'react';
import { Star, GitFork, ExternalLink, Calendar, ChevronUp, ChevronDown } from 'lucide-react';

const GitHubFeed = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);
  const GITHUB_USERNAME = 'DhruvHedaoo2704'; // Change this to your GitHub username

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -150,
        behavior: 'smooth'
      });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 150,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch user repositories from GitHub API
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&order=desc&per_page=100`
        );
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter out forked repositories and sort by updated date
        const filteredRepos = data
          .filter(repo => !repo.fork) // Only show original repositories
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        setRepos(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
    
    // Refresh data every 5 minutes for real-time updates
    const interval = setInterval(fetchGitHubData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-500',
      Python: 'bg-blue-500',
      Java: 'bg-orange-500',
      TypeScript: 'bg-blue-600',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          Recent GitHub Activity
        </h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-white/10 rounded w-full mb-1"></div>
              <div className="h-3 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          Recent GitHub Activity
        </h3>
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">
            ⚠️ Unable to fetch GitHub data. Please try again later.
          </p>
          <p className="text-gray-400 text-xs mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <Calendar className="mr-2" size={20} />
          Recent GitHub Activity
        </h3>
        <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
          {repos.length} repos
        </span>
      </div>
      
      {/* Scroll Up Button */}
      <button
        onClick={scrollUp}
        className="self-center mb-2 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 hover:text-blue-300 transition-all duration-200 border border-blue-500/30 hover:border-blue-500/60"
        aria-label="Scroll up"
      >
        <ChevronUp size={18} />
      </button>
      
      {/* Scrollable Projects Container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-y-auto pr-2 space-y-3 scroll-smooth"
        style={{
          maxHeight: '400px',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'thin',
          scrollbarColor: '#3b82f6 #ffffff0d'
        }}
      >
        {/* Custom scrollbar styling via CSS */}
        <style>{`
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #3b82f6;
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #60a5fa;
          }
        `}</style>
        
        {repos.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-gray-400">
            <p className="text-sm">No repositories found.</p>
          </div>
        ) : (
          repos.map((repo) => (
            <div 
              key={repo.id} 
              className="p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200 truncate flex-1">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center hover:underline"
                  >
                    {repo.name}
                    <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h4>
              </div>
              
              <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                {repo.description || 'No description available'}
              </p>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  {repo.language && (
                    <span className="flex items-center text-gray-400">
                      <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)} mr-1`}></div>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center text-gray-400">
                    <Star size={10} className="mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center text-gray-400">
                    <GitFork size={10} className="mr-1" />
                    {repo.forks_count}
                  </span>
                </div>
                <span className="text-gray-500 text-xs">
                  {formatDate(repo.updated_at)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Scroll Down Button */}
      <button
        onClick={scrollDown}
        className="self-center mt-2 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 hover:text-blue-300 transition-all duration-200 border border-blue-500/30 hover:border-blue-500/60"
        aria-label="Scroll down"
      >
        <ChevronDown size={18} />
      </button>
      
      {/* Footer Link */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center justify-center transition-colors"
        >
          View all repositories <ExternalLink size={12} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default GitHubFeed;