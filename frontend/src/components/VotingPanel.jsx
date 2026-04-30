import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

export const VotingPanel = ({ votes }) => {
  const { isAuthenticated } = useAuth();
  const [hasVoted, setHasVoted] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(votes);

  const handleVote = (category, value) => {
    if (!isAuthenticated) return;
    // Mock voting update logic
    setCurrentVotes(prev => ({
      ...prev,
      [category]: ((prev[category] * prev.totalVotes) + value) / (prev.totalVotes + 1),
      totalVotes: prev.totalVotes + (category === 'performance' ? 1 : 0) // rough approximation for mock
    }));
    setHasVoted(true);
  };

  const VoteBar = ({ label, value, max = 10, category }) => {
    const percentage = (value / max) * 100;
    
    return (
      <div className="mb-4 last:mb-0">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-300">{label}</span>
          <span className="text-luxury-gold font-medium">{value.toFixed(1)} / {max}</span>
        </div>
        <div className="h-2 bg-luxury-dark rounded-full overflow-hidden relative group">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#8a6d3b] to-luxury-gold"
          />
          {isAuthenticated && !hasVoted && (
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 flex cursor-pointer transition-opacity">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 hover:bg-white/20 z-10"
                  onClick={() => handleVote(category, i + 1)}
                  title={`Vote ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="glass-panel p-6">
      <div className="flex justify-between items-end mb-6">
        <h3 className="font-serif text-xl text-luxury-gold">Community Ratings</h3>
        <span className="text-xs text-gray-400">{currentVotes.totalVotes} votes</span>
      </div>

      {!isAuthenticated && (
        <div className="text-xs text-gray-500 mb-4 italic">Log in to cast your vote.</div>
      )}
      {hasVoted && (
        <div className="text-xs text-green-400 mb-4">Thanks for voting!</div>
      )}

      <VoteBar label="Performance (Longevity)" value={currentVotes.performance} category="performance" />
      <VoteBar label="Sillage (Projection)" value={currentVotes.sillage} category="sillage" />
      <VoteBar label="Value for Money" value={currentVotes.value} category="value" />
    </div>
  );
};
