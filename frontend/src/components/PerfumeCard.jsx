import { Link } from 'react-router-dom';
import { formatPHP, getWeatherIcon } from '../utils/formatters';

export const PerfumeCard = ({ perfume }) => {
  return (
    <Link to={`/perfume/${perfume.id}`} className="block group">
      <div className="glass-panel overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,168,83,0.15)] hover:border-luxury-gold/30">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={perfume.image} 
            alt={perfume.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute top-3 right-3 flex gap-1">
            {perfume.weather.slice(0,2).map((w, idx) => (
              <span key={idx} className="bg-luxury-dark/80 backdrop-blur-sm p-1.5 rounded-full text-xs" title={`Good for ${w} weather`}>
                {getWeatherIcon(w)}
              </span>
            ))}
          </div>
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-luxury-dark to-transparent h-24"></div>
        </div>
        
        <div className="p-5 relative">
          <div className="text-xs text-luxury-gold uppercase tracking-wider font-semibold mb-1">{perfume.brand}</div>
          <h3 className="font-serif text-xl font-medium mb-1 truncate text-gray-100 group-hover:text-luxury-gold transition-colors">{perfume.name}</h3>
          <p className="text-sm text-gray-400 mb-3">{perfume.concentration}</p>
          
          <div className="flex justify-between items-center mt-4">
            <span className="font-medium text-white">{formatPHP(perfume.price)}</span>
            <div className="flex items-center gap-1 text-sm text-gray-300">
              <span className="text-luxury-gold">★</span> {((perfume.votes.performance + perfume.votes.sillage + perfume.votes.value) / 3).toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
