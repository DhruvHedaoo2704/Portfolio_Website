import React, { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Calendar } from 'lucide-react';

const GitHubFeed = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Simulated data - replace with actual API call
        const simulatedRepos = [
          {
            id: 1,
            name: 'ecotrack-android',
            description: 'Environmental monitoring Android application with AI-powered insights',
            stargazers_count: 45,
            forks_count: 12,
            language: 'Java',
            html_url: 'https://github.com/DhruvHedaoo2704/ecotrack',
            updated_at: '2024-01-15T10:30:00Z'
          },
          {
            id: 2,
            name: 'taskflow-platform',
            description: 'Full-stack project management platform with real-time collaboration',
            stargazers_count: 32,
            forks_count: 8,
            language: 'JavaScript',
            html_url: 'https://github.com/DhruvHedaoo2704/taskflow',
            updated_at: '2024-01-10T14:20:00Z'
          },
          {
            id: 3,
            name: 'smartfinance-ml',
            description: 'AI-powered personal finance tracker with expense prediction',
            stargazers_count: 28,
            forks_count: 6,
            language: 'Python',
            html_url: 'https://github.com/DhruvHedaoo2704/smartfinance',
            updated_at: '2024-01-08T09:45:00Z'
          }
        ];
        
        setTimeout(() => {
          setRepos(simulatedRepos);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
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
          {[1, 2, 3].map((i) => (
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

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Calendar className="mr-2" size={20} />
        Recent GitHub Activity
      </h3>
      
      <div className="space-y-4">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-medium hover:text-blue-400 transition-colors">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  {repo.name}
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </h4>
              <span className="text-xs text-gray-400">
                {formatDate(repo.updated_at)}
              </span>
            </div>
            
            <p className="text-gray-300 text-sm mb-3">{repo.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-xs text-gray-400">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-1`}></div>
                  {repo.language}
                </span>
                <span className="flex items-center text-xs text-gray-400">
                  <Star size={12} className="mr-1" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center text-xs text-gray-400">
                  <GitFork size={12} className="mr-1" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href="https://github.com/DhruvHedaoo2704"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-center"
        >
          View all repositories <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default GitHubFeed;