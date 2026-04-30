import { useState } from 'react';
import { mockPerfumes } from '../utils/mockData';
import { PerfumeCard } from '../components/PerfumeCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export const Collection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterWeather, setFilterWeather] = useState('all');

  const filteredPerfumes = mockPerfumes.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesWeather = filterWeather === 'all' || p.weather.includes(filterWeather) || p.weather.includes('any');
    return matchesSearch && matchesWeather;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">The Collection</h1>
        <p className="text-gray-400 max-w-2xl">Browse the full catalog. Filter by weather suitability or search for specific houses and fragrances.</p>
      </div>

      {/* Toolbar */}
      <div className="glass-panel p-4 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search fragrances..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-luxury-dark/50 border border-luxury-glass-border rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-luxury-gold transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <SlidersHorizontal className="text-gray-400 hidden sm:block" size={18} />
          {['all', 'hot', 'cold', 'rainy', 'night'].map(w => (
            <button
              key={w}
              onClick={() => setFilterWeather(w)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filterWeather === w ? 'bg-luxury-gold text-luxury-dark' : 'bg-luxury-dark/50 text-gray-300 hover:text-white border border-luxury-glass-border hover:border-luxury-gold/50'}`}
            >
              {w.charAt(0).toUpperCase() + w.slice(1)}
            </button>
          ))}
        </div>

      </div>

      {/* Grid */}
      {filteredPerfumes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfumes.map(perfume => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-panel">
          <div className="text-6xl mb-4">💨</div>
          <h3 className="text-xl font-serif text-white mb-2">No fragrances found</h3>
          <p className="text-gray-400">Try adjusting your search or filters.</p>
        </div>
      )}

    </div>
  );
};
